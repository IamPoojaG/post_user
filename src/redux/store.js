import { configureStore } from '@reduxjs/toolkit';
import PostReducer from './features/postSlice';
import PhotoReducer from './features/photosSlice';

export default configureStore({
  reducer: {
    post: PostReducer,
    photo: PhotoReducer,
  },
});
