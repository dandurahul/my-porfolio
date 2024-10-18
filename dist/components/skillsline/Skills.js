"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const Skills = ({ Skills }) => {
    return (react_2.default.createElement(react_1.Text, { textAlign: "left", w: { base: "90%", sm: "100%" }, fontSize: { base: "13px", sm: "20px" }, sx: {
            fontFamily: 'Open Sans',
            color: "thistheme.describe",
            fontWeight: 400,
        } }, Skills));
};
exports.default = Skills;
