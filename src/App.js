

import About from "./components/About-section/About";
import Footer from "./components/Footer.section/Footer";
import Hero from "./components/Hero-section/Hero";
import Plan from "./components/Plan-section/Plan";
import Review from "./components/Review-section/Review";

function App() {
  return (
    <div className="App min-h-screen ">
       
     <Hero />
     <About/>
     <Plan/>
     <Review/>
     <Footer/>
    </div>
  );
}

export default App;
