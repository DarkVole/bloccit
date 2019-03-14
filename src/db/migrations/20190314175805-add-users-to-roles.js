'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            "Posts",
            "userId", {
                type: Sequelize.INTEGER,
                allowNull: false,

                defaultValue: 0
            }
        );
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.removeColumn("Posts", "userId");

    }
};
