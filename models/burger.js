/**
 * Eat-Da-Burger!
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

module.exports = (sequelize, DataTypes) => {
    const burger = sequelize.define('burger', {
        burgerName: {
            allowNull: false,
            field: 'burger_name',
            type: DataTypes.STRING,
            validate: { len: [1, 255] }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    }, {});

    burger.associate = function(models) {
        // associations can be defined here
    };
    return burger;
};
