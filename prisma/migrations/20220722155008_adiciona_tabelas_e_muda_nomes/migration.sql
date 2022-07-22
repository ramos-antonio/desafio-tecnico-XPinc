/*
  Warnings:

  - The primary key for the `assets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_asset` on the `assets` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_user` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `wallet` table. All the data in the column will be lost.
  - You are about to drop the `operation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id` to the `assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `operation` DROP FOREIGN KEY `operation_id_asset_fkey`;

-- DropForeignKey
ALTER TABLE `operation` DROP FOREIGN KEY `operation_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `wallet` DROP FOREIGN KEY `wallet_id_user_fkey`;

-- AlterTable
ALTER TABLE `assets` DROP PRIMARY KEY,
    DROP COLUMN `id_asset`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    DROP COLUMN `id_user`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `wallet` DROP COLUMN `type`;

-- DropTable
DROP TABLE `operation`;

-- CreateTable
CREATE TABLE `asset_operation` (
    `id_operation` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `id_asset` INTEGER NOT NULL,
    `value` DOUBLE NOT NULL,

    PRIMARY KEY (`id_operation`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wallet_operation` (
    `id_wallet` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `id_user` INTEGER NOT NULL,
    `value` DOUBLE NOT NULL,

    PRIMARY KEY (`id_wallet`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `asset_operation` ADD CONSTRAINT `asset_operation_id_asset_fkey` FOREIGN KEY (`id_asset`) REFERENCES `assets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `asset_operation` ADD CONSTRAINT `asset_operation_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `wallet` ADD CONSTRAINT `wallet_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `wallet_operation` ADD CONSTRAINT `wallet_operation_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
