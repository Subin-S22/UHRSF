import { ErrorMessage, Field } from "formik";
import React from "react";

interface Options {
  value: string;
  name: string;
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  as?: string;
  options?: Options[];
}

function _Field({ label, options, name, as, className, ...props }: Props) {
  return (
    <div className={`flex flex-col items-start ${className} m-1 md:m-2`}>
      <label htmlFor={name} className="font-roboto text-gray-600">
        {label}
      </label>
      <Field
        name={name}
        className={
          "outline-none rounded-md border-2 border-gray-400 w-full px-2 py-1 focus:border-blue-500 " +
          `${as === "textarea" ? "h-20" : ""}`
        }
        as={as}
        {...props}
      >
        {options?.map(({ value, name }) => {
          return <option value={value}>{name}</option>;
        })}
      </Field>
      <ErrorMessage name={name}>
        {(msg) => (
          <div className="text-red-500 text-[12px] font-roboto">{msg}</div>
        )}
      </ErrorMessage>
    </div>
  );
}

export default _Field;
