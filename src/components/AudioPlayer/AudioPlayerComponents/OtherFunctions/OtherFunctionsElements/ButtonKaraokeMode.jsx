import { useSelector } from 'react-redux';

import {KaraokeModeSVG, KaraokeModeActiveSVG} from '../../../../../assets/svg/OtherFunctions/OtherFunctionsIcons';

const ButtonKaraokeMode = () => {
    const stateButtons = useSelector(state => state.stateButtons.currentStateButtons);

    return (
        (!stateButtons.karaoke) ? <KaraokeModeSVG /> : <KaraokeModeActiveSVG />
    )
}

export default ButtonKaraokeMode