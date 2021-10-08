
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const properties$9 = {
  background: 'background',
  'background-image': 'backgroundImage',
  'background-size': 'backgroundSize',
  'background-position': 'backgroundPosition',
  'background-repeat': 'backgroundRepeat',
};
const BackgroundProps = (C) =>
  class extends C {
    static get observedAttributes() {
      const ownAttrs = Object.keys(properties$9);

      const _observedAttrs = super.observedAttributes
        ? [...super.observedAttributes, ...ownAttrs]
        : ownAttrs;
      return _observedAttrs
    }

    constructor() {
      super();
      this.host = this.getAttribute('host');
      this.applyStyle();
    }

    getCSSRule() {
      const styleSheet = this.shadowRoot.styleSheets[0];
      const [cssRule] = Array.from(styleSheet.cssRules).filter(
        (rule) => rule.selectorText === this.host || ':host'
      );
      return cssRule
    }

    applyStyle() {
      const attributes = Array.from(this.attributes);
      const cssRule = this.getCSSRule();

      attributes
        .filter((attr) => properties$9[attr.name])
        .forEach((attr) => {
          cssRule.style[properties$9[attr.name]] = attr.value;
        });
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(attr, oldValue, newValue);
      }
      const cssRule = this.getCSSRule();

      cssRule.style[properties$9[attr]] = newValue;
    }
  };

const properties$8 = {
  border: 'border',
  'border-width': 'borderWidth',
  'border-style': 'borderStyle',
  'border-color': 'borderColor',
  'border-radius': 'borderRadius',
  'border-top': 'borderTop',
  'border-top-width': 'borderTopWidth',
  'border-top-style': 'borderTopStyle',
  'border-top-color': 'borderTopColor',
  'border-top-left-radius': 'borderTopLeftRadius',
  'border-top-right-radius': 'borderTopRightRadius',
  'border-bottom': 'borderBottom',
  'border-bottom-width': 'borderBottomWidth',
  'border-bottom-style': 'borderBottomStyle',
  'border-bottom-color': 'borderBottomColor',
  'border-bottom-left-radius': 'borderBottomLeftRadius',
  'border-bottom-right-radius': 'borderBottomRightRadius',
  'border-right': 'borderRight',
  'border-right-width': 'borderRightWidth',
  'border-right-style': 'borderRightStyle',
  'border-right-color': 'borderRightColor',
  'border-left': 'borderLeft',
  'border-left-width': 'borderLeftWidth',
  'border-left-style': 'borderLeftStyle',
  'border-left-color': 'borderLeftColor',
  'border-x': 'noop',
  'border-y': 'noop',
};
const BorderProps = (C) =>
  class extends C {
    static get observedAttributes() {
      const ownAttrs = Object.keys(properties$8);

      const _observedAttrs = super.observedAttributes
        ? [...super.observedAttributes, ...ownAttrs]
        : ownAttrs;
      return _observedAttrs
    }

    constructor() {
      super();
      this.host = this.getAttribute('host');
      this.applyStyle();
    }

    getCSSRule() {
      const styleSheet = this.shadowRoot.styleSheets[0];
      const [cssRule] = Array.from(styleSheet.cssRules).filter(
        (rule) => rule.selectorText === this.host || ':host'
      );
      return cssRule
    }
    applyStyle() {
      const cssRule = this.getCSSRule();
      const attributes = Array.from(this.attributes);

      attributes
        .filter((attr) => properties$8[attr.name])
        .forEach((attr) => {
          switch (attr) {
            case 'border-x':
              cssRule.style.borderLeft = attr.value;
              cssRule.style.borderRight = attr.value;
              break
            case 'border-y':
              cssRule.style.borderTop = attr.value;
              cssRule.style.borderBottom = attr.value;
              break

            default:
              cssRule.style[properties$8[attr.name]] = attr.value;
          }
        });
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(attr, oldValue, newValue);
      }

      const cssRule = this.getCSSRule();
      switch (attr) {
        case 'border-x':
          cssRule.style.borderLeft = newValue;
          cssRule.style.borderRight = newValue;
          break
        case 'border-y':
          cssRule.style.borderTop = newValue;
          cssRule.style.borderBottom = newValue;
          break

        default:
          cssRule.style[properties$8[attr]] = newValue;
      }
    }
  };

const properties$7 = {
  color: 'color',
  bg: 'backgroundColor',
  opacity: 'opacity',
};
const ColorProps = (C) =>
  class extends C {
    static get observedAttributes() {
      const ownAttrs = ['color', 'bg', 'opacity'];
      const _observedAttrs = super.observedAttributes
        ? [...super.observedAttributes, ...ownAttrs]
        : ownAttrs;
      return _observedAttrs
    }

    constructor() {
      super();
      this.host = this.getAttribute('host');
      this.applyStyle();
    }

    getCSSRule() {
      const styleSheet = this.shadowRoot.styleSheets[0];
      const [cssRule] = Array.from(styleSheet.cssRules).filter(
        (rule) => rule.selectorText === this.host || ':host'
      );
      return cssRule
    }

    applyStyle() {
      const attributes = Array.from(this.attributes);
      const cssRule = this.getCSSRule();

      attributes
        .filter((attr) => properties$7[attr.name])
        .forEach((attr) => {
          cssRule.style[properties$7[attr.name]] = attr.value;
        });
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(attr, oldValue, newValue);
      }
      const cssRule = this.getCSSRule();

      cssRule.style[properties$7[attr]] = newValue;
    }
  };

const properties$6 = {
  'align-items': 'alignItems',
  'align-content': 'alignContent',
  'justify-items': 'justifyItems',
  'justify-content': 'justifyContent',
  'flex-wrap': 'flexWrap',
  'flex-direction': 'flexDirection',
  flex: 'flex',
  'flex-grow': 'flexGrow',
  'flex-shrink': 'flexShrink',
  'flex-basis': 'flexBasis',
  'justify-self': 'justifySelf',
  'align-self': 'alignSelf',
  order: 'order',
};
const FlexboxProps = (C) =>
  class extends C {
    static get observedAttributes() {
      const ownAttrs = Object.keys(properties$6);

      const _observedAttrs = super.observedAttributes
        ? [...super.observedAttributes, ...ownAttrs]
        : ownAttrs;
      return _observedAttrs
    }

    constructor() {
      super();
      this.host = this.getAttribute('host');
      this.applyStyle();
    }

    getCSSRule() {
      const styleSheet = this.shadowRoot.styleSheets[0];
      const [cssRule] = Array.from(styleSheet.cssRules).filter(
        (rule) => rule.selectorText === this.host || ':host'
      );
      return cssRule
    }

    applyStyle() {
      const attributes = Array.from(this.attributes);
      const cssRule = this.getCSSRule();

      attributes
        .filter((attr) => properties$6[attr.name])
        .forEach((attr) => {
          cssRule.style[properties$6[attr.name]] = attr.value;
        });
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(attr, oldValue, newValue);
      }
      const cssRule = this.getCSSRule();

      cssRule.style[properties$6[attr]] = newValue;
    }
  };

const properties$5 = {
  'grid-gap': 'gridGap',
  'grid-row-gap': 'gridRowGap',
  'grid-column-gap': 'gridColumnGap',
  'grid-column': 'gridColumn',
  'grid-row': 'gridRow',
  'grid-area': 'gridArea',
  'grid-auto-flow': 'gridAutoFlow',
  'grid-auto-rows': 'gridAutoRows',
  'grid-auto-columns': 'gridAutoColumns',
  'grid-template-rows': 'gridTemplateRows',
  'grid-template-columns': 'gridTemplateColumns',
  'grid-template-areas': 'gridTemplateArea',
};
const GridProps = (C) =>
  class extends C {
    static get observedAttributes() {
      const ownAttrs = Object.keys(properties$5);

      const _observedAttrs = super.observedAttributes
        ? [...super.observedAttributes, ...ownAttrs]
        : ownAttrs;
      return _observedAttrs
    }

    constructor() {
      super();
      this.host = this.getAttribute('host');
      this.applyStyle();
    }

    getCSSRule() {
      const styleSheet = this.shadowRoot.styleSheets[0];
      const [cssRule] = Array.from(styleSheet.cssRules).filter(
        (rule) => rule.selectorText === this.host || ':host'
      );
      return cssRule
    }

    applyStyle() {
      const attributes = Array.from(this.attributes);
      const cssRule = this.getCSSRule();

      attributes
        .filter((attr) => properties$5[attr.name])
        .forEach((attr) => {
          cssRule.style[properties$5[attr.name]] = attr.value;
        });
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(attr, oldValue, newValue);
      }
      const cssRule = this.getCSSRule();

      cssRule.style[properties$5[attr]] = newValue;
    }
  };

const properties$4 = {
  width: 'width',
  height: 'height',
  'min-width': 'minWidth',
  'min-height': 'minHeight',
  'max-width': 'maxWidth',
  'max-height': 'maxHeight',
  size: 'size',
  display: 'display',
  'vertical-align': 'verticalAlign',
  overflow: 'overflow',
  'overflow-x': 'overflowX',
  'overflow-y': 'overflowY',
};

const LayoutProps = (C) =>
  class extends C {
    static get observedAttributes() {
      const ownAttrs = Object.keys(properties$4);

      const _observedAttrs = super.observedAttributes
        ? [...super.observedAttributes, ...ownAttrs]
        : ownAttrs;
      return _observedAttrs
    }

    constructor() {
      super();
      this.host = this.getAttribute('host');
      this.applyStyle();
    }

    applyStyle() {
      const cssRule = this.getCSSRule();
      const attributes = Array.from(this.attributes);

      attributes
        .filter((attr) => properties$4[attr.name])
        .forEach((attr) => {
          if (attr === 'size') {
            cssRule.style.width = newValue;
            cssRule.style.height = newValue;
          } else {
            cssRule.style[properties$4[attr.name]] = attr.value;
          }
        });
    }

    getCSSRule() {
      const styleSheet = this.shadowRoot.styleSheets[0];
      const [cssRule] = Array.from(styleSheet.cssRules).filter(
        (rule) => rule.selectorText === this.host || ':host'
      );
      return cssRule
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(attr, oldValue, newValue);
      }

      const cssRule = this.getCSSRule();

      if (attr === 'size') {
        cssRule.style.width = newValue;
        cssRule.style.height = newValue;
      } else {
        cssRule.style[properties$4[attr]] = newValue;
      }
    }
  };

const properties$3 = {
  position: 'position',
  'z-index': 'zIndex',
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
};
const PositionProps = (C) =>
  class extends C {
    static get observedAttributes() {
      const ownAttrs = Object.keys(properties$3);
      const _observedAttrs = super.observedAttributes
        ? [...super.observedAttributes, ...ownAttrs]
        : ownAttrs;
      return _observedAttrs
    }

    constructor() {
      super();
      this.host = this.getAttribute('host');
      this.applyStyle();
    }

    getCSSRule() {
      const styleSheet = this.shadowRoot.styleSheets[0];
      const [cssRule] = Array.from(styleSheet.cssRules).filter(
        (rule) => rule.selectorText === this.host || ':host'
      );
      return cssRule
    }

    applyStyle() {
      const attributes = Array.from(this.attributes);
      const cssRule = this.getCSSRule();

      attributes
        .filter((attr) => properties$3[attr.name])
        .forEach((attr) => {
          cssRule.style[properties$3[attr.name]] = attr.value;
        });
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(attr, oldValue, newValue);
      }
      const cssRule = this.getCSSRule();

      cssRule.style[properties$3[attr]] = newValue;
    }
  };

const properties$2 = {
  'text-shadow': 'textShadow',
  'box-shadow': 'boxShadow',
};
const ShadowProps = (C) =>
  class extends C {
    static get observedAttributes() {
      const ownAttrs = Object.keys(properties$2);
      const _observedAttrs = super.observedAttributes
        ? [...super.observedAttributes, ...ownAttrs]
        : ownAttrs;
      return _observedAttrs
    }

    constructor() {
      super();
      this.host = this.getAttribute('host');
      this.applyStyle();
    }

    getCSSRule() {
      const styleSheet = this.shadowRoot.styleSheets[0];
      const [cssRule] = Array.from(styleSheet.cssRules).filter(
        (rule) => rule.selectorText === this.host || ':host'
      );
      return cssRule
    }

    applyStyle() {
      const attributes = Array.from(this.attributes);
      const cssRule = this.getCSSRule();

      attributes
        .filter((attr) => properties$2[attr.name])
        .forEach((attr) => {
          cssRule.style[properties$2[attr.name]] = attr.value;
        });
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(attr, oldValue, newValue);
      }
      const cssRule = this.getCSSRule();

      cssRule.style[properties$2[attr]] = newValue;
    }
  };

const properties$1 = {
  m: 'margin',
  p: 'padding',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  mx: 'noop',
  my: 'noop',
  px: 'noop',
  py: 'noop',
};

const SpaceProps = (C) =>
  class extends C {
    static get observedAttributes() {
      const ownAttrs = Object.keys(properties$1);
      const _observedAttrs = super.observedAttributes
        ? [...super.observedAttributes, ...ownAttrs]
        : ownAttrs;
      return _observedAttrs
    }

    constructor() {
      super();
      this.host = this.getAttribute('host');
      this.applyStyle();
    }

    getCSSRule() {
      const styleSheet = this.shadowRoot.styleSheets[0];
      const [cssRule] = Array.from(styleSheet.cssRules).filter(
        (rule) => rule.selectorText === this.host || ':host'
      );
      return cssRule
    }

    applyStyle() {
      const attributes = Array.from(this.attributes);
      const cssRule = this.getCSSRule();

      attributes
        .filter((attr) => properties$1[attr.name])
        .forEach((attr) => {
          switch (attr) {
            case 'mx':
              cssRule.style.marginRight = attr.value;
              cssRule.style.marginLeft = attr.value;
              break

            case 'my':
              cssRule.style.marginTop = attr.value;
              cssRule.style.marginBottom = attr.value;
              break

            case 'px':
              cssRule.style.paddingLeft = attr.value;
              cssRule.style.paddingRight = attr.value;
              break

            case 'py':
              cssRule.style.paddingBottom = attr.value;
              cssRule.style.paddingTop = attr.value;
              break

            default:
              cssRule.style[properties$1[attr.name]] = attr.value;
          }
        });
    }
    attributeChangedCallback(attr, oldValue, newValue) {
      if (super.attributeChangedCallback)
        super.attributeChangedCallback(attr, oldValue, newValue);

      const cssRule = this.getCSSRule();

      switch (attr) {
        case 'mx':
          cssRule.style.marginRight = newValue;
          cssRule.style.marginLeft = newValue;
          break

        case 'my':
          cssRule.style.marginTop = newValue;
          cssRule.style.marginBottom = newValue;
          break

        case 'px':
          cssRule.style.paddingLeft = newValue;
          cssRule.style.paddingRight = newValue;
          break

        case 'py':
          cssRule.style.paddingBottom = newValue;
          cssRule.style.paddingTop = newValue;
          break

        default:
          cssRule.style[properties$1[attr]] = newValue;
      }
    }
  };

const properties = {
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
  'font-weight': 'fontWeight',
  'line-height': 'lineHeight',
  'letter-spacing': 'letterSpacing',
  'text-align': 'textAlign',
  'font-style': 'fontStyle',
};

const TypographyProps = (C) =>
  class extends C {
    static get observedAttributes() {
      const ownAttrs = Object.keys(properties);
      const _observedAttrs = super.observedAttributes
        ? [...super.observedAttributes, ...ownAttrs]
        : ownAttrs;
      return _observedAttrs
    }

    constructor() {
      super();
      this.applyStyle();
    }

    getCSSRule() {
      const styleSheet = this.shadowRoot.styleSheets[0];
      const [cssRule] = Array.from(styleSheet.cssRules).filter(
        (rule) => rule.selectorText === this.getAttribute('host') || ':host'
      );
      return cssRule
    }

    applyStyle() {
      const attributes = Array.from(this.attributes);
      const cssRule = this.getCSSRule();

      attributes
        .filter((attr) => properties[attr.name])
        .forEach((attr) => {
          cssRule.style[properties[attr.name]] = attr.value;
        });
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(attr, oldValue, newValue);
      }

      const cssRule = this.getCSSRule();
      cssRule.style[properties[attr]] = newValue;
    }
  };

exports.BackgroundProps = BackgroundProps;
exports.BorderProps = BorderProps;
exports.ColorProps = ColorProps;
exports.FlexboxProps = FlexboxProps;
exports.GridProps = GridProps;
exports.LayoutProps = LayoutProps;
exports.PositionProps = PositionProps;
exports.ShadowProps = ShadowProps;
exports.SpaceProps = SpaceProps;
exports.TypographyProps = TypographyProps;
