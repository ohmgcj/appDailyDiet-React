import { MealType } from ".";

export type DateMapperType = {
    date: string,
    mealList: MealType[]
}

export function dateMapper(data: MealType[]): DateMapperType[] {
    
  const mapByDate = data.reduce<DateMapperType[]>((acc, item) => {

    let dateGroup = acc.find(group => group.date === item.mealDate);
    
    if (!dateGroup) {
      dateGroup = { date: item.mealDate, mealList: [] };
      acc.push(dateGroup); 
    }
  
    dateGroup.mealList.push(item);
    
    return acc;
  }, []); 

  return mapByDate;
}