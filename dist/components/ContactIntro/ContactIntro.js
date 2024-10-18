"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const Socials_1 = __importDefault(require("../socialmedia/Socials"));
const ContactIntro = ({ title, profile_image_path, description }) => {
    return (react_2.default.createElement("div", null,
        react_2.default.createElement(react_1.Grid, { marginTop: {
                base: "50px", sm: "100px"
            }, m: "auto", w: {
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
            } },
            react_2.default.createElement(react_1.GridItem, { area: "image", width: {
                    base: "100%",
                }, display: "flex", justifyContent: "center", alignItems: "center" },
                " ",
                react_2.default.createElement(react_1.Image, { borderRadius: "10px", w: {
                        sm: "350px",
                        base: "280px",
                    }, src: `./images/${profile_image_path}` }),
                " "),
            react_2.default.createElement(react_1.GridItem, { area: "about" },
                react_2.default.createElement(react_1.Heading, { fontSize: {
                        sm: "50px",
                        base: "30px",
                    }, lineHeight: {
                        sm: "95px",
                        base: "65px",
                    }, sx: {
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        color: "thistheme.text",
                    } }, title),
                react_2.default.createElement(react_1.Text, { w: {
                        sm: "90%",
                        base: "80",
                    }, m: "auto", fontSize: {
                        sm: "20px",
                        base: "16px",
                    }, lineHeight: {
                        sm: "30px",
                    }, sx: {
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        color: "thistheme.describe",
                    } }, description),
                react_2.default.createElement(Socials_1.default, null),
                react_2.default.createElement(react_1.Spacer, null),
                react_2.default.createElement(react_1.Button, { sx: {
                        target: "_blank"
                    }, bg: "thistheme.text", color: "white", _hover: {
                        border: "1px ",
                        bg: "thistheme.background",
                        borderColor: "thistheme.text",
                        color: "thistheme.text",
                    }, size: "md" },
                    react_2.default.createElement("a", { target: "_blank", href: "https://drive.google.com/file/d/1VvIylY4Dm6trhNwGhxQzSC81khVTQmE-/view?usp=sharing" }, "See my resume"))))));
};
exports.default = ContactIntro;
