-- CreateTable
CREATE TABLE "musics" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "album" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "cover_image" TEXT NOT NULL,
    "music_url" TEXT NOT NULL,

    CONSTRAINT "musics_pkey" PRIMARY KEY ("id")
);
