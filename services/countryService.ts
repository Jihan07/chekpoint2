import CountryEntity from "../entities/country.entity";
import datasource from "../lib/datasource";
import CreateCountryInput from "../types/country.types";
export default class CountryService{
    CountryRepository = datasource.getRepository(CountryEntity);
  

    async listCountries(): Promise<CountryEntity[]> {
        const countries = await this.CountryRepository.find();
        return countries ;
    }

    async getCountry(code:string): Promise<CountryEntity | null> {
        return await this.CountryRepository.findOneBy({code});
    }
    async createCountry(data: CreateCountryInput):Promise<CountryEntity>{
        const country = this.CountryRepository.create({
            name: data.name,
            code: data.code,
            emoji: data.emoji
        })
        return await this.CountryRepository.save(country);
    }
}