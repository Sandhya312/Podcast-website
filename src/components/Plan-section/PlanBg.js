
import classes from './PlanBg.module.css'
import lines from '../../assests/Group 80.svg';
const PlanBg = () =>{


    return<div className={classes.PlanBackground} >
        <div>
        <img src={lines} alt='lines'/>
        </div>
       <h1 className={classes.podcast}>
       Podcast
       </h1>
    </div>
};

export default PlanBg;