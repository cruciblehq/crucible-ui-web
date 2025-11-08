import ReactReconciler from 'react-reconciler';
import { Reconciler, createElement, type Widget } from '@cruciblehq/ui';
import type { WebRenderer } from "./WebRenderer";
import type { HostContext } from './HostContext';
import type { HostContainer } from './HostContainer';
export type Manifest = {
    widgets: Array<{
        name: string;
        path: string;
    }>;
}

export class Host {

    private readonly renderer: WebRenderer;
    private readonly manifest: Manifest;

    private reconciler: Reconciler<HostContainer, HostContext>;
    private reactReconciler: ReactReconciler.ReconcilerInstance;
    private root: ReturnType<typeof this.reactReconciler.createContainer>;

    constructor(renderer: WebRenderer, manifest: Manifest) {
        this.renderer = renderer;
        this.manifest = manifest;

        this.reconciler = null as unknown as Reconciler<HostContainer, HostContext>;
        this.reactReconciler = null as unknown as ReactReconciler.ReconcilerInstance;
    }

    public async render(container: HTMLElement): Promise<void> {

        const widgetElements = await Promise.all(
            this.manifest.widgets.map(async (widget) => {
                const module = await import(widget.path) as { default: Widget };
                const Widget = module.default;
                return Widget;
            })
        );

        this.reconciler = new Reconciler(this.renderer);
        this.reactReconciler = ReactReconciler(this.reconciler.hostConfig);

        this.root = this.reactReconciler.createContainer(container, 0, false, '', null) as ReactReconciler.ReconcilerInstance;

        const element = createElement(widgetElements[0], { api: null });


        this.reactReconciler.updateContainer(element, this.root, null, () => {
            console.warn('Did render widget');
        });
    }
}
