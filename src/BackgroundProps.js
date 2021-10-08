const properties = {
  background: 'background',
  'background-image': 'backgroundImage',
  'background-size': 'backgroundSize',
  'background-position': 'backgroundPosition',
  'background-repeat': 'backgroundRepeat',
}
export const BackgroundProps = (C) =>
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
      this.host = this.getAttribute('host')
      this.applyStyle()
    }

    getCSSRule() {
      const styleSheet = this.shadowRoot.styleSheets[0]
      const [cssRule] = Array.from(styleSheet.cssRules).filter(
        (rule) => rule.selectorText === this.host || ':host'
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
