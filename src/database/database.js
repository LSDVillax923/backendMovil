import {Sequelize} from "sequelize";

export const sequelize = new Sequelize("nocta", "postgres", "102505", {
  port: "5432",
  host: "localhost",
  dialect: "postgres"
});