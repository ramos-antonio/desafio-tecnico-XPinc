/*
  Warnings:

  - The primary key for the `action` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id_action` on the `action` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `operation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id_operation` on the `operation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `id_user` on the `operation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `id_action` on the `operation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `transaction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id_transaction` on the `transaction` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `id_user` on the `transaction` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id_user` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `operation` DROP FOREIGN KEY `operation_id_action_fkey`;

-- DropForeignKey
ALTER TABLE `operation` DROP FOREIGN KEY `operation_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `transaction` DROP FOREIGN KEY `transaction_id_user_fkey`;

-- AlterTable
ALTER TABLE `action` DROP PRIMARY KEY,
    MODIFY `id_action` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_action`);

-- AlterTable
ALTER TABLE `operation` DROP PRIMARY KEY,
    MODIFY `id_operation` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `id_user` INTEGER NOT NULL,
    MODIFY `id_action` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id_operation`);

-- AlterTable
ALTER TABLE `transaction` DROP PRIMARY KEY,
    MODIFY `id_transaction` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `id_user` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id_transaction`);

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    MODIFY `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_user`);

-- AddForeignKey
ALTER TABLE `operation` ADD CONSTRAINT `operation_id_action_fkey` FOREIGN KEY (`id_action`) REFERENCES `action`(`id_action`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `operation` ADD CONSTRAINT `operation_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;
