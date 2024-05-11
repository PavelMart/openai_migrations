"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.renameColumn("documents", "directionId", "modeId", {
            type: Sequelize.STRING,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.renameColumn("documents", "modeId", "directionId", {
            type: Sequelize.STRING,
        });
    },
};
