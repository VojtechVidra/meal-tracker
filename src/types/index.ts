// i.e. flour
// if you are using multiple types of flour, you'll have something like this:
// ['strong ground flour', 'whole wheat flour']
export interface Ingredient {
  id: string;
  name: string;
  // Nutrition is always per 100 grams
  nutrition: {
    calories: number;
    fat: number;
    protein: number;
    carbs: number;
    sugar: number;
    fiber: number;
    salt: number;
  };
  // Plan for future:
  // attributes: [
  //   {
  //     id: string;
  //     name: string;
  //     value: number;
  //   }
  // ]
  content: string;
}

interface MealIngredient {
  ingredientId: string;
  ingredientCount: number;
}

export interface Meal {
  id: string;
  // cooked meal can point to it's recipe
  recipeId?: string;
  name: string;
  createdDate?: string;
  // cookedDate?: string; // ??
  eatenDate?: string;
  // ??
  recipeInfo?: {
    boughtIngredients: boolean;
    rating?: number;
  };
  ingredients: MealIngredient[];
  // HTML content, steps of cooking
  content: string;
  // Used to calculate calories per gram of final meal
  // in grams
  finalWeight?: number;
}
