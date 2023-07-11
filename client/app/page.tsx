
import ListCard from "@/components/ListCard"
import { api } from "@/services/api"
import { MusicsProps } from "@/types"


const Home = async () =>{
  const response = await api.get<MusicsProps[]>('/musics')
  const musics = response.data

  return (
    <>
      <ListCard musics={musics}/>
    </>
  )
}

export default Home
