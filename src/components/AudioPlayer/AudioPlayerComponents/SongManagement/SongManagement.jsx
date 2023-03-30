import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { changeCurrentSong } from '../../../../stores/currentSongSlice';
import { changeParameterIndex } from '../../../../stores/parametersSlice';
import { changeParameterIsPlaying } from '../../../../stores/parametersSlice';

import { setTempPlaylist } from '../../../../stores/currentPlaylistSlice';
import { clearTempPlaylist } from '../../../../stores/currentPlaylistSlice';

import { changeShuffle } from '../../../../stores/stateButtons';
import { changeRepeat } from '../../../../stores/stateButtons';

import ButtonPlayPause from './SongManagementElements/ButtonPlayPause';
import SeekDiv from './SongManagementElements/SeekDiv/SeekDiv';
import ButtonRepeat from './SongManagementElements/ButtonRepeat';
import ButtonShuffle from './SongManagementElements/ButtonShuffle';

import { SkipBackSVG, SkipForwardSVG } from '../../../../assets/svg/SongManagement/SongManagementIcons';

import styles from './SongManagement.module.css';

const SongManagement = ({ audioRef }) => {

    const [curTime, setCurTime] = useState();
    const dispatch = useDispatch();

    const currentSong = useSelector(state => state.currentSong.currentSongObj);
    const currentPlaylist = useSelector(state => state.currentPlaylist.current_playlist);
    const parameters = useSelector(state => state.parameters.currentParam);
    const stateButtons = useSelector(state => state.stateButtons.currentStateButtons);

    const shuffle = (array) => {
        let len = array.length, temp, iter;
        while (len) {
            iter = Math.floor(Math.random() * len--);
            temp = array[len];
            array[len] = array[iter];
            array[iter] = temp;
        }
        return array;
    }

    const shuffleSong = () => {
        dispatch(changeShuffle(!stateButtons.shuffle));
        let arr_songs = [...currentPlaylist];
        arr_songs = shuffle(arr_songs);
        arr_songs = shuffle(arr_songs);
        arr_songs = shuffle(arr_songs);
        if (!stateButtons.shuffle) dispatch(setTempPlaylist(arr_songs));
        else dispatch(clearTempPlaylist([]));
    }

    const prevSong = () => {
        if (audioRef.current.currentTime < 5) {
            if (parameters.index === 0) dispatch(changeParameterIndex(currentPlaylist.length - 1));
            else dispatch(changeParameterIndex(parameters.index - 1));
        }
        else dispatch(changeParameterIndex(parameters.index));
        audioRef.current.currentTime = 0;
    };

    const playPauseSong = () => {
        dispatch(changeParameterIsPlaying(!parameters.isPlaying));
        if (!parameters.isPlaying) audioRef.current.play();
        else audioRef.current.pause();

    }

    const nextSong = () => {
        if (parameters.index === currentPlaylist.length - 1) dispatch(changeParameterIndex(0));
        else dispatch(changeParameterIndex(parameters.index + 1));
        audioRef.current.currentTime = 0;
    };

    const repeatSong = () => {
        if (stateButtons.repeat !== 2) dispatch(changeRepeat(stateButtons.repeat + 1));
        else dispatch(changeRepeat(0));
    }

    const endedSong = () => {
        if (stateButtons.repeat === 0) {
            if (parameters.index === currentPlaylist.length - 1) dispatch(changeParameterIndex(0));
            else dispatch(changeParameterIndex(parameters.index + 1));
        }
        else if (stateButtons.repeat === 1) {
            if (parameters.index === currentPlaylist.length - 1) {
                dispatch(changeParameterIndex(0));
                playPauseSong();
            }
            else {
                if (parameters.index === currentPlaylist.length - 1) dispatch(changeParameterIndex(0));
                else dispatch(changeParameterIndex(parameters.index + 1));
            }
        }
        audioRef.current.currentTime = 0;
    }

    const convertTimeHHMMSS = () => {
        let hhmmss = new Date(parameters.currentSeconds * 1000).toISOString().substr(11, 8);
        setCurTime(hhmmss.indexOf("00:") === 0 ? hhmmss.substr(4) : hhmmss);
    }

    useEffect(() => {
        dispatch(changeCurrentSong(currentPlaylist[parameters.index]));
        convertTimeHHMMSS();

        audioRef.current.addEventListener('ended', endedSong);

        return () => {
            audioRef.current.removeEventListener('ended', endedSong);
        };
    }, [parameters.currentSeconds, stateButtons.shuffle, parameters.durationSeconds, stateButtons.repeat])

    return (
        <div className={styles.song_management}>
            <div className={styles.song_control_panel}>
                <button onClick={shuffleSong}>
                    <ButtonShuffle />
                </button>
                <button onClick={prevSong}>
                    <SkipBackSVG />
                </button>
                <button onClick={playPauseSong}>
                    <ButtonPlayPause />
                </button>
                <button onClick={nextSong}>
                    <SkipForwardSVG />
                </button>
                <button onClick={repeatSong}>
                    <ButtonRepeat />
                </button>
            </div>
            <div className={styles.song_progress_bar}>
                <div className={styles.song_current_time}>
                    <span>{curTime}</span>
                </div>
                <SeekDiv audioRef={audioRef} />
                <div className={styles.song_duration_time}>
                    <span>{((currentSong.time % 60).toFixed() < 10) ? (Math.floor(currentSong.time / 60) + ':0' + (currentSong.time % 60).toFixed()) : (Math.floor(currentSong.time / 60) + ':' + (currentSong.time % 60).toFixed())}</span>
                </div>
            </div>
        </div>
    )
}

export default SongManagement