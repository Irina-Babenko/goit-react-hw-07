// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://66ef08883ed5bb4d0bf2a3a4.mockapi.io';

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (newContact, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', newContact);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(addContact.pending, state => {
//         state.loading = true;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default contactsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from './filtersSlice';
import { fetchContacts, addContact, deleteContact } from './contactsOps';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, actions) => {
  state.loading = false;
  state.error = actions.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, actions) => {
        state.loading = false;
        state.error = null;
        state.items = actions.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, actions) => {
        state.loading = false;
        state.error = null;
        state.items.push(actions.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, actions) => {
        state.loading = false;
        state.error = null;
        const idx = state.items.findIndex(
          contact => contact.id === actions.payload.id,
        );
        state.items.splice(idx, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const selectContacts = state => state.contacts.items;

export const selectContactsLoading = state => state.contacts.loading;

export const selectContactsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, contactName) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactName.toLowerCase()),
    );
  },
);

export default contactsSlice.reducer;
