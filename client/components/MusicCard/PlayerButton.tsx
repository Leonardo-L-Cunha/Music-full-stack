import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'

import styles from './styles.module.scss'

interface PlayerButtonProps {
    handlePlay: () => void
    handlePause: () => void
    isPlaying: boolean

    
}

const PlayerButton = ({handlePlay, handlePause, isPlaying}:PlayerButtonProps) => {
    const callBack = isPlaying ? handlePause : handlePlay
    const Icon = isPlaying ? AiFillPauseCircle : AiFillPlayCircle

    return(
        <button  className={styles.playerButton} type="button" onClick={callBack}>
          <Icon size={42}/>
        </button>
    )
}

export default PlayerButton