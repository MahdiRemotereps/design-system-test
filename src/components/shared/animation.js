'use strict';
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
exports.__esModule = true;
exports.inlineGlow =
  exports.shake =
  exports.jiggle =
  exports.float =
  exports.glow =
  exports.rotate360 =
  exports.easing =
    void 0;
// Handy CSS animations for micro-interactions
var theming_1 = require('@storybook/theming');
var styles_1 = require('./styles');
exports.easing = {
  rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)',
};
exports.rotate360 = theming_1.keyframes(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n',
      ],
      [
        '\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n',
      ]
    ))
);
exports.glow = theming_1.keyframes(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  0%, 100% { opacity: 1; }\n  50% { opacity: .4; }\n'],
      ['\n  0%, 100% { opacity: 1; }\n  50% { opacity: .4; }\n']
    ))
);
exports.float = theming_1.keyframes(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  0% { transform: translateY(1px); }\n  25% { transform: translateY(0px); }\n  50% { transform: translateY(-3px); }\n  100% { transform: translateY(1px); }\n',
      ],
      [
        '\n  0% { transform: translateY(1px); }\n  25% { transform: translateY(0px); }\n  50% { transform: translateY(-3px); }\n  100% { transform: translateY(1px); }\n',
      ]
    ))
);
exports.jiggle = theming_1.keyframes(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        '\n  0%, 100% { transform:translate3d(0,0,0); }\n  12.5%, 62.5% { transform:translate3d(-4px,0,0); }\n  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }\n',
      ],
      [
        '\n  0%, 100% { transform:translate3d(0,0,0); }\n  12.5%, 62.5% { transform:translate3d(-4px,0,0); }\n  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }\n',
      ]
    ))
);
exports.shake = theming_1.keyframes(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        '\n  0% { transform:rotate(-3deg) }\n  1.68421% { transform:rotate(3deg) }\n  2.10526% { transform:rotate(6deg) }\n  3.78947% { transform:rotate(-6deg) }\n  4.21053% { transform:rotate(-6deg) }\n  5.89474% { transform:rotate(6deg) }\n  6.31579% { transform:rotate(6deg) }\n  8% { transform:rotate(-6deg) }\n  8.42105% { transform:rotate(-6deg) }\n  10.10526% { transform:rotate(6deg) }\n  10.52632% { transform:rotate(6deg) }\n  12.21053% { transform:rotate(-6deg) }\n  12.63158% { transform:rotate(-6deg) }\n  14.31579% { transform:rotate(6deg) }\n  15.78947% { transform:rotate(0deg) }\n  100% { transform:rotate(0deg) }\n',
      ],
      [
        '\n  0% { transform:rotate(-3deg) }\n  1.68421% { transform:rotate(3deg) }\n  2.10526% { transform:rotate(6deg) }\n  3.78947% { transform:rotate(-6deg) }\n  4.21053% { transform:rotate(-6deg) }\n  5.89474% { transform:rotate(6deg) }\n  6.31579% { transform:rotate(6deg) }\n  8% { transform:rotate(-6deg) }\n  8.42105% { transform:rotate(-6deg) }\n  10.10526% { transform:rotate(6deg) }\n  10.52632% { transform:rotate(6deg) }\n  12.21053% { transform:rotate(-6deg) }\n  12.63158% { transform:rotate(-6deg) }\n  14.31579% { transform:rotate(6deg) }\n  15.78947% { transform:rotate(0deg) }\n  100% { transform:rotate(0deg) }\n',
      ]
    ))
);
exports.inlineGlow = theming_1.css(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        '\n  animation: ',
        ' 1.5s ease-in-out infinite;\n  background: ',
        ';\n  color: transparent;\n  cursor: progress;\n',
      ],
      [
        '\n  animation: ',
        ' 1.5s ease-in-out infinite;\n  background: ',
        ';\n  color: transparent;\n  cursor: progress;\n',
      ]
    )),
  exports.glow,
  styles_1.color.mediumlight
);
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6;
