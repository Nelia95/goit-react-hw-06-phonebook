import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
  },
  reducers: {
    addNewContact: {
      reducer(state, action) {
        state.items = [action.payload, ...state.items];
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addNewContact, deleteContact } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
