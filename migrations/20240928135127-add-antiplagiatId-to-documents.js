"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn("documents", "antiplagiatId", {
            type: Sequelize.UUID,
            allowNull: true, // Разрешаем null, если антиплагиатная проверка не всегда выполняется
            defaultValue: Sequelize.UUIDV4, // Добавляем UUID по умолчанию, если это применимо
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("documents", "antiplagiatId");
    },
};
