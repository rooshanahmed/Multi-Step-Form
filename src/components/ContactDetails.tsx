import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

interface Props {
  handleNext: () => void;
}

const ContactDetails: React.FC<Props> = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{ email: "", phone: "" }}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null));
          handleNext();
        }, 400);
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        phone: Yup.string().max(11).required("Phone number is required"),
      })}
    ></Formik>
  );
};
