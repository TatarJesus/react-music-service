import { useSelector } from 'react-redux';

import { PauseSVG, PlaySVG } from '../../../../../assets/svg/SongManagement/SongManagementIcons';

const ButtonPlayPause = () => {
    const parameters = useSelector(state => state.parameters.currentParam);

    return (
        (!parameters.isPlaying) ? <PlaySVG /> : <PauseSVG />
    )
}

export default ButtonPlayPause