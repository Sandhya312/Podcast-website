import BgPattern from './BgPattern';
import Header from './Header';
import HeroContent from './HeroContent';
const Hero = () =>{

    return <div className='hero h-screen'>
       <BgPattern/>
      <Header/>
     <HeroContent/>
    </div>
};

export default Hero;