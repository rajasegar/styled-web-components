import {
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  GridProps,
  HoverProps,
  FocusProps,
} from './styled-web-components.min.js'

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

class MyHoverCard extends HTMLElement {
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
  'my-hover-card',
  HoverProps(ColorProps(SpaceProps(MyHoverCard)))
)

class CustomInput extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `<style>
      input { display: block; }
      </style>
      <input type="text" placeholder="Your email" />`
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('custom-input', FocusProps(SpaceProps(CustomInput)))

class CustomButton extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `<style>
      button { display: block; }
      </style>
      <button type="button"><slot></slot></button>`
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define(
  'custom-button',
  HoverProps(BorderProps(ColorProps(FocusProps(SpaceProps(CustomButton)))))
)
