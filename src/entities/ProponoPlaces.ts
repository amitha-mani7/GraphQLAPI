import { Entity, PrimaryGeneratedColumn, Column, Filter, In } from "typeorm"
import PgDbDataSource from "../app"
import { Category, FilterModel } from "../models/Filter"
import { format } from "path"

@Entity('propono_places')
export class ProponoPlaces {

    @PrimaryGeneratedColumn()
    id: string
    @Column()
    street_address_2: string
    @Column()
    atmosphere_romantic: boolean
    @Column()
    street_address_1: string
    @Column()
    atmosphere_cozy: boolean
    @Column()
    atmosphere_view: boolean
    @Column()
    atmosphere_hot_spot: boolean
    @Column()
    propono_primary_category: string
    @Column()
    propono_sub_categories: string
    @Column()
    full_address: string
    @Column()
    country: string
    @Column()
    postal_code: string
    @Column()
    state: string
    @Column()
    city: string
    @Column()
    price_range: string
    @Column() propono_weighted_rating: string
    @Column() propono_total_no_ratings: string
    @Column() opentable_place_id: string
    @Column() google_rating: string
    @Column() google_no_ratings: string
    @Column() opentable_rating: string
    @Column() opentable_no_ratings: string
    @Column() yelp_rating: string
    @Column() yelp_no_ratings: string
    @Column() tripadvisor_rating: string
    @Column() tripadvisor_no_ratings: string
    @Column() facebook_rating: string
    @Column() facebook_no_ratings: string
    @Column() atmosphere_dressy: boolean
    @Column() atmosphere_upscale: boolean
    @Column() atmosphere_casual: boolean
    @Column() diet_healthy: boolean
    @Column() diet_vegetarian_friendly: boolean
    @Column() diet_vegan_options: boolean
    @Column() diet_gluten_free_options: boolean
    @Column() diet_halal: boolean
    @Column() diet_kosher: boolean
    @Column() diet_keto: boolean
    @Column() diet_pescatarian: boolean
    @Column() entertain_full_bar: boolean
    @Column() entertain_beer_wine: boolean
    @Column() entertain_happy_hour: boolean
    @Column() entertain_music: boolean
    @Column() entertain_live_music: boolean
    @Column() entertain_dancing: boolean
    @Column() entertain_karaoke: boolean
    @Column() type_restaurant: boolean
    @Column() type_bakery: boolean
    @Column() type_bars_nightlife: boolean
    @Column() type_coffee_tea: boolean
    @Column() type_dessert: boolean
    @Column() type_specialty_food: boolean
    @Column() general_no_smoking: boolean
    @Column() general_parking_available: boolean
    @Column() general_wheelchair_accessible: boolean
    @Column() general_outdoor_seating: boolean
    @Column() general_dog_friendly: boolean
    @Column() good_kids: boolean
    @Column() good_groups: boolean
    @Column() good_dining_solo: boolean
    @Column() good_working: boolean
    @Column() meals_breakfast: boolean
    @Column() meals_brunch: boolean
    @Column() meals_lunch: boolean
    @Column() meals_dinner: boolean
    @Column() meals_quick_bites: boolean
    @Column() meals_dessert: boolean
    @Column() meals_late_night: boolean
    @Column() payment_credit_cards: boolean
    @Column() payment_discover: boolean
    @Column() payment_mastercard: boolean
    @Column() payment_visa: boolean
    @Column() payment_amex: boolean
    @Column() payment_cash_only: boolean
    @Column() payment_digital: boolean

    getEnumTextByValue(valueOperator: string, enumList: any): string {

        let operator: string = '';
        for (let [key, value] of Object.entries(enumList)) {
            const keyValue = key as string;
            const enumValue = value as string;
            const valueArray = keyValue?.split(",");
            valueArray?.includes(valueOperator) ? (operator = enumValue) : null
        }
        return operator;
    }
    async getRestaurants(filter: FilterModel) {
        try {
            let searchQuery = ''
            let parameter = {};
            if (filter.categoryFilter && filter.booleanFilter) {
                const categoryFilterQuery = this.getCateogoryFilterSearchQuery(filter, searchQuery, parameter)
                searchQuery = categoryFilterQuery.searchQuery;
                parameter = categoryFilterQuery.parameter;
                Object.entries(filter.booleanFilter).forEach(([key, value], index) => {
                    if (searchQuery || Object.keys(filter.booleanFilter).length - 1 > index) {
                        searchQuery += ` and `
                    }
                    searchQuery += `entity.${key} = :${key}`;
                    parameter[key] = value;
                });
            }
            else if (filter.categoryFilter) {
                const categoryFilterQuery = this.getCateogoryFilterSearchQuery(filter, searchQuery, parameter)
                searchQuery = categoryFilterQuery.searchQuery;
                parameter = categoryFilterQuery.parameter;
            }
            else if (filter.booleanFilter) {
                Object.entries(filter.booleanFilter).forEach(([key, value], index) => {
                    if (index != 0 && Object.keys(filter.booleanFilter).length > index) {
                        searchQuery += ` and `
                    }
                    searchQuery += `entity.${key} = :${key}`;
                    parameter[key] = value;
                });
            }
            if (searchQuery) {
                const results = await PgDbDataSource
                    .getRepository(ProponoPlaces)
                    .createQueryBuilder('entity')
                    .where(searchQuery, parameter)
                    .getMany();
                console.log("Results --> ", results);
                return results;
            }
            else {
                return [];
            }

        }
        catch (error) {
            console.log("Error while fetching restaurant data from table!!")
        }

    }
    getCateogoryFilterSearchQuery(filter: FilterModel, searchQuery: string, parameter: any) {
        Object.entries(filter.categoryFilter).forEach(([key, value], index) => {
            if (index == 1) {
                searchQuery += ` and `
            }
            const valueString = this.getEnumTextByValue(value, Category);
            console.log("value string = ", valueString);
            searchQuery += `:${key} = ANY(entity.${key})`
            parameter[key] = valueString;

        });
        return { searchQuery: searchQuery, parameter: parameter }
    }
}


