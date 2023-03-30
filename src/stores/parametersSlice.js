import { createSlice } from '@reduxjs/toolkit'

const parametersSlice = createSlice({
    name: 'parameters',
    initialState: {
        currentParam: {
            index: 0,
            previousVolume: 35,
            level_volume: 70,
            currentSeconds: 0,
            durationSeconds: 0,
            seekWidth: 0,
            isPlaying: false,
            statusLiked: false,
        }
    },
    reducers: {
        changeParameterIndex(state, action) {
            state.currentParam.index = action.payload
        },
        changeParameterIsPlaying(state, action) {
            state.currentParam.isPlaying = action.payload
        },
        changeParameterStatusLiked(state, action) {
            state.currentParam.statusLiked = action.payload
        },
        setParameterCurrentSeconds(state, action) {
            state.currentParam.currentSeconds = action.payload
        },
        setParameterDurationSeconds(state, action) {
            state.currentParam.durationSeconds = action.payload
        },
        setParameterSeekWidth(state, action) {
            state.currentParam.seekWidth = action.payload
        }
    }
});

export const { changeParameterIndex, changeParameterIsPlaying, changeParameterStatusLiked, setParameterCurrentSeconds, setParameterDurationSeconds, setParameterSeekWidth } = parametersSlice.actions;

export default parametersSlice.reducer;