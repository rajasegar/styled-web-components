const properties = {
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
}
export const FlexboxProps = (C) =>
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
        template.innerHTML = '<style>:host{ display: flex; }</style>'
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
