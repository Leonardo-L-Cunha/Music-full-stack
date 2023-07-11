
import { MusicsProps } from "@/types"
import MusicCard from "../MusicCard"
import styles from './styles.module.scss'

interface ListMusicsProps {
    musics: MusicsProps[]
}


const ListCard = ({musics}: ListMusicsProps) => {
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