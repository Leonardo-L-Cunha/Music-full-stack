/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { MusicRepository } from '../music.repository';
import { CreateMusicDto } from '../../dto/create-music.dto';
import { UpdateMusicDto } from '../../dto/update-music.dto';
import { Music } from '../../entities/music.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class MusicPrismaRepository implements MusicRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateMusicDto): Promise<Music> {
    const music = new Music()

    Object.assign(music, {
      ...data
    })

    const newMusic = await this.prisma.music.create({
      data:{
        ...music
      }
    })
    return newMusic

  }
  async listMusic(): Promise<Music[]> {
    const musics = await this.prisma.music.findMany()

    return musics
  }
  async ListMusicPerId(id: string): Promise<Music> {
    const findMusic = await this.prisma.music.findFirst({
      where: {
        id: id
      }
    })

    return findMusic
  }
  async updatedMusic(data: UpdateMusicDto, id: string): Promise<Music> {
    const findMusic = await this.prisma.music.findFirst({
      where:{id: id}
    })

    if(!findMusic) {
      throw new NotFoundException('Music Not found')
    }

    const updatedMusic = await this.prisma.music.update({
      where:{id: findMusic.id},
      data: {...data}
    })

    return updatedMusic
  }
  async deleteMusic(id: string): Promise<void> {
   

    
    await this.prisma.music.delete({
      where:{id: id}
    })
  }
}
