"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const Social = ({ name, link, fontAwesomeIcon, backgroundColor }) => {
    return (react_2.default.createElement(react_1.Box, { w: "41px", h: "41px", backgroundColor: backgroundColor, borderRadius: "50%", m: "auto", display: "flex", justifyContent: "center", alignItems: "center" },
        react_2.default.createElement(react_1.Image, { width: "80%", src: `/images/${fontAwesomeIcon}` })));
};
exports.default = Social;
