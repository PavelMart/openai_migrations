"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("documents", "totalParagraphs");
        await queryInterface.removeColumn("documents", "handledParagraphs");
        await queryInterface.removeColumn("documents", "competitionsTokens");
        await queryInterface.removeColumn("documents", "promptTokens");
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn("documents", "totalParagraphs", {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        });

        await queryInterface.addColumn("documents", "handledParagraphs", {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true,
        });

        await queryInterface.addColumn("documents", "competitionsTokens", {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true,
        });

        await queryInterface.addColumn("documents", "promptTokens", {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: true,
        });
    },
};
