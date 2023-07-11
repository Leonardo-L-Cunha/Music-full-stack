import MusicCard from "@/components/MusicCard"
import { api } from "@/services/api"
import { MusicsProps } from "@/types"


const Home = async () =>{
  const response = await api.get<MusicsProps[]>('/musics')
  const musics = response.data

  return (
    <main>
      <ul>
      {musics.map((music) => (
        <MusicCard key={music.id} music={music}/>
        ))}
      </ul>
    </main>
  )
}

export default Home
