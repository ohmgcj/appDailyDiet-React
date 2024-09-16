import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Stats } from '@screens/Stats';
import { RegisterMeal } from '@screens/RegisterMeal';
import { ConsultMeal } from '@screens/ConsultMeal';
import { Feedback } from '@screens/Feedback';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="stats"
                component={Stats}
            />
            <Screen
                name="registerMeal"
                component={RegisterMeal}
            />
            <Screen
                name="consultMeal"
                component={ConsultMeal}
            />
            <Screen
                name="feedback"
                component={Feedback}
            />
        </Navigator>
    );
};