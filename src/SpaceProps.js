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
export const SpaceProps = (C) => class extends C {
  static get observedAttributes() {
    const ownAttrs = [
      'm',
      'mt',
      'mr',
      'mb',
      'ml',
      'mx',
      'my',
      'p',
      'pt',
      'pr',
      'pb',
      'pl',
      'px',
      'py',
    ];
    const _observedAttrs = super.observedAttributes ? [...super.observedAttributes, ...ownAttrs] : ownAttrs;
    return _observedAttrs;
  }

  constructor() {
    super()
    if(!this.shadowRoot) {
      this.attachShadow({ mode: 'open'})
      const style = document.createElement('style')
      this.shadowRoot.appendChild(style)
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
        console.log(attr.name)

    switch (attr.name) {
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

  attributeChangedCallback() {
    if(super.applyStyles) super.applyStyles()
    this.applyStyles();
  }
}
