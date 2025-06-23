import { Field, ID, InputType } from "type-graphql";

@InputType()
export default class CreateCountryInput {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field()
  code!: string;

  @Field()
  name!: string;

  @Field()
  emoji!: string;

}
