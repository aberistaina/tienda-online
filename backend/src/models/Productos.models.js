import { sequelize } from "../database/db.js";
import { DataTypes } from "sequelize";

export const Productos = sequelize.define(
    "Productos",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(40),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        categoria: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }


    }
)