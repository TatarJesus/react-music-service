import { useSelector } from 'react-redux';

import { RepeatSVG, RepeatPlaylistSVG, RepeatSongSVG } from '../../../../../assets/svg/SongManagement/SongManagementIcons';

const ButtonRepeat = () => {
    const stateButtons = useSelector(state => state.stateButtons.currentStateButtons);

    return (
        (stateButtons.repeat === 0) ? <RepeatSVG />
            : (stateButtons.repeat === 1) ? <RepeatPlaylistSVG />
                : <RepeatSongSVG />
    )
}

export default ButtonRepeat