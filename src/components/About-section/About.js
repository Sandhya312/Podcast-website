import AboutFrame from "./AboutFrame";
import AboutImg from "./AboutImg";
import Courses from "./Course";

const About = () =>{

return <div>
 <AboutImg/>
 <div className="flex  h-screen justify-center p-16">
 <Courses/>
 <AboutFrame/>
 </div>

</div>
};

export default About;