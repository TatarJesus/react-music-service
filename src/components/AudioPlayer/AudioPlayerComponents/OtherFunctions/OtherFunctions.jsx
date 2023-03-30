import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonHeart from './OtherFunctionsElements/ButtonHeart';
import ButtonKaraokeMode from './OtherFunctionsElements/ButtonKaraokeMode';

import {changeKaraoke} from '../../../../stores/stateButtons';
import {changeParameterStatusLiked} from '../../../../stores/parametersSlice';

import styles from './OtherFunctions.module.css';

const OtherFunctions = ({ audioRef }) => {
    const [volumeSong, setVolume] = useState(1);

    const dispatch = useDispatch();
    const stateButtons = useSelector(state => state.stateButtons.currentStateButtons);
    const parameters = useSelector(state => state.parameters.currentParam);

    const changeVisKaraoke = () => {
        dispatch(changeKaraoke(!stateButtons.karaoke));
    }

    const changeHeart = () => {
        dispatch(changeParameterStatusLiked(!parameters.statusLiked));
    }

    const changeVolume = (event) => {
        setVolume(event.target.value);
        audioRef.current.volume = volumeSong;
    }

    return (
        <div className={styles.other_functions}>
            <button onClick={changeHeart}>
                <ButtonHeart />
            </button>
            <button onClick={changeVisKaraoke}>
                <ButtonKaraokeMode />
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            </button>
            <input type="range" min='-0.02' max='1.02' step='0.02' value='0.5' onChange={changeVolume} />
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </button>
        </div>
    )
}

export default OtherFunctions