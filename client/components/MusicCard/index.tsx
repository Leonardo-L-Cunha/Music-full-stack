'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { MusicsProps } from '@/types'
import styles from './styles.module.scss'
import PlayerButton from './PlayerButton'
import Link from 'next/link'



interface MusicCardProps {
    music: MusicsProps
}


const MusicCard = ({music}:MusicCardProps) => {
    const [audio] = useState(typeof Audio !== 'undefined' ? new Audio(music.music_url): null)
    const [isPlaying, setIsPlaying] = useState(false)
    const progressDivRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        if(!audio) {
            return;
        }
        const eventTimeUpdate = () =>{
            const progress = (audio.currentTime / audio.duration) * 100
            const roundProgress = String(Math.round(progress))

            progressDivRef.current?.style.setProperty('--height-progress',`${roundProgress}%`)
        }
        audio?.addEventListener('timeupdate', eventTimeUpdate)

        return () => {
            audio?.removeEventListener('timeupdate', eventTimeUpdate)
        }
    },[audio])

    const handlePlay = () => {
        audio?.play()
        setIsPlaying(true)
    }
    const handlePause = () => {
        audio?.pause()
        setIsPlaying(false)
    }
    return(
        <li className={styles.container}>
           <Link href='/'>
            <span>{music.name}</span>
            <Image src={music.cover_image} alt={music.name} width={300} height={300} />  
           </Link>
           <div ref={progressDivRef} className={styles.progressBar}>
            <PlayerButton 
                handlePlay={handlePlay}
                handlePause={handlePause}
                isPlaying={isPlaying}
            />
           </div>
        </li>
    )
}

export default MusicCard