import classes from "./Doctors.module.css";
import doctor from "../../../assets/FeaturedDoctor/Doctor.png";
import hospital from "../../../assets/FeaturedDoctor/hospital.svg";
import work from "../../../assets/FeaturedDoctor/work.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <div className={classes.left}>
              <p>
                {" "}
                <img src={hospital} alt="" />
                Dhaka Medical Hospital
              </p>
              <p>
                {" "}
                <img src={work} alt="" />
                20 Years of Experience
              </p>
            </div>
            <div className={classes.right}>
              <p>
                Chamber Fee: <span>৳800</span>
              </p>
              <p>
                Online Fee: <span>৳1500</span>
              </p>
            </div>
          </div>
          <button>
            Book Appointment{" "}
            <span>
              {" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
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
            <div className={classes.left}>
              <p>
                {" "}
                <img src={hospital} alt="" />
                Dhaka Medical Hospital
              </p>
              <p>
                {" "}
                <img src={work} alt="" />
                20 Years of Experience
              </p>
            </div>
            <div className={classes.right}>
              <p>
                Chamber Fee: <span>৳800</span>
              </p>
              <p>
                Online Fee: <span>৳1500</span>
              </p>
            </div>
          </div>
          <button>
            Book Appointment{" "}
            <span>
              {" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
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
            <div className={classes.left}>
              <p>
                {" "}
                <img src={hospital} alt="" />
                Dhaka Medical Hospital
              </p>
              <p>
                {" "}
                <img src={work} alt="" />
                20 Years of Experience
              </p>
            </div>
            <div className={classes.right}>
              <p>
                Chamber Fee: <span>৳800</span>
              </p>
              <p>
                Online Fee: <span>৳1500</span>
              </p>
            </div>
          </div>
          <button>
            Book Appointment{" "}
            <span>
              {" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
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
            <div className={classes.left}>
              <p>
                {" "}
                <img src={hospital} alt="" />
                Dhaka Medical Hospital
              </p>
              <p>
                {" "}
                <img src={work} alt="" />
                20 Years of Experience
              </p>
            </div>
            <div className={classes.right}>
              <p>
                Chamber Fee: <span>৳800</span>
              </p>
              <p>
                Online Fee: <span>৳1500</span>
              </p>
            </div>
          </div>
          <button>
            Book Appointment{" "}
            <span>
              {" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </div>
        {/* ------------------------------- */}
      </div>
    </div>
  );
}
