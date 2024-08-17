import React, { useEffect, useState } from "react";
import {
  Card,
  Input,
  Typography,
  Radio,
  Button,
} from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { upDateData } from "../features/UserDetailsSlice";
const Update = () => {
  const navigate = useNavigate();
  const [upDate, setupDate] = useState();
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.UDetails);
  const {id}  = useParams( );
  console.log(users[0])
  
  useEffect(() => {
    if (id) { 
      const oldData = users.filter((elements) => elements._id == id);
      setupDate(oldData[0]);
      console.log(oldData[0])
    }
  }, []);

  const handleChange = (e) => {
    setupDate({ ...upDate, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(upDateData(upDate));
      navigate("/read");
  };
console.log(upDate)
  return (
    <div>
      <h1></h1>
      <Card
        className="w-[50%] mx-auto mt-10 p-[30px]"
        color="transparent"
        shadow={true}
      >
        <Typography variant="h4" color="blue-gray">
          Update Data
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 pt-[30px]">
            <div className="flex w-72 flex-col gap-6">
              <Input
                color="black"
                label="Name"
                name="name"
                value={upDate && upDate.name}
                onChange={handleChange}
              />
              <Input
                color="black"
                name="age"
                label="Age"
                value={upDate && upDate.age}
                onChange={handleChange}
              />
            </div>

            <div className="flex w-72 flex-col gap-6">
              <Input
                color="black"
                name="email"
                label="Email"
                value={upDate && upDate.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center mt-5 text-black">
            <h1>Gender : </h1>
            <div className="flex items-center ml-2">
              <label>Male</label>
              <Radio
                checked={upDate && upDate.gender == "Male"}
                name="gender"
                value="Male"
                color="gray"
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center">
              <label>Female</label>
              <Radio
                checked={upDate && upDate.gender == "Female"}
                name="gender"
                value="Female"
                color="gray"
                onChange={handleChange}
              />
            </div>
          </div>
          <Button className="mt-5" type="submit">
            Update
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Update;
