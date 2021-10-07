const properties = {
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
}

export const BorderProps = (C) =>
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
        template.innerHTML = '<style>:host { display: block; }</style>'
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
          switch (attr.name) {
            case 'border-x':
              cssRule.style.borderLeft = attr.value
              cssRule.style.borderRight = attr.value
              break

            case 'border-y':
              cssRule.style.borderTop = attr.value
              cssRule.style.borderBottom = attr.value
              break

            default:
              cssRule.style[properties[attr.name]] = attr.value
          }
        })
    }

    attributeChangedCallback() {
      if (super.applyStyles) super.applyStyles()
      this.applyStyles()
    }
  }
