"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const CompetitiveSites = ({ logos }) => {
    return (react_1.default.createElement(react_2.Stack, { flexDirection: "row", alignItems: "center", justifyContent: "center" }, logos.map((logo) => (react_1.default.createElement(react_2.Tooltip, { key: logo.siteName, label: logo.siteName, placement: "top" },
        react_1.default.createElement(react_2.Link, { href: logo.profileLink, target: "_blank", rel: "noopener noreferrer" },
            react_1.default.createElement(react_2.Img, { width: "60px", margin: "5px", alt: `./imgurl/${logo.iconifyClassname}`, sx: { cursor: "pointer" }, src: `./imgurl/${logo.iconifyClassname}` })))))));
};
exports.default = CompetitiveSites;
