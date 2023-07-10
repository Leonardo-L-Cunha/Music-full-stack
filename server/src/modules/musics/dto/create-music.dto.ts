import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMusicDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  album: string;

  @IsString()
  @IsNotEmpty()
  artist: string;

  @IsString()
  @IsNotEmpty()
  genre: string;
  @IsString()
  @IsNotEmpty()
  year: string;

  @IsString()
  @IsNotEmpty()
  cover_image: string;

  @IsString()
  @IsNotEmpty()
  music_url: string;
}
