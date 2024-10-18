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
exports.DownWardWith2000 = void 0;
require("./App.css");
const react_1 = __importDefault(require("react"));
// import Navbar from './components/NAVBAR/Navbar';
const react_2 = require("@chakra-ui/react");
// import Home from './PAGE/HOME/Home';
// import Education from './PAGE/EDUCATION/Education';
// import Projects from './PAGE/PROJECTS/Projects';
// import Contact from './PAGE/CONTACT/Contact';
const react_3 = require("react");
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Splash from './PAGE/SPLASH/Splash';
const theme_1 = require("./components/theme/theme");
const Footer_1 = __importDefault(require("./components/Footer/Footer"));
const TopButton_1 = __importDefault(require("./components/TopButton/TopButton"));
const react_router_dom_1 = require("react-router-dom");
// import Experience from './PAGE/EXPERIENCE/Experience';
const react_awesome_reveal_1 = __importDefault(require("react-awesome-reveal"));
const react_4 = require("@emotion/react");
const Home = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require("./PAGE/HOME/Home"))));
const Education = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require("./PAGE/EDUCATION/Education"))));
const Projects = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require("./PAGE/PROJECTS/Projects"))));
const Contact = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require("./PAGE/CONTACT/Contact"))));
const Experience = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require("./PAGE/EXPERIENCE/Experience"))));
const Navbar = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require("./components/NAVBAR/Navbar"))));
// console.log("Home",Home)
exports.DownWardWith2000 = (0, react_4.keyframes) `

from {
opacity : 0;
transform : translateY(-50px)
}
to {
opacity : 1;
transform : translateY(0px)
}
`;
function App() {
    return (react_1.default.createElement(react_2.Box, { className: "App", border: "1px", overflowX: "hidden", borderColor: "#edf9fe", bg: "thistheme.background" },
        react_1.default.createElement(react_router_dom_1.HashRouter, { basename: "/" },
            react_1.default.createElement(react_awesome_reveal_1.default, { duration: 2000, keyframes: exports.DownWardWith2000 },
                react_1.default.createElement(react_3.Suspense, null,
                    react_1.default.createElement(Navbar, null))),
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: 
                    // <Splash />
                    react_1.default.createElement(react_3.Suspense, null,
                        react_1.default.createElement(Home, null)) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/home", element: react_1.default.createElement(react_3.Suspense, null,
                        react_1.default.createElement(Home, null)) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/education", element: react_1.default.createElement(react_3.Suspense, null,
                        react_1.default.createElement(Education, null)) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/projects", element: react_1.default.createElement(react_3.Suspense, null,
                        react_1.default.createElement(Projects, null)) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/Contact", element: react_1.default.createElement(react_3.Suspense, null,
                        react_1.default.createElement(Contact, null)) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/experience", element: react_1.default.createElement(react_3.Suspense, null,
                        react_1.default.createElement(Experience, null)) })),
            react_1.default.createElement(Footer_1.default, { theme: theme_1.appTheme }),
            react_1.default.createElement(TopButton_1.default, { theme: theme_1.appTheme }))));
}
exports.default = App;
