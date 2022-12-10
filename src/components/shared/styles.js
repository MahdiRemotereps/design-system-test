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
exports.code =
  exports.text =
  exports.subheading =
  exports.headers =
  exports.zIndex =
  exports.hoverEffect =
  exports.pageMargins =
  exports.pageMargin =
  exports.breakpoint =
  exports.typography =
  exports.spacing =
  exports.color =
  exports.background =
    void 0;
var theming_1 = require('@storybook/theming');
var polished_1 = require('polished');
// Global style variables
exports.background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
  calmBlue: '#E3F3FF',
};
exports.color = {
  // Palette
  primary: '#FF4785',
  secondary: '#1EA7FD',
  tertiary: '#DDDDDD',
  orange: '#FC521F',
  gold: '#FFAE00',
  green: '#66BF3C',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',
  red: '#ff4400',
  // Calm
  blueLighter: '#E3F3FF',
  blueLight: '#F3FAFF',
  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',
  tr10: 'rgba(0, 0, 0, 0.1)',
  tr5: 'rgba(0, 0, 0, 0.05)',
  border: 'rgba(0,0,0,.1)',
  // Status
  positive: '#448028',
  negative: '#D43900',
  warning: '#A15C20',
  selected: '#0271B6',
};
exports.spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};
exports.typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90,
  },
};
exports.breakpoint = 600;
exports.pageMargin = 5.55555;
exports.pageMargins = theming_1.css(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  padding: 0 ',
        'px;\n  @media (min-width: ',
        'px) {\n    margin: 0 ',
        '%;\n  }\n  @media (min-width: ',
        'px) {\n    margin: 0 ',
        '%;\n  }\n  @media (min-width: ',
        'px) {\n    margin: 0 ',
        '%;\n  }\n  @media (min-width: ',
        'px) {\n    margin: 0 ',
        '%;\n  }\n',
      ],
      [
        '\n  padding: 0 ',
        'px;\n  @media (min-width: ',
        'px) {\n    margin: 0 ',
        '%;\n  }\n  @media (min-width: ',
        'px) {\n    margin: 0 ',
        '%;\n  }\n  @media (min-width: ',
        'px) {\n    margin: 0 ',
        '%;\n  }\n  @media (min-width: ',
        'px) {\n    margin: 0 ',
        '%;\n  }\n',
      ]
    )),
  exports.spacing.padding.medium,
  exports.breakpoint * 1,
  exports.pageMargin * 1,
  exports.breakpoint * 2,
  exports.pageMargin * 2,
  exports.breakpoint * 3,
  exports.pageMargin * 3,
  exports.breakpoint * 4,
  exports.pageMargin * 4
);
exports.hoverEffect = theming_1.css(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  border: 1px solid ',
        ';\n  border-radius: ',
        'px;\n  transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n\n  &:hover,\n  &.__hover {\n    border-color: ',
        ';\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  &:active,\n  &.__active {\n    border-color: ',
        ';\n    transform: translate3d(0, 0, 0);\n  }\n',
      ],
      [
        '\n  border: 1px solid ',
        ';\n  border-radius: ',
        'px;\n  transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n\n  &:hover,\n  &.__hover {\n    border-color: ',
        ';\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  &:active,\n  &.__active {\n    border-color: ',
        ';\n    transform: translate3d(0, 0, 0);\n  }\n',
      ]
    )),
  exports.color.border,
  exports.spacing.borderRadius.small,
  polished_1.rgba(exports.color.secondary, 0.5),
  polished_1.rgba(exports.color.secondary, 1)
);
exports.zIndex = {
  tooltip: 2147483647,
};
// Typography styles
exports.headers = {
  hero1: theming_1.css({
    fontSize: exports.typography.size.l3,
    fontWeight: exports.typography.weight.bold,
  }),
  hero2: theming_1.css({
    fontSize: exports.typography.size.l2,
    fontWeight: exports.typography.weight.bold,
  }),
  h1: theming_1.css({
    fontSize: exports.typography.size.l1,
    fontWeight: exports.typography.weight.bold,
  }),
  h2: theming_1.css({
    fontSize: exports.typography.size.m3,
    fontWeight: exports.typography.weight.bold,
  }),
  h3: theming_1.css({
    fontSize: exports.typography.size.m2,
    fontWeight: exports.typography.weight.bold,
  }),
  h4: theming_1.css({
    fontSize: exports.typography.size.m1,
    fontWeight: exports.typography.weight.bold,
  }),
  h5: theming_1.css({
    fontSize: exports.typography.size.s3,
    fontWeight: exports.typography.weight.bold,
  }),
  h6: theming_1.css({
    fontSize: exports.typography.size.s2,
    fontWeight: exports.typography.weight.bold,
  }),
};
exports.subheading = {
  regular: theming_1.css({
    fontSize: 13,
    fontWeight: exports.typography.weight.extrabold,
    lineHeight: '18px',
    letterSpacing: '0.38em',
  }),
  small: theming_1.css({
    fontSize: 11,
    fontWeight: exports.typography.weight.extrabold,
    lineHeight: '16px',
    letterSpacing: '0.38em',
  }),
};
exports.text = {
  storybookMediumBold: theming_1.css({
    fontSize: 13,
    fontWeight: exports.typography.weight.bold,
    lineHeight: '18px',
  }),
  storybookMedium: theming_1.css({
    fontSize: 13,
    fontWeight: exports.typography.weight.regular,
    lineHeight: '18px',
  }),
  largeBold: theming_1.css({
    fontSize: exports.typography.size.s3,
    fontWeight: exports.typography.weight.bold,
    lineHeight: '24px',
  }),
  small: theming_1.css({
    fontSize: exports.typography.size.s1,
    fontWeight: exports.typography.weight.regular,
    lineHeight: '18px',
  }),
  regularBold: theming_1.css({
    fontSize: exports.typography.size.s2,
    fontWeight: exports.typography.weight.bold,
    lineHeight: '20px',
  }),
  smallBold: theming_1.css({
    fontSize: exports.typography.size.s1,
    fontWeight: exports.typography.weight.bold,
    lineHeight: '18px',
  }),
  large: theming_1.css({
    fontSize: exports.typography.size.s3,
    fontWeight: exports.typography.weight.regular,
    lineHeight: '24px',
  }),
  regular: theming_1.css({
    fontSize: exports.typography.size.s2,
    fontWeight: exports.typography.weight.regular,
    lineHeight: '20px',
  }),
};
exports.code = {
  regular: theming_1.css({
    fontFamily: exports.typography.type.code,
    fontSize: exports.typography.size.s2,
    fontWeight: exports.typography.weight.regular,
    lineHeight: '17px',
  }),
  small: theming_1.css({
    fontFamily: exports.typography.type.code,
    fontSize: exports.typography.size.s1,
    fontWeight: exports.typography.weight.regular,
    lineHeight: '14px',
  }),
};
var templateObject_1, templateObject_2;
