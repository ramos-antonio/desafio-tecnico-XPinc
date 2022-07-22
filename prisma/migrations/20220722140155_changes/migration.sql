/*
  Warnings:

  - You are about to drop the column `id_action` on the `operation` table. All the data in the column will be lost.
  - You are about to drop the `action` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_asset` to the `operation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `operation` DROP FOREIGN KEY `operation_id_action_fkey`;

-- AlterTable
ALTER TABLE `operation` DROP COLUMN `id_action`,
    ADD COLUMN `id_asset` INTEGER NOT NULL;

-- DropTable
DROP TABLE `action`;

-- CreateTable
CREATE TABLE `assets` (
    `id_asset` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `currency` DOUBLE NOT NULL,

    PRIMARY KEY (`id_asset`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `operation` ADD CONSTRAINT `operation_id_asset_fkey` FOREIGN KEY (`id_asset`) REFERENCES `assets`(`id_asset`) ON DELETE RESTRICT ON UPDATE CASCADE;
