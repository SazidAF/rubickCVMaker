import { useState } from "react";
import BasicForm from "./formComponents/BasicForm";
import AdvancedForm from "./formComponents/AdvancedForm";
import ContactForm from "./formComponents/ContactForm";
import EducationForm from "./formComponents/EducationForm";
import "./cvForm.css";
import Navbar from "../InfoForm/Navbar";
import { Img } from "../Dashboard/Elements";
import img from '../../images/cv1.png'

const Form = () => {
  const [view, setView] = useState("basic");

  return (
    <div className="formInput">
      <Navbar/>
      <div style={{display:"flex"}}>

      {view === "basic" ? <ContactForm /> : < EducationForm/>}
      <Img src={img}></Img>
      </div>
      
    </div>
  );
};

export default Form;
