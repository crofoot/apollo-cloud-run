import { ObjectType, Field, InputType, Float } from "type-graphql";

@ObjectType()
@InputType("DogInput")
export class Dog {

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    breed: string;

    @Field(_type => Float, { nullable: true })
    height: number;

    @Field(_type => Float, { nullable: true })
    weight: number;
}