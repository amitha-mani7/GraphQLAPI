import gql from "graphql-tag";
const typeDefs = gql`
type Query{
    GetRestaurants(booleanFilter:BooleanAttributes
        categoryFilter:CategoryFilter
    ):[Response]
}

input BooleanAttributes  {
    atmosphere_romantic:Boolean
    atmosphere_cozy:Boolean
    atmosphere_view:Boolean
    atmosphere_hot_spot:Boolean
    atmosphere_dressy:Boolean
 atmosphere_upscale:Boolean 
atmosphere_casual:Boolean 
diet_healthy:Boolean 
diet_vegetarian_friendly:Boolean 
diet_vegan_options:Boolean 
diet_gluten_free_options:Boolean 
diet_halal:Boolean diet_kosher:Boolean 
diet_keto:Boolean diet_pescatarian:Boolean 
entertain_full_bar:Boolean 
entertain_beer_wine:Boolean 
entertain_happy_hour:Boolean 
entertain_music:Boolean 
entertain_live_music:Boolean 
entertain_dancing:Boolean 
entertain_karaoke:Boolean 
type_restaurant:Boolean 
type_bakery:Boolean 
type_bars_nightlife:Boolean 
type_coffee_tea:Boolean 
type_dessert:Boolean 
type_specialty_food:Boolean 
general_no_smoking:Boolean 
general_parking_available:Boolean 
general_wheelchair_accessible:Boolean
 general_outdoor_seating:Boolean 
general_dog_friendly:Boolean 
good_kids:Boolean 
good_groups:Boolean 
good_dining_solo:Boolean 
good_working:Boolean 
meals_breakfast:Boolean 
meals_brunch:Boolean 
meals_lunch:Boolean 
meals_dinner:Boolean 
meals_quick_bites:Boolean 
meals_dessert:Boolean 
meals_late_night:Boolean 
payment_credit_cards:Boolean 
payment_discover:Boolean 
payment_mastercard:Boolean 
payment_visa:Boolean 
payment_amex:Boolean 
payment_cash_only:Boolean 
payment_digital:Boolean
}
type Response {
    atmosphere_romantic:Boolean
    atmosphere_cozy:Boolean
    atmosphere_view:Boolean
    atmosphere_hot_spot:Boolean
    propono_primary_category: [String]
    propono_sub_categories:[String]
    street_address_2: String
    price_range: String
    full_address: String
    country: String
    postal_code: String
    state: String
    city: String
    latitude: String
    longitude: String
    plus_code: String
    time_zone: String
    operational_status: String
    telephone: String
    email: String
    website: String
    google_place_url: String
    google_place_id: String
    yelp_place_url: String
    yelp_place_id: String
    tripadvisor_place_url: String
    tripadvisor_place_id: String
    opentable_place_url: String
    propono_weighted_rating: String
    propono_total_no_ratings: String
    opentable_place_id: String
    google_rating: String
    google_no_ratings: String
    opentable_rating: String
    opentable_no_ratings: String
    yelp_rating: String
    yelp_no_ratings: String
    tripadvisor_rating: String
    tripadvisor_no_ratings: String
    facebook_rating: String
    facebook_no_ratings: String
    atmosphere_dressy: Boolean
    atmosphere_upscale: Boolean
    atmosphere_casual: Boolean
    diet_healthy: Boolean
    diet_vegetarian_friendly: Boolean
    diet_vegan_options: Boolean
    diet_gluten_free_options: Boolean
    diet_halal: Boolean
    diet_kosher: Boolean
    diet_keto: Boolean
    diet_pescatarian: Boolean
    entertain_full_bar: Boolean
    entertain_beer_wine: Boolean
    entertain_happy_hour: Boolean
    entertain_music: Boolean
    entertain_live_music: Boolean
    entertain_dancing: Boolean
    entertain_karaoke: Boolean
    type_restaurant: Boolean
    type_bakery: Boolean
    type_bars_nightlife: Boolean
    type_coffee_tea: Boolean
    type_dessert: Boolean
    type_specialty_food: Boolean
    general_no_smoking: Boolean
    general_parking_available: Boolean
    general_wheelchair_accessible: Boolean
    general_outdoor_seating: Boolean
    general_dog_friendly: Boolean
    good_kids: Boolean
    good_groups: Boolean
    good_dining_solo: Boolean
    good_working: Boolean
    meals_breakfast: Boolean
    meals_brunch: Boolean
    meals_lunch: Boolean
    meals_dinner: Boolean
    meals_quick_bites: Boolean
    meals_dessert: Boolean
    meals_late_night: Boolean
    payment_credit_cards: Boolean
    payment_discover: Boolean
    payment_mastercard: Boolean
    payment_visa: Boolean
    payment_amex: Boolean
    payment_cash_only: Boolean
    payment_digital: Boolean
}

input CategoryFilter {
    propono_primary_category: Category
    propono_sub_categories: Category
}

enum Category {
    Bar
    Breakfast
    Brunch
    Cider_Bar
    Cocktail_Bar
    American
    Beer_Garden    
    Beer_Hall      
    Cabaret_Club   
    Champagne_Bars 
    Chocolate      
    Churros        
    Cigar_Bar      
    Country_Dance  
    Hall           
    Dance_Club     
    Dart_Bar       
    Desserts       
    Disco_Club     
    Distillery     
    Dive_Bar       
    Fast_Food      
    Fine_Dining    
    Gay_Bar        
    Gay_Night_Club 

}
`
export default typeDefs;