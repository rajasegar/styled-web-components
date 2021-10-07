const properties = {
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
}
export const GridProps = (C) =>
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
        template.innerHTML = '<style>:host{ display: grid; }</style>'
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
