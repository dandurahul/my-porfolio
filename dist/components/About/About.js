"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const About = ({ name, number, title, subtitle, avatar_image_path,
// location_map_link,
 }) => {
    return (react_2.default.createElement("div", null,
        react_2.default.createElement(react_1.Grid, { m: "auto", w: {
                base: "100%",
                sm: "90%",
                md: "800px",
                lg: "1000px",
                xl: "1100px",
                "2xl": "1400px",
            }, gridTemplateAreas: {
                sm: ` "image about"   `,
                base: ` " image " "about"`,
            }, gridTemplateColumns: {
                sm: "repeat(2,1fr)",
                base: "repeat(1,1fr)",
            }, gridTemplateRows: {
                sm: "repeat(1, 1fr)",
                base: "repeat(2,1fr)",
            }, gap: {
                base: "50px",
            } },
            react_2.default.createElement(react_1.GridItem
            // border={"1px"}
            , { 
                // border={"1px"}
                area: "image", width: {
                    base: "100%",
                }, display: "flex", justifyContent: "center", alignItems: "center" },
                " ",
                react_2.default.createElement(react_1.Image, { borderRadius: "10px", w: {
                        sm: "650px",
                        base: "100%",
                    }, m: "auto", src: `./images/${avatar_image_path}` }),
                " "),
            react_2.default.createElement(react_1.GridItem, { area: "about" },
                react_2.default.createElement(react_1.Heading, { fontSize: {
                        sm: "30px",
                        base: "26px",
                    }, lineHeight: {
                        sm: "95px",
                        base: "60px",
                    }, sx: {
                        fontFamily: "Open Sans",
                        fontWeight: 500,
                        color: "thistheme.text",
                    } }, title),
                react_2.default.createElement(react_1.Text, { w: {
                        sm: "90%",
                        base: "80%",
                    }, m: "auto", fontSize: {
                        sm: "20px",
                        base: "14px",
                    }, lineHeight: {
                        sm: "30px",
                    }, sx: {
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        color: "thistheme.describe",
                    } }, subtitle),
                react_2.default.createElement(react_1.Heading, { fontSize: {
                        sm: "30px",
                        base: "25px",
                    }, lineHeight: {
                        sm: "95px",
                        base: "60px",
                    }, sx: {
                        fontFamily: "Open Sans",
                        fontWeight: 500,
                        color: "thistheme.text",
                    } }, name),
                react_2.default.createElement(react_1.Text, { w: {
                        sm: "90%",
                        base: "80%",
                    }, m: "auto", fontSize: {
                        sm: "20px",
                        base: "16px",
                    }, lineHeight: {
                        sm: "30px",
                        base: "46px",
                    }, sx: {
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        color: "thistheme.describe",
                    } }, number)))));
};
exports.default = About;
