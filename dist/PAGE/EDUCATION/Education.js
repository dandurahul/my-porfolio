"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const portfolio_1 = require("../../portfolio");
// import Degree from "../../components/Degree/Degree";
const Certificate_1 = __importDefault(require("../../components/certificates/Certificate"));
const Degree_1 = __importDefault(require("../../components/Degree/Degree"));
const CompetitiveSites_1 = __importDefault(require("../../components/CompetitiveSites/CompetitiveSites"));
const react_awesome_reveal_1 = __importDefault(require("react-awesome-reveal"));
const react_3 = require("@emotion/react");
const theme_1 = require("../../components/theme/theme");
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
const Education = () => {
    return (react_1.default.createElement("div", { id: "Education" },
        react_1.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: Upwards },
            react_1.default.createElement(react_2.Grid, { w: {
                    base: "100%",
                    sm: "90%",
                    md: "800px",
                    lg: "1000px",
                    xl: "1100px",
                    "2xl": "1350px",
                }, m: "auto", gridTemplateAreas: {
                    base: `  "education" "text" `,
                    sm: ` "education text" "education text" `,
                }, gridTemplateColumns: { base: "repeat(1,1fr)", sm: "repeat(2, 1fr)" }, gridTemplateRows: { base: "repeat(1,1fr)", sm: "repeat(2, 1fr)" } },
                react_1.default.createElement(react_2.GridItem, { area: "education", display: "flex" },
                    react_1.default.createElement(react_2.Image, { w: { base: "80%", sm: "100%" }, m: "40px", src: "./images/eduation.png" })),
                react_1.default.createElement(react_2.GridItem, { area: "text", display: "flex", justifyContent: "center", pt: { sm: "100px" }, alignItems: "flex-start" },
                    react_1.default.createElement(react_2.Box, null,
                        react_1.default.createElement(react_2.Text, { height: "fit-content", fontSize: { base: "30px", sm: "50px" }, fontWeight: { base: 600, sm: 600 }, sx: {
                                fontFamily: "Open Sans",
                                color: "thistheme.text",
                            } }, "Education"),
                        react_1.default.createElement(react_2.Text, { fontSize: { base: "20px", sm: "25px" }, fontWeight: { base: 400, sm: 600 }, sx: {
                                fontFamily: "Open Sans",
                                color: "thistheme.text",
                            } }),
                        react_1.default.createElement(CompetitiveSites_1.default, { logos: portfolio_1.competitiveSites.competitiveSites }))))),
        react_1.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: Upwards },
            react_1.default.createElement(react_2.Heading, { sx: { color: theme_1.appTheme.text } }, "Degrees Received")),
        react_1.default.createElement(Degree_1.default, Object.assign({}, portfolio_1.degrees === null || portfolio_1.degrees === void 0 ? void 0 : portfolio_1.degrees.degree[0])),
        portfolio_1.certifications.isShow &&
            react_1.default.createElement(react_2.Heading, { color: "thistheme.text", mt: { base: "100px", sm: "100px" } }, "Certifications"),
        react_1.default.createElement(react_2.Flex, { flexWrap: "wrap", gap: "20px", mt: { base: "30px", sm: "30px" }, w: {
                base: "100%",
                sm: "90%",
                md: "800px",
                lg: "1000px",
                xl: "1100px",
                "2xl": "1300px",
            }, 
            // border={"1px"}
            m: "auto", height: "fit-content" }, portfolio_1.certifications.isShow && portfolio_1.certifications.certifications.map((item, i) => {
            return react_1.default.createElement(Certificate_1.default, Object.assign({ key: i }, item));
        }))));
};
exports.default = Education;
