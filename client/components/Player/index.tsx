import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai'
import PlayerButton from '../MusicCard/PlayerButton'
import { usePlayer } from '@/hooks/usePlayer'

import styles from './styles.module.scss'
import Progress from './Progress'
import  ContainerProgress  from './ContainerProgress'

const Player = () => {
    const {handlePause, handlePlay, isPlaying, skipNext, skipPrev} = usePlayer()
    
    return(
        <div className={styles.container}>
            <div>
                <button onClick={skipPrev}>
                    <AiFillStepBackward size={32}/>
                </button>
                <PlayerButton 
                   handlePause={handlePause}
                   handlePlay={handlePlay}
                   isPlaying={isPlaying} 
                />
                <button onClick={skipNext}>
                    <AiFillStepForward size={32}/>
                </button>
            </div>
            <ContainerProgress />
        </div>
    )
}

export default Player