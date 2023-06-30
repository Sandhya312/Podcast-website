



import Button from '../UI/Button';
import mic from '../../assests/streamline_computer-voice-mail-mic-audio-mike-music-microphone.svg';
import headphone from '../../assests/solar_podcast-outline.svg';
import ellipsImg from '../../assests/Group 75.svg';
import everyoneImg from '../../assests/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime 1.svg';
import groupImg from '../../assests/group-business-workers-smiling-happy-confident-working-together-with-smile-face-applauding-one-them-office 1.svg';
const HeroContent = () => {

    const btnClasses =' w-60 h-20 bg-green-900 rounded-xl flex justify-center items-center mt-10';
     
return <div className=' w-full  flex justify-center  h-5/6 items-center px-10 absolute '>

<div className=' w-2/5 h-96 px-10 flex flex-col justify-start align-middle  '   >
    <h1 className=' font-bold text-5xl  not-italic text-white'>
        Learn how to launch a successful podcast
    </h1>
    <p className='font-normal text-base not-italic w-96 mt-10 leading-5 text-white '>
        Lorem Ipsum is simply dummy text of the printing and typesetting in ustry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
    </p>
    <Button btnClasses={btnClasses}>
    Sign up Now
    </Button>
  
</div>
<div className=' w-6/12  h-96 '>
         
         <img className='absolute bottom-16 right-52 ' src={ellipsImg}  alt='ellips'/> 
        {/* inside pic */}
        <img className='absolute right-64 ' src={everyoneImg} alt='everyone' />

        {/* outside pic */}
        <img className='absolute bottom-28 ' src={groupImg} alt='groupImg' />
        
       
           <img className='absolute bottom-8 right-48' src={mic}  alt='mic'/> 
           <img className='absolute right-32 top-52' src={headphone}  alt='headphone'/> 
        
    {/* <div className='relative'>
           <img className='absolute' src={ellipsImg}  alt='ellips'/> 
           <img className='absolute' src={mic}  alt='mic'/> 
           <img className='absolute' src={headphone}  alt='headphone'/> 

        </div> */}
</div>


</div>
  


};

export default HeroContent;



