"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const TopButton = ({ theme }) => {
    function goUpEvent() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    function scrollFunction() {
        const topButton = document.getElementById("topButton");
        if (topButton) {
            topButton.style.visibility =
                document.body.scrollTop > 30 || document.documentElement.scrollTop > 30
                    ? "visible"
                    : "hidden";
        }
    }
    window.onscroll = function () {
        scrollFunction();
    };
    // const onMouseEnter = () => {
    //     const topButton = document.getElementById("topButton");
    //     if (topButton) {
    //         topButton.style.color = theme.text;
    //         topButton.style.backgroundColor = theme.body;
    //     }
    //     const arrow = document.getElementById("arrow");
    //     if (arrow) {
    //         arrow.style.color = theme.text;
    //         arrow.style.backgroundColor = theme.body;
    //     }
    // };
    // const onMouseLeave = () => {
    //     const topButton = document.getElementById("topButton");
    //     if (topButton) {
    //         topButton.style.color = theme.body;
    //         topButton.style.backgroundColor = theme.text;
    //     }
    //     const arrow = document.getElementById("arrow");
    //     if (arrow) {
    //         arrow.style.color = theme.body;
    //         arrow.style.backgroundColor = theme.text;
    //     }
    // };
    return (react_1.default.createElement(react_2.Box, { as: "div", onClick: goUpEvent, id: "topButton", visibility: "hidden", position: "fixed", bottom: "3.2rem", right: "1.5rem", cursor: "pointer", padding: "15px", borderRadius: "2rem", fontSize: "1.5rem", color: theme.body, backgroundColor: theme.text, border: `solid 1px ${theme.text}`, title: "Go up" },
        react_1.default.createElement(react_2.Image, { width: "20px", src: `./images/toparrow.png`, alt: "toparrow" })));
};
exports.default = TopButton;
