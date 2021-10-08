const properties = {
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
}

export const LayoutProps = (C) =>
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

    applyStyle() {
      const cssRule = this.getCSSRule()
      const attributes = Array.from(this.attributes)

      attributes
        .filter((attr) => properties[attr.name])
        .forEach((attr) => {
          if (attr === 'size') {
            cssRule.style.width = newValue
            cssRule.style.height = newValue
          } else {
            cssRule.style[properties[attr.name]] = attr.value
          }
        })
    }

    getCSSRule() {
      const styleSheet = this.shadowRoot.styleSheets[0]
      const [cssRule] = Array.from(styleSheet.cssRules).filter(
        (rule) => rule.selectorText === this.host || ':host'
      )
      return cssRule
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(attr, oldValue, newValue)
      }

      const cssRule = this.getCSSRule()

      if (attr === 'size') {
        cssRule.style.width = newValue
        cssRule.style.height = newValue
      } else {
        cssRule.style[properties[attr]] = newValue
      }
    }
  }
