import { useSelector } from 'react-redux';

import { ShuffleSVG, ShuffleActiveSVG } from '../../../../../assets/svg/SongManagement/SongManagementIcons';

const ButtonShuffle = () => {
    const stateButtons = useSelector(state => state.stateButtons.currentStateButtons);

    return (
        (!stateButtons.shuffle) ? <ShuffleSVG /> : <ShuffleActiveSVG />
    )
}

export default ButtonShuffle