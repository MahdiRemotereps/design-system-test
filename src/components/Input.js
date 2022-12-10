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
exports.Input = exports.PureInput = void 0;
var react_1 = require('react');
var theming_1 = require('@storybook/theming');
var styles_1 = require('./shared/styles');
var animation_1 = require('./shared/animation');
var Icon_1 = require('./Icon');
var Link_1 = require('./Link');
var WithTooltip_1 = require('./tooltip/WithTooltip');
var TooltipMessage_1 = require('./tooltip/TooltipMessage');
// prettier-ignore
var Label = theming_1.styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: ", ";\n  font-family: ", ";\n  font-size: ", "px;\n  line-height: ", "px;\n"], ["\n  font-weight: ", ";\n  font-family: ", ";\n  font-size: ", "px;\n  line-height: ", "px;\n"])), function (props) { return props.appearance !== 'code' && styles_1.typography.weight.bold; }, function (props) { return props.appearance === 'code' && styles_1.typography.type.code; }, function (props) { return props.appearance === 'code' ? styles_1.typography.size.s1 - 1 : styles_1.typography.size.s2; }, function (props) { return props.appearance === 'code' ? 16 : 20; });
// prettier-ignore
var LabelWrapper = theming_1.styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: 8px;\n\n  ", "\n"], ["\n  margin-bottom: 8px;\n\n  ",
    "\n"])), function (props) { return props.hideLabel && theming_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border: 0px !important;\n    clip: rect(0 0 0 0) !important;\n    -webkit-clip-path: inset(100%) !important;\n    clip-path: inset(100%) !important;\n    height: 1px !important;\n    overflow: hidden !important;\n    padding: 0px !important;\n    position: absolute !important;\n    white-space: nowrap !important;\n    width: 1px !important;\n  "], ["\n    border: 0px !important;\n    clip: rect(0 0 0 0) !important;\n    -webkit-clip-path: inset(100%) !important;\n    clip-path: inset(100%) !important;\n    height: 1px !important;\n    overflow: hidden !important;\n    padding: 0px !important;\n    position: absolute !important;\n    white-space: nowrap !important;\n    width: 1px !important;\n  "]))); });
// prettier-ignore
var InputEl = theming_1.styled.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  &::placeholder {\n    color: ", ";\n  }\n  appearance: none;\n  border:none;\n  box-sizing: border-box;\n  display: block;\n  outline: none;\n  width: 100%;\n  margin: 0;\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: .5;\n  }\n\n  &:-webkit-autofill { -webkit-box-shadow: 0 0 0 3em ", " inset; }\n"], ["\n  &::placeholder {\n    color: ", ";\n  }\n  appearance: none;\n  border:none;\n  box-sizing: border-box;\n  display: block;\n  outline: none;\n  width: 100%;\n  margin: 0;\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: .5;\n  }\n\n  &:-webkit-autofill { -webkit-box-shadow: 0 0 0 3em ", " inset; }\n"])), styles_1.color.mediumdark, styles_1.color.lightest);
var getStackLevelStyling = function (props) {
  var radius = 4;
  var stackLevelDefinedStyling = theming_1.css(
    templateObject_5 ||
      (templateObject_5 = __makeTemplateObject(
        ['\n    position: relative;\n    ', '\n\n    &:focus {\n      z-index: 2;\n    }\n  '],
        ['\n    position: relative;\n    ', '\n\n    &:focus {\n      z-index: 2;\n    }\n  ']
      )),
    props.error && 'z-index: 1;'
  );
  switch (props.stackLevel) {
    case 'top':
      return theming_1.css(
        templateObject_6 ||
          (templateObject_6 = __makeTemplateObject(
            [
              '\n        border-top-left-radius: ',
              'px;\n        border-top-right-radius: ',
              'px;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n        ',
              '\n      ',
            ],
            [
              '\n        border-top-left-radius: ',
              'px;\n        border-top-right-radius: ',
              'px;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n        ',
              '\n      ',
            ]
          )),
        radius,
        radius,
        stackLevelDefinedStyling
      );
    case 'middle':
      return theming_1.css(
        templateObject_7 ||
          (templateObject_7 = __makeTemplateObject(
            ['\n        border-radius: 0px;\n        margin-top: -1px;\n        ', '\n      '],
            ['\n        border-radius: 0px;\n        margin-top: -1px;\n        ', '\n      ']
          )),
        stackLevelDefinedStyling
      );
    case 'bottom':
      return theming_1.css(
        templateObject_8 ||
          (templateObject_8 = __makeTemplateObject(
            [
              '\n        border-bottom-left-radius: ',
              'px;\n        border-bottom-right-radius: ',
              'px;\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n        margin-top: -1px;\n        ',
              '\n      ',
            ],
            [
              '\n        border-bottom-left-radius: ',
              'px;\n        border-bottom-right-radius: ',
              'px;\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n        margin-top: -1px;\n        ',
              '\n      ',
            ]
          )),
        radius,
        radius,
        stackLevelDefinedStyling
      );
    default:
      return theming_1.css(
        templateObject_9 ||
          (templateObject_9 = __makeTemplateObject(
            ['\n        border-radius: ', 'px;\n      '],
            ['\n        border-radius: ', 'px;\n      ']
          )),
        radius
      );
  }
};
// prettier-ignore
var InputWrapper = theming_1.styled.div(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  vertical-align: top;\n  width: 100%;\n\n  ", " {\n    position: relative;\n    ", "\n\n    background: ", ";\n    color: ", ";\n    font-size: ", "px;\n    line-height: 20px;\n    padding: 10px 15px; //40px tall\n    box-shadow: ", " 0 0 0 1px inset;\n    &:focus {\n      box-shadow: ", " 0 0 0 1px inset;\n    }\n\n    ", "\n\n    ", "\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  display: inline-block;\n  position: relative;\n  vertical-align: top;\n  width: 100%;\n\n  ", " {\n    position: relative;\n    ", "\n\n    background: ", ";\n    color: ", ";\n    font-size: ", "px;\n    line-height: 20px;\n    padding: 10px 15px; //40px tall\n    box-shadow: ", " 0 0 0 1px inset;\n    &:focus {\n      box-shadow: ", " 0 0 0 1px inset;\n    }\n\n    ",
    "\n\n    ",
    "\n  }\n\n  ",
    "\n\n  ",
    "\n\n  ",
    "\n"])), InputEl, function (props) { return getStackLevelStyling(props); }, styles_1.color.lightest, styles_1.color.darkest, styles_1.typography.size.s2, styles_1.color.border, styles_1.color.secondary, function (props) {
    return props.appearance === 'pill' && theming_1.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n        font-size: ", "px;\n        line-height: 16px;\n        padding: 6px 12px; //28px tall\n        border-radius: 3em;\n        background: transparent;\n      "], ["\n        font-size: ", "px;\n        line-height: 16px;\n        padding: 6px 12px; //28px tall\n        border-radius: 3em;\n        background: transparent;\n      "])), styles_1.typography.size.s1);
}, function (props) {
    return props.appearance === 'code' && theming_1.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n        font-size: ", "px;\n        line-height: 16px;\n        font-family: ", ";\n        border-radius: ", "px;\n        background: ", ";\n        padding: 8px 10px;\n      "], ["\n        font-size: ", "px;\n        line-height: 16px;\n        font-family: ", ";\n        border-radius: ", "px;\n        background: ", ";\n        padding: 8px 10px;\n      "])), styles_1.typography.size.s1 - 1, styles_1.typography.type.code, styles_1.spacing.borderRadius.small, styles_1.color.lightest);
}, function (props) {
    return props.startingType === 'password' && theming_1.css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      ", " {\n        padding-right: 52px;\n      }\n    "], ["\n      ", " {\n        padding-right: 52px;\n      }\n    "])), InputEl);
}, function (props) {
    return props.icon && theming_1.css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n      > svg {\n        transition: all 150ms ease-out;\n        position: absolute;\n        top: 50%;\n        ", "\n        z-index: 3;\n        ", "\n\n        background: transparent;\n\n        path {\n          transition: all 150ms ease-out;\n          fill: ", ";\n        }\n      }\n\n      ", ":focus + svg path {\n        fill: ", ";\n      }\n\n      ", " {\n        padding-left: 40px;\n\n        ", ";\n      }\n    "], ["\n      > svg {\n        transition: all 150ms ease-out;\n        position: absolute;\n        top: 50%;\n        ",
        "\n        z-index: 3;\n        ",
        "\n\n        background: transparent;\n\n        path {\n          transition: all 150ms ease-out;\n          fill: ", ";\n        }\n      }\n\n      ", ":focus + svg path {\n        fill: ", ";\n      }\n\n      ", " {\n        padding-left: 40px;\n\n        ",
        ";\n      }\n    "])), props.appearance === 'pill' || props.appearance === 'code'
        ? theming_1.css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n              font-size: ", "px;\n              height: 12px;\n              margin-top: -6px;\n              width: 12px;\n            "], ["\n              font-size: ", "px;\n              height: 12px;\n              margin-top: -6px;\n              width: 12px;\n            "])), styles_1.typography.size.s1) : theming_1.css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n              font-size: ", "px;\n              height: 14px;\n              margin-top: -7px;\n              width: 14px;\n            "], ["\n              font-size: ", "px;\n              height: 14px;\n              margin-top: -7px;\n              width: 14px;\n            "])), styles_1.typography.size.s2), props.appearance === 'pill' || props.appearance === 'code'
        ? theming_1.css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n              left: 10px;\n            "], ["\n              left: 10px;\n            "]))) : theming_1.css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n              left: ", ";\n            "], ["\n              left: ", ";\n            "])), props.appearance === 'tertiary' ? 0 : "15px"), styles_1.color.mediumdark, InputEl, styles_1.color.darker, InputEl, (props.appearance === 'pill' || props.appearance === 'code') && theming_1.css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n          padding-left: 30px;\n        "], ["\n          padding-left: 30px;\n        "]))));
}, function (props) {
    return props.error && theming_1.css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n      ", " {\n        box-shadow: ", " 0 0 0 1px inset;\n        &:focus {\n          box-shadow: ", " 0 0 0 1px inset !important;\n        }\n      }\n\n      svg {\n        animation: ", " 700ms ease-out;\n        path {\n          fill: ", ";\n        }\n      }\n    "], ["\n      ", " {\n        box-shadow: ", " 0 0 0 1px inset;\n        &:focus {\n          box-shadow: ", " 0 0 0 1px inset !important;\n        }\n      }\n\n      svg {\n        animation: ", " 700ms ease-out;\n        path {\n          fill: ", ";\n        }\n      }\n    "])), InputEl, styles_1.color.red, styles_1.color.red, animation_1.jiggle, styles_1.color.red);
});
// prettier-ignore
var InputContainer = theming_1.styled.div(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (props) { return props.orientation === 'horizontal' && theming_1.css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n    display: table-row;\n\n    ", ", ", " {\n      display: table-cell;\n    }\n\n    ", " {\n      width: 1px;\n      padding-right: 20px;\n      vertical-align: middle;\n    }\n\n    ", " {\n      width: auto;\n    }\n\n  "], ["\n    display: table-row;\n\n    ", ", ", " {\n      display: table-cell;\n    }\n\n    ", " {\n      width: 1px;\n      padding-right: 20px;\n      vertical-align: middle;\n    }\n\n    ", " {\n      width: auto;\n    }\n\n  "])), LabelWrapper, InputWrapper, LabelWrapper, InputWrapper); });
var ErrorTooltip = theming_1.styled(WithTooltip_1['default'])(
  templateObject_23 ||
    (templateObject_23 = __makeTemplateObject(['\n  width: 100%;\n'], ['\n  width: 100%;\n']))
);
var ErrorTooltipMessage = theming_1.styled(TooltipMessage_1.TooltipMessage)(
  templateObject_24 ||
    (templateObject_24 = __makeTemplateObject(['\n  width: 170px;\n'], ['\n  width: 170px;\n']))
);
var Action = theming_1.styled.div(
  templateObject_25 ||
    (templateObject_25 = __makeTemplateObject(
      [
        '\n  position: absolute;\n  right: 0;\n  min-width: 45px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-weight: bold;\n  font-size: 11px;\n  z-index: 2;\n',
      ],
      [
        '\n  position: absolute;\n  right: 0;\n  min-width: 45px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-weight: bold;\n  font-size: 11px;\n  z-index: 2;\n',
      ]
    ))
);
var getErrorMessage = function (_a) {
  var error = _a.error,
    value = _a.value,
    lastErrorValue = _a.lastErrorValue;
  var errorMessage = typeof error === 'function' ? error(value) : error;
  if (lastErrorValue) {
    if (value !== lastErrorValue) {
      errorMessage = null;
    }
  }
  return errorMessage;
};
// FC<Props & ComponentProps<typeof InputEl>>
exports.PureInput = react_1.forwardRef(function (_a, ref) {
  var id = _a.id,
    _b = _a.appearance,
    appearance = _b === void 0 ? 'default' : _b,
    _c = _a.className,
    className = _c === void 0 ? null : _c,
    _d = _a.error,
    error = _d === void 0 ? null : _d,
    _e = _a.errorTooltipPlacement,
    errorTooltipPlacement = _e === void 0 ? 'right' : _e,
    _f = _a.hideLabel,
    hideLabel = _f === void 0 ? false : _f,
    _g = _a.icon,
    icon = _g === void 0 ? null : _g,
    label = _a.label,
    _h = _a.lastErrorValue,
    lastErrorValue = _h === void 0 ? null : _h,
    _j = _a.onActionClick,
    onActionClick = _j === void 0 ? null : _j,
    _k = _a.orientation,
    orientation = _k === void 0 ? 'vertical' : _k,
    _l = _a.stackLevel,
    stackLevel = _l === void 0 ? undefined : _l,
    _m = _a.startingType,
    startingType = _m === void 0 ? 'text' : _m,
    _o = _a.suppressErrorMessage,
    suppressErrorMessage = _o === void 0 ? false : _o,
    _p = _a.type,
    type = _p === void 0 ? 'text' : _p,
    _q = _a.value,
    value = _q === void 0 ? '' : _q,
    props = __rest(_a, [
      'id',
      'appearance',
      'className',
      'error',
      'errorTooltipPlacement',
      'hideLabel',
      'icon',
      'label',
      'lastErrorValue',
      'onActionClick',
      'orientation',
      'stackLevel',
      'startingType',
      'suppressErrorMessage',
      'type',
      'value',
    ]);
  var _r = react_1.useState(
      getErrorMessage({ error: error, value: value, lastErrorValue: lastErrorValue })
    ),
    errorMessage = _r[0],
    setErrorMessage = _r[1];
  var errorId = id + '-error';
  react_1.useEffect(
    function () {
      setErrorMessage(
        getErrorMessage({ error: error, value: value, lastErrorValue: lastErrorValue })
      );
    },
    [value, error, lastErrorValue]
  );
  var inputEl = (
    <InputEl
      id={id}
      // Pass the ref to the actual input element so it can be controlled
      // externally.
      ref={ref}
      value={value}
      type={type}
      aria-describedby={errorId}
      aria-invalid={!!error}
      {...props}
    />
  );
  return (
    <InputContainer orientation={orientation} className={className}>
      <LabelWrapper hideLabel={hideLabel}>
        <Label htmlFor={id} appearance={appearance}>
          {label}
        </Label>
      </LabelWrapper>

      <InputWrapper
        error={errorMessage}
        data-error={errorMessage}
        icon={icon}
        appearance={appearance}
        stackLevel={stackLevel}
        startingType={startingType}
      >
        {icon && <Icon_1.Icon icon={icon} aria-hidden />}

        <ErrorTooltip
          tabIndex={-1}
          placement={errorTooltipPlacement}
          trigger="none"
          startOpen
          tagName="div"
          hasChrome={!!errorMessage && !suppressErrorMessage}
          tooltip={
            errorMessage && !suppressErrorMessage && <ErrorTooltipMessage desc={errorMessage} />
          }
        >
          {inputEl}
        </ErrorTooltip>

        {startingType === 'password' && (
          <Action>
            <Link_1.Link isButton tertiary onClick={onActionClick} type="button">
              {type === 'password' ? 'Show' : 'Hide'}
            </Link_1.Link>
          </Action>
        )}
      </InputWrapper>
    </InputContainer>
  );
});
exports.Input = react_1.forwardRef(function (_a, ref) {
  var startingType = _a.type,
    startFocused = _a.startFocused,
    rest = __rest(_a, ['type', 'startFocused']);
  var _b = react_1.useState(startingType),
    type = _b[0],
    setType = _b[1];
  var togglePasswordType = react_1.useCallback(
    function (event) {
      // Make sure this does not submit a form
      event.preventDefault();
      event.stopPropagation();
      if (type === 'password') {
        setType('text');
        return;
      }
      setType('password');
    },
    [type, setType]
  );
  // Outside refs take precedence
  var selfRef = react_1.useRef();
  var inputRef = ref || selfRef;
  var didFocusOnStart = react_1.useRef(false);
  react_1.useEffect(
    function () {
      if (inputRef.current && startFocused && !didFocusOnStart.current) {
        inputRef.current.focus();
        didFocusOnStart.current = true;
      }
    },
    [inputRef, didFocusOnStart]
  );
  return (
    <exports.PureInput
      ref={inputRef}
      startingType={startingType}
      type={type}
      onActionClick={togglePasswordType}
      {...rest}
    />
  );
});
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
  templateObject_18,
  templateObject_19,
  templateObject_20,
  templateObject_21,
  templateObject_22,
  templateObject_23,
  templateObject_24,
  templateObject_25;
