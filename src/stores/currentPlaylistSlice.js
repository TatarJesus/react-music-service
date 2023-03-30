import { createSlice } from '@reduxjs/toolkit'

const currentPlaylistSlice = createSlice({
    name: 'currentPlaylist',
    initialState: {
        current_playlist: [
            {
                id: '000000100',
                title: 'Я тут',
                author: 'DK',
                src: 'https://dl.dropboxusercontent.com/s/hmriyx9cj70uwjf/DK%20%E2%80%93%20%D0%AF%20%D0%A2%D1%83%D1%82.mp3?dl=0',
                srcCover: 'https://dl.dropboxusercontent.com/s/a1pkp4d5pjf5ocb/playlists-dk-nenahod.png?dl=0',
                text: 'https://dl.dropboxusercontent.com/s/bdb4bzyezsdwofd/DK%20%D0%AF%20%D1%82%D1%83%D1%82.txt?dl=0',
                explicit: 18,
                time: 177
            },
            {
                id: '000010100',
                title: 'Big Tymers',
                author: 'Big Baby Tape & Kizaru',
                src: 'https://dl.dropboxusercontent.com/s/kclfeddf3w2y13i/Big%20Baby%20Tape%20%26%20kizaru%20-%20Big%20tymers.mp3?dl=0',
                srcCover: 'https://dl.dropboxusercontent.com/s/4e6cjtihvllyqo5/playlist-Big%20Baby%20Tape%20%26%20kizaru-%20bandana%20I.jpg?dl=0',
                text: 'https://dl.dropboxusercontent.com/s/8uz7msdj2818ga0/dk.cdg?dl=0',
                explicit: 18,
                time: 191
            },
            {
                id: '000010100',
                title: 'Fishscale',
                author: 'Kizaru',
                src: 'https://dl.dropboxusercontent.com/s/n7outvj6taz6glv/kizaru%20-%20Fishscale.mp3?dl=0',
                srcCover: 'https://dl.dropboxusercontent.com/s/vdm5kbbnga3k21w/KIZARU%20-%20%D0%9D%D0%B0%D0%B7%D0%B0%D0%B4%20%D0%B2%20%D0%B1%D1%83%D0%B4%D1%83%D1%89%D0%B5%D0%B5.jpg?dl=0',
                text: 'https://dl.dropboxusercontent.com/s/8uz7msdj2818ga0/dk.cdg?dl=0',
                explicit: 18,
                time: 166
            },
            {
                id: '000010100',
                title: 'Неумеха',
                author: 'LIL THE NEEL',
                src: 'https://dl.dropboxusercontent.com/s/36dt58q67gc0cer/LIL%20THE%20NEEL%20-%20%D0%9D%D0%B5%D1%83%D0%BC%D0%B5%D1%85%D0%B0.mp3?dl=0',
                srcCover: 'https://dl.dropboxusercontent.com/s/oj70s92mjhvlcj7/LIL%20THE%20NEEL%20-%20%D0%9D%D0%B5%D1%83%D0%BC%D0%B5%D1%85%D0%B0.jpeg?dl=0',
                text: 'https://dl.dropboxusercontent.com/s/8uz7msdj2818ga0/dk.cdg?dl=0',
                explicit: 18,
                time: 136
            },
            {
                id: '000010100',
                title: 'Ниоткуда',
                author: 'Markul',
                src: 'https://dl.dropboxusercontent.com/s/3pos0310uzlkzcj/Markul%20-%20%D0%9D%D0%B8%D0%BE%D1%82%D0%BA%D1%83%D0%B4%D0%B0.mp3?dl=0',
                srcCover: 'https://dl.dropboxusercontent.com/s/w1mmqzgjxfq60zw/Markul%20-%20%D0%9D%D0%B8%D0%BE%D1%82%D0%BA%D1%83%D0%B4%D0%B0.jpeg?dl=0',
                text: 'https://dl.dropboxusercontent.com/s/8uz7msdj2818ga0/dk.cdg?dl=0',
                explicit: 18,
                time: 132
            },
            {
                id: '000010100',
                title: 'DINERO',
                author: 'MORGENSHTERN',
                src: 'https://dl.dropboxusercontent.com/s/i7m4k4d1uo1fi55/MORGENSHTERN%20-%20DINERO.mp3?dl=0',
                srcCover: 'https://dl.dropboxusercontent.com/s/90we98detouwvp3/MORGENSHTERN%20-%20DINERO.jpg?dl=0',
                text: 'https://dl.dropboxusercontent.com/s/8uz7msdj2818ga0/dk.cdg?dl=0',
                explicit: 18,
                time: 158
            }
        ],
        temp_playlists: [

        ]
    },
    reducers: {
        changeCurrentPlaylist(state, action) {
            state.current_playlist = action.payload
        },
        setTempPlaylist(state, action) {
            state.temp_playlists = state.current_playlist
            state.current_playlist = action.payload
        },
        clearTempPlaylist(state, action) {
            state.current_playlist = state.temp_playlists
            state.temp_playlists = []
        }
    }
});

export const {changeCurrentPlaylist, setTempPlaylist, clearTempPlaylist} = currentPlaylistSlice.actions;

export default currentPlaylistSlice.reducer;