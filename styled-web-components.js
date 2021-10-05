const SpacingProps = (C) => class extends C {
  static get observedAttributes() {
    return [
      ...super.observedAttributes || [],
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
    ]
  }

  attributeChangedCallback(attr) {
    if(super.attributeChangedCallback) super.attributeChangedCallback(attr)
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
    }
    const _value = this.getAttribute(attr);
    switch (attr) {
      case 'mx':
        this.container.style.marginRight = _value
        this.container.style.marginLeft = _value
        break

      case 'my':
        this.container.style.marginTop = _value
        this.container.style.marginBottom = _value
        break

      case 'px':
        this.container.style.paddingLeft = _value
        this.container.style.paddingRight = _value
        break

      case 'py':
        this.container.style.paddingBottom = _value
        this.container.style.paddingTop = _value
        break

      default:
        this.container.style[properties[attr]] = _value
    }
  }

}

const ColorProps = (C) => class extends C {
  static get observedAttributes() {
    const ownAttrs = ['color', 'bg', 'opacity']
    const _observedAttrs = super.observedAttributes ? [...super.observedAttributes, ...ownAttrs] : ownAttrs;
    return _observedAttrs;
  }

  attributeChangedCallback(attr) {

    if(super.attributeChangedCallback) super.attributeChangedCallback(attr)
    const properties = {
      color: 'color',
      bg: 'backgroundColor',
      opacity: 'opacity'
    }

    const _value = this.getAttribute(attr)
    this.container.style[properties[attr]] = _value

  }
}

const TypographyProps = (C) => class extends C {
  static get observedAttributes() {
    return [...super.observedAttributes || [], 
      'font-family',
      'font-size',
      'font-weight',
      'line-height',
      'letter-spacing',
      'text-align',
      'font-style'
    ]
  }

  attributeChangedCallback(attr) {
    if(super.attributeChangedCallback) {
      super.attributeChangedCallback(attr)
    }

    const properties = {
      'font-family': 'fontFamily',
      'font-size': 'fontSize',
      'font-weight': 'fontWeight',
      'line-height': 'lineHeight',
      'letter-spacing': 'letterSpacing',
      'text-align': 'textAlign',
      'font-style': 'fontStyle'
    }

    const _value = this.getAttribute(attr)
    this.container.style[properties[attr]] = _value
  }
}

export { SpacingProps, ColorProps, TypographyProps }
