import classes from "./Tab.module.css";
import {
  faBacteria,
  faBrain,
  faCapsules,
  faDisease,
  faPersonBreastfeeding,
  faPersonDress,
  faPersonPregnant,
  faPills,
  faStarOfLife,
  faStethoscope,
  faUserDoctor,
  faUsers,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tab({ search, setSearch }) {
  return (
    <div className={classes.container}>
      <div className={classes.alltabs}>
        {/* ---------------------- */}
        {/* <div className={search === "" ? classes.clicktab : classes.singleTabs}>
          <FontAwesomeIcon icon={faUsers} />
          <p onClick={() => setSearch("")}>All Doctors</p>
        </div> */}
        {/* ------------------------------- */}
        <div
          className={
            search === "general" ? classes.clicktab : classes.singleTabs
          }
        >
          <FontAwesomeIcon icon={faBrain} />
          <p onClick={() => setSearch("general")}>General Physician</p>
        </div>
        {/* ---------------------- */}
        <div
          className={
            search === "medicine" ? classes.clicktab : classes.singleTabs
          }
        >
          <FontAwesomeIcon icon={faDisease} />
          <p onClick={() => setSearch("medicine")}>Medicine Specialist</p>
        </div>
        {/* ------------------------------- */}
        <div
          className={search === "vd" ? classes.clicktab : classes.singleTabs}
        >
          <FontAwesomeIcon icon={faPills} />
          <p onClick={() => setSearch("vd")}>Venereologist</p>
        </div>
        {/* ---------------------- */}
        <div
          className={search === "gyn" ? classes.clicktab : classes.singleTabs}
        >
          <FontAwesomeIcon icon={faVenusMars} />
          <p onClick={() => setSearch("gyn")}>Gynecologist</p>
        </div>
        {/* ------------------------------- */}
        <div
          className={search === "psych" ? classes.clicktab : classes.singleTabs}
        >
          <FontAwesomeIcon icon={faBacteria} />
          <p onClick={() => setSearch("psych")}>Psychiatrist/Psychologist</p>
        </div>
      </div>
    </div>
  );
}
