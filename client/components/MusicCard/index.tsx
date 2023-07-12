'use client'

import Image from 'next/image'

import { MusicsProps } from '@/types'
import PlayerButton from './PlayerButton'
import Link from 'next/link'
import Progress from './Progress'
import { usePlayer } from '@/hooks/usePlayer'

import styles from './styles.module.scss'


interface MusicCardProps {
    music: MusicsProps
}


const MusicCard = ({music}:MusicCardProps) => {
   const {currentMusic, handlePause, isPlaying, handleUpdateCurrentMusic} = usePlayer()
   
    const isCurrentMusicPlaying = isPlaying && currentMusic?.src === music.music_url

    const handlePlay = () => {
        handleUpdateCurrentMusic(music.music_url)
    }

  
    return(
        <li className={styles.container}>
           <Link href='/'>
            <span>{music.name}</span>
            <Image src={music.cover_image} alt={music.name} width={300} height={300} />  
           </Link>
            <Progress music={music}>
                <PlayerButton 
                handlePlay={handlePlay}
                handlePause={handlePause}
                isPlaying={isCurrentMusicPlaying}
                />
            </Progress>
        </li>
    )
}

export default MusicCard