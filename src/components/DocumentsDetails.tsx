import { Formik, Form } from "formik";
import React from "react";
import _Field from "./_Field";
import * as Yup from "yup";

interface Props {
  validation: any;
  handleNext: () => void;
}

const validation = Yup.object({
  aadharNumber: Yup.string().required(),
  aadharPhoto: Yup.string().required(),
  panNumber: Yup.string().required(),
  panPhoto: Yup.string().required(),
  profilePhoto: Yup.string().required(),
});

type Initial = Yup.InferType<typeof validation>;

const initialValues: Initial = {
  aadharNumber: "",
  aadharPhoto: "",
  panNumber: "",
  panPhoto: "",
  profilePhoto: "",
};

const DocumentsDetails = ({ validation, handleNext }: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
        handleNext();
      }}
      validationSchema={validation}
    >
      {(props) => (
        <Form
          className=" flex-wrap gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
             mt-4 max-w-6xl mx-auto"
        >
          <_Field
            label="Aadhar Card Number"
            name="aadhar"
            type="number"
            value={props.values.aadharNumber}
          />
          <_Field
            label="Upload Aadhar Card Photo"
            name="aadharphoto"
            type="file"
          />
          <_Field label="PAN Card Number" name="pan" type="string" />
          <_Field label="Upload PAN Card Photo" name="panphoto" type="file" />
          <_Field label="Upload Photo" name="photo" type="file" />

          <button
            className="btn md:col-span-2 lg:col-span-3 mt-4"
            type="submit"
          >
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default DocumentsDetails;
