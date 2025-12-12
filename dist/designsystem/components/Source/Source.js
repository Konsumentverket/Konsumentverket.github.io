"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Source = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _Source = require("./Source.css");

var _isExternalUrl = _interopRequireDefault(require("./isExternalUrl"));

var _External = _interopRequireDefault(require("../Icons/SystemIcons/External/External"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var Source = function Source(_ref) {
  var baseUrl = _ref.baseUrl,
      sourcesCollection = _ref.sourcesCollection,
      markdownText = _ref.markdownText,
      reviewedDate = _ref.reviewedDate,
      reviewedDateText = _ref.reviewedDateText,
      style = _ref.style,
      english = _ref.english,
      bottomContent = _ref.bottomContent,
      sourceText = _ref.sourceText;
  var reviewed = reviewedDate ? new Date(reviewedDate) : null;
  var monthsSv = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
  var monthsEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (0, _core.jsx)("div", {
    css: [_Source.sourceStyle, style]
  }, (0, _core.jsx)("div", {
    id: "mtmFeedBackForm",
    className: "feedbackForm"
  }), (0, _core.jsx)("div", {
    css: _Source.secondRow
  }, sourcesCollection && sourcesCollection.items.length > 0 && (0, _core.jsx)("p", null, sourceText ? "".concat(sourceText, " ") : "Källa: ", sourcesCollection.items.map(function (item, idx) {
    return (0, _core.jsx)("a", {
      href: item.linkUrl,
      key: "link-" + idx,
      css: _Source.sourceLink,
      className: (0, _isExternalUrl["default"])(baseUrl, item.linkUrl) ? "external" : null
    }, item.linkText, (0, _isExternalUrl["default"])(baseUrl, item.linkUrl) && (0, _core.jsx)(_External["default"], {
      title: "Extern l\xE4nk",
      className: "external"
    }));
  })), markdownText, reviewed && (0, _core.jsx)("div", {
    css: _Source.rightAlign
  }, (0, _core.jsx)("p", null, "".concat(reviewedDateText || english == true ? "Proofread: " : "Granskad: ").concat(reviewed.getDate(), " ").concat(english ? monthsEn[reviewed.getMonth()] : monthsSv[reviewed.getMonth()], " ").concat(reviewed.getFullYear())))), bottomContent && (0, _core.jsx)("div", null, bottomContent));
};

exports.Source = Source;

//# sourceMappingURL=Source.js.map