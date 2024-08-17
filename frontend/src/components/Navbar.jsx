import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchUserData } from "../features/UserDetailsSlice";
const Navbar = () => {
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();
  const items = useSelector((state) => state.UDetails.users);

  useEffect(() => {
      dispatch(searchUserData(searchData));
  }, [searchData]);

  return (
    <>
      <nav className="max-w-[100%] bg-black  text-white">
        <div className="max-w-[80%] mx-auto grid grid-cols-2 items-center py-[15px]">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Typography variant="h4" color="white">
                Muhammad Zahid
              </Typography>
            </Link>

            <ul className="flex font-medium">
              <Link to="/">
                <li className="mr-6 ">Create Post</li>
              </Link>
              <Link to="/read">
                <li>All Posts ({items.length})</li>
              </Link>
            </ul>
          </div>
          <div className="flex justify-end items-center">
            <input
              className="text-black pl-2 rounded-lg outline-none w-[200px] h-[32px]"
              type="text"
              placeholder="search"
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
