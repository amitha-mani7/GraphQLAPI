
import { ProponoPlaces } from "./entities/ProponoPlaces";
import { FilterModel } from "./models/Filter";

const resolvers = {
    Query: {
        GetRestaurants: async (_parent: any, filter: FilterModel) => {
            let result = await new ProponoPlaces().getRestaurants(filter);
            console.log(result);
            return result
        }
    }
}
export default resolvers;