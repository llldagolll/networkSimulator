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
exports.NodesResolver = exports.nodeState = void 0;
const graphql_1 = require("@nestjs/graphql");
const node_1 = require("./node");
exports.nodeState = [
    {
        id: '0',
        type: 'Client',
        position: {
            x: 0,
            y: 0,
        },
        data: {
            id: '0',
            type: 'Client',
            label: '0 Client',
        }
    },
    {
        id: '1',
        type: 'Lan',
        position: {
            x: 1,
            y: 1,
        },
        data: {
            id: '1',
            type: 'Lan',
            label: '1 Lan',
        }
    },
    {
        id: '2',
        type: 'Web',
        position: {
            x: 2,
            y: 2,
        },
        data: {
            id: '3',
            type: 'Web',
            label: '3 Web',
        }
    },
];
let NodesResolver = class NodesResolver {
    async nodes() {
        return exports.nodeState;
    }
};
__decorate([
    (0, graphql_1.Query)(returns => [node_1.Node]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NodesResolver.prototype, "nodes", null);
NodesResolver = __decorate([
    (0, graphql_1.Resolver)()
], NodesResolver);
exports.NodesResolver = NodesResolver;
//# sourceMappingURL=nodes.resolver.js.map