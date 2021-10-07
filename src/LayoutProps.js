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
          console.log(attr.name)
          switch (attr.name) {
            case 'size':
              cssRule.style.width = attr.value
              cssRule.style.height = attr.value
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
