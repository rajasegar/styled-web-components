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

      if (!this.shadowRoot) {
        this.attachShadow({ mode: 'open' })
        const template = document.createElement('template')
        template.innerHTML = '<style>:host{ display: block; }</style>'
        this.shadowRoot.appendChild(template.content.cloneNode(true))
      }
      this.applyStyles()
    }

    applyStyles() {
      const styleSheet = this.shadowRoot.styleSheets[0]
      const [cssRule] = Array.from(styleSheet.cssRules).filter(
        (rule) => rule.selectorText === ':host'
      )
      const attributes = Array.from(this.attributes)

      attributes
        .filter((attr) => properties[attr.name])
        .forEach((attr) => {
          cssRule.style[properties[attr.name]] = attr.value
        })
    }

    attributeChangedCallback() {
      if (super.applyStyles) super.applyStyles()
      this.applyStyles()
    }
  }
