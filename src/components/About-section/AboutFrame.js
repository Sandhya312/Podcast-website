
import Button from '../UI/Button';
import classes from './AboutFrame.module.css'
const AboutFrame = () =>{

    return <div className="p-40 w-6/12">
       <div className={classes.title}>
        <h1 className={classes.titleHeading} >About the Course</h1>
        <p className={classes.titleContent}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno
        </p>
       </div>
       <Button>
        Explore More
       </Button>
    </div>
};


export default AboutFrame;