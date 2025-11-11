import type { WebContext } from "./WebContext";
import {
    type Renderer,
    type Component,
    type ComponentType,
    type ComponentProps,
    View,
    Text,
    Input,
    Button,
} from '@cruciblehq/ui';

export class WebRenderer implements Renderer<HTMLElement, HTMLElement, HTMLElement, WebContext> {

    getRootHostContext(_rootContainer: HTMLElement): WebContext {
        return {}
    }

    getChildHostContext(_parentHostContext: WebContext, _type: ComponentType, _rootContainer: HTMLElement): WebContext {
        return {}
    }

    createInstance(component: Component, _rootContainer: HTMLElement, _hostContext: WebContext): HTMLElement {
        console.warn("Creating instance for component:", component.constructor.name, component.props);

        if (component instanceof View) {
            return {} as HTMLElement;  // Placeholder for a div or similar container
        }

        else if (component instanceof Text) {
            return {} as HTMLElement;  // Placeholder for a div or similar container
        }

        else if (component instanceof Input) {
            return {} as HTMLElement;  // Placeholder for an input element
        }

        else if (component instanceof Button) {
            return {} as HTMLElement;  // Placeholder for a button element
        }

        throw new Error(`Unsupported component type: ${component.constructor.name}`);
    }

    createTextInstance(_text: string, _rootContainer: HTMLElement, _hostContext: WebContext): HTMLElement {
        throw new Error('Method not implemented.');
    }

    appendInitialChild(_parent: HTMLElement, _child: HTMLElement): void {
        // no-op
    }

    finalizeInitialChildren(_instance: HTMLElement, _type: ComponentType, _props: ComponentProps, _rootContainer: HTMLElement, _hostContext: WebContext): boolean {
        return false;   // Don't call commitMount
    }

    prepareForCommit(_containerInfo: HTMLElement): Record<string, unknown> | null {
        return null;
    }

    resetAfterCommit(_containerInfo: HTMLElement): void {
        // No-op
    }

    commitMount(_instance: HTMLElement, _type: ComponentType, _props: ComponentProps): void {
        // No-op
    }

    insertBefore(_parent: HTMLElement, _child: HTMLElement, _beforeChild: HTMLElement): void {
        // no-op
    }

    removeChild(_parent: HTMLElement, _child: HTMLElement): void {
        // no-op
    }

    appendChildToContainer(_container: HTMLElement, _child: HTMLElement): void {
        // no-op
    }

    insertInContainerBefore(_container: HTMLElement, _child: HTMLElement, _beforeChild: HTMLElement): void {
        // no-op
    }

    removeChildFromContainer(_container: HTMLElement, _child: HTMLElement): void {
        // no-op
    }

    clearContainer(_container: HTMLElement): void {
        // no-op
    }
}
