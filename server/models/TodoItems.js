module.exports = (sequelize, DataTypes) => {
  const TodoItems = sequelize.define("TodoItems", {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isComplete: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return TodoItems;
};
