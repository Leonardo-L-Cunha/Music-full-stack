'use client'

import { MusicsProps } from "@/types"
import MusicCard from "../MusicCard"
import styles from './styles.module.scss'
import { useEffect } from "react"
import { usePlayer } from "@/hooks/usePlayer"

interface ListMusicsProps {
    musics: MusicsProps[]
}


const ListCard = ({musics}: ListMusicsProps) => {
    const {setPlayList} = usePlayer()
    useEffect(() =>{
        setPlayList(musics)
    },[musics, setPlayList])
    
    return (
        <>
          <ul className={styles.list}>
             {musics.map((music) => (
                <MusicCard key={music.id} music={music}/>
             ))}
          </ul>
        </>
    )
}

export default ListCard