"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _video_list_item = require("./video_list_item");

var _video_list_item2 = _interopRequireDefault(_video_list_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoList = function VideoList(props) {
  var size = 4;
  var videoItems = props.videos.slice(0, size).map(function (video) {
    return _react2.default.createElement(_video_list_item2.default, {
      onVideoSelect: props.onVideoSelect,
      key: video.etag,
      video: video
    });
  });

  return _react2.default.createElement(
    "ul",
    { className: "col-md-4 list-group" },
    videoItems
  );
};

exports.default = VideoList;