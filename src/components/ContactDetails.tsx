import { Formik, Form } from "formik";
import React from "react";
import _Field from "./_Field";
import * as Yup from "yup";

interface Props {
  validation: any;
  handleNext: () => void;
}

const validation = Yup.object({
  address: Yup.string()
    .min(3, "too short!")
    .max(256, "too long!")
    .required("Required!"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  pincode: Yup.string().max(6, "too long!").required("Required"),
  nationality: Yup.string(),
});

type Initial = Yup.InferType<typeof validation>;

const initialValues: Initial = {
  address: "",
  city: "",
  state: "",
  pincode: "",
  nationality: "INDIAN",
};

function ContactDetails({ handleNext }: Props) {
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
            label="Address"
            name="address"
            type="text"
            as="textarea"
            className="lg:col-span-3"
            value={props.values.address}
            onChange={props.handleChange}
            error={props.touched.address && Boolean(props.errors.address)}
            helperText={props.touched.address && props.errors.address}
          />
          <_Field
            label="City"
            name="city"
            as="select"
            options={[
              { value: "bangalore", name: "Bangalore" },
              { value: "chennai", name: "Chennai" },
              { value: "kochi", name: "Kochi" },
            ]}
          />
          <_Field
            label="State"
            name="state"
            as="select"
            options={[
              { value: "karnataka", name: "Karnataka" },
              { value: "kerala", name: "Kerala" },
              { value: "tamilnadu", name: "TamilNadu" },
            ]}
          />
          <_Field
            label="Pin Code"
            name="pincode"
            type="number"
            value={props.values.pincode}
            onChange={props.handleChange}
            error={props.touched.pincode && Boolean(props.errors.pincode)}
            helperText={props.touched.pincode && props.errors.pincode}
          />
          <_Field
            label="Nationality"
            name="nationality"
            type="text"
            value={props.values.nationality}
            disabled
          />

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
}

export default ContactDetails;
