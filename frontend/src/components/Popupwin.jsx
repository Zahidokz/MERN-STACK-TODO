import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Popupwin = ({ id, setShowPopup }) => {
  const items = useSelector((state) => state.UDetails.users);
  const allUsers = items.filter((elements) => elements._id === id);
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center text-black">
        <div className="bg-white text-center w-[250px] h-[250px] p-10 rounded-lg ">
          <h1 className="text-lg font-bold mb-2">{allUsers[0].name}</h1>
          <h1>{allUsers[0].email}</h1>
          <h1>Age {allUsers[0].age}</h1>
          <h1>{allUsers[0].gender}</h1>

          <button
            className="bg-black text-white p-[2px_20px] mt-4 rounded-lg"
            onClick={() => setShowPopup(false)}
          >
            GoBack
          </button>
        </div>
      </div>
    </>
  );
};

export default Popupwin;
