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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const graphql_1 = require("@nestjs/graphql");
const type_1 = require("./type");
let Node = class Node {
};
_a = type_1.internalsSymbol;
__decorate([
    (0, graphql_1.Field)(type => graphql_1.ID),
    __metadata("design:type", String)
], Node.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Object)
], Node.prototype, "position", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Object)
], Node.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Node.prototype, "requestPort", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Node.prototype, "responsePort", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Node.prototype, "inboundPort", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Node.prototype, "outboundPort", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Node.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Object)
], Node.prototype, "style", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Node.prototype, "className", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Node.prototype, "targetPosition", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Node.prototype, "sourcePosition", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Node.prototype, "hidden", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Node.prototype, "selected", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Node.prototype, "dragging", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Node.prototype, "draggable", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Node.prototype, "selectable", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Node.prototype, "connectable", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Node.prototype, "dragHandle", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Node.prototype, "width", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Node.prototype, "height", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Node.prototype, "parentNode", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Node.prototype, "zIndex", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Object)
], Node.prototype, "extent", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Node.prototype, "expandParent", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Object)
], Node.prototype, "positionAbsolute", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Object)
], Node.prototype, _a, void 0);
Node = __decorate([
    (0, graphql_1.ObjectType)()
], Node);
exports.Node = Node;
//# sourceMappingURL=node%20copy.js.map