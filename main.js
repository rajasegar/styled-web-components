import { 
  SpaceProps, 
  ColorProps, 
  TypographyProps, 
  LayoutProps, 
  FlexboxProps,
  BorderProps,
} from './dist/bundle.js'


class FWBox extends LayoutProps(TypographyProps(ColorProps(SpaceProps(HTMLElement)))) {
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
