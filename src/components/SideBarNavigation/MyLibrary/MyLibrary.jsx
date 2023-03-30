import { MyLibrarySVG } from '../../../assets/svg/SideBarNavigation/SideBarNavIcons';

import styles from '../SideBarNavigation.module.css';

const MyLibrary = ({ visibleMyLibrary }) => {
    if (visibleMyLibrary) return (
        <div>
            <button className={`${styles.side_bar_button} ${styles.side_bar_elem}`}>
                <MyLibrarySVG />
                <span>Моя библиотека</span>
            </button>
        </div>
    )
    return (
        <div style={{ display: 'flex', alignItems: 'end', flexDirection: 'column' }}>
            <button className={`${styles.side_bar_button} ${styles.side_bar_elem}`}>
                <MyLibrarySVG />
                <span>Моя библиотека</span>
            </button>
            <button className={`${styles.side_bar_button} ${styles.side_bar_elem_sub}`}>
                <span>- Плейлисты</span>
            </button>
            <button className={`${styles.side_bar_button} ${styles.side_bar_elem_sub}`}>
                <span>- Авторы</span>
            </button>
            <button className={`${styles.side_bar_button} ${styles.side_bar_elem_sub}`}>
                <span>- Альбомы</span>
            </button>
        </div>

    )
}

export default MyLibrary