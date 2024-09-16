import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealType } from "@screens/Home";

export async function getMeal(id: string){
    try {
        const storage = await AsyncStorage.getItem(MEAL_COLLECTION); 
        const meals: MealType[] = storage ? JSON.parse(storage) : [];

        const meal = meals.find(item => item.id === id);

        return meal;
    } catch (error) {
        return undefined
    }
}