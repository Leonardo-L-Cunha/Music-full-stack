'use client'

import Player from '@/components/Player';
import { usePlayPauseAudio } from '@/hooks/usePlayPauseAudio';
import { MusicsProps } from '@/types';
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';

interface PlayerContextProps {
    playList: MusicsProps[]
    currentMusic: HTMLAudioElement | null
    setPlayList: Dispatch<SetStateAction<MusicsProps[]>>
    isPlaying: boolean
    handlePlay: () => void
    handlePause: () => void
    handleUpdateCurrentMusic: (musicUrl: string) => void
    skipNext: () => void
    skipPrev: () => void
}

interface PlayerProviderProps {
    children:ReactNode
}

export const playerContext = createContext({} as PlayerContextProps)

const PlayerProvider = ({children}:PlayerProviderProps) => {
    const [playList, setPlayList] = useState<MusicsProps[]>([])
    const [currentMusic, setCurrentMusic] = useState<HTMLAudioElement | null>(null)
    const {isPlaying, setIsPlaying} = usePlayPauseAudio(currentMusic)

    useEffect(() =>{
        currentMusic?.play()
    },[currentMusic])
    
    const handlePlay = () => {
        currentMusic?.play()
        setIsPlaying(true)
    }
    
    const handlePause = () => {
        currentMusic?.pause()
        setIsPlaying(false)
    }

    const handleUpdateCurrentMusic = (musicUrl: string) => {
        currentMusic?.pause()
        setIsPlaying(true)
        setCurrentMusic(new Audio(musicUrl))
    }

    const skipNext = () => {
        const foundIndex = playList.findIndex((playListTrack) => currentMusic?.src === playListTrack.music_url);
    
        if (foundIndex === playList.length - 1) {
          setCurrentMusic(new Audio(playList[0].music_url));
        } else {
          setCurrentMusic(new Audio(playList[foundIndex + 1].music_url));
        }
      };
    
      const skipPrev = () => {
        const foundIndex = playList.findIndex((playListTrack) => currentMusic?.src === playListTrack.music_url);
    
        if (foundIndex === 0) {
          setCurrentMusic(new Audio(playList[playList.length - 1].music_url));
        } else {
          setCurrentMusic(new Audio(playList[foundIndex - 1].music_url));
        }
      };
    return(
        <playerContext.Provider value={{
                currentMusic, playList, 
                setPlayList, isPlaying, 
                handlePlay, handlePause, 
                handleUpdateCurrentMusic,
                skipNext,
                skipPrev
            }
            }>
            {children}
            <Player />
        </playerContext.Provider>
    )
}

export default PlayerProvider