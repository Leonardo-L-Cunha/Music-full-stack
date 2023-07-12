import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import { usePlayer } from '@/hooks/usePlayer'

const Progress = () => {
    const {currentMusic} = usePlayer()
    const inpurtRef = useRef<HTMLInputElement>(null)
    
    useEffect(() => {
        const inputRange = inpurtRef.current

        if(!currentMusic || !inpurtRef || !inputRange) {
            return
        }
        const eventTimeUpdate = () =>{
            const progress = (currentMusic.currentTime / currentMusic.duration) * 100;
            inputRange.style.backgroundSize = `${progress}% 100%`
            inputRange.value = String(progress)
        }

        const updatePositionMusic =(event: Event) => {
            const input = event.target as HTMLInputElement

            const newCurrentTime = (currentMusic.duration * +input.value) / 100
            currentMusic.currentTime = newCurrentTime
        }

        currentMusic?.addEventListener('timeupdate',eventTimeUpdate)
        inputRange.addEventListener('input', updatePositionMusic)
        return () => {
            currentMusic?.removeEventListener('timeupdate',eventTimeUpdate)
            inputRange.removeEventListener('input', updatePositionMusic)

        }
    })
    return(
        <input
         ref={inpurtRef}    
         className={styles.playerScroll}   
         type="range" 
        />
    )
}

export default Progress