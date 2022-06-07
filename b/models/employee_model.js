//const {sequelize, DataTypes}=new sequelize();
module.exports= (sequelize, DataTypes) => {
    const users = sequelize.define("employees", {
        id: {
			autoIncrement: true,
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
        firstname:  {
            type: DataTypes.STRING(255)
        },
        lastname:  {
            type: DataTypes.STRING(255)
        },
        mobile:  {
            type: DataTypes.STRING(255)
        },
        email: {
            type: DataTypes.STRING(255)
        },
        salary: {
            type: DataTypes.STRING(255)
        },
        address: {
            type: DataTypes.STRING(255)
        }
    }, {
        sequelize,
		tableName: 'employees',
		schema: 'public',
		timestamps: false,
        logging:false

         //tablename:'Employee',
        //timestamps:false  //both
        //updatedAt:false //single
        //createdAt:false //single

        //renaming column
        //  updatedAt:"Update",
        //  createdAt:"Create_At
    });
    return users;
}
