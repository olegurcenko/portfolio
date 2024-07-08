import React, { useEffect, useRef } from 'react';
import Matter, { Events } from 'matter-js';
import styled from 'styled-components';
import useWindowDimensions from './useWindowDimension';

const paths = [
  'https://www.svgrepo.com/show/353925/javascript.svg',
  'https://www.svgrepo.com/show/452091/python.svg',
  'https://www.svgrepo.com/show/439290/react.svg',
  'https://www.svgrepo.com/show/439238/nodejs.svg',
  'https://www.svgrepo.com/show/439231/mongodb.svg'
];

const Container = styled.div`
  margin-inline: auto;
  display: flex;
  justify-content: center;
`;

export const SkillBox = ({ ...props }) => {
  const canvasRef = useRef(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (!canvasRef.current) return;

    const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create();
    const runner = Runner.create();

    const windowWidth = width - 20;
    const windowHeight = width < 600 ? 400 : width / 2;

    const LOGO_WIDTH = width * 0.1;
    const LOGO_HEIGHT = LOGO_WIDTH;

    const render = Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        width: windowWidth,
        height: windowHeight,
        wireframes: false,
        background: 'white',
      },
    });

    engine.timing.timeScale = 0.8;

    Runner.run(runner, engine);

    function resetIfOffscreen() {
      bodies.forEach((body) => {
        if (
          body.bounds.max.x < 0 ||
          body.bounds.min.x > windowWidth ||
          body.bounds.min.y > windowHeight ||
          body.bounds.max.y < 0
        ) {
          const randomX = Math.random() * windowWidth;
          Matter.Body.setPosition(body, { x: randomX, y: -100 });
          Matter.Body.setVelocity(body, { x: 0, y: 0 });
          Matter.Body.setAngle(body, 0);
          Matter.Body.setAngularVelocity(body, 0);
        }
      });
    }

    const ground = Bodies.rectangle(windowWidth / 2, windowHeight, windowWidth, 10, {
      isStatic: true,
      render: { visible: false },
    });

    const BOUNDARY_THICKNESS = 10;
    const leftBoundary = Bodies.rectangle(
      -BOUNDARY_THICKNESS / 2,
      windowHeight / 2,
      BOUNDARY_THICKNESS,
      windowHeight,
      { isStatic: true, render: { visible: false } },
    );
    const rightBoundary = Bodies.rectangle(
      windowWidth + BOUNDARY_THICKNESS / 2,
      windowHeight / 2,
      BOUNDARY_THICKNESS,
      windowHeight,
      { isStatic: true, render: { visible: false } },
    );
    const topBoundary = Bodies.rectangle(
      windowWidth / 2,
      -BOUNDARY_THICKNESS / 2,
      windowWidth,
      BOUNDARY_THICKNESS,
      { isStatic: true, render: { visible: false } },
    );

    const GAP = width < 600 ? 20 : 100;
    const ROW_GAP = 30;

    const createBody = (path: string, x: number, y: number) => {
      return Bodies.rectangle(x, y, LOGO_WIDTH, LOGO_HEIGHT, {
        isSleeping: true,
        render: {
          sprite: {
            texture: path,
            xScale: LOGO_WIDTH / 1000,
            yScale: LOGO_HEIGHT / 1000,
          },
        },
      });
    };

    const bodies: Matter.Body[] = [];

    const createBodies = () => {
      let startingX = (windowWidth - (paths.length * (LOGO_WIDTH + GAP) - GAP)) / 2 + BOUNDARY_THICKNESS + 100;
      let startingY = BOUNDARY_THICKNESS + 100;

      paths.forEach((path, index) => {
        const x = startingX + (index % 3) * (LOGO_WIDTH + GAP);
        const y = startingY + Math.floor(index / 3) * (LOGO_HEIGHT + GAP + ROW_GAP);

        const body = createBody(path, x, y);
        bodies.push(body);
      });
    };

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { render: { visible: false }, stiffness: 0.98 },
    });

    render.mouse = mouse;

    Events.on(mouseConstraint, 'mousedown', () => {
      bodies.forEach((body) => {
        Matter.Body.setStatic(body, false);
      });
    });

    Events.on(engine, 'afterUpdate', resetIfOffscreen);

    createBodies();
    World.add(engine.world, [
      ground,
      leftBoundary,
      rightBoundary,
      topBoundary,
      ...bodies,
      mouseConstraint,
    ]);

    Render.run(render);

    const updateRenderSize = () => {
      const windowWidth = width;
      const windowHeight = width < 600 ? 400 : width / 2;

      render.canvas.width = windowWidth;
      render.canvas.height = windowHeight;
      render.options.width = windowWidth;
      render.options.height = windowHeight;

      Matter.Body.setPosition(ground, { x: windowWidth / 2, y: windowHeight - 20 });
      Matter.Body.setPosition(leftBoundary, { x: -BOUNDARY_THICKNESS / 2, y: windowHeight / 2 });
      Matter.Body.setPosition(rightBoundary, {
        x: windowWidth + BOUNDARY_THICKNESS / 2,
        y: windowHeight / 2,
      });
      Matter.Body.setPosition(topBoundary, { x: windowWidth / 2, y: -BOUNDARY_THICKNESS / 2 });
    };

    window.addEventListener('resize', updateRenderSize);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      window.removeEventListener('resize', updateRenderSize);
    };
  }, [width]);

  return <Container {...props} ref={canvasRef}></Container>;
};
