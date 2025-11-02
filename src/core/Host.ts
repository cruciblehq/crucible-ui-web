import ReactReconciler from 'react-reconciler';
import { Reconciler } from '@cruciblehq/ui';
import { WebRenderer } from "./WebRenderer";

export type Manifest = {
    widgets: Array<{
        name: string;
        path: string;
    }>;
}

export class Host {

    private readonly renderer: WebRenderer;
    private readonly manifest: Manifest;

    private readonly reconciler: Reconciler<HTMLElement, HTMLElement, HTMLElement, any, WebRenderer>;
    private reactReconciler: ReturnType<typeof ReactReconciler>;
    private root: ReturnType<typeof this.reactReconciler.createContainer>;

    constructor(renderer: WebRenderer, manifest: Manifest) {
        this.renderer = renderer;
        this.manifest = manifest;

        this.reconciler = new Reconciler(this.renderer);
    }

    public async render(container: HTMLElement) {

        const widgetElements = await Promise.all(
            this.manifest.widgets.map(async (widget) => {
                const module = await import(widget.path);
                const Widget = module.default;
                return Widget();
            })
        );

        this.reactReconciler = ReactReconciler(this.reconciler.hostConfig);
        this.root = this.reactReconciler.createContainer(container, 0, false, '', null);

        console.log(this.reactReconciler);
        console.log(this.root);
        console.log(widgetElements);
        console.log(container);

        // Render only the first widget, we only have one
        this.reactReconciler.updateContainer(widgetElements[0], this.root, null, () => {
            console.log('Did render widget');
        });
    }
}
