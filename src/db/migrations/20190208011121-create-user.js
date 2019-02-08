'use strict';
module.exports = {
        up: (queryInterface, Sequelize) => {
            return queryInterface.createTable('Users', {
                    id: {
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                        validate: {
                            isEmail: {
                                msg: "must be a valid email"
                            }
                        },
                        type: Sequelize.INTEGER
                    },
                    email: {
                        allowNull: false,
                        unique: true,
                        type: Sequelize.STRING
                        allowNull: false,
                        unique: true,
                    },
                    password: {
                        type: DataTypes.STRING,
                        allowNull: false
                    }
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};