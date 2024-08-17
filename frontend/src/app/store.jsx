import { configureStore } from "@reduxjs/toolkit";
import usersDetails from "../features/UserDetailsSlice";

export const store = configureStore({
  reducer: {
    UDetails: usersDetails,
  },
});
