"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sourceStyle = exports.sourceLink = exports.secondRow = exports.rightAlign = exports.firstRowUsabilla = exports.firstRow = exports.buttonStyle = void 0;

var _core = require("@emotion/core");

var _Colors = require("../Colors/Colors");

var _globalStyles = require("../GlobalStyles/globalStyles");

var _Spacing = require("../Spacing/Spacing");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sourceStyle = (0, _core.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: ", " ", " ", " ", ";\n\n    ", " {\n        padding: ", " ", " ", " ", ";\n    }\n\n    a {\n        font-size: 1.8rem;\n        line-height: ", ";\n        margin-right: ", ";\n    }\n    background-color: ", ";\n\n    ", " {\n        p > a {\n            margin-bottom: 0;\n        }\n    }\n    margin-bottom: ", ";\n    border-radius: ", ";\n"])), _Spacing.spacing.s, _Spacing.spacing.s, _Spacing.spacing.m, _Spacing.spacing.s, _globalStyles.medium, _Spacing.spacing.m, _Spacing.spacing.l, _Spacing.spacing.m, _Spacing.spacing.l, _Spacing.spacing.l, _Spacing.spacing.s, _Colors.colors.theme1.light, _globalStyles.medium, _Spacing.spacing.s, _Spacing.spacing.xs);
exports.sourceStyle = sourceStyle;
var firstRow = (0, _core.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    p {\n        padding-bottom: 0;\n    }\n    padding-bottom: ", ";\n    padding-top: ", ";\n    border-bottom: .1rem solid ", ";\n    display: flex;\n    flex-direction: column;\n\n    ", " {\n        flex-direction: row;\n    }\n"])), _Spacing.spacing.s, _Spacing.spacing.m, _Colors.colors.theme3.midLight, _globalStyles.medium);
exports.firstRow = firstRow;
var firstRowUsabilla = (0, _core.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    p {\n        padding-bottom: 0;\n    }\n    display: flex;\n    flex-direction: column;\n\n    ", " {\n        flex-direction: row;\n    }\n"])), _globalStyles.medium);
exports.firstRowUsabilla = firstRowUsabilla;
var secondRow = (0, _core.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    flex-direction: column;\n    display: flex;\n\n    ", " {\n        flex-direction: row;\n    }\n"])), _globalStyles.medium);
exports.secondRow = secondRow;
var buttonStyle = (0, _core.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    font-size: 1.6rem;\n    width: 7.2rem;\n    height: 4rem;\n    margin-left: ", ";\n    margin-bottom: ", ";\n    padding: 0 ", ";\n\n    &:first-of-type {\n        margin-left: 0;\n    }\n\n    ", " {\n        font-size: 1.6rem;\n        width: 7.2rem;\n        padding: 0 ", ";\n\n        &:first-of-type {\n            margin-left: ", ";\n        }\n\n        margin-left: ", ";\n        margin-bottom: 0;\n        margin-top: -.4rem;\n    }\n"])), _Spacing.spacing.m, _Spacing.spacing.s, _Spacing.spacing.m, _globalStyles.medium, _Spacing.spacing.m, _Spacing.spacing.m, _Spacing.spacing.m);
exports.buttonStyle = buttonStyle;
var rightAlign = (0, _core.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    margin-top: ", ";\n    ", " {\n        margin-top: 0;\n        display: inline-block;\n        flex-grow: 1;\n        text-align: right;\n        font-size: 1.8rem;\n    }\n"])), _Spacing.spacing.xs, _globalStyles.medium);
exports.rightAlign = rightAlign;
var sourceLink = (0, _core.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    svg {\n        position: relative;\n        top: 1px;        \n        left: 8px;\n    }\n"])));
exports.sourceLink = sourceLink;

//# sourceMappingURL=Source.css.js.map