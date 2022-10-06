"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCode_1 = __importDefault(require("../StatusCode"));
const schema_1 = __importDefault(require("../utils/schema"));
function middlewareCreate(req, res, next) {
    const { error } = schema_1.default.validate(req.body);
    console.log(error);
    if (error)
        return res.status(StatusCode_1.default.BAD_REQUEST).json(error);
    next();
}
exports.default = middlewareCreate;
