export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            stats: undefined;
            registerMeal: undefined;
            consultMeal: any;
            feedback: {
                type: string;
            };
            statusType: 'STATUSRED' | 'STATUSGREEN';
            mealType: {
                id: string;
                type: StatusType;
                title: string;
                time: string;
            };
        }
    }
}