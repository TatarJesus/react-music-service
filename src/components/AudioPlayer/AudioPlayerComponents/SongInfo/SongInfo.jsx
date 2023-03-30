import { useSelector } from 'react-redux';

import styles from './SongInfo.module.css';

const SongInfo = () => {
    const currentSong = useSelector(state => state.currentSong.currentSongObj);

    return (
        <div className={styles.song_info}>
            <img src={currentSong.srcCover} alt="" />
            <div className={styles.info_text}>
                <span style={{ fontSize: '20px', color: '#FFFFFF' }}>{currentSong.title}</span>
                <span style={{ fontSize: '16px', color: '#8B8B8B' }}>{currentSong.author}</span>
            </div>
        </div>
    )
}

export default SongInfo