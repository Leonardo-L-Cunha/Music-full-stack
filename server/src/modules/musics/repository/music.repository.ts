/* eslint-disable prettier/prettier */
import { CreateMusicDto } from '../dto/create-music.dto';
import { UpdateMusicDto } from '../dto/update-music.dto';
import { Music } from '../entities/music.entity';

export abstract class MusicRepository {
  abstract create(data: CreateMusicDto): Promise<Music>;
  abstract listMusic():Promise<Music[]>;
  abstract ListMusicPerId(id: string): Promise<Music>
  abstract updatedMusic(data: UpdateMusicDto, id: string): Promise<Music>
  abstract deleteMusic(id: string): Promise<void>
}
