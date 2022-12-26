import About from "./component/About";
import Experience from "./component/Experience";
import Home from "./component/Home";
import { NavBar } from "./component/NavBar";
import Portfolio from "./component/Portfolio";
import SocialLinks from "./component/SocialLinks";


function App() {
  return (
    <div >
     <NavBar></NavBar>
     <Home></Home>
     <About></About>
     <Portfolio></Portfolio>
     <Experience></Experience>
     <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
