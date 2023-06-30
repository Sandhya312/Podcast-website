
import classes from './ReviewCard.module.css';
import lolla from '../../assests/Lolla 1.svg'
import arrow from '../../assests/arrow.svg';
const ReviewCard = () =>{

    return <div>
     
       <img className={classes.arrow} src={arrow} alt='arrow'/>
     
     <div className={classes.cardContainer}>
     <div className={classes.card1}>
        <div className={classes.card1Frame1}>
            <div className={classes.card1Frame1Frame2}>
                <img className={classes.card1Frame1Img} src={lolla} alt='Lolla'/>
                <div className={classes.card1Frame2Frame2}>
                    <div className={classes.card1Frame2Frame3}>
                        <h4 className={classes.card1Frame1Frame3Heading}>Lolla Smith</h4>
                        <p className={classes.card1Frame1Frame3Company}>Microsoft</p>
                    </div>
                    <div className={classes.card1Frame1Frame3Stars}>
                        <p className={classes.star1}></p>
                        <p className={classes.star2}>🌟</p>
                        <p className={classes.star3}>🌟</p>
                        <p className={classes.star4}>🌟</p>
                        <p className={classes.star5}>🌟</p>

                    </div>
                </div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make </p>
        </div>
      </div>
      <div className={classes.card1}>
        <div className={classes.card1Frame1}>
            <div className={classes.card1Frame1Frame2}>
                <img className={classes.card1Frame1Img} src={lolla} alt='Lolla'/>
                <div className={classes.card1Frame2Frame2}>
                    <div className={classes.card1Frame2Frame3}>
                        <h4 className={classes.card1Frame1Frame3Heading}>Lolla Smith</h4>
                        <p className={classes.card1Frame1Frame3Company}>Microsoft</p>
                    </div>
                    <div className={classes.card1Frame1Frame3Stars}>
                        <p className={classes.star1}></p>
                        <p className={classes.star2}>🌟</p>
                        <p className={classes.star3}>🌟</p>
                        <p className={classes.star4}>🌟</p>
                        <p className={classes.star5}>🌟</p>

                    </div>
                </div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make </p>
        </div>
      </div>
      <div className={classes.card1}>
        <div className={classes.card1Frame1}>
            <div className={classes.card1Frame1Frame2}>
                <img className={classes.card1Frame1Img} src={lolla} alt='Lolla'/>
                <div className={classes.card1Frame2Frame2}>
                    <div className={classes.card1Frame2Frame3}>
                        <h4 className={classes.card1Frame1Frame3Heading}>Lolla Smith</h4>
                        <p className={classes.card1Frame1Frame3Company}>Microsoft</p>
                    </div>
                    <div className={classes.card1Frame1Frame3Stars}>
                        <p className={classes.star1}></p>
                        <p className={classes.star2}>🌟</p>
                        <p className={classes.star3}>🌟</p>
                        <p className={classes.star4}>🌟</p>
                        <p className={classes.star5}>🌟</p>

                    </div>
                </div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make </p>
        </div>
      </div>
     </div>


    </div>

};

export default ReviewCard;