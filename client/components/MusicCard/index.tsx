import { MusicsProps } from '@/types'
import Image from 'next/image'

interface MusicCardProps {
    music: MusicsProps
}


const MusicCard = ({music}:MusicCardProps) => {
    return(
        <li>
            <span>{music.name}</span>
            <Image src={music.cover_image} alt={music.name} width={300} height={300} />
        </li>
    )
}

export default MusicCard