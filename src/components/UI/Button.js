
import classes from './Button.module.css';
const Button = (props) =>{

   let ButtonBtn = `${props.btnClasses} ${classes.button}  w-60 h-20 bg-green-900 rounded-xl flex justify-center items-center mt-10`;

    return   <button className={ButtonBtn}>
    <h4 className=' w-32 h-8 not-italic font-bold text-xl  text-white  '>
        {props.children}
    </h4>
   </button>

};

export default Button;