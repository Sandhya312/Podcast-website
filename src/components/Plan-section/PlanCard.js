
import classes from './PlanCard.module.css';

const PlanCard = () =>{

    return <div className={classes.planCardContainer}>
         <div className={classes.plancard} >
            <div className={classes.planFrame1}>
                <h4 className={classes.planFrame1Heading}>Basic Plan</h4>
                <p className={classes.planFrame1content}>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className={classes.planFrame2}>
                <p className={classes.planFrame2Money}>$ 54 </p> <span className={classes.planFrame2PerMonth}>/month</span>
            </div>
         
                <ul className={classes.planFrame3}>
                    <li className={classes.planFrame3Li1}> 
                        <p className={classes.planFrame3Li1content}> Free access to video class</p>
                    </li>
                    <li className={classes.planFrame3Li2}> 
                        <p className={classes.planFrame3Li2content}> Free access to video class</p>
                    </li>
                    <li className={classes.planFrame3Li3}> 
                        <p className={classes.planFrame3Li3content}> Free access to video class</p>
                    </li>
                   
                </ul>
         
            <button className={classes.planFrameBtn}>
                <p className={classes.planframeBtnText}>Start Free Trial</p>
            </button>


         </div>
         <div className={classes.plancard2} >
            <div className={classes.planFrame1}>
                <h4 className={classes.planFrame1Heading}>Premium Plan</h4>
                <p className={classes.planFrame1content}>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className={classes.planFrame2}>
                <p className={classes.plancard2Money}>$ 54 </p>
                 <span className={classes.plancard2PerMonth}>/month</span>
            </div>
         
                <ul className={classes.planFrame3}>
                    <li className={classes.planFrame3Li1}> 
                        <p className={classes.planFrame3Li1content}> Free access to video class</p>
                    </li>
                    <li className={classes.planFrame3Li2}> 
                        <p className={classes.planFrame3Li2content}> Free access to video class</p>
                    </li>
                    <li className={classes.planFrame3Li3}> 
                        <p className={classes.planFrame3Li3content}> Free access to video class</p>
                    </li>
                   
                </ul>
         
            <button className={classes.planFrame2Btn}>
                <p className={classes.planframe2BtnText}>Start Free Trial</p>
            </button>


         </div>
         <div className={classes.plancard} >
            <div className={classes.planFrame1}>
                <h4 className={classes.planFrame1Heading}>Basic Plan</h4>
                <p className={classes.planFrame1content}>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className={classes.planFrame2}>
                <p className={classes.planFrame2Money}>$ 54 </p> <span className={classes.planFrame2PerMonth}>/month</span>
            </div>
         
                <ul className={classes.planFrame3}>
                    <li className={classes.planFrame3Li1}> 
                        <p className={classes.planFrame3Li1content}> Free access to video class</p>
                    </li>
                    <li className={classes.planFrame3Li2}> 
                        <p className={classes.planFrame3Li2content}> Free access to video class</p>
                    </li>
                    <li className={classes.planFrame3Li3}> 
                        <p className={classes.planFrame3Li3content}> Free access to video class</p>
                    </li>
                   
                </ul>
         
            <button className={classes.planFrameBtn}>
                <p className={classes.planframeBtnText}>Start Free Trial</p>
            </button>


         </div>
    </div>
};

export default PlanCard;