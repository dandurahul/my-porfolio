"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const Greet = ({ title, nickname, subTitle }) => {
    return (react_2.default.createElement(react_1.VStack
    // border={"1px"}
    , { 
        // border={"1px"}
        height: "fit-content", textAlign: { sm: "left", md: "left" } },
        react_2.default.createElement(react_1.Text, { fontSize: { base: "30px", sm: "50px" }, lineHeight: { base: "33px", sm: "55px" }, w: { base: "70%", sm: "80%" }, m: "auto", mt: { base: "50px" }, sx: {
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 700,
                color: "thistheme.text",
            } },
            " ",
            title),
        react_2.default.createElement(react_1.Text, { pt: { base: "0px", sm: "15px" }, w: { base: "fit-content", sm: "80%" }, m: "auto", sx: {
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                color: "thistheme.text",
                lineHeight: "20px",
            } },
            " ",
            react_2.default.createElement("i", null,
                "( ",
                nickname,
                " )")),
        react_2.default.createElement(react_1.Text, { w: { base: "fit-content", sm: "80%" }, m: "auto", pt: { sm: "20px", base: "0px" }, fontSize: { sm: "20px", base: "16px" }, lineHeight: { sm: "35px", base: "26px" }, sx: {
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 500,
                color: "thistheme.describe",
                width: "80%",
            } },
            " ",
            subTitle)));
};
exports.default = Greet;
