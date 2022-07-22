/*
  Warnings:

  - A unique constraint covering the columns `[id_user]` on the table `wallet` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `walletId_wallet` to the `wallet_operation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `wallet_operation` ADD COLUMN `walletId_wallet` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `wallet_id_user_key` ON `wallet`(`id_user`);

-- AddForeignKey
ALTER TABLE `wallet_operation` ADD CONSTRAINT `wallet_operation_walletId_wallet_fkey` FOREIGN KEY (`walletId_wallet`) REFERENCES `wallet`(`id_wallet`) ON DELETE RESTRICT ON UPDATE CASCADE;
