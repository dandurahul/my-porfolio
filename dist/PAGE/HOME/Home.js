"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const Greetings_1 = __importDefault(require("../../components/greetings/Greetings"));
const Socials_1 = __importDefault(require("../../components/socialmedia/Socials"));
const What_1 = __importDefault(require("../../components/WhatIDo/What"));
const portfolio_1 = require("../../portfolio");
const react_awesome_reveal_1 = __importDefault(require("react-awesome-reveal"));
const react_3 = require("@emotion/react");
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
const Home = () => {
    return (react_2.default.createElement(react_1.Box, null,
        react_2.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: Upwards },
            react_2.default.createElement(react_1.Grid, { id: "Home", height: { base: "800px", sm: "600px" }, w: {
                    base: "100%",
                    sm: "90%",
                    md: "800px",
                    lg: "1000px",
                    xl: "1100px",
                    "2xl": "1400px",
                }, templateRows: { base: "repeat(3, 1fr)", sm: "repeat(1, 1fr)" }, templateColumns: { base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }, gridTemplateAreas: {
                    base: `"greet"
                  "Social"
                  "Image"
          `,
                    sm: `    " greet Image" 
                    " Social Image"
           `,
                }, m: "auto" },
                react_2.default.createElement(react_1.GridItem, { area: "greet", h: { sm: "450px" } },
                    react_2.default.createElement(Greetings_1.default, null)),
                react_2.default.createElement(react_1.GridItem, { area: "Image", h: { sm: "600px", base: "500px" } },
                    react_2.default.createElement("br", null),
                    react_2.default.createElement(react_1.Tooltip, { label: "Feeling Proud" },
                        react_2.default.createElement(react_1.Img, { w: { base: "80%", sm: "100%" }, m: "auto", mt: "40px", src: `./images/greetings.png`, alt: `./images/greetings.png` }))),
                react_2.default.createElement(react_1.GridItem, { area: "Social", 
                    // border={"1px"}
                    h: "150px" },
                    react_2.default.createElement(Socials_1.default, null),
                    react_2.default.createElement(react_1.Button, { mt: "20px", bg: "thistheme.text", color: "#c5d3e1", className: "gitbun", transition: "1s", variant: "outline", colorScheme: "thistheme.text" },
                        react_2.default.createElement("a", { href: portfolio_1.seo.og.url, rel: "noreferrer", target: "_blank" }, "\u2B50 Star Me On Github"))))),
        react_2.default.createElement(react_1.VStack, { mt: { base: "1rem", sm: "200px" } },
            react_2.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: Upwards },
                react_2.default.createElement(react_1.Heading, { mb: { sm: "80px", base: "40px" }, sx: {
                        fontFamily: "'Open Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "45px",
                    }, color: "thistheme.text" }, "What I do?")),
            react_2.default.createElement(react_1.Stack, { gap: "2rem" },
                react_2.default.createElement(What_1.default, Object.assign({}, portfolio_1.skills.data[0])),
                react_2.default.createElement(What_1.default, Object.assign({}, portfolio_1.skills.data[1], { even: true })),
                react_2.default.createElement(What_1.default, Object.assign({}, portfolio_1.skills.data[2]))))));
};
exports.default = Home;
