const properties = {
  color: 'color',
  bg: 'backgroundColor',
  opacity: 'opacity'
}

export const ColorProps = (C) => class extends C {
  static get observedAttributes() {
    const ownAttrs = ['color', 'bg', 'opacity']
    const _observedAttrs = super.observedAttributes ? [...super.observedAttributes, ...ownAttrs] : ownAttrs;
    return _observedAttrs;
  }

  constructor() {
    super()

    if(!this.shadowRoot) {
      this.attachShadow({ mode: 'open'})
      const template = document.createElement('template')
      template.innerHTML = '<style>:host{ display: block; }</style>';
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    this.applyStyles();

  }

  applyStyles() {
    const styleSheet = this.shadowRoot.styleSheets[0]
    const [ cssRule ] = Array.from(styleSheet.cssRules).filter(rule => rule.selectorText === ':host')
    const attributes = Array.from(this.attributes)

    attributes
      .filter(attr => properties[attr.name])
      .forEach(attr => {
        cssRule.style[properties[attr.name]] = attr.value
      })
  }

  attributeChangedCallback() {
    if(super.applyStyles) super.applyStyles()
    this.applyStyles();
  }
}
