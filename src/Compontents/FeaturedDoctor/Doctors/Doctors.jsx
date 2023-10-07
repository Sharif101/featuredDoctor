import classes from "./Doctors.module.css";
import doctor from "../../../assets/FeaturedDoctor/Doctor.png";

export default function Doctors() {
  return (
    <div className={classes.container}>
      <div className={classes.allDoctors}>
        {/* ----------------------- */}
        <div className={classes.singleDoctor}>
          <img src={doctor} alt="" />
          <div className={classes.info}>
            <p>Asst. Prof. Dr. Redwan Hasan</p>
            <p>General Physician</p>
            <p>MBBS, BCS (Health), MD (Medicine)</p>
          </div>
          <div className={classes.fee}>
            <p>Dhaka Medical Hospital</p>
            <p>20 Years of Experience</p>
            <p>
              Chamber Fee: <span>৳800</span>
            </p>
            <p>
              Online Fee: <span>৳1500</span>
            </p>
          </div>
        </div>
        {/* ------------------------------- */}
        <div className={classes.singleDoctor}>
          <img src={doctor} alt="" />
          <div className={classes.info}>
            <p>Asst. Prof. Dr. Redwan Hasan</p>
            <p>General Physician</p>
            <p>MBBS, BCS (Health), MD (Medicine)</p>
          </div>
          <div className={classes.fee}>
            <p>Dhaka Medical Hospital</p>
            <p>20 Years of Experience</p>
            <p>
              Chamber Fee: <span>৳800</span>
            </p>
            <p>
              Online Fee: <span>৳1500</span>
            </p>
          </div>
        </div>
        {/* ------------------------------- */}
        <div className={classes.singleDoctor}>
          <img src={doctor} alt="" />
          <div className={classes.info}>
            <p>Asst. Prof. Dr. Redwan Hasan</p>
            <p>General Physician</p>
            <p>MBBS, BCS (Health), MD (Medicine)</p>
          </div>
          <div className={classes.fee}>
            <p>Dhaka Medical Hospital</p>
            <p>20 Years of Experience</p>
            <p>
              Chamber Fee: <span>৳800</span>
            </p>
            <p>
              Online Fee: <span>৳1500</span>
            </p>
          </div>
        </div>
        {/* ------------------------------- */}
        <div className={classes.singleDoctor}>
          <img src={doctor} alt="" />
          <div className={classes.info}>
            <p>Asst. Prof. Dr. Redwan Hasan</p>
            <p>General Physician</p>
            <p>MBBS, BCS (Health), MD (Medicine)</p>
          </div>
          <div className={classes.fee}>
            <p>Dhaka Medical Hospital</p>
            <p>20 Years of Experience</p>
            <p>
              Chamber Fee: <span>৳800</span>
            </p>
            <p>
              Online Fee: <span>৳1500</span>
            </p>
          </div>
        </div>
        {/* ------------------------------- */}
        <div className={classes.singleDoctor}>
          <img src={doctor} alt="" />
          <div className={classes.info}>
            <p>Asst. Prof. Dr. Redwan Hasan</p>
            <p>General Physician</p>
            <p>MBBS, BCS (Health), MD (Medicine)</p>
          </div>
          <div className={classes.fee}>
            <p>Dhaka Medical Hospital</p>
            <p>20 Years of Experience</p>
            <p>
              Chamber Fee: <span>৳800</span>
            </p>
            <p>
              Online Fee: <span>৳1500</span>
            </p>
          </div>
        </div>
        {/* ------------------------------- */}
      </div>
    </div>
  );
}
