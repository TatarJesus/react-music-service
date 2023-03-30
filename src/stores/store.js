import { configureStore } from '@reduxjs/toolkit';
import currentSongReducer from './currentSongSlice';
import currentPlaylistReducer from './currentPlaylistSlice';
import parametersReducer from './parametersSlice';
import stateButtonsReducer from './stateButtons';

export default configureStore({
    reducer: {
        currentSong: currentSongReducer,
        currentPlaylist: currentPlaylistReducer,
        parameters: parametersReducer,
        stateButtons: stateButtonsReducer
    }
});