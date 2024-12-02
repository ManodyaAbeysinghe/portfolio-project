
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Figure } from "./components/Figure/Figure";
import { About } from "./components/About/About";
import { Experience} from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";


function App() {
  

  return (
  <div className={styles.App}>
    <Navbar/>
    <Figure/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
  </div>
  );
   
    

}

export default App
