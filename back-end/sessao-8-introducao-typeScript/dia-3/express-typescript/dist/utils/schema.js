"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const bookSchema = joi_1.default.object({
    id: joi_1.default.number(),
    title: joi_1.default.string().min(5).required(),
    price: joi_1.default.number(),
    autor: joi_1.default.string().min(5).required(),
    isbn: joi_1.default.string().min(8).max(8).required(),
});
exports.default = bookSchema;
