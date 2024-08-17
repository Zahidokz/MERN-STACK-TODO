import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, showUsers } from "../features/UserDetailsSlice";
import Popupwin from "./Popupwin";
import { Link } from "react-router-dom";

const Read = () => {
  const [value, setValue] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const { users, loading, searchUserData } = useSelector((state) => state.UDetails);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showUsers());
  }, []);
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <>
      {showPopup && (
        <Popupwin
          id={value}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h1 className="text-center text-2xl font-bold pt-10">Save Data</h1>
      <div className="grid grid-cols-4 gap-6 max-w-[90%] mx-auto">
        {users&&
        users
        .filter((se) => {
          if(searchUserData.length === 0){
            return se;
          }else{
            return se.name.toLowerCase().includes(searchUserData.toLowerCase())
          }
        }) 
        .map((details) => {
          const { name, email, gender, _id } = details;
          return (
            <>
              <div
                className="max-w-[100%] shadow-lg mx-auto text-center mt-10 py-6 rounded-lg"
                key={_id}
              >
                <h1 className="text-xl font-bold ">{name}</h1>
                <h1>{email}</h1>
                <h1>{gender}</h1>
                <div className="flex justify-center gap-4 mt-4 mb-1 px-6">
                  <button
                    className="bg-[blue] font-medium p-[2px_20px] rounded-lg text-white hover:bg-[#201658]"
                    onClick={() => [setValue(_id), setShowPopup(true)]}
                  >
                    View
                  </button>
                  <Link to={`/update/${_id}`}>
                  <button className="bg-[green] font-medium p-[2px_20px] rounded-lg text-white hover:bg-[#416D19]">
                    Edit
                  </button>
                  </Link>
                  <button
                    className="bg-[red] font-medium p-[2px_20px] rounded-lg text-white hover:bg-[#A73121]"
                    onClick={() => dispatch(deleteUsers(_id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Read;
