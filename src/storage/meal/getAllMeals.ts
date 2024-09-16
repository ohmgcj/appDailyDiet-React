import { MealType } from "@screens/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function getAllMeals() {
    try {
        const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    
        const meals: MealType[] = storage ? JSON.parse(storage) : [];
        
        return meals;
    } catch (error) {
        throw error
    }
}