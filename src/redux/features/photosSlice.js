import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPhotos = createAsyncThunk('photos/getPhotos', async () => {
  return await fetch('https://jsonplaceholder.typicode.com/photos').then(
    (res) => res.json()
  );
});

const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    photos: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhotos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPhotos.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(getPhotos.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default photosSlice.reducer;
