import { Dog } from "../entities/Dogs";
import { Resolver, Query, Arg } from "type-graphql";


const dogs: Dog[] = [
    {
        breed: 'German Shepard',
        height: 3.5,
        weight: 34,
        name: 'Jenny'
    },
    {
        breed: 'Terrier',
        height: 0.8,
        weight: 12,
        name: 'Ruffles'
    },
    {
        breed: 'Golden Retriever',
        height: 3.9,
        weight: 86,
        name: 'Brody'
    },
    {
        breed: 'English Cream Retriever',
        height: 3.6,
        weight: 45,
        name: 'Maverick'
    },
    {
        breed: 'Poodle',
        height: 1,
        weight: 10,
        name: 'Champ'
    }
    ,
    {
        breed: 'Chihuahua',
        height: 0.9,
        weight: 10,
        name: 'Finn'
    }
]


@Resolver(of => Dog)
export class DogResolver {


    @Query(type => [Dog])
    getAllDogs(): Promise<Dog[]> {
        return Promise.resolve(dogs)
    }

    @Query(type => Dog, { nullable: true })
    getDogByName(@Arg('name') name: string): Promise<Dog> {
        let dog = dogs.find((dog) => dog.name === name);
        if (dog)
            return Promise.resolve(dog)
        else {
            return null;
        }
    }

}
