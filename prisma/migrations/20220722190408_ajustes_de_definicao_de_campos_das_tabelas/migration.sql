/*
  Warnings:

  - The primary key for the `wallet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_wallet` on the `wallet` table. All the data in the column will be lost.
  - Added the required column `id` to the `wallet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `wallet_operation` DROP FOREIGN KEY `wallet_operation_id_wallet_fkey`;

-- AlterTable
ALTER TABLE `wallet` DROP PRIMARY KEY,
    DROP COLUMN `id_wallet`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `wallet_operation` ADD CONSTRAINT `wallet_operation_id_wallet_fkey` FOREIGN KEY (`id_wallet`) REFERENCES `wallet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
