/*
  Warnings:

  - The primary key for the `wallet_operation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `walletId_wallet` on the `wallet_operation` table. All the data in the column will be lost.
  - Added the required column `id` to the `wallet_operation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `wallet_operation` DROP FOREIGN KEY `wallet_operation_walletId_wallet_fkey`;

-- AlterTable
ALTER TABLE `wallet_operation` DROP PRIMARY KEY,
    DROP COLUMN `walletId_wallet`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `id_wallet` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `user_assets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `id_asset` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `wallet_operation` ADD CONSTRAINT `wallet_operation_id_wallet_fkey` FOREIGN KEY (`id_wallet`) REFERENCES `wallet`(`id_wallet`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_assets` ADD CONSTRAINT `user_assets_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_assets` ADD CONSTRAINT `user_assets_id_asset_fkey` FOREIGN KEY (`id_asset`) REFERENCES `assets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
