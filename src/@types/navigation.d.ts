export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            stats: undefined;
            registerMeal: undefined;
            consultMeal: undefined;
            feedback: {
                type: FeedbackType;
                title: string;
                description: string;
            };
        }
    }
}