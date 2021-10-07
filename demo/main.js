import {
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  GridProps,
} from './styled-web-components.min.js'

class FWBox extends SpaceProps(ColorProps(HTMLElement)) {
  constructor() {
    super()
    const template = document.createElement('template')
    template.innerHTML = '<slot></slot>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('fw-box', FWBox)

class FWFlex extends FlexboxProps(HTMLElement) {
  constructor() {
    super()
    const template = document.createElement('template')
    template.innerHTML = '<slot></slot>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('fw-flex', FWFlex)

class FWGrid extends GridProps(HTMLElement) {
  constructor() {
    super()
    const template = document.createElement('template')
    template.innerHTML = '<slot></slot>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('fw-grid', FWGrid)

const Card = BorderProps(ColorProps(LayoutProps(SpaceProps(HTMLElement))))
class MyCard extends Card {
  constructor() {
    super()
    const template = document.createElement('template')
    template.innerHTML = '<slot></slot>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('my-card', MyCard)

class BlockText extends TypographyProps(HTMLElement) {
  constructor() {
    super()

    const template = document.createElement('template')
    template.innerHTML = '<p><slot></slot></p>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('p')
  }
}

customElements.define('block-text', BlockText)
