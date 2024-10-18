"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const ExperienceCard = ({ experience, theme, index, totalCards, }) => {
    console.log("experience1234567", experience);
    return (react_1.default.createElement(react_2.HStack, { padding: "1rem", flexDir: {
            base: "column",
            sm: "row",
        }, justifyContent: "space-between", border: `1px solid ${experience.color}`, borderRadius: "20" },
        react_1.default.createElement(react_2.Box, { display: "flex", justifyContent: "center", alignItems: "center", width: { base: "40%", sm: "5%" }, marginBottom: {
                base: "20px",
                sm: "0px",
            } },
            react_1.default.createElement(react_2.Image, { width: "100px", borderRadius: "50%", src: `./images/${experience.logo_path}` })),
        react_1.default.createElement(react_2.VStack, { width: "93%", justifyContent: "space-between", textAlign: "left" },
            react_1.default.createElement(react_2.HStack, { flexDirection: {
                    base: "column",
                    sm: "row",
                }, width: "100%", justifyContent: "space-between" },
                react_1.default.createElement(react_2.VStack, { width: { base: "100%", sm: "50%" }, alignItems: { base: "center", sm: "flex-start" } },
                    react_1.default.createElement(react_2.Heading, { sx: {
                            fontWeight: 700,
                            color: "#001c55",
                            fontSize: "16px",
                            lineHeight: "20px",
                        } }, experience.title),
                    react_1.default.createElement(react_2.Text, { sx: {
                            fontWeight: 400,
                            color: "#001c55",
                            fontSize: "14px",
                            lineHeight: "20px",
                        } }, experience.company)),
                react_1.default.createElement(react_2.VStack, { width: { base: "100%", sm: "50%" }, alignItems: { base: "center", sm: "flex-end" } },
                    react_1.default.createElement(react_2.Text, { sx: {
                            fontWeight: 400,
                            color: "#001c55",
                            fontSize: "14px",
                            lineHeight: "15px",
                        } },
                        " ",
                        experience.duration,
                        " "),
                    react_1.default.createElement(react_2.Text, { sx: {
                            fontWeight: 400,
                            color: "#001c55",
                            fontSize: "14px",
                            lineHeight: "15px",
                        } },
                        " ",
                        experience.location,
                        " "))),
            react_1.default.createElement(react_2.Text, { sx: {
                    fontWeight: 400,
                    color: "#001c55",
                    fontSize: "14px",
                    lineHeight: "20px",
                    marginTop: "10px",
                }, textAlign: { base: "center", sm: "left" } }, experience.description))));
};
exports.default = ExperienceCard;
