"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import { Fade } from "react-reveal";
const portfolio_1 = require("../../portfolio");
const Greet_1 = __importDefault(require("../Greet/Greet"));
const Greetings = () => {
    return (react_1.default.createElement("div", { style: {
            width: "105%",
            height: "100%",
            display: "flex",
            alignItems: "end",
            padding: "auto"
        } },
        react_1.default.createElement(Greet_1.default, Object.assign({}, portfolio_1.greeting))));
};
exports.default = Greetings;
