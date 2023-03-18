import { Form, Formik } from "formik";
import { advancedSchema } from "../formSchemas/index";
import CustomCheckbox from "./CustomCheckbox";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import Card from "./card";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  console.log(values);
  actions.resetForm();
};

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ jobType: "" }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          {/* <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          /> */}

          <div>
            <Card label="Job Type" name="jobType" text="Developer" />
            <Card label="Job Type" text="Designer" />
            <Card label="Job Type" text="Developer" />

            {/* <CustomSelect
              label="Job Type"
              name="jobType"
              placeholder="Please select a job"
            >
              <option value="">Please select a job type</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Product Manager</option>
              <option value="other">Other</option>
            </CustomSelect> */}
          </div>
          {/* <CustomCheckbox type="checkbox" name="acceptedTos" /> */}
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
