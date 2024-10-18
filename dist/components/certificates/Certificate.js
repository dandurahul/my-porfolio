"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const Certificate = ({ title, subtitle, logo_path, certificate_link, alt_name, color_code, }) => {
    return (react_2.default.createElement(react_1.Flex, { onClick: () => window.open(certificate_link, "_blank"), flexWrap: "wrap", 
        // gap={"20px"}
        mt: { base: "30px", sm: "30px" }, w: { base: "100%", sm: "290px" }, height: "290px", 
        // border={"1px"}
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", m: "auto", flexDir: "row" },
        react_2.default.createElement(react_1.Box, { bg: "white", height: "68%", w: "100%" },
            react_2.default.createElement(react_1.Image, { w: "100%", h: "100%", src: `./images/${logo_path}` })),
        react_2.default.createElement(react_1.Flex, { h: "32%", alignItems: "center", justifyContent: "center", w: "100%" },
            " ",
            react_2.default.createElement(react_1.Text, { fontSize: { sm: "20px" }, w: "90%", sx: {
                    fontFamily: "Open Sans",
                    fontWeight: 700,
                    color: "thistheme.text",
                } }, title),
            " ")));
};
exports.default = Certificate;
