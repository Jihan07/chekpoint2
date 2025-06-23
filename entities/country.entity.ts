import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";
import { ObjectType, ID, Field } from "type-graphql";

@ObjectType()
@Entity({name: "pays"})

export default class CountryEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Field()
    @Column()
    code:string;

    @Field()
    @Column()
    name:string

    @Field()
    @Column()
    emoji:string

}

