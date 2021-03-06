(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.Cards = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var Cards = function Cards(props) {
        return _react2.default.createElement(
            "div",
            { className: "bg-lightest-grey container" },
            _react2.default.createElement(
                "div",
                { className: "card edit double-gap-top" },
                _react2.default.createElement(
                    "div",
                    { className: "card-header" },
                    _react2.default.createElement(
                        "span",
                        null,
                        props.cardHeaderText
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "card-body" },
                    props.children,
                    _react2.default.createElement("div", { className: "clearfix" })
                )
            )
        );
    };

    exports.default = Cards;
});