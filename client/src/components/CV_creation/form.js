import { useState } from "react";
import BasicForm from "./formComponents/BasicForm";
import AdvancedForm from "./formComponents/AdvancedForm";
import ContactForm from "./formComponents/ContactForm";
import EducationForm from "./formComponents/EducationForm";
import "./cvForm.css";

const Form = () => {
  const [view, setView] = useState("basic");

  return (
    <div className="formInput">
      <nav>
        <div>
          <h3
            onClick={() => setView("basic")}
            style={{ color: view === "basic" ? "#E96479" : "" }}
          >
            Back
          </h3>
        </div>

        <h3
          onClick={() => setView("contact")}
          style={{ color: view === "contact" ? "#7DB9B6" : "" }}
        >
          Next
        </h3>
      </nav>
      {view === "basic" ? <EducationForm /> : <ContactForm />}
    </div>
  );
};

export default Form;
