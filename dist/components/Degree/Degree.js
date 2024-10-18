"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const react_3 = require("@emotion/react");
const react_awesome_reveal_1 = __importStar(require("react-awesome-reveal"));
const RightWard = (0, react_3.keyframes) `

`;
const Degree = ({ title, subtitle, logo_path, alt_name, duration, descriptions, website_link, }) => {
    return (react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement(react_1.HStack, { w: {
                base: "100%",
                sm: "90%",
                md: "700px",
                lg: "900px",
                xl: "900px",
                "2xl": "1000px",
            }, m: "auto", p: "20px", gap: { base: "40px", sm: "0px" }, mt: { base: "60px" }, sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }, flexDirection: {
                base: "column",
                sm: "row"
            } },
            react_2.default.createElement(react_1.Box, { width: {
                    base: "90% ",
                    sm: "20% ",
                } },
                react_2.default.createElement(react_awesome_reveal_1.Flip, { duration: 2000 },
                    react_2.default.createElement(react_1.Image, { m: { base: "auto", sm: 0 }, src: `./images/${logo_path}`, boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px", bg: "#f8c313", width: { base: "35%", sm: "175px" }, borderRadius: "20px" }))),
            react_2.default.createElement(react_1.Box, { height: { sm: "200px", border: "1px solid red" }, w: { base: "90%", sm: "80%" } },
                react_2.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: RightWard },
                    react_2.default.createElement(react_1.VStack, { borderRadius: "5px", overflow: "hidden", 
                        // border={"1px"}
                        w: "100%", boxShadow: "rgba(0, 0, 0, 0.55) 0px  0px 15px", h: "100%" },
                        react_2.default.createElement(react_1.Grid, { w: "100%", p: "10px", gridTemplateColumns: {
                                base: 'repeat(1,1fr)',
                                sm: 'repeat(3,1fr)'
                            }, gridTemplateRows: {
                                base: 'repeat(3,1fr)',
                                sm: 'repeat(2,1fr)'
                            }, gridTemplateAreas: {
                                base: ` "title " "subtitle" "duration"  `,
                                sm: `  "title title duration" "subtitle subtitle subtitle"`
                            }, bg: "#84b7d5" },
                            react_2.default.createElement(react_1.GridItem, { area: "title" },
                                react_2.default.createElement(react_1.Text, { fontSize: { base: "18px", sm: "22px" }, sx: {
                                        fontFamily: "Open Sans",
                                        fontWeight: 700,
                                        color: "thistheme.text",
                                    }, textAlign: "left" },
                                    " ",
                                    title)),
                            react_2.default.createElement(react_1.GridItem, { area: "subtitle" },
                                react_2.default.createElement(react_1.Text, { fontSize: { base: "16px", sm: "18px" }, sx: {
                                        fontFamily: "Open Sans",
                                        fontWeight: 700,
                                        color: "thistheme.text",
                                    }, textAlign: "left" },
                                    " ",
                                    subtitle)),
                            react_2.default.createElement(react_1.GridItem, { area: "duration" },
                                react_2.default.createElement(react_1.Text, { fontSize: { base: "20px", sm: "16px" }, textAlign: "right", sx: {
                                        fontFamily: "Open Sans",
                                        fontWeight: 700,
                                        color: "thistheme.text",
                                    } },
                                    " ",
                                    duration))),
                        descriptions.map((item, i) => {
                            return react_2.default.createElement(react_1.Text, { key: i, w: "100%", textAlign: "left" }, item);
                        }),
                        react_2.default.createElement(react_1.Spacer, null),
                        react_2.default.createElement(react_1.Button, { onClick: () => window.open(website_link, "_blank"), alignSelf: "left", bg: "#84b7d5", size: 'md' }, "Visit Website"),
                        react_2.default.createElement(react_1.Spacer, null)))))));
};
exports.default = Degree;
