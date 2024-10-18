"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const ProjectIntro = ({ title, description, avatar_image_path }) => {
    return (react_2.default.createElement(react_1.Grid, { w: {
            base: "100%",
            sm: "90%",
            md: "750px",
            lg: "1000px",
            xl: "1100px",
            "2xl": "1400px",
        }, 
        //   border={"1px"}
        borderColor: "red", m: "auto", gridTemplateAreas: {
            base: `  "image" "about" `,
            sm: ` "image about" "image about"`,
        }, gridTemplateColumns: {
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
        }, gridTemplateRows: {
            base: "repeat(2,1fr)",
            sm: "repeat(1,fr)",
        }, mt: {
            base: "60px",
            sm: "120px",
        } },
        react_2.default.createElement(react_1.GridItem, { area: "image" },
            react_2.default.createElement(react_1.Image, { w: { base: "80%", sm: "100%" }, m: "auto", src: `./images/${avatar_image_path}` })),
        react_2.default.createElement(react_1.GridItem, { area: "about" },
            react_2.default.createElement(react_1.Heading, { sx: {
                    fontFamily: "Open Sans",
                    fontWeight: 700,
                    color: "thistheme.text",
                    margin: "2rem"
                }, fontSize: {
                    base: "30px",
                    sm: "50px"
                } }, title),
            react_2.default.createElement(react_1.Text, { sx: {
                    fontFamily: "Open Sans",
                    fontWeight: 500,
                    color: "thistheme.describe"
                }, w: {
                    base: "86%"
                }, m: "auto", fontSize: {
                    base: "16px",
                    sm: "20px"
                } }, description))));
};
exports.default = ProjectIntro;
