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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
exports.__esModule = true;
exports.Cardinal = void 0;
var pluralize_1 = require('pluralize');
var polished_1 = require('polished');
var react_1 = require('react');
var theming_1 = require('@storybook/theming');
var Link_1 = require('./Link');
var styles_1 = require('./shared/styles');
var animation_1 = require('./shared/animation');
var Count = theming_1.styled.div(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      [
        '\n  color: ',
        ';\n  display: block;\n\n  ',
        ';\n  ',
        ';\n  ',
        ';\n  ',
        ';\n  ',
        ';\n  ',
        ';\n\n  span {\n    display: inline-block;\n  }\n',
      ],
      [
        '\n  color: ',
        ';\n  display: block;\n\n  ',
        ';\n  ',
        ';\n  ',
        ';\n  ',
        ';\n  ',
        ';\n  ',
        ';\n\n  span {\n    display: inline-block;\n  }\n',
      ]
    )),
  styles_1.color.darker,
  function (props) {
    return (
      props.status === 'positive' &&
      theming_1.css(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            ['\n      color: ', ';\n    '],
            ['\n      color: ', ';\n    ']
          )),
        styles_1.color.positive
      )
    );
  },
  function (props) {
    return (
      props.status === 'negative' &&
      theming_1.css(
        templateObject_2 ||
          (templateObject_2 = __makeTemplateObject(
            ['\n      color: ', ';\n    '],
            ['\n      color: ', ';\n    ']
          )),
        styles_1.color.negative
      )
    );
  },
  function (props) {
    return (
      props.status === 'warning' &&
      theming_1.css(
        templateObject_3 ||
          (templateObject_3 = __makeTemplateObject(
            ['\n      color: ', ';\n    '],
            ['\n      color: ', ';\n    ']
          )),
        styles_1.color.warning
      )
    );
  },
  function (props) {
    return (
      props.status === 'neutral' &&
      theming_1.css(
        templateObject_4 ||
          (templateObject_4 = __makeTemplateObject(
            ['\n      color: ', ';\n    '],
            ['\n      color: ', ';\n    ']
          )),
        styles_1.color.dark
      )
    );
  },
  function (props) {
    return (
      props.status === 'link' &&
      theming_1.css(
        templateObject_5 ||
          (templateObject_5 = __makeTemplateObject(
            [
              '\n      color: ',
              ';\n      text-decoration: none;\n      &:hover {\n        color: ',
              ';\n      }\n      &:active {\n        color: ',
              ';\n      }\n    ',
            ],
            [
              '\n      color: ',
              ';\n      text-decoration: none;\n      &:hover {\n        color: ',
              ';\n      }\n      &:active {\n        color: ',
              ';\n      }\n    ',
            ]
          )),
        styles_1.color.secondary,
        polished_1.darken(0.07, styles_1.color.secondary),
        polished_1.darken(0.1, styles_1.color.secondary)
      )
    );
  },
  function (props) {
    return (
      props.status === 'inverse' &&
      theming_1.css(
        templateObject_6 ||
          (templateObject_6 = __makeTemplateObject(
            ['\n      color: rgba(255, 255, 255, 0.7);\n    '],
            ['\n      color: rgba(255, 255, 255, 0.7);\n    ']
          ))
      )
    );
  }
);
var Text = theming_1.styled.div(
  templateObject_8 ||
    (templateObject_8 = __makeTemplateObject(
      ['\n  span {\n    display: inline-block;\n  }\n'],
      ['\n  span {\n    display: inline-block;\n  }\n']
    ))
);
var CardinalInner = theming_1.styled.div(
  templateObject_14 ||
    (templateObject_14 = __makeTemplateObject(
      [
        '\n  display: inline-block;\n  vertical-align: top;\n  padding: 8px 12px;\n  border-radius: ',
        'px;\n  text-align: ',
        ';\n\n  svg {\n    width: 12px;\n    height: 12px;\n    margin: 1px 0 0 4px;\n    vertical-align: top;\n    color: inherit;\n  }\n\n  ',
        ';\n\n  ',
        ';\n\n  ',
        ';\n\n  ',
        ' {\n    font-weight: ',
        ';\n    font-size: ',
        'px;\n    line-height: ',
        'px;\n    margin-bottom: ',
        'px;\n  }\n\n  ',
        ' {\n    color: ',
        ';\n    font-size: ',
        'px;\n    line-height: ',
        'px;\n    clear: both;\n  }\n\n  ',
        '\n',
      ],
      [
        '\n  display: inline-block;\n  vertical-align: top;\n  padding: 8px 12px;\n  border-radius: ',
        'px;\n  text-align: ',
        ';\n\n  svg {\n    width: 12px;\n    height: 12px;\n    margin: 1px 0 0 4px;\n    vertical-align: top;\n    color: inherit;\n  }\n\n  ',
        ';\n\n  ',
        ';\n\n  ',
        ';\n\n  ',
        ' {\n    font-weight: ',
        ';\n    font-size: ',
        'px;\n    line-height: ',
        'px;\n    margin-bottom: ',
        'px;\n  }\n\n  ',
        ' {\n    color: ',
        ';\n    font-size: ',
        'px;\n    line-height: ',
        'px;\n    clear: both;\n  }\n\n  ',
        '\n',
      ]
    )),
  styles_1.spacing.borderRadius.small,
  function (props) {
    return props.alignment;
  },
  function (props) {
    return (
      props.isLoading &&
      theming_1.css(
        templateObject_9 ||
          (templateObject_9 = __makeTemplateObject(
            [
              '\n      ',
              ', ',
              ' {\n        overflow: hidden;\n\n        > span,\n        a {\n          ',
              ';\n        }\n\n        img {\n          opacity: 0;\n        }\n      }\n    ',
            ],
            [
              '\n      ',
              ', ',
              ' {\n        overflow: hidden;\n\n        > span,\n        a {\n          ',
              ';\n        }\n\n        img {\n          opacity: 0;\n        }\n      }\n    ',
            ]
          )),
        Count,
        Text,
        animation_1.inlineGlow
      )
    );
  },
  function (props) {
    return (
      props.selectable &&
      theming_1.css(
        templateObject_10 ||
          (templateObject_10 = __makeTemplateObject(
            [
              '\n      cursor: pointer;\n\n      &:hover {\n        background: ',
              ';\n      }\n    ',
            ],
            [
              '\n      cursor: pointer;\n\n      &:hover {\n        background: ',
              ';\n      }\n    ',
            ]
          )),
        styles_1.background.app
      )
    );
  },
  function (props) {
    return (
      props.selectable &&
      (props.inverse
        ? theming_1.css(
            templateObject_11 ||
              (templateObject_11 = __makeTemplateObject(
                [
                  '\n          &:hover {\n            background: rgba(255, 255, 255, 0.2);\n          }\n        ',
                ],
                [
                  '\n          &:hover {\n            background: rgba(255, 255, 255, 0.2);\n          }\n        ',
                ]
              ))
          )
        : theming_1.css(
            templateObject_12 ||
              (templateObject_12 = __makeTemplateObject(
                [
                  '\n          cursor: pointer;\n\n          &:hover {\n            background: ',
                  ';\n          }\n        ',
                ],
                [
                  '\n          cursor: pointer;\n\n          &:hover {\n            background: ',
                  ';\n          }\n        ',
                ]
              )),
            styles_1.background.app
          ))
    );
  },
  Count,
  function (props) {
    return props.size === 'small'
      ? styles_1.typography.weight.bold
      : styles_1.typography.weight.regular;
  },
  function (props) {
    return props.size === 'small' ? styles_1.typography.size.s2 : styles_1.typography.size.m3;
  },
  function (props) {
    return props.size === 'small' ? styles_1.typography.size.s3 : styles_1.typography.size.m3;
  },
  function (props) {
    return props.size === 'small' ? 2 : 4;
  },
  Text,
  function (props) {
    return props.inverse ? 'rgba(255, 255, 255, 0.5)' : styles_1.color.dark;
  },
  function (props) {
    return props.size === 'small' ? styles_1.typography.size.s1 : styles_1.typography.size.s2;
  },
  function (props) {
    return props.size === 'small' ? styles_1.typography.size.s2 : styles_1.typography.size.m1;
  },
  function (props) {
    return (
      props.inverse &&
      theming_1.css(
        templateObject_13 ||
          (templateObject_13 = __makeTemplateObject(
            ['\n      a {\n        color: rgba(255, 255, 255, 0.7);\n      }\n    '],
            ['\n      a {\n        color: rgba(255, 255, 255, 0.7);\n      }\n    ']
          ))
      )
    );
  }
);
function Cardinal(_a) {
  var isLoading = _a.isLoading,
    selectable = _a.selectable,
    onHover = _a.onHover,
    onClick = _a.onClick,
    active = _a.active,
    size = _a.size,
    count = _a.count,
    countLink = _a.countLink,
    text = _a.text,
    noPlural = _a.noPlural,
    status = _a.status,
    CountWrapper = _a.CountWrapper,
    TextWrapper = _a.TextWrapper,
    alignment = _a.alignment,
    props = __rest(_a, [
      'isLoading',
      'selectable',
      'onHover',
      'onClick',
      'active',
      'size',
      'count',
      'countLink',
      'text',
      'noPlural',
      'status',
      'CountWrapper',
      'TextWrapper',
      'alignment',
    ]);
  var countValue = count;
  if (countLink) {
    countValue = (
      <Link_1.Link href={countLink} inverse={status === 'inverse'}>
        {count}
      </Link_1.Link>
    );
  }
  var events = {};
  if (selectable) {
    events = {
      onMouseEnter: function () {
        return onHover(true);
      },
      onMouseLeave: function () {
        return onHover(false);
      },
      onClick: onClick,
    };
  }
  return (
    <CardinalInner
      isLoading={isLoading}
      selectable={selectable}
      active={active}
      size={size}
      alignment={alignment}
      inverse={status === 'inverse'}
      {...events}
      {...props}
    >
      <Count status={status}>
        <CountWrapper>{countValue}</CountWrapper>
      </Count>
      <Text>
        <TextWrapper>
          {!noPlural && typeof count === 'number' ? pluralize_1['default'](text, count) : text}
        </TextWrapper>
      </Text>
    </CardinalInner>
  );
}
exports.Cardinal = Cardinal;
var DefaultWrapper = function (_a) {
  var children = _a.children;
  return <span>{children}</span>;
};
Cardinal.defaultProps = {
  isLoading: false,
  selectable: false,
  onHover: function () {
    return 0;
  },
  onClick: function () {
    return 0;
  },
  active: false,
  size: 'large',
  status: 'default',
  count: '000',
  countLink: null,
  noPlural: false,
  text: 'loading',
  CountWrapper: DefaultWrapper,
  TextWrapper: DefaultWrapper,
  alignment: 'left',
};
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7,
  templateObject_8,
  templateObject_9,
  templateObject_10,
  templateObject_11,
  templateObject_12,
  templateObject_13,
  templateObject_14;
