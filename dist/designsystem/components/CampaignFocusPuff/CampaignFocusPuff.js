"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignFocusPuff = void 0;

var _core = require("@emotion/core");

var _CampaignFocusPuff = require("./CampaignFocusPuff.css");

var _react = _interopRequireDefault(require("react"));

var _External = _interopRequireDefault(require("../Icons/SystemIcons/External/External"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var CampaignFocusPuff = function CampaignFocusPuff(_ref) {
  var headline = _ref.headline,
      text = _ref.text,
      url = _ref.url,
      isExternalLink = _ref.isExternalLink,
      image = _ref.image,
      imageAlt = _ref.imageAlt,
      icon = _ref.icon,
      imageComponent = _ref.imageComponent,
      onClick = _ref.onClick;
  var imageArea = imageComponent;

  if (imageArea == null) {
    if (image != null) imageArea = (0, _core.jsx)("img", {
      src: image,
      alt: imageAlt
    });else {
      imageArea = (0, _core.jsx)("div", {
        css: _CampaignFocusPuff.iconBackground
      }, icon && _react["default"].cloneElement(icon, {
        style: _CampaignFocusPuff.puffIcon
      }));
    }
  }

  var campaignPuffMarkup = function campaignPuffMarkup() {
    return (0, _core.jsx)("div", {
      css: _CampaignFocusPuff.focusWrapper
    }, (0, _core.jsx)("div", {
      css: _CampaignFocusPuff.pictureWrapper,
      className: imageComponent ? 'image' : null
    }, imageArea), (0, _core.jsx)("div", {
      css: _CampaignFocusPuff.textArea,
      className: "textarea"
    }, (0, _core.jsx)("h3", {
      css: _CampaignFocusPuff.focusHeadline
    }, headline, isExternalLink && (0, _core.jsx)(_External["default"], {
      title: "Extern l\xE4nk",
      style: _CampaignFocusPuff.externalIcon
    })), (0, _core.jsx)("p", {
      css: _CampaignFocusPuff.focusText
    }, text)));
  };

  return url !== null ? (0, _core.jsx)("a", {
    css: _CampaignFocusPuff.linkWrapper,
    href: url,
    onClick: onClick,
    className: "noStyle"
  }, campaignPuffMarkup(CampaignFocusPuff)) : campaignPuffMarkup(CampaignFocusPuff);
};

exports.CampaignFocusPuff = CampaignFocusPuff;

//# sourceMappingURL=CampaignFocusPuff.js.map