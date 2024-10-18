"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const About_1 = __importDefault(require("../../components/About/About"));
const Blog_1 = __importDefault(require("../../components/Blog/Blog"));
const ContactIntro_1 = __importDefault(require("../../components/ContactIntro/ContactIntro"));
const portfolio_1 = require("../../portfolio");
const react_2 = require("@emotion/react");
const react_awesome_reveal_1 = __importDefault(require("react-awesome-reveal"));
const Upwards = (0, react_2.keyframes) `
from {
  opacity: 0;
  transform: translateY(50px);
}

to {
  opacity: 1;
  transform: translateY(0px);
}
`;
const Contact = () => {
    const about = Object.assign(Object.assign({}, portfolio_1.contactPageData.addressSection), portfolio_1.contactPageData.phoneSection);
    // console.log(about)
    return (react_1.default.createElement("div", { id: 'Contact Me' },
        react_1.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: Upwards },
            react_1.default.createElement(ContactIntro_1.default, Object.assign({}, portfolio_1.contactPageData.contactSection))),
        react_1.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: Upwards },
            react_1.default.createElement(Blog_1.default, Object.assign({}, portfolio_1.contactPageData.blogSection))),
        react_1.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: Upwards },
            react_1.default.createElement(About_1.default, Object.assign({}, about)))));
};
exports.default = Contact;
