import { useFormik } from "formik";
import { contactSchema } from "../formSchemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  //   console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const ContactForm = () => {
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
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      email: "",
    },
    validationSchema: contactSchema,
    onSubmit,
  });

  //   console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="string"
        placeholder="Enter your first name"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.firstName && touched.firstName ? "input-error" : ""}
      />
      {errors.firstName && touched.firstName && (
        <p className="error">{errors.firstName}</p>
      )}
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="string"
        placeholder="Enter your last name"
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.lastName && touched.lastName ? "input-error" : ""}
      />
      {errors.lastName && touched.lastName && (
        <p className="error">{errors.lastName}</p>
      )}

      <label htmlFor="phone">Contact No</label>
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
      )}
      <div>
        <button style={{ backgroundColor: "#E96479" }}>Back</button>

        <button
          disabled={isSubmitting}
          type="submit"
          style={{ backgroundColor: "#7DB9B6" }}
          to="/demo"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
