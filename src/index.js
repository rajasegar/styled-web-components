const SpaceProps = (C) => class extends C {
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
    this.attachShadow({ mode: 'open'})
    const template = document.createElement('template')
    template.innerHTML = '<style></style>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    const styleSheet = this.shadowRoot.styleSheets[0]
    const attributes = Array.from(this.attributes)
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

    let styles = '';
    attributes.forEach(attr => {
      if(properties[attr.name]) {
        styles += `${properties[attr.name]}: ${attr.value};`
      }
    })
    styleSheet.insertRule(`:host { ${styles} }`);
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
    /*
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
    */
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
    const ownAttrs =  [
      'font-family',
      'font-size',
      'font-weight',
      'line-height',
      'letter-spacing',
      'text-align',
      'font-style'
    ];
    const _observedAttrs = super.observedAttributes ? [...super.observedAttributes, ...ownAttrs] : ownAttrs;
    return _observedAttrs;
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

const LayoutProps = (C) => class extends C {
  static get observedAttributes() {
    const ownAttrs = [
      'width',
      'height',
      'min-width',
      'min-height',
      'max-width',
      'max-height',
      'size',
      'display',
      'vertical-align',
      'overflow',
      'overflow-x',
      'overflow-y'
    ];

    const _observedAttrs = super.observedAttributes ? [...super.observedAttributes, ...ownAttrs] : ownAttrs;
    return _observedAttrs;
  }

  attributeChangedCallback(attr) {

    if(super.attributeChangedCallback) {
      super.attributeChangedCallback(attr)
    }

    const properties = {

      'width': 'width',
      'height': 'height',
      'min-width': 'minWidth',
      'min-height': 'minHeight',
      'max-width': 'maxWidth',
      'max-height': 'maxHeight',
      'size': 'size',
      'display': 'display',
      'vertical-align': 'verticalAlign',
      'overflow': 'overflow',
      'overflow-x': 'overflowX',
      'overflow-y': 'overflowY'
    };

    const _value = this.getAttribute(attr)
    if(attr === 'size') {
      this.container.style.width = _value
      this.container.style.height = _value
    } else {
      this.container.style[properties[attr]] = _value
    }
  }
}

const FlexboxProps = (C) => class extends C {

  static get observedAttributes() {
    const ownAttrs = [
      'align-items',
      'align-content',
      'justify-items',
      'justify-content',
      'flex-wrap',
      'flex-direction',
      'flex',
      'flex-grow',
      'flex-shrink',
      'flex-basis',
      'justify-self',
      'align-self',
      'order'
    ];

    const _observedAttrs = super.observedAttributes ? [...super.observedAttributes, ...ownAttrs] : ownAttrs;
    return _observedAttrs;
  }

  attributeChangedCallback(attr) {

    if(super.attributeChangedCallback) {
      super.attributeChangedCallback(attr)
    }

    const properties = {
      'align-items': 'alignItems',
      'align-content': 'alignContent',
      'justify-items': 'justifyItems',
      'justify-content': 'justifyContent',
      'flex-wrap': 'flexWrap',
      'flex-direction': 'flexDirection',
      'flex': 'flex',
      'flex-grow': 'flexGrow',
      'flex-shrink': 'flexShrink',
      'flex-basis': 'flexBasis',
      'justify-self': 'justifySelf',
      'align-self': 'alignSelf',
      'order': 'order'
    };

    const _value = this.getAttribute(attr)
    this.container.style[properties[attr]] = _value
  }
}

const GridProps = (C) => class extends C {

  static get observedAttributes() {
    const ownAttrs = [
      'grid-gap',
      'grid-row-gap',
      'grid-column-gap',
      'grid-column',
      'grid-row',
      'grid-area',
      'grid-auto-flow',
      'grid-auto-rows',
      'grid-auto-columns',
      'grid-template-rows',
      'grid-template-columns',
      'grid-template-areas',
    ];

    const _observedAttrs = super.observedAttributes ? [...super.observedAttributes, ...ownAttrs] : ownAttrs;
    return _observedAttrs;
  }

  attributeChangedCallback(attr) {

    if(super.attributeChangedCallback) {
      super.attributeChangedCallback(attr)
    }

    const properties = {
      'grid-gap': 'gridGap',
      'grid-row-gap': 'gridRowGap',
      'grid-column-gap': 'gridColumnGap',
      'grid-column': 'gridColumn',
      'grid-row': 'gridRow',
      'grid-area': 'gridArea',
      'grid-auto-flow': 'gridAutoFlow',
      'grid-auto-rows': 'gridAutoRows',
      'grid-auto-columns': 'gridAutoColumns',
      'grid-template-rows': 'gridTemplateRows',
      'grid-template-columns': 'gridTemplateColumns',
      'grid-template-areas': 'gridTemplateArea',
    };

    const _value = this.getAttribute(attr)
    this.container.style[properties[attr]] = _value
  }
}

const BackgroundProps = (C) => class extends C {

  static get observedAttributes() {
    const ownAttrs = [
      'background',
      'background-image',
      'background-size',
      'background-position',
      'background-repeat',
    ];

    const _observedAttrs = super.observedAttributes ? [...super.observedAttributes, ...ownAttrs] : ownAttrs;
    return _observedAttrs;
  }

  attributeChangedCallback(attr) {

    if(super.attributeChangedCallback) {
      super.attributeChangedCallback(attr)
    }

    const properties = {
      'background': 'background',
      'background-image': 'backgroundImage',
      'background-size': 'backgroundSize',
      'background-position': 'backgroundPosition',
      'background-repeat': 'backgroundRepeat',
    };

    const _value = this.getAttribute(attr)
    this.container.style[properties[attr]] = _value
  }
}

const BorderProps = (C) => class extends C {

  static get observedAttributes() {
    const ownAttrs = [
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-radius',
      'border-top',
      'border-top-width',
      'border-top-style',
      'border-top-color',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom',
      'border-bottom-width',
      'border-bottom-style',
      'border-bottom-color',
      'border-bottom-left-radius',
      'border-bottom-right-radius',
      'border-right',
      'border-right-width',
      'border-right-style',
      'border-right-color',
      'border-left',
      'border-left-width',
      'border-left-style',
      'border-left-color',
      'border-x',
      'border-y',
    ];

    const _observedAttrs = super.observedAttributes ? [...super.observedAttributes, ...ownAttrs] : ownAttrs;
    return _observedAttrs;
  }

  attributeChangedCallback(attr) {

    if(super.attributeChangedCallback) {
      super.attributeChangedCallback(attr)
    }

    const properties = {
      'border': 'border',
      'border-width': 'borderWidth',
      'border-style': 'borderStyle',
      'border-color': 'borderColor',
      'border-radius': 'borderRadius',
      'border-top': 'borderTop',
      'border-top-width': 'borderTopWidth',
      'border-top-style': 'borderTopStyle',
      'border-top-color': 'borderTopColor',
      'border-top-left-radius': 'borderTopLeftRadius',
      'border-top-right-radius': 'borderTopRightRadius',
      'border-bottom': 'borderBottom',
      'border-bottom-width': 'borderBottomWidth',
      'border-bottom-style': 'borderBottomStyle',
      'border-bottom-color': 'borderBottomColor',
      'border-bottom-left-radius': 'borderBottomLeftRadius',
      'border-bottom-right-radius': 'borderBottomRightRadius',
      'border-right': 'borderRight',
      'border-right-width': 'borderRightWidth',
      'border-right-style': 'borderRightStyle',
      'border-right-color': 'borderRightColor',
      'border-left': 'borderLeft',
      'border-left-width': 'borderLeftWidth',
      'border-left-style': 'borderLeftStyle',
      'border-left-color': 'borderLeftColor',
    };

    const _value = this.getAttribute(attr)
    switch(attr) {
      case "border-x":
        this.container.style.borderLeft = _value
        this.container.style.borderRight = _value
        break;
      case "border-y":
        this.container.style.borderTop = _value
        this.container.style.borderBottom = _value
        break;

      default:
        this.container.style[properties[attr]] = _value
    }
  }
}

const PositionProps = (C) => class extends C {
  static get observedAttributes() {

    const ownAttrs = [
      'position',
      'z-index',
      'top',
      'right',
      'bottom',
      'left',
    ];
    const _observedAttrs = super.observedAttributes ? [...super.observedAttributes, ...ownAttrs] : ownAttrs;
    return _observedAttrs;
  }

  attributeChangedCallback(attr) {

    if(super.attributeChangedCallback) super.attributeChangedCallback(attr)
    const properties = {
      'position': 'position',
      'z-index': 'zIndex',
      'top': 'top',
      'right': 'right',
      'bottom': 'bottom',
      'left': 'left',
    }

    const _value = this.getAttribute(attr);
    this.container.style[properties[attr]] = _value;
  }
}

const ShadowProps = (C) => class extends C {
  static get observedAttributes() {

    const ownAttrs = [
      'text-shadow',
      'box-shadow',
    ];
    const _observedAttrs = super.observedAttributes ? [...super.observedAttributes, ...ownAttrs] : ownAttrs;
    return _observedAttrs;
  }

  attributeChangedCallback(attr) {

    if(super.attributeChangedCallback) super.attributeChangedCallback(attr)
    const properties = {
      'text-shadow': 'textShadow',
      'box-shadow': 'boxShadow',
    }

    const _value = this.getAttribute(attr);
    this.container.style[properties[attr]] = _value;
  }
}
export { 
  SpaceProps, 
  ColorProps, 
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
}
