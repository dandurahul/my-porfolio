"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
require("./this.css");
const react_router_dom_1 = require("react-router-dom");
const NSwitch = ({ path, name, isActive }) => {
    return (react_1.default.createElement(react_router_dom_1.Link, { to: path },
        react_1.default.createElement(react_2.Flex, { className: "switch", fontSize: { base: "10px", sm: "15px" }, padding: { base: "5px", sm: "10px" }, ml: { base: "3px", md: "3px", lg: "10px" }, sx: {
                transform: isActive && "scale(1.1)",
                transistion: isActive && "5s"
            } }, name)));
};
exports.default = NSwitch;
