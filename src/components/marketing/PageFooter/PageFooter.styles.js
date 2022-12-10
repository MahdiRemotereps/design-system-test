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
exports.FooterWrapper =
  exports.Lower =
  exports.Services =
  exports.Service =
  exports.HrWrapper =
  exports.Subscribe =
  exports.Column =
  exports.Colophon =
  exports.Text =
  exports.Upper =
  exports.UpperColumn =
  exports.Resource =
  exports.Meta =
  exports.ResourceAction =
  exports.ResourceDesc =
  exports.ResourceTitle =
  exports.Title =
    void 0;
var theming_1 = require('@storybook/theming');
var Link_1 = require('../../Link');
var Subheading_1 = require('../../Subheading');
var styles_1 = require('../../shared/styles');
exports.Title = theming_1.styled(Subheading_1.Subheading)(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  display: block;\n  font-size: ', 'px;\n  margin-bottom: 1rem;\n  color: ', ';\n'],
      ['\n  display: block;\n  font-size: ', 'px;\n  margin-bottom: 1rem;\n  color: ', ';\n']
    )),
  styles_1.typography.size.s1,
  styles_1.color.mediumdark
);
exports.ResourceTitle = theming_1.styled.div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  font-weight: ', ';\n  margin-bottom: 0.25rem;\n'],
      ['\n  font-weight: ', ';\n  margin-bottom: 0.25rem;\n']
    )),
  styles_1.typography.weight.extrabold
);
exports.ResourceDesc = theming_1.styled.div(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  margin-bottom: 0.25rem;\n'],
      ['\n  margin-bottom: 0.25rem;\n']
    ))
);
exports.ResourceAction = theming_1.styled(Link_1.Link)(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      ['\n  margin-right: 15px;\n  text-transform: capitalize;\n'],
      ['\n  margin-right: 15px;\n  text-transform: capitalize;\n']
    ))
);
exports.Meta = theming_1.styled.div(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ['\n  overflow: hidden;\n'],
      ['\n  overflow: hidden;\n']
    ))
);
exports.Resource = theming_1.styled.div(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        '\n  display: flex;\n  align-items: start;\n\n  &:not(:last-child) {\n    margin-bottom: 2rem;\n  }\n\n  > svg {\n    flex: 0 0 auto;\n    margin-right: 20px;\n    display: block;\n    width: 40px;\n    height: auto;\n  }\n\n  @media (min-width: ',
        'px) {\n    > svg {\n      width: 48px;\n    }\n  }\n',
      ],
      [
        '\n  display: flex;\n  align-items: start;\n\n  &:not(:last-child) {\n    margin-bottom: 2rem;\n  }\n\n  > svg {\n    flex: 0 0 auto;\n    margin-right: 20px;\n    display: block;\n    width: 40px;\n    height: auto;\n  }\n\n  @media (min-width: ',
        'px) {\n    > svg {\n      width: 48px;\n    }\n  }\n',
      ]
    )),
  styles_1.breakpoint * 1
);
exports.UpperColumn = theming_1.styled.div(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      [
        '\n  flex: 1;\n\n  padding-left: ',
        'px;\n  padding-right: ',
        'px;\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n\n  &:last-child {\n    border-top: 1px solid ',
        ';\n  }\n\n  @media (min-width: ',
        'px) {\n    &:first-child {\n      margin-left: ',
        '%;\n      padding-right: 60px;\n    }\n    &:last-child {\n      margin-right: ',
        '%;\n      padding-left: 60px;\n      border-top: none;\n      border-left: 1px solid ',
        ';\n    }\n  }\n\n  @media (min-width: ',
        'px) {\n    &:first-child {\n      margin-left: ',
        '%;\n    }\n    &:last-child {\n      margin-right: ',
        '%;\n    }\n  }\n\n  @media (min-width: ',
        'px) {\n    &:first-child {\n      margin-left: ',
        '%;\n    }\n    &:last-child {\n      margin-right: ',
        '%;\n    }\n  }\n\n  @media (min-width: ',
        'px) {\n    &:first-child {\n      margin-left: ',
        '%;\n    }\n    &:last-child {\n      margin-right: ',
        '%;\n    }\n  }\n',
      ],
      [
        '\n  flex: 1;\n\n  padding-left: ',
        'px;\n  padding-right: ',
        'px;\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n\n  &:last-child {\n    border-top: 1px solid ',
        ';\n  }\n\n  @media (min-width: ',
        'px) {\n    &:first-child {\n      margin-left: ',
        '%;\n      padding-right: 60px;\n    }\n    &:last-child {\n      margin-right: ',
        '%;\n      padding-left: 60px;\n      border-top: none;\n      border-left: 1px solid ',
        ';\n    }\n  }\n\n  @media (min-width: ',
        'px) {\n    &:first-child {\n      margin-left: ',
        '%;\n    }\n    &:last-child {\n      margin-right: ',
        '%;\n    }\n  }\n\n  @media (min-width: ',
        'px) {\n    &:first-child {\n      margin-left: ',
        '%;\n    }\n    &:last-child {\n      margin-right: ',
        '%;\n    }\n  }\n\n  @media (min-width: ',
        'px) {\n    &:first-child {\n      margin-left: ',
        '%;\n    }\n    &:last-child {\n      margin-right: ',
        '%;\n    }\n  }\n',
      ]
    )),
  styles_1.spacing.padding.medium,
  styles_1.spacing.padding.medium,
  styles_1.color.border,
  styles_1.breakpoint * 1,
  styles_1.pageMargin * 1,
  styles_1.pageMargin * 1,
  styles_1.color.border,
  styles_1.breakpoint * 2,
  styles_1.pageMargin * 2,
  styles_1.pageMargin * 2,
  styles_1.breakpoint * 3,
  styles_1.pageMargin * 3,
  styles_1.pageMargin * 3,
  styles_1.breakpoint * 4,
  styles_1.pageMargin * 4,
  styles_1.pageMargin * 4
);
exports.Upper = theming_1.styled.div(
  templateObject_8 ||
    (templateObject_8 = __makeTemplateObject(
      [
        '\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  border-bottom: 1px solid ',
        ';\n\n  @media (min-width: ',
        'px) {\n    flex-direction: row;\n  }\n',
      ],
      [
        '\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  border-bottom: 1px solid ',
        ';\n\n  @media (min-width: ',
        'px) {\n    flex-direction: row;\n  }\n',
      ]
    )),
  styles_1.color.border,
  styles_1.breakpoint
);
exports.Text = theming_1.styled.div(
  templateObject_9 ||
    (templateObject_9 = __makeTemplateObject(['\n  color: ', ';\n'], ['\n  color: ', ';\n'])),
  styles_1.color.darker
);
exports.Colophon = theming_1.styled.div(
  templateObject_10 ||
    (templateObject_10 = __makeTemplateObject(
      ['\n  a {\n    display: inline-block;\n    vertical-align: top;\n  }\n'],
      ['\n  a {\n    display: inline-block;\n    vertical-align: top;\n  }\n']
    ))
);
exports.Column = theming_1.styled.div(
  templateObject_11 ||
    (templateObject_11 = __makeTemplateObject(
      ['\n  > a {\n    display: block;\n    margin-bottom: 0.75rem;\n  }\n'],
      ['\n  > a {\n    display: block;\n    margin-bottom: 0.75rem;\n  }\n']
    ))
);
exports.Subscribe = theming_1.styled.div(
  templateObject_12 ||
    (templateObject_12 = __makeTemplateObject(
      ['\n  ', ' {\n    margin-bottom: 1rem;\n  }\n'],
      ['\n  ', ' {\n    margin-bottom: 1rem;\n  }\n']
    )),
  exports.Text
);
exports.HrWrapper = theming_1.styled.div(
  templateObject_13 ||
    (templateObject_13 = __makeTemplateObject(
      ['\n  ', ';\n  hr {\n    margin: 0;\n  }\n'],
      ['\n  ', ';\n  hr {\n    margin: 0;\n  }\n']
    )),
  styles_1.pageMargins
);
exports.Service = theming_1.styled.div(
  templateObject_15 ||
    (templateObject_15 = __makeTemplateObject(
      [
        '\n  &:not(:last-child) {\n    margin-bottom: 1rem;\n  }\n\n  svg {\n    height: 22px;\n    width: auto;\n    display: inline-block;\n    transition: all 150ms ease-out;\n  }\n\n  ',
        '\n\n  ',
        ' {\n    margin-bottom: 0.5rem;\n    color: ',
        ';\n  }\n',
      ],
      [
        '\n  &:not(:last-child) {\n    margin-bottom: 1rem;\n  }\n\n  svg {\n    height: 22px;\n    width: auto;\n    display: inline-block;\n    transition: all 150ms ease-out;\n  }\n\n  ',
        '\n\n  ',
        ' {\n    margin-bottom: 0.5rem;\n    color: ',
        ';\n  }\n',
      ]
    )),
  function (props) {
    return (
      props.muteLogo &&
      theming_1.css(
        templateObject_14 ||
          (templateObject_14 = __makeTemplateObject(
            [
              '\n      svg {\n        /* Turn down the pure black of these logos */\n        opacity: 0.75;\n      }\n    ',
            ],
            [
              '\n      svg {\n        /* Turn down the pure black of these logos */\n        opacity: 0.75;\n      }\n    ',
            ]
          ))
      )
    );
  },
  exports.Text,
  styles_1.color.mediumdark
);
exports.Services = theming_1.styled.div(
  templateObject_16 ||
    (templateObject_16 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  padding-top: 2rem;\n  padding-bottom: 1rem;\n\n  display: flex;\n  flex-wrap: wrap;\n\n  @media (min-width: ',
        'px) {\n    justify-content: space-around;\n    text-align: center;\n  }\n\n  ',
        ' {\n    flex: 0 0 50%;\n    @media (min-width: ',
        'px) {\n      flex: 1;\n    }\n  }\n\n  a {\n    display: inline-block;\n    transition: all 150ms ease-out;\n    transform: translate3d(0, 0, 0);\n\n    &:hover {\n      transform: translate3d(0, -2px, 0);\n    }\n\n    &:active {\n      transform: translate3d(0, 0, 0);\n    }\n  }\n',
      ],
      [
        '\n  ',
        ';\n  padding-top: 2rem;\n  padding-bottom: 1rem;\n\n  display: flex;\n  flex-wrap: wrap;\n\n  @media (min-width: ',
        'px) {\n    justify-content: space-around;\n    text-align: center;\n  }\n\n  ',
        ' {\n    flex: 0 0 50%;\n    @media (min-width: ',
        'px) {\n      flex: 1;\n    }\n  }\n\n  a {\n    display: inline-block;\n    transition: all 150ms ease-out;\n    transform: translate3d(0, 0, 0);\n\n    &:hover {\n      transform: translate3d(0, -2px, 0);\n    }\n\n    &:active {\n      transform: translate3d(0, 0, 0);\n    }\n  }\n',
      ]
    )),
  styles_1.pageMargins,
  styles_1.breakpoint,
  exports.Service,
  styles_1.breakpoint
);
exports.Lower = theming_1.styled.div(
  templateObject_17 ||
    (templateObject_17 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  padding-top: 3rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  ',
        ' {\n    width: 100%;\n    margin-bottom: 3rem;\n    display: block;\n\n    @media (min-width: ',
        'px) {\n      margin-bottom: 3rem;\n      width: auto;\n      max-width: 200px;\n    }\n  }\n\n  ',
        ' {\n    width: 50%;\n    margin-bottom: 2.25rem;\n\n    @media (min-width: ',
        'px) {\n      padding-right: 20px;\n      width: auto;\n      margin-bottom: 2.25rem;\n    }\n  }\n\n  ',
        ' {\n    width: 100%;\n    margin-bottom: 3rem;\n    @media (min-width: ',
        'px) {\n      width: auto;\n      margin-bottom: 3rem;\n    }\n  }\n',
      ],
      [
        '\n  ',
        ';\n  padding-top: 3rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  ',
        ' {\n    width: 100%;\n    margin-bottom: 3rem;\n    display: block;\n\n    @media (min-width: ',
        'px) {\n      margin-bottom: 3rem;\n      width: auto;\n      max-width: 200px;\n    }\n  }\n\n  ',
        ' {\n    width: 50%;\n    margin-bottom: 2.25rem;\n\n    @media (min-width: ',
        'px) {\n      padding-right: 20px;\n      width: auto;\n      margin-bottom: 2.25rem;\n    }\n  }\n\n  ',
        ' {\n    width: 100%;\n    margin-bottom: 3rem;\n    @media (min-width: ',
        'px) {\n      width: auto;\n      margin-bottom: 3rem;\n    }\n  }\n',
      ]
    )),
  styles_1.pageMargins,
  exports.Colophon,
  styles_1.breakpoint * 1,
  exports.Column,
  styles_1.breakpoint,
  exports.Subscribe,
  styles_1.breakpoint
);
exports.FooterWrapper = theming_1.styled.div(
  templateObject_18 ||
    (templateObject_18 = __makeTemplateObject(
      [
        '\n  background-color: ',
        ';\n  border-top: 1px solid ',
        ';\n  font-size: ',
        'px;\n  line-height: 20px;\n',
      ],
      [
        '\n  background-color: ',
        ';\n  border-top: 1px solid ',
        ';\n  font-size: ',
        'px;\n  line-height: 20px;\n',
      ]
    )),
  styles_1.background.app,
  styles_1.color.border,
  styles_1.typography.size.s2
);
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
  templateObject_14,
  templateObject_15,
  templateObject_16,
  templateObject_17,
  templateObject_18;
