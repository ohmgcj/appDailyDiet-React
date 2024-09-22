import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function editMeal(id: string, mealTitle: string, mealDescription: string, mealDate: string, mealTime: string, mealType: string){
    try {
        const storedMeals = await getAllMeals();

        const prevMeals = storedMeals.filter((item) => item.id != id);

        const editedMeal = {
            id,
            mealTitle,
            mealDescription,
            mealDate,
            mealTime,
            mealType
        };

        // Para armazenar objetos utilizar >JSON.stringify<
        const storage = JSON.stringify([...prevMeals, editedMeal]);
        await AsyncStorage.setItem(MEAL_COLLECTION, storage);

    } catch(error){
        throw error;
    }
};