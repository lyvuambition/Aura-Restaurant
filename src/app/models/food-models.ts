export interface FoodRecordModel {
  id: number;
  src: string;
  foodType: FoodType
}

export enum FoodType {
  STEAKS = 'Steaks',
  CURRYANDRICE = 'Curry and Rice',
  BUNCHAHANOI = 'Bun Cha Ha Noi',
  RICEANDMEAT = 'Rice and Meat',
  NOODLES = 'Noodles',
  BEEFPHO = 'Beef Pho'
}
