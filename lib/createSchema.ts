import { buildSchema } from "type-graphql";
import path from "path";
import { readdirSync } from "fs";

export async function createSchema(){
    const resolversPath = path.join(__dirname, "../resolvers");

    const resolvers = readdirSync(resolversPath)
        .filter((file) => file.endsWith("resolver.ts"))
        .map((file) => require(path.join(resolversPath, file)).default);
    const schema = await buildSchema({
        resolvers: resolvers as any
    });

    return schema
}
    
