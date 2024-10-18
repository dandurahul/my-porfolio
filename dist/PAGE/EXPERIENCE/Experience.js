"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ExperienceImg_1 = __importDefault(require("../../components/ExperienceImg/ExperienceImg"));
const portfolio_1 = require("../../portfolio");
const theme_1 = require("../../components/theme/theme");
const react_2 = require("@chakra-ui/react");
const ExperienceAccordion_1 = __importDefault(require("../../components/ExperienceAccordion/ExperienceAccordion"));
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
const Experience = () => {
    const theme = theme_1.appTheme;
    return (react_1.default.createElement(react_2.VStack, { w: {
            base: "100%",
            sm: "90%",
            md: "800px",
            lg: "1000px",
            xl: "1100px",
            "2xl": "1350px",
        }, gap: "3rem", margin: "auto" },
        react_1.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: Upwards },
            react_1.default.createElement(react_2.VStack, null,
                react_1.default.createElement(react_2.HStack, { flexDir: { base: "column", sm: "row" }, gap: "40px", mt: { base: "50px", sm: "100px" } },
                    react_1.default.createElement(react_2.Box, { width: { base: "90%", sm: "50%" } },
                        react_1.default.createElement(react_2.Box, null,
                            react_1.default.createElement(ExperienceImg_1.default, null))),
                    react_1.default.createElement(react_2.VStack, { width: { base: "90%", sm: "50%" } },
                        react_1.default.createElement(react_2.Heading, { style: { color: theme.text } }, portfolio_1.experience.title),
                        react_1.default.createElement(react_2.Heading, { style: { color: theme.text } }, portfolio_1.experience.subtitle),
                        react_1.default.createElement(react_2.Text, { sx: { color: theme.secondaryText } }, portfolio_1.experience.description))))),
        react_1.default.createElement(ExperienceAccordion_1.default, { experience: portfolio_1.experience, theme: theme })));
};
exports.default = Experience;
