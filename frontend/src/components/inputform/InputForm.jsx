import React from "react";
import {
  Card,
  Typography,
  Input,
  Radio,
  Button,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { inputFormSchema } from "./InputFormSchema";
import { useDispatch } from "react-redux";
import { createData } from "../../features/UserDetailsSlice";
import { useNavigate } from "react-router-dom";

const InputForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialvalues = {
    name: "",
    age: "",
    email: "",
    gender: " ",
  };

  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    useFormik({
      initialValues: initialvalues,
      validationSchema: inputFormSchema,

      onSubmit: (values, action) => {
        dispatch(createData(values));
        navigate("/read");
        action.resetForm();
      },
    });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card
          className="w-[50%] mx-auto mt-10 p-[30px]"
          color="transparent"
          shadow={true}
        >
          <Typography variant="h4" color="blue-gray">
            Data Form
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your data here.
          </Typography>
          <br />
          <div className="grid grid-cols-2">
            <div className="flex w-72 flex-col gap-6">
              <Input
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                color="black"
                label="Name"
                value={values.name}
              />
              {errors.name && touched.name ? <span>{errors.name}</span> : null}
              <Input
                name="age"
                onChange={handleChange}
                onBlur={handleBlur}
                color="black"
                label="Age"
                value={values.age}
              />
              {errors.age && touched.age ? <span>{errors.age}</span> : null}
            </div>
            <div className="flex w-72 flex-col gap-6">
              <Input
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                color="black"
                label="Email"
                value={values.email}
              />
              {errors.email && touched.email ? (
                <span>{errors.email}</span>
              ) : null}
            </div>
          </div>

          <div className="flex items-center my-6 text-black">
            <label htmlFor="">Gender :</label>
            <div className="flex items-center ml-4">
              <label htmlFor="">Male</label>
              <Radio
                name="gender"
                value="Male"
                color="gray"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="">Femal</label>
              <Radio
                name="gender"
                value="Femal"
                color="gray"
                onChange={handleChange}
              />
            </div>
          </div>
          <Button className="mx-auto" type="submit">
            Submit
          </Button>
        </Card>
      </form>
    </>
  );
};

export default InputForm;
