import { Form, Formik } from "formik";
import type { NextPage } from "next";
import Head from "next/head";
import * as Yup from "yup";
import Navbar from "../src/components/Navbar";
import _Field from "../src/components/_Field";

const validation = Yup.object().shape({
  name: Yup.string()
    .min(3, "too short!")
    .max(256, "too long!")
    .required("Required!"),
  email: Yup.string().email("Invalid Email").required("Required"),
});

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="flex w-full flex-1 flex-col items-center justify-center lg:px-20 px-4 md:px-10 text-center">
        <div className="shadow-xl rounded-md p-4 md:p-8 w-full mt-6">
          <h1 className="text-xl font-semibold font-roboto underline-offset-4 underline">
            REGISTRATION FORM FOR UHRSF VOLUNTEER
          </h1>
          <Formik
            initialValues={{ name: "", email: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validation}
          >
            <Form
              className=" flex-wrap gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
             mt-4 max-w-6xl mx-auto"
            >
              <_Field label="Full Name" name="name" type="text" />
              <_Field label="Email Address" name="email" type="email" />
              <_Field label="Phone Number" name="phonenumber" type="tel" />
              <_Field
                label="Address"
                name="address"
                type="text"
                as="textarea"
                className="lg:col-span-3"
              />
              <_Field
                label="Nationality"
                name="nationality"
                type="string"
                className=""
              />
              <_Field label="Aadhar Card Number" name="aadhar" type="number" />
              <_Field
                label="Upload Aadhar Card Photo"
                name="aadharphoto"
                type="file"
              />
              <_Field label="PAN Card Number" name="pan" type="string" />
              <_Field
                label="Upload PAN Card Photo"
                name="panphoto"
                type="file"
              />
              <_Field label="Date of Birth" name="dateofbirth" type="date" />
              <_Field
                label="Gender"
                name="gender"
                as="select"
                options={[
                  { value: "male", name: "Male" },
                  { value: "female", name: "Female" },
                  { value: "others", name: "Others" },
                ]}
              />
              <_Field
                label="Blood Group"
                name="blood"
                as="select"
                options={[
                  { value: "A+", name: "A+" },
                  { value: "A-", name: "A-" },
                  { value: "B+", name: "B+" },
                  { value: "B-", name: "B-" },
                  { value: "AB+", name: "AB+" },
                  { value: "AB-", name: "AB-" },
                  { value: "O+", name: "O+" },
                  { value: "O-", name: "O-" },
                ]}
              />
              <_Field
                label="Qualification"
                name="qualification"
                as="select"
                options={[
                  { value: "BE", name: "B.E" },
                  { value: "BA", name: "BA" },
                  { value: "BSc", name: "B.Sc" },
                ]}
              />
              <_Field
                label="Profession"
                name="profession"
                as="select"
                options={[
                  { value: "Public sector", name: "Public Sector" },
                  { value: "Private sector", name: "Private Sector" },
                  { value: "others", name: "Others" },
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
                label="City"
                name="city"
                as="select"
                options={[
                  { value: "bangalore", name: "Bangalore" },
                  { value: "chennai", name: "Chennai" },
                  { value: "kochi", name: "Kochi" },
                ]}
              />
              <_Field label="Zip Code" name="zipcode" type="number" />
              <_Field label="Upload Photo" name="photo" type="file" />

              <button
                className="btn md:col-span-2 lg:col-span-3 mt-4"
                type="submit"
              >
                Save
              </button>
            </Form>
          </Formik>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  );
};

export default Home;
