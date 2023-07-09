import styles from './App.module.css';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { MainContent } from './components/main/mainContent/mainContent';
import { NavBar } from './components/main/navBar/navBar';


function App(props) {
  return (
    <div className={styles.App}>
      {/* <Header className={styles.Header}/> */}
      <NavBar className={styles.NavBar}/>
      <MainContent CardData={props.CardData}/>
      <Footer className={styles.Footer}/>
    </div>
  );
}

export default App;
