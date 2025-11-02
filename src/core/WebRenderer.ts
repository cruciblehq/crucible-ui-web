import { HostContext } from './HostContext';
import {
    Component,
    ComponentProps,
    ComponentType,
    Renderer,
    View,
    Content,
    Input
} from '@cruciblehq/ui';

export class WebRenderer implements Renderer<HTMLElement, HTMLElement, HostContext> {

    getRootHostContext(_rootContainer: HTMLElement): HostContext {
        console.log('getRootHostContext called');
        return {};
    }

    getChildHostContext(_parentHostContext: HostContext, _type: ComponentType, _rootContainer: HTMLElement): HostContext {
        console.log('getChildHostContext called');
        return {};
    }

    createInstance(component: Component, _rootContainer: HTMLElement, _hostContext: HostContext): HTMLElement {
        console.log('createInstance called for component:', component);

        if (component instanceof View) {
            return document.createElement('div');
        }

        else if (component instanceof Content) {
            return document.createElement('span');
        }

        else if (component instanceof Input) {
            return document.createElement('input');
        }

        throw new Error(`Unsupported component type: ${component.constructor.name}`);
    }

    appendInitialChild(parent: HTMLElement, child: HTMLElement): void {
        console.log('appendInitialChild called');
        parent.appendChild(child);
    }

    finalizeInitialChildren(_instance: HTMLElement, _type: ComponentType, _props: ComponentProps, _rootContainer: HTMLElement, _hostContext: HostContext): boolean {
        console.log('finalizeInitialChildren called');
        return false;   // Don't call commitMount
    }

    prepareForCommit(_containerInfo: HTMLElement): void {
        // No-op
        console.log('prepareForCommit called');
    }

    resetAfterCommit(_containerInfo: HTMLElement): void {
        // No-op
        console.log('resetAfterCommit called');
    }

    commitMount(_instance: HTMLElement, _type: ComponentType, _props: ComponentProps): void {
        // No-op
        console.log('commitMount called');
    }

    insertBefore(parent: HTMLElement, child: HTMLElement, beforeChild: HTMLElement): void {
        parent.insertBefore(child, beforeChild);
        console.log('insertBefore called');
    }

    removeChild(parent: HTMLElement, child: HTMLElement): void {
        parent.removeChild(child);
        console.log('removeChild called');
    }

    appendChildToContainer(container: HTMLElement, child: HTMLElement): void {
        container.appendChild(child);
        console.log('appendChildToContainer called');
    }

    insertInContainerBefore(container: HTMLElement, child: HTMLElement, beforeChild: HTMLElement): void {
        container.insertBefore(child, beforeChild);
        console.log('insertInContainerBefore called');
    }

    removeChildFromContainer(container: HTMLElement, child: HTMLElement): void {
        container.removeChild(child);
        console.log('removeChildFromContainer called');
    }

    clearContainer(container: HTMLElement): void {
        container.innerHTML = '';
        console.log('clearContainer called');
    }
}
