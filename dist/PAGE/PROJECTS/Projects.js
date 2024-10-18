"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const portfolio_1 = require("../../portfolio");
const ProjectIntro_1 = __importDefault(require("../../components/ProjectIntro/ProjectIntro"));
const Project_1 = __importDefault(require("../../components/Project/Project"));
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
const Projects = () => {
    return (react_1.default.createElement("div", { id: "Projects" },
        react_1.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: Upwards },
            react_1.default.createElement(ProjectIntro_1.default, Object.assign({}, portfolio_1.projectsHeader))),
        react_1.default.createElement(react_2.Flex, { w: {
                base: "100%",
                sm: "90%",
                md: "800px",
                lg: "1000px",
                xl: "1100px",
                "2xl": "1450px",
            }, justifyContent: "center", m: "auto", flexWrap: "wrap", gap: "20px", h: "fit-content", cursor: "pointer", mt: { base: "50px", sm: "80px" } }, portfolio_1.project.data.map((item) => {
            return react_1.default.createElement(Project_1.default, Object.assign({}, item));
        })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("br", null),
        react_1.default.createElement(react_2.Button, { onClick: () => window.open(portfolio_1.seo.og.url, "_blank"), color: "white", bg: "thistheme.text" }, "More Projects")));
};
exports.default = Projects;
