import { DataSource } from "typeorm";
import CountryEntity from "../entities/country.entity";

export default new DataSource({
    type: "sqlite",
    database:"countries.sqlite",
    entities:[CountryEntity],
    synchronize:true,
})