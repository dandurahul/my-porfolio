"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
require("./navbar.css");
const NSwitch_1 = __importDefault(require("../NAV_SWITCH/NSwitch"));
// import { Fade } from "react-reveal";
const react_router_dom_1 = require("react-router-dom");
const portfolio_1 = require("../../portfolio");
const Navbar = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const location = (0, react_router_dom_1.useLocation)();
    // if(location.pathname === "/") return <></> for future porpose
    return (react_2.default.createElement(react_1.Flex, { m: "auto", mt: "20px", w: {
            base: "90%",
            sm: "90%",
            md: "800px",
            lg: "900px",
            xl: "1100px",
            "2xl": "1400px",
        }, borderColor: "black", justifyContent: "space-between" },
        react_2.default.createElement(react_1.Flex, { display: "flex", justifyContent: {
                base: "flex-start",
                md: "center",
            }, alignItems: "center", color: "thistheme.text", w: "fit-content", cursor: "pointer" },
            react_2.default.createElement(react_1.Box, { fontSize: { base: "13px", sm: "25px" } },
                "<",
                " "),
            react_2.default.createElement(react_1.Box, { onClick: () => {
                    navigate("/");
                }, fontSize: { base: "13px", sm: "54px" }, className: "mercy" },
                "Code First",
                " "),
            react_2.default.createElement(react_1.Box, { fontSize: { base: "13px", sm: "25px" } },
                " ",
                "/>")),
        react_2.default.createElement(react_1.Flex
        // id="hello"
        // display={{
        //   base: "none",
        //   sm: "flex",
        //   md: "flex",
        //   lg: "flex",
        //   xl: "flex",
        // }}
        , { 
            // id="hello"
            // display={{
            //   base: "none",
            //   sm: "flex",
            //   md: "flex",
            //   lg: "flex",
            //   xl: "flex",
            // }}
            alignItems: "center", justifyContent: "flex-end", w: "70%" }, portfolio_1.pathNavigation.map((item) => {
            console.log("item.path", item.path);
            return (item.active && (react_2.default.createElement(NSwitch_1.default, { isActive: location.pathname === item.path, active: item.active, path: item.path, key: item.id, name: item.name, id: item.id })));
        }))));
};
exports.default = Navbar;
