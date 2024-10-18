"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const ExperienceCard_1 = __importDefault(require("../ExperienceCard/ExperienceCard"));
const ExperienceAccordion = ({ experience, theme, }) => {
    console.log("experience", experience.sections[0]);
    return (react_1.default.createElement(react_2.Stack, { margin: "50px", id: "experience", w: {
            base: "90%",
            sm: "100%",
        } },
        react_1.default.createElement(react_2.Accordion, { allowToggle: true }, experience.sections.map((section, index) => {
            return (react_1.default.createElement(react_2.AccordionItem, { key: section.title }, ({ isExpanded }) => (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("h2", null,
                    react_1.default.createElement(react_2.AccordionButton, { className: "accord-panel", _hover: {
                            color: theme.secondaryText,
                        }, border: "1px solid", padding: "1rem", borderColor: theme.headerColor, borderRadius: "5px", marginBottom: "3px" },
                        react_1.default.createElement(react_2.Box, { flex: "1", textAlign: "left", backgroundColor: theme.body, fontFamily: "Google Sans Regular", color: theme.text }, section.title),
                        react_1.default.createElement(react_2.AccordionIcon, null))),
                react_1.default.createElement(react_2.AccordionPanel, { padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem", margin: "auto", id: "accordianpannel", backgroundColor: theme.body }, section.experiences.map((experience, index) => {
                    return (react_1.default.createElement(ExperienceCard_1.default, { key: index, index: index, totalCards: section.experiences.length, experience: experience, theme: theme }));
                }))))));
        }))));
};
exports.default = ExperienceAccordion;
