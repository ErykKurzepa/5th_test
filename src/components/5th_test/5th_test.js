"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NintexSampleTextfield = void 0;
var lit_1 = require("lit");
var decorators_js_1 = require("lit/decorators.js");
require("@material/mwc-textfield/mwc-textfield.js");
var material_textfield_styles_1 = require("./material-textfield.styles");
var fire = function (element, data) {
    var args = __assign({ bubbles: true, cancelable: false, composed: true }, data);
    // the event name 'ntx-value-change' is required to tell the form engine to update the value
    var event = new CustomEvent('ntx-value-change', args);
    element.dispatchEvent(event);
    return event;
};
var NintexSampleTextfield = exports.NintexSampleTextfield = function () {
    var _classDecorators = [(0, decorators_js_1.customElement)('form-plugin-textfield')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _label_decorators;
    var _label_initializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _outlined_decorators;
    var _outlined_initializers = [];
    var _readOnly_decorators;
    var _readOnly_initializers = [];
    var NintexSampleTextfield = _classThis = /** @class */ (function (_super) {
        __extends(NintexSampleTextfield_1, _super);
        function NintexSampleTextfield_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.label = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _label_initializers, void 0));
            _this.description = __runInitializers(_this, _description_initializers, void 0);
            _this.outlined = __runInitializers(_this, _outlined_initializers, false);
            _this.readOnly = __runInitializers(_this, _readOnly_initializers, false); //Add a read-only mode. See https://help.nintex.com/en-US/formplugins/Reference/ReadOnly.htm
            return _this;
        }
        NintexSampleTextfield_1.getMetaConfig = function () {
            // plugin contract information
            return {
                controlName: 'Material Text field',
                fallbackDisableSubmit: false,
                iconUrl: 'one-line-text',
                version: '1',
                properties: {
                    outlined: {
                        type: 'boolean',
                        title: 'Show Outline',
                    },
                    value: {
                        type: 'string',
                        title: 'Value',
                        // this is to mark the field as value field. it should only be defined once in the list of properties
                        isValueField: true,
                        defaultValue: 'This is a text field default value',
                    },
                },
                standardProperties: {
                    fieldLabel: true,
                    description: true,
                    defaultValue: true,
                    readOnly: true, //Add a read-only mode. See https://help.nintex.com/en-US/formplugins/Reference/ReadOnly.htm
                },
            };
        };
        // Render the UI as a function of component state
        NintexSampleTextfield_1.prototype.render = function () {
            var _this = this;
            return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject([" <mwc-textfield\n      id=\"textfield\"\n      .label=\"", "\"\n      .helper=\"", "\"\n      ?outlined=\"", "\"\n      ?disabled=\"", "\"\n      @change=\"", "\"\n    ></mwc-textfield>"], [" <mwc-textfield\n      id=\"textfield\"\n      .label=\"", "\"\n      .helper=\"", "\"\n      ?outlined=\"", "\"\n      ?disabled=\"", "\"\n      @change=\"", "\"\n    ></mwc-textfield>"])), this.label, this.description, this.outlined, this.readOnly, function () { return _this.onChange(); });
        };
        NintexSampleTextfield_1.prototype.onChange = function () {
            var _a;
            var el = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('textfield');
            if (el) {
                fire(this, { detail: el.value });
            }
        };
        return NintexSampleTextfield_1;
    }(lit_1.LitElement));
    __setFunctionName(_classThis, "NintexSampleTextfield");
    (function () {
        _label_decorators = [(0, decorators_js_1.property)()];
        _description_decorators = [(0, decorators_js_1.property)()];
        _outlined_decorators = [(0, decorators_js_1.property)({ type: Boolean })];
        _readOnly_decorators = [(0, decorators_js_1.property)({ type: Boolean })];
        __esDecorate(null, null, _label_decorators, { kind: "field", name: "label", static: false, private: false, access: { has: function (obj) { return "label" in obj; }, get: function (obj) { return obj.label; }, set: function (obj, value) { obj.label = value; } } }, _label_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } } }, _description_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _outlined_decorators, { kind: "field", name: "outlined", static: false, private: false, access: { has: function (obj) { return "outlined" in obj; }, get: function (obj) { return obj.outlined; }, set: function (obj, value) { obj.outlined = value; } } }, _outlined_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _readOnly_decorators, { kind: "field", name: "readOnly", static: false, private: false, access: { has: function (obj) { return "readOnly" in obj; }, get: function (obj) { return obj.readOnly; }, set: function (obj, value) { obj.readOnly = value; } } }, _readOnly_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        NintexSampleTextfield = _classThis = _classDescriptor.value;
    })();
    _classThis.styles = material_textfield_styles_1.styles; //Add custom CSS. See https://help.nintex.com/en-US/formplugins/Reference/Style.htm
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NintexSampleTextfield = _classThis;
}();
var templateObject_1;
