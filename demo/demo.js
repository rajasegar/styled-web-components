import {
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  GridProps,
} from '../src/index.js'

class SWBox extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `<style>
      :host { display: block; } 
      </style><slot></slot>`
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('div')
  }
}

customElements.define(
  'sw-box',
  TypographyProps(ColorProps(BorderProps(SpaceProps(LayoutProps(SWBox)))))
)

class SWFlex extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `<style>
        :host { display: flex; }
        </style>
        <slot></slot>`
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('sw-flex', FlexboxProps(SWFlex))

class SWGrid extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `<style>
      :host { display: grid; }
      </style>
      <slot></slot>`
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('sw-grid', GridProps(SWGrid))

class MyCard extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `<style>
      :host { display: block; }
      </style>
      <slot></slot>`
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define(
  'my-card',
  ColorProps(BorderProps(LayoutProps(SpaceProps(MyCard))))
)

class BlockText extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `<style>
      :host { display: block; }
      </style>
      <slot></slot>`
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('block-text', TypographyProps(BlockText))

class Avatar extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `<style>
      img {  }
      </style>
      <img src="${this.getAttribute('src')}" />
      `
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('sw-avatar', LayoutProps(BorderProps(Avatar)))
