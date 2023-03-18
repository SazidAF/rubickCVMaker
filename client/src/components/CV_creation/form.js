import { useState } from "react";
import BasicForm from "./formComponents/BasicForm";
import AdvancedForm from "./formComponents/AdvancedForm";
import "./cvForm.css";

const Form = () => {
  const [view, setView] = useState("basic");

  return (
    <div className="formInput">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          Advanced
        </h3>
      </nav>
      {view === "basic" ? <BasicForm /> : <AdvancedForm />}
    </div>
  );
};

export default Form;
