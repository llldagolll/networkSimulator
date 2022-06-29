import { Logger } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { Recipe } from './recipe';


const recipeTable = [
  {
    id: '1',
    title: '鯖の味噌煮',
  },
  {
    id: '2',
    title: 'ミートソーススパゲティ',
  },
  {
    id: '3',
    title: '豚の生姜焼',
  },
];

@Resolver()
export class RecipesResolver {
  private readonly logger = new Logger()



  @Query(returns => [Recipe])
  async recipes(): Promise<Recipe[]> {
    console.log('Hello, world')
    return recipeTable;
  }
}
