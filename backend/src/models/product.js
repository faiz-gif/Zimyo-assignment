module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: '', // Default value for description
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock_quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1, // Default value for stock_quantity
    },
    image: {
      type: DataTypes.BLOB('long'), // Store image as BLOB
      allowNull: true,
    },
  }, {
    timestamps: true,
  });

  return Product;
};

  
  