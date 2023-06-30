
import classes from './BgPattern.module.css';

const BgPattern = () => {

    return <>

      <div className={classes.BgContainer}>
            {/* 1st polygon */}
    <svg className={classes['big-polygon']} width="1208" height="982" viewBox="0 0 1208 982" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.0691 -247.58L1207.44 109.931L-157.54 981.879L18.0691 -247.58Z" fill="url(#paint0_linear_103_123)" />
            <defs>
                <linearGradient id="paint0_linear_103_123" x1="18.0691" y1="-247.58" x2="693.908" y2="810.4" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7A3199" />
                    <stop offset="1" stopColor="#161033" />
                </linearGradient>
            </defs>
        </svg>
           {/* 2nd polygon */}
           <svg className={classes['short-polygon']} width="770" height="495" viewBox="0 0 770 495" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M163.732 -301.962L955.753 -116.482L0.125094 494.865L163.732 -301.962Z" fill="url(#paint0_linear_103_124)" />
            <defs>
                <linearGradient id="paint0_linear_103_124" x1="163.732" y1="-301.962" x2="582.675" y2="352.909" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7A3199" />
                    <stop offset="1" stop-color="#161033" />
                </linearGradient>
            </defs>
        </svg>
          
        {/* circle */}
        <svg className={classes.circle} width="491" height="425" viewBox="0 0 491 425" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="25.5" cy="-0.000244141" rx="465.5" ry="425" fill="#7A3199" />
        </svg>


      
      </div>


       

    </>
};

export default BgPattern;