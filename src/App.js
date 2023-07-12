// import styles from './App.module.css';
import { Footer } from './components/footer/footer';
import { MainContent } from './components/main/mainContent/mainContent';
import { NavBar } from './components/main/navBar/navBar';


function App(props) {
  return (
    <div className={props.s.App}>
      {/* <Header className={styles.Header}/> */}
      <NavBar styles={props.s} className={props.s.NavBar}/>
      <MainContent styles={props.s}  CardData={props.CardData} CardDataProjects={props.CardDataProjects}/>
      <Footer styles={props.s} className={props.s.Footer}/>
    </div>
  );
}

export default App;
