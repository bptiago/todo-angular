module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Associate Users PK with TodoItems table
  Users.associate = (models) => {
    Users.hasMany(models.TodoItems, {
      onDelete: "cascade",
    });
  };

  return Users;
};
