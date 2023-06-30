
import classes from './Footer.module.css';
import polygon from '../../assests/Polygon 2.svg'
import facebook from '../../assests/mdi_facebook.svg';
import twitter from '../../assests/uil_twitter.svg';
import insta from '../../assests/basil_instagram-solid.svg';
import youtube from '../../assests/uil_youtube.svg';
import Button from '../UI/Button';
const Footer = () =>{

    return <div className={classes.footer} >
        <div className={classes.footerHead}>
        <div className={classes.footerHeader}>
           <h3 className={classes.footerHeaderHeading}>
           We have what you’re looking for
           </h3>
           <p className={classes.footerHeaderPara}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type a
           </p>
        </div>

         <Button className="">
            Get Started Now
         </Button>

        </div>
        <div className={classes.footerText}>
        <p className={classes.reserveText}>All Right Reserved @Copyright 2023</p>
            <div className={classes.footerContentContainer}>
                
                <div className={classes.footerContent}>
                    <p className={classes.footerTermOfService}>Terms of Service</p>
                    <p className={classes.footerContentPrivacyPolicy}>Privacy Policy</p>
                    <p className={classes.footerContentProduct}>Product</p>

                </div>
                <div className={classes.socialIcons}>
                   <img className={classes.facebook} 
                    src={facebook}
                    alt='facebook'
                   />
                   <img className={classes.youtube}
                   src={youtube}
                   alt='youtube'
                   />
                   <img className={classes.insta}
                   src={insta}
                   alt='insta'
                   />
                   <img className={classes.twitter}
                   src={twitter}
                   alt='twitter'
                   />
                </div>
            </div>
        </div>
        <img 
        src={polygon}
        alt="polygon"
        className='absolute
         bottom-0
          right-0
           w-screen
           z-0
           '
        />

    </div>

};

export default Footer;