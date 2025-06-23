import CountryEntity from "../entities/country.entity";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CountryService from "../services/countryService";
import CreateCountryInput from "../types/country.types";

@Resolver()
export default class CountryResolver {
    @Query(()=>[CountryEntity])
    async listCountries(){
        const countryService = new CountryService();
        return await countryService.listCountries();
    }
    @Query(()=>CountryEntity, {nullable:true})
    async getCountry(@Arg("code") code:string){
        const countryService = new CountryService();
        return await countryService.getCountry(code);
    }

    @Mutation(()=>CountryEntity)
    async createCountry (@Arg("data") data: CreateCountryInput){
        const countryService = new CountryService();
        return await countryService.createCountry(data);
    }
}