"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const react_3 = require("@emotion/react");
const portfolio_1 = require("../../portfolio");
const react_awesome_reveal_1 = __importDefault(require("react-awesome-reveal"));
const react_router_dom_1 = require("react-router-dom");
const Footer = ({ theme }) => {
    const location = (0, react_router_dom_1.useLocation)();
    // if(location.pathname === "/") return <></> for future porpose 
    return (react_1.default.createElement(react_2.Box, { m: "1rem" },
        react_1.default.createElement(react_awesome_reveal_1.default, { keyframes: (0, react_3.keyframes) `
      from {
          opacity: 0
      }
      to {
          opacity: 1
      }
      ` },
            react_1.default.createElement(react_2.Text, { textAlign: "center", fontWeight: "bold", fontFamily: "Google Sans Regular", color: theme.secondaryText },
                "Made with \u2764\uFE0F by ",
                portfolio_1.greeting.title))));
};
exports.default = Footer;
