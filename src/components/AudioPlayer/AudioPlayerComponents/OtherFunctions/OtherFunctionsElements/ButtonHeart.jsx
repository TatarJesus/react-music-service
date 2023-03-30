import { useSelector } from 'react-redux';

import {HeartSVG, HeartActiveSVG} from '../../../../../assets/svg/OtherFunctions/OtherFunctionsIcons';

const ButtonHeart = () => {
    const parameters = useSelector(state => state.parameters.currentParam);

    return (
        (!parameters.statusLiked) ? <HeartSVG /> : <HeartActiveSVG />
    )
}

export default ButtonHeart