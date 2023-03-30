import { createSlice } from '@reduxjs/toolkit'

const stateButtonsSlice = createSlice({
    name: 'stateButtons',
    initialState: {
        currentStateButtons: {
            shuffle: false,
            repeat: 0,
            karaoke: false
        }
    },
    reducers: {
        changeShuffle(state, action) {
            state.currentStateButtons.shuffle = action.payload
        },
        changeRepeat(state, action) {
            state.currentStateButtons.repeat = action.payload
        },
        changeKaraoke(state, action){
            state.currentStateButtons.karaoke = action.payload
        }
    }
});

export const {changeShuffle, changeRepeat, changeKaraoke} = stateButtonsSlice.actions;

export default stateButtonsSlice.reducer;