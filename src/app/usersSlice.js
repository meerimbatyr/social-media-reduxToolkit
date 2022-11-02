import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Buzz Lighter" },
  { id: 2, name: "Marty McFly" },
  { id: 3, name: "Some thing" },
];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
