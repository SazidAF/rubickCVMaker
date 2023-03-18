import { useFormik } from "formik";
import { educationSchema } from "../formSchemas";
import { useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { EDU } from "../../../constants/actionTypes";
import { educationInfo } from "../../../api";

const onSubmit = (values, actions) => {
  //console.log(values);

  //   console.log(actions);
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const EducationForm = () => {
  const [pageType, setPageType] = useState(EDU);
  const dispatch = useDispatch();
  const history = useNavigate();
  const userId = JSON.parse(localStorage.getItem("profile")).result._id;
  console.log(userId);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      institute: "",
      degree: "",
      description: "",
    },
    validationSchema: educationSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      const userInfo = { userId, ...values };
      dispatch(educationInfo(userInfo, history));
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      //   actions.resetForm();
    },
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="institute">Institute Name</label>
      <input
        value={values.institute}
        onChange={handleChange}
        id="institute"
        type="string"
        placeholder="Enter your institute name"
        onBlur={handleBlur}
        className={errors.institute && touched.institute ? "input-error" : ""}
      />
      {errors.institute && touched.institute && (
        <p className="error">{errors.institute}</p>
      )}

      <label htmlFor="degree">Degree</label>
      <input
        id="degree"
        type="string"
        placeholder="Write your degree"
        value={values.degree}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.degree && touched.degree ? "input-error" : ""}
      />
      {errors.degree && touched.degree && (
        <p className="error">{errors.degree}</p>
      )}
      <label htmlFor="description">Description</label>
      <input
        id="description"
        type="string"
        placeholder="Add description"
        value={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.description && touched.description ? "input-error" : ""
        }
      />
      {errors.description && touched.description && (
        <p className="error">{errors.description}</p>
      )}

      {/* <label htmlFor="phone"></label>
      <input
        id="phone"
        type="string"
        placeholder="Enter your phone number"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.phone && touched.phone ? "input-error" : ""}
      />
      {errors.phone && touched.phone && <p className="error">{errors.phone}</p>}

      <label htmlFor="address">Address</label>
      <input
        id="address"
        type="string"
        placeholder="Enter your Address here"
        value={values.address}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.address && touched.address ? "input-error" : ""}
      />
      {errors.address && touched.address && (
        <p className="error">{errors.address}</p>
      )} */}

      <button type="submit">Next</button>
    </form>
  );
};
export default EducationForm;
