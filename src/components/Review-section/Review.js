

import classes from './Review.module.css';
import ReviewCard from "./ReviewCard";

const Review = () =>{

    return <div className="h-screen pl-52 pt-20">
       <div className={classes.reviewTitle}>
        <h1 className={classes.reviewTitleHeading}>Review from customers</h1>
        <p className={classes.reviewTitleContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
       </div>
        <ReviewCard/>
    </div>

};

export default Review;