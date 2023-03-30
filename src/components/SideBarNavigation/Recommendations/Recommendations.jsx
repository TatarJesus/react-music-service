import { RecommendationsSVG } from '../../../assets/svg/SideBarNavigation/SideBarNavIcons';

import styles from '../SideBarNavigation.module.css';

const Recommendations = ({ visibleRecommendations }) => {
    if (visibleRecommendations) return (
        <div>
            <button className={`${styles.side_bar_button} ${styles.side_bar_elem}`}>
                <RecommendationsSVG />
                <span>Рекомендации</span>
            </button>
        </div>
    )
    return (
        <div style={{ display: 'flex', alignItems: 'end', flexDirection: 'column' }}>
            <button className={`${styles.side_bar_button} ${styles.side_bar_elem}`}>
                <RecommendationsSVG />
                <span>Рекомендации</span>
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

export default Recommendations