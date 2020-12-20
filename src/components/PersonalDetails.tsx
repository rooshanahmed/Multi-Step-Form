import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";

interface Props {
  handleNext: () => void;
}

const PersonalData: React.FC<Props> = ({ handleNext }) => {
  const [value, setValue] = useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Formik
      initialValues={{ firstname: "", lastname: "", age: 0 }}
      validationSchema={Yup.object({
        firstname: Yup.string()
          .max(10, "Must be less than 10 characters")
          .required("Firstname is required"),
        lastname: Yup.string()
          .max(10, "Must be less than 10 characters")
          .required("Lastname is required"),
        age: Yup.number()
          .min(18, "Age must be greater than or equal to 18")
          .max(60, "Age must be less than 60")
          .required("Age is required"),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null));
        }, 500);
      }}
    >
      {({ dirty, isValid }) => {
        return (
          <Form>
            <Field
              label="First Name"
              as={TextField}
              name="firstname"
              id="firstname"
              type="text"
              helperText={<ErrorMessage name="firstname" />}
            />
            <br />
            <br />
            <Field
              label="Last Name"
              as={TextField}
              name="lastname"
              id="lastname"
              type="text"
              helperText={<ErrorMessage name="lastname" />}
            />
            <br />
            <br />
            <Field
              label="Age"
              as={TextField}
              name="age"
              id="age"
              type="number"
              helperText={<ErrorMessage name="age" />}
            />
            <br />
            <br />
            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={value}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <Button type="submit" disabled={!dirty || !isValid}>
              Next
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default PersonalData;
