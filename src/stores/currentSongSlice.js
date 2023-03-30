import { createSlice } from '@reduxjs/toolkit'

const currentSongSlice = createSlice({
    name: 'currentSong',
    initialState: {
        currentSongObj: {
            id: '000000100',
            title: 'Я тут',
            author: 'DK',
            src: 'https://dl.dropboxusercontent.com/s/hmriyx9cj70uwjf/DK%20%E2%80%93%20%D0%AF%20%D0%A2%D1%83%D1%82.mp3?dl=0',
            srcCover: 'https://dl.dropboxusercontent.com/s/a1pkp4d5pjf5ocb/playlists-dk-nenahod.png?dl=0',
            text: 'https://dl.dropboxusercontent.com/s/bdb4bzyezsdwofd/DK%20%D0%AF%20%D1%82%D1%83%D1%82.txt?dl=0',
            explicit: 18
        }
    },
    reducers: {
        changeCurrentSong(state, action) {
            state.currentSongObj = action.payload
        }
    }
});

export const {changeCurrentSong} = currentSongSlice.actions;

export default currentSongSlice.reducer;