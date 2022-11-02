const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create user model
class User extends Model {
    checkPassword(LoginPw) {
        return bcrypt.compareSync(LoginPw, this.password);
    }
}
