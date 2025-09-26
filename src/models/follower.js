import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";


export const Follower = sequelize.define('SEGUIDORES', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    followerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'USUARIOS',
            key: 'id'
        },
  },   followingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'USUARIOS',
            key: 'id'
        },
    },
}); 