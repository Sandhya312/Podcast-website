

import Classes from './Course.module.css';
const Courses = () => {

    let courseClass1 = `${Classes.courseDiv} relative bottom-8`
    let courseClass4 = `${Classes.courseDiv} relative top-8`
    return <div className=" w-6/12 grid grid-cols-2 justify-items-center content-center gap-7">
        <div className={courseClass1}>
            <h3 className={Classes.courseTitle}>
                Interactive Features
            </h3>
            <p className={Classes.courseContent}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </p>
        </div>

        <div className={Classes.courseDiv}>
            <h3 className={Classes.courseTitle}>
                Interactive Features
            </h3>
            <p className={Classes.courseContent}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </p>
        </div>

        <div className={Classes.courseDiv}>
            <h3 className={Classes.courseTitle}>
                Interactive Features
            </h3>
            <p className={Classes.courseContent}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </p>
        </div>

        <div className={courseClass4}>
            <h3 className={Classes.courseTitle}>
                Interactive Features
            </h3>
            <p className={Classes.courseContent}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </p>
        </div>

    </div>
};


export default Courses;