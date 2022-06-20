import { createSlice } from "@reduxjs/toolkit";

export const samplerSlice = createSlice({
  name: "sampler",
  initialState: [
    { id: 1, name: "Default 1", uri: "default1.wav" },
    { id: 2, name: "Default 2", uri: "default2.wav" },
    { id: 3, name: "Default 3", uri: "default3.wav" },
    { id: 4, name: "Default 4", uri: "default4.wav" },
    { id: 5, name: "Default 5", uri: "default5.wav" },
    { id: 6, name: "Default 6", uri: "default6.wav" },
  ],
  reducers: {
    addSampler: (state, action) => {
        return [...state, { ...action.payload }]
    },
    editSampler: (state, action) => {
      var id = action.payload.id;
      var item = action.payload.item;
      var newItem = {
        ...item,
      };
      state[id-1]=newItem;
      return state;
    },
  },
});

export const { addSampler, editSampler } = samplerSlice.actions;
export const samplerSelector = (state) => state.sampler;
export default samplerSlice.reducer;
