"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("admin_support_sessions", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(30),
        allowNull: false,
        defaultValue: "active",
      },
      exitRequestedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      exitApprovedBy: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.addIndex("admin_support_sessions", ["userId"]);
    await queryInterface.addIndex("admin_support_sessions", ["status"]);

    await queryInterface.createTable("admin_support_messages", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      sessionId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "admin_support_sessions",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      senderId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senderType: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.addIndex("admin_support_messages", ["sessionId"]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("admin_support_messages");
    await queryInterface.dropTable("admin_support_sessions");
  },
};
