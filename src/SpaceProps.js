const properties = {
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
}

export const SpaceProps = (C) =>
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
          switch (attr) {
            case 'mx':
              cssRule.style.marginRight = attr.value
              cssRule.style.marginLeft = attr.value
              break

            case 'my':
              cssRule.style.marginTop = attr.value
              cssRule.style.marginBottom = attr.value
              break

            case 'px':
              cssRule.style.paddingLeft = attr.value
              cssRule.style.paddingRight = attr.value
              break

            case 'py':
              cssRule.style.paddingBottom = attr.value
              cssRule.style.paddingTop = attr.value
              break

            default:
              cssRule.style[properties[attr.name]] = attr.value
          }
        })
    }
    attributeChangedCallback(attr, oldValue, newValue) {
      if (super.attributeChangedCallback)
        super.attributeChangedCallback(attr, oldValue, newValue)

      const cssRule = this.getCSSRule()

      switch (attr) {
        case 'mx':
          cssRule.style.marginRight = newValue
          cssRule.style.marginLeft = newValue
          break

        case 'my':
          cssRule.style.marginTop = newValue
          cssRule.style.marginBottom = newValue
          break

        case 'px':
          cssRule.style.paddingLeft = newValue
          cssRule.style.paddingRight = newValue
          break

        case 'py':
          cssRule.style.paddingBottom = newValue
          cssRule.style.paddingTop = newValue
          break

        default:
          cssRule.style[properties[attr]] = newValue
      }
    }
  }
