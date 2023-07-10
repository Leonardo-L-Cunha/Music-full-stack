import { Module } from '@nestjs/common';
import { MusicsService } from './musics.service';
import { MusicsController } from './musics.controller';
import { PrismaService } from 'src/database/prisma.service';
import { MusicRepository } from './repository/music.repository';
import { MusicPrismaRepository } from './repository/prisma/musicPrisma.repository';

@Module({
  controllers: [MusicsController],
  providers: [
    MusicsService,
    PrismaService,
    {
      provide: MusicRepository,
      useClass: MusicPrismaRepository,
    },
  ],
})
export class MusicsModule {}
