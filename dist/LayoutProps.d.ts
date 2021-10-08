export function LayoutProps(C: any): {
    new (): {
        [x: string]: any;
        host: any;
        applyStyle(): void;
        getCSSRule(): any;
        attributeChangedCallback(attr: any, oldValue: any, newValue: any): void;
    };
    [x: string]: any;
    readonly observedAttributes: any[];
};
