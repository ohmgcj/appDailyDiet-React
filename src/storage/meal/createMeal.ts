import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function createMeal(mealTitle: string, mealDescription: string, mealDate: string, mealTime: string, mealType: string){
    try {
        const storedMeals = await getAllMeals();

        const lastId = storedMeals.length > 0 ? Math.max(...storedMeals.map(meal => parseInt(meal.id))) : 0;

        const newMeal = {
            id: (lastId + 1).toString(),
            mealTitle,
            mealDescription,
            mealDate,
            mealTime,
            mealType
        };

        // Para armazenar objetos utilizar >JSON.stringify<
        const storage = JSON.stringify([...storedMeals, newMeal]);
        await AsyncStorage.setItem(MEAL_COLLECTION, storage);

    } catch(error){
        throw error;
    }
};