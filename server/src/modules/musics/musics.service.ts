import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { MusicRepository } from './repository/music.repository';

@Injectable()
export class MusicsService {
  constructor(private musicRepository: MusicRepository) {}

  create(createMusicDto: CreateMusicDto) {
    const music = this.musicRepository.create(createMusicDto);

    return music;
  }

  findAll() {
    const musics = this.musicRepository.listMusic();

    return musics;
  }

  async findOne(id: string) {
    const music = await this.musicRepository.ListMusicPerId(id);

    if (!music) {
      throw new NotFoundException('Music not found');
    }

    return music;
  }

  async update(updateMusicDto: UpdateMusicDto, id: string) {
    const music = await this.musicRepository.updatedMusic(updateMusicDto, id);

    return music;
  }

  async remove(id: string) {
    const findMusic = await this.findOne(id);

    if (!findMusic) {
      throw new NotFoundException('music not found!');
    }

    this.musicRepository.deleteMusic(id);
  }
}
