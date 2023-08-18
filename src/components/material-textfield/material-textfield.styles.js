"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
var lit_1 = require("lit");
var baseStyle = (0, lit_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  :host {\n    width: 100%;\n    display: block;\n\n    --mdc-theme-primary: var(--ntx-form-theme-color-highlight, #f56900);\n  }\n\n  mwc-textfield {\n    width: 100%;\n  }\n"], ["\n  :host {\n    width: 100%;\n    display: block;\n\n    --mdc-theme-primary: var(--ntx-form-theme-color-highlight, #f56900);\n  }\n\n  mwc-textfield {\n    width: 100%;\n  }\n"])));
exports.styles = [baseStyle];
var templateObject_1;
