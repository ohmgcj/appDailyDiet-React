import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function deleteMeal(id: string){
    try {
        const storedMeals = await getAllMeals();

        const result = storedMeals.filter((item) => item.id != id);

        // Para armazenar objetos utilizar >JSON.stringify<
        const storage = JSON.stringify(result);
        await AsyncStorage.setItem(MEAL_COLLECTION, storage);

    } catch(error){
        throw error;
    }
};