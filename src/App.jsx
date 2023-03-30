import styles from './App.module.css';
import SideBarNavigation from './components/SideBarNavigation/SideBarNavigation';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import MainBlock from './components/MainBlock/MainBlock';
import KaraokeMode from './components/KaraokeMode/KaraokeMode';

const App = () => {
    const onKeyDown = e => {
        console.log(e.key);
    }

    return (
        <div className={styles.main} >
            <KaraokeMode />
            <div className={styles.left_menu}>
                <SideBarNavigation />
            </div>
            <div className={styles.main_block}>
                <MainBlock />
            </div>
            <div className={styles.audio_player}>
                <AudioPlayer />
            </div>
        </div>
    )
}

export default App