import { DataSource } from "typeorm";
import { Pet } from "../Model/Pet";
import { User } from "../Model/User";
import { Product } from "../Model/Product";
import { Veterinary } from "../Model/Veterinary";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
const { NODE_ENV, DB_NAME, DB_DEPLOY, DB_PASSWORD, DB_USER } = process.env
export default new DataSource(
	NODE_ENV==="development"?{
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME,
	entities: [Pet, User, Product, Veterinary],
	synchronize: false,
	logging: false,
}:{
	name: "default",
	type: "postgres",
	url: DB_DEPLOY,
	entities: [Pet, User, Product, Veterinary],
	synchronize: false,
	logging: false,
});















// export default new DataSource({
// 	name: "default",
// 	type: "postgres",
// 	url: process.env.DB_DEPLOY,
// 	entities: [Pet, User, Product, Veterinary],
// 	synchronize: false,
// 	logging: false,
// });
