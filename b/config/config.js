const { Sequelize, DataTypes,Model } = require('sequelize');
const sequelize = new Sequelize('test', 'postgres', 'root',
	{
		host: 'localhost',
		dialect: 'postgres',
		port: 5432,
		pool: { max: 5, min: 0, idle: 10000 },
		logging: false //unneccessary print remove.
	});

sequelize.authenticate()
	.then(() => {
		console.log("DB Connected");
	})
	.catch((err) => {
		console.log('Error =>' + err);
	});

const db = {};
// db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = require('../models/employee_model')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
	.then(() => {
		console.log('yes resync');
	})
//db.sequelize.sync({force:true,match:/test$/})

module.exports = db;
