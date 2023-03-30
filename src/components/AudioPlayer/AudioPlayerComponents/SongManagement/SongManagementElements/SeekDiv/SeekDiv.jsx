import { useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './SeekDiv.module.css';


const SeekDiv = ({audioRef}) => {
    const clickRef = useRef();

    const parameters = useSelector(state => state.parameters.currentParam);

    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const divprogress = offset / width * 100;
        audioRef.current.currentTime = divprogress / 100 * parameters.durationSeconds;
    }

    return (
        <div className={styles.navigation}>
            <div className={styles.navigation_wrapper} onClick={checkWidth} ref={clickRef}>
                <div className={styles.seek_song} style={{ width: `${parameters.seekWidth + '%'}` }}></div>
            </div>
        </div>
    )
}

export default SeekDiv