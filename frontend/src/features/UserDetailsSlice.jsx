import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Update from "../components/Update";

// .......Create........

export const createData = createAsyncThunk(
  "createData",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3400/users",
        {
          name: values.name,
          age: values.age,
          email: values.email,
          gender: values.gender,
        }
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// .......Read........

export const showUsers = createAsyncThunk(
  "showUsers",
  async (args, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:3400/users"
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// .........upDateData.........

export const upDateData = createAsyncThunk(
  "upDateData",
  async (upDate, rejectWithValue) => {
    console.log(upDate)
    try {
      const response = await axios.put(
        `http://localhost:3400/users/${
          upDate && upDate._id
        }`,
        {
          name: upDate.name,
          email: upDate.email,
          age: upDate.age,
          gender: upDate.gender,
        }
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ......delete......

export const deleteUsers = createAsyncThunk(
  "deleteUsers",
  async (id, rejectWithValue) => {
    try {
      const response = await axios.delete(
        `http://localhost:3400/users/${id}`
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const usersDetails = createSlice({
  name: "UDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchUserData : [],
  },

  reducers: {
    searchUserData: (state, action) => {
      state.searchUserData = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      //   ...Create....
      .addCase(createData.pending, (state) => {
        state.loading = true;
      })

      .addCase(createData.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })

      .addCase(createData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //   ...Read....
      .addCase(showUsers.pending, (state) => {
        state.loading = true;
      })

      .addCase(showUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //  ......upDateData.......
      .addCase(upDateData.pending, (state) => {
        state.loading = true;
      })
      .addCase(upDateData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((d) => {
          d.id === action.payload.id ? action.payload : d;
        });
      })
      .addCase(upDateData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //  ......deleteUsers.......
      .addCase(deleteUsers.pending, (state) => {
        state.loading = false;
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user._id !== action.payload);
      })
      .addCase(deleteUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default usersDetails.reducer;
export const {searchUserData} = usersDetails.actions;
