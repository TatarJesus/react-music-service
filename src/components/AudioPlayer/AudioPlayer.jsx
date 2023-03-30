import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setParameterCurrentSeconds } from '../../stores/parametersSlice';
import { setParameterDurationSeconds } from '../../stores/parametersSlice';
import { setParameterSeekWidth } from '../../stores/parametersSlice';

import SongInfo from './AudioPlayerComponents/SongInfo/SongInfo';
import SongManagement from './AudioPlayerComponents/SongManagement/SongManagement';
import OtherFunctions from './AudioPlayerComponents/OtherFunctions/OtherFunctions';

const AudioPlayer = () => {
    const dispatch = useDispatch();

    const currentSong = useSelector(state => state.currentSong.currentSongObj);
    const parameters = useSelector(state => state.parameters.currentParam);
    const audioRef = useRef();

    const onPlaying = () => {
        const durationTime = audioRef.current.duration;
        const currentTime = audioRef.current.currentTime;

        dispatch(setParameterCurrentSeconds(currentTime));
        dispatch(setParameterSeekWidth(currentTime / durationTime * 100));
        dispatch(setParameterDurationSeconds(durationTime));
    }

    useEffect(() => {
        if (parameters.isPlaying) audioRef.current.play();
        else audioRef.current.pause();
    }, [currentSong.src, parameters.currentSeconds])

    return (
        <div style={{ display: 'flex' }}>
            <audio src={currentSong.src} ref={audioRef} onTimeUpdate={onPlaying}></audio>
            <SongInfo />
            <SongManagement audioRef={audioRef} />
            <OtherFunctions audioRef={audioRef} />
        </div>
    )
}

export default AudioPlayer