"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const react_3 = require("@chakra-ui/react");
const Appicon = ({ imgurl, skillName, fontAwesomeClassname, style }) => {
    //   console.log(style);
    return (react_2.default.createElement("div", null,
        react_2.default.createElement(react_3.Tooltip, { label: skillName },
            react_2.default.createElement(react_1.Image, { width: { base: "35px", sm: "60px" }, margin: "5px", sx: { cursor: "pointer" }, src: `./imgurl/${imgurl}` }))));
};
exports.default = Appicon;
