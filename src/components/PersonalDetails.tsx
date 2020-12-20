import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

interface Props {
  handleNext: () => void;
}

const PersonalData: React.FC<Props> = ({ handleNext }) => {
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
    ></Formik>
  );
};
