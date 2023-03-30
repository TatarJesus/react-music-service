import { HomePageSVG } from '../../../assets/svg/SideBarNavigation/SideBarNavIcons';

import styles from '../SideBarNavigation.module.css';

const HomePage = ({ visibleHomePage }) => {
    if (visibleHomePage) return (
        <div>
            <button className={`${styles.side_bar_button} ${styles.side_bar_elem}`}>
                <HomePageSVG />
                <span>Домашняя страница</span>
            </button>
        </div>
    )
    return (
        <div style={{ display: 'flex', alignItems: 'end', flexDirection: 'column' }}>
            <button className={`${styles.side_bar_button} ${styles.side_bar_elem}`}>
                <HomePageSVG />
                <span>Домашняя страница</span>
            </button>
            <button className={`${styles.side_bar_button} ${styles.side_bar_elem_sub}`}>
                <span>- Новое</span>
            </button>
            <button className={`${styles.side_bar_button} ${styles.side_bar_elem_sub}`}>
                <span>- Плейлисты дня</span>
            </button>
            <button className={`${styles.side_bar_button} ${styles.side_bar_elem_sub}`}>
                <span>- В топах</span>
            </button>
        </div>
    )
}

export default HomePage