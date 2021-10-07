import { 
  TypographyProps, 
  LayoutProps, 
  FlexboxProps,
  BorderProps,
  GridProps,
} from './src/index.js'

import { SpaceProps } from './src/SpaceProps.js'
import { ColorProps } from './src/ColorProps.js'



class FWBox extends SpaceProps(ColorProps(HTMLElement)) {
  constructor() {
    super()
    const template = document.createElement('template')
    template.innerHTML = '<slot></slot>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('fw-box', FWBox)

  /*
class FWFlex extends FlexboxProps(HTMLElement) {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = '<div><slot></slot></div>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('div')
    this.container.style.display = 'flex'
  }
}

customElements.define('fw-flex', FWFlex)

class FWGrid extends GridProps(HTMLElement) {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = '<div><slot></slot></div>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('div')
    this.container.style.display = 'grid'
  }
}

customElements.define('fw-grid', FWGrid)

class MyCard extends ColorProps(BorderProps(LayoutProps(SpaceProps(HTMLElement)))) {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = '<div><slot></slot></div>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('div')
  }
}

customElements.define('my-card', MyCard);

class BlockText extends TypographyProps(HTMLElement) {
constructor() {
    super();

    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = '<p><slot></slot></p>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('p')
  }
}

customElements.define('block-text', BlockText);

class Avatar extends BorderProps(HTMLImageElement) {
  constructor() {
    super()
    this.container = this;

  }
}

customElements.define('fw-avatar', Avatar, { extends: 'img' })
*/
