export const FocusProps = (C) =>
  class extends C {
    static get observedAttributes() {
      const ownAttrs = ['focus']
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
      const styleSheet = this.shadowRoot.styleSheets[0]
      const _host = this.host || ':host'
      const selector = _host === ':host' ? ':host(:focus)' : `${_host}:focus`
      styleSheet.insertRule(
        `${selector} { ${this.getAttribute('focus')} }`,
        styleSheet.cssRules.length
      )
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(attr, oldValue, newValue)
      }
      this.applyStyle()
    }
  }
