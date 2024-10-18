"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const react_3 = require("@emotion/react");
const react_awesome_reveal_1 = __importDefault(require("react-awesome-reveal"));
const Upwards = (0, react_3.keyframes) `
from {
  opacity: 0;
  transform: translateY(50px);
}

to {
  opacity: 1;
  transform: translateY(0px);
}
`;
const Project = ({ id, name, createdAt, url, description, link, languages, }) => {
    return (react_2.default.createElement(react_1.VStack, { bg: "#a6e1fa", w: {
            base: "90%",
            sm: "450px",
        }, align: "left", p: "10px", pl: { base: "20px", sm: "auto" }, pr: { base: "20px", sm: "auto" }, textAlign: "left", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", height: "auto", justifyContent: "space-between" },
        react_2.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: Upwards },
            react_2.default.createElement(react_1.Stack, { justifyContent: "space-between", alignItems: "center", flexDirection: "row" },
                react_2.default.createElement(react_1.Heading
                // onClick={() => (window.open(url, '_blank'))}
                , { 
                    // onClick={() => (window.open(url, '_blank'))}
                    fontSize: {
                        base: "16px",
                        sm: "25px",
                    }, alignSelf: "left", lineHeight: {
                        base: "19px",
                        sm: "30px",
                    }, sx: {
                        fontFamily: "Open Sans",
                        fontWeight: 700,
                        color: "thistheme.text",
                    } }, name),
                react_2.default.createElement(react_1.Text, { sx: {
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        color: "#7f8daa", whiteSpace: "nowrap"
                    }, fontSize: { base: "14px", sm: "16px" } },
                    " ",
                    "Created on ",
                    createdAt))),
        react_2.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: Upwards },
            react_2.default.createElement(react_1.Box, { minHeight: "100px", height: "fit-content" }, description.map((item) => {
                return (react_2.default.createElement(react_1.Text
                // onClick={() => window.open(link, "_blank")}
                , { 
                    // onClick={() => window.open(link, "_blank")}
                    sx: {
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        color: "thistheme.text",
                    }, fontSize: { base: "13px", sm: "13px" } },
                    " ",
                    item,
                    " "));
            }))),
        react_2.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: Upwards },
            react_2.default.createElement(react_1.Flex, { flexDir: { base: "column", sm: "row" } },
                react_2.default.createElement(react_1.Flex, { gap: "15px", flexWrap: "wrap", w: { base: "90%" } }, languages.map((item, i) => {
                    return (react_2.default.createElement(ProjectIcon, { name: item.name, iconifyClass: item.iconifyClass, key: i }));
                })))),
        react_2.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: Upwards },
            react_2.default.createElement(react_1.Stack, null,
                react_2.default.createElement(react_1.Button, { onClick: () => window.open(url, "_blank") }, "Github "),
                react_2.default.createElement(react_1.Button, { onClick: () => window.open(link, "_blank") }, "Live ")))));
};
exports.default = Project;
const ProjectIcon = ({ iconifyClass, name }) => {
    return (react_2.default.createElement(react_1.Box, null,
        react_2.default.createElement(react_1.Image, { src: `./images/${iconifyClass}`, w: "25px" })));
};
