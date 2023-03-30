import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeKaraoke } from '../../stores/stateButtons';
import styles from './KaraokeMode.module.css';

const KaraokeMode = () => {
    const [textSong, setTextSong] = useState([]);

    const dispatch = useDispatch();
    const karaokeMode = useRef();
    const stateButtons = useSelector(state => state.stateButtons.currentStateButtons);
    const currentSong = useSelector(state => state.currentSong.currentSongObj);

    const readTextFile = (obj) => {
        let rawFile = new XMLHttpRequest();
        let textTemp;
        rawFile.open("GET", obj.text, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    textTemp = allText;
                }
            }
        }
        rawFile.send(null);
        textTemp = textTemp.split('\r\n');
        return textTemp;
    }

    const closeKaraoke = () => {
        dispatch(changeKaraoke(false));
    }

    useEffect(() => {
        setTextSong(readTextFile(currentSong));
    }, [])

    if (!stateButtons.karaoke) return null;
    return (
        <div className={styles.karaoke_mode} ref={karaokeMode}>
            <div className={styles.karaoke_mode_wrapper}>
                <div className={styles.song_info}>
                    <img src={currentSong.srcCover} alt="" />
                    <div className={styles.info_text}>
                        <span style={{ fontSize: '20px', color: '#FFFFFF' }}>{currentSong.title}</span>
                        <span style={{ fontSize: '16px', color: '#8B8B8B' }}>{currentSong.author}</span>
                    </div>
                    <div className={styles.close_karaoke_mode}>
                        <button onClick={closeKaraoke}>
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                </div>
                <div className={styles.song_text}>
                    <div className={styles.song_text_wrapper}>
                        {textSong.map((songLine, index) => (
                            (songLine.length > 33) ?
                                (<div className={`${styles.song_line} ${styles.high_row}`} key={index}>{songLine}</div>) :
                                (<div className={`${styles.song_line} ${styles.low_row}`} key={index}>{songLine}</div>)
                        ))}
                    </div>
                </div>
                <div className={styles.footer_karaoke_mode}>
                    <span>Предоставлено компанией ООО "МУЗ"</span>
                </div>
            </div>
        </div>
    )
}

export default KaraokeMode