"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const portfolio_1 = require("../../portfolio");
const Social_1 = __importDefault(require("./social/Social"));
require("./this.css");
const Socials = () => {
    return (react_1.default.createElement("div", { style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
        } },
        react_1.default.createElement(react_2.SimpleGrid, { minChildWidth: "41px", w: { base: "80%" }, m: "auto", mt: "20px", spacing: "15px", display: "flex", flexWrap: "wrap", alignContent: "center", mb: "20px", justifyContent: "center" }, portfolio_1.socialMediaLinks.map((item, i) => {
            if (!item.active)
                return null;
            return (react_1.default.createElement("a", { key: i, href: item.link, rel: "noreferrer", target: "_blank" },
                " ",
                react_1.default.createElement(Social_1.default, Object.assign({}, item))));
        }))));
};
exports.default = Socials;
