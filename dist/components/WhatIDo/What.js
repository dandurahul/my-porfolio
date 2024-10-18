"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const Appicon_1 = __importDefault(require("../languageicon/Appicon"));
const Skills_1 = __importDefault(require("../skillsline/Skills"));
const react_awesome_reveal_1 = __importDefault(require("react-awesome-reveal"));
const react_3 = require("@emotion/react");
const LeftWard = (0, react_3.keyframes) `
from {
  opacity: 0;
  transform: translateX(-200px);
}

to {
  opacity: 1;
  transform: translateX(0px);
}
`;
const RightWard = (0, react_3.keyframes) `
from {
  opacity: 0;
  transform: translateX(200px);
}

to {
  opacity: 1;
  transform: translateX(0px);
}
`;
const What = ({ even, img, title, fileName, skills, softwareSkills }) => {
    return (react_2.default.createElement(react_1.Grid, { w: {
            base: "100%",
            sm: "90%",
            md: "800px",
            lg: "1000px",
            xl: "1100px",
            "2xl": "1400px",
        }, gridTemplateColumns: { base: 'repeat(1,1fr)', sm: 'repeat(2,1fr)' }, gridTemplateRows: { base: 'repeat(2,1fr)', sm: 'repeat(2,1fr)' }, gridTemplateAreas: {
            base: `"info" "image"`,
            sm: even ? ` "info image" "info image"   ` : ` "image info" "image info"   `
        } },
        react_2.default.createElement(react_1.GridItem, { area: "image", width: { base: "100%", sm: "100%" }, height: "fit-content", alignItems: "center", display: "flex", justifyContent: "center" },
            react_2.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: even ? RightWard : LeftWard },
                react_2.default.createElement(react_1.Tooltip, { label: title },
                    react_2.default.createElement(react_1.Image, { margin: "auto", src: `./images/${img}`, width: { base: "85%", sm: "75%" } })))),
        react_2.default.createElement(react_1.GridItem, { area: "info" },
            react_2.default.createElement(react_awesome_reveal_1.default, { duration: 1000, keyframes: even ? LeftWard : RightWard },
                react_2.default.createElement(react_1.Heading, { w: { base: "92%", sm: "92%" }, m: "auto", fontSize: { base: "30px", sm: "40px" }, sx: {
                        fontFamily: 'open sans',
                        fontWeight: 500,
                        color: "thistheme.text"
                    } }, title)),
            react_2.default.createElement(react_awesome_reveal_1.default, { duration: 1500, keyframes: even ? LeftWard : RightWard },
                react_2.default.createElement(react_1.Flex, { flexWrap: 'wrap', mt: { base: "0px", sm: "20px" }, align: "center", justifyContent: "center" }, softwareSkills.map((item, i) => {
                    return react_2.default.createElement(Appicon_1.default, Object.assign({ key: i }, item));
                }))),
            react_2.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: even ? LeftWard : RightWard },
                react_2.default.createElement(react_1.VStack, null, skills.map((item, i) => {
                    return react_2.default.createElement(Skills_1.default, { key: i, Skills: item });
                }))))));
};
exports.default = What;
