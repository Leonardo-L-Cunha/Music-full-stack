/*
  Warnings:

  - Added the required column `artist` to the `musics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "musics" ADD COLUMN     "artist" TEXT NOT NULL;
