"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const recipe_1 = require("./recipe");
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
let RecipesResolver = class RecipesResolver {
    async recipes() {
        return recipeTable;
    }
};
__decorate([
    (0, graphql_1.Query)(returns => [recipe_1.Recipe]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipesResolver.prototype, "recipes", null);
RecipesResolver = __decorate([
    (0, graphql_1.Resolver)()
], RecipesResolver);
exports.RecipesResolver = RecipesResolver;
//# sourceMappingURL=recipes.resolver.js.map