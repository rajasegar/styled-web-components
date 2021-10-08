const properties = {
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
  'font-weight': 'fontWeight',
  'line-height': 'lineHeight',
  'letter-spacing': 'letterSpacing',
  'text-align': 'textAlign',
  'font-style': 'fontStyle',
}

export const TypographyProps = (C) =>
  class extends C {
    static get observedAttributes() {
      const ownAttrs = Object.keys(properties)
      const _observedAttrs = super.observedAttributes
        ? [...super.observedAttributes, ...ownAttrs]
        : ownAttrs
      return _observedAttrs
    }

    constructor() {
      super()
      this.applyStyle()
    }

    getCSSRule() {
      const styleSheet = this.shadowRoot.styleSheets[0]
      const [cssRule] = Array.from(styleSheet.cssRules).filter(
        (rule) => rule.selectorText === this.getAttribute('host') || ':host'
      )
      return cssRule
    }

    applyStyle() {
      const attributes = Array.from(this.attributes)
      const cssRule = this.getCSSRule()

      attributes
        .filter((attr) => properties[attr.name])
        .forEach((attr) => {
          cssRule.style[properties[attr.name]] = attr.value
        })
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(attr, oldValue, newValue)
      }

      const cssRule = this.getCSSRule()
      cssRule.style[properties[attr]] = newValue
    }
  }
