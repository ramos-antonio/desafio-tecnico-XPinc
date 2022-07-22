/*
  Warnings:

  - The primary key for the `asset_operation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_operation` on the `asset_operation` table. All the data in the column will be lost.
  - Added the required column `amount` to the `asset_operation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `asset_operation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `asset_operation` DROP PRIMARY KEY,
    DROP COLUMN `id_operation`,
    ADD COLUMN `amount` INTEGER NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
