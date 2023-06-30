import PlanBg from "./PlanBg";
import PlanCard from "./PlanCard";
import classes from './Plan.module.css';

const Plan = () =>{

    return <div className="h-screen" >
        <PlanBg />
          <div className={classes.planFrame}>
          <div className={classes.planTitle}>
            <h1 className={classes.planTitleHeading}>Choose your plan</h1>
            <p className={classes.planTitleContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's 
            </p>
        </div>
        <div className={classes.planRadio}>
            <button className={classes.planMonthly} >monthly</button>
            <button className={classes.planYearly} >yearly</button>
        </div>
          </div>
        <PlanCard/>
    </div>
};


export default Plan;