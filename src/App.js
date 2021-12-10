import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Intro from "./components/Intro/Intro";
import ProductList from "./components/productList/productList";
import Toggle from "./components/toggle/toggle";
import {ThemeContext} from "./context"
import { useContext } from "react";



const App = () => {

const theme = useContext(ThemeContext); 
const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white",
     color:darkMode && "white",
     }} >
      <Toggle/>
        <Intro />
        <About />
        <ProductList />
        <Contact />
    </div>
  );
}

export default App;
