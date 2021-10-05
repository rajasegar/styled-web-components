import { SpacingProps, ColorProps, TypographyProps } from './styled-web-components.js'


class FWBox extends TypographyProps(ColorProps(SpacingProps(HTMLElement))) {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = '<div><slot></slot></div>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('div')
  }
}

customElements.define('fw-box', FWBox)
