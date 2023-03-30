import { useState } from 'react';

import HomePage from './HomePage/HomePage';
import MyLibrary from './MyLibrary/MyLibrary';
import Recommendations from './Recommendations/Recommendations';

import {SearchSVG} from '../../assets/svg/SideBarNavigation/SideBarNavIcons';

import styles from './SideBarNavigation.module.css';

const SideBarNavigation = () => {
    const [visibleHomePage, setVisibleHomePage] = useState(true);
    const [visibleMyLibrary, setVisibleMyLibrary] = useState(true);
    const [visibleRecommendations, setVisibleRecommendations] = useState(true);

    return (
        <div style={{ marginTop: '85px' }}>
            <div className={styles.side_bar_nav_wrapper}>
                <ul>
                    <li className={styles.side_bar_li} onClick={() => setVisibleHomePage(!visibleHomePage)}>
                        <HomePage visibleHomePage={visibleHomePage} />
                    </li>
                    <li className={styles.side_bar_li} onClick={() => setVisibleMyLibrary(!visibleMyLibrary)}>
                        <MyLibrary visibleMyLibrary={visibleMyLibrary} />
                    </li>
                    <li className={styles.side_bar_li} onClick={() => setVisibleRecommendations(!visibleRecommendations)}>
                        <Recommendations visibleRecommendations={visibleRecommendations} />
                    </li>
                    <li className={styles.side_bar_li}>
                        <button className={`${styles.side_bar_button} ${styles.side_bar_elem}`}>
                            <SearchSVG />
                            <span>Поиск</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBarNavigation