import type { CUDL } from '@cruciblehq/ui';
import type { HostContainer } from './HostContainer';
import type { HostContext } from './HostContext';
import * as UI from '@cruciblehq/ui';

export class WebRenderer implements UI.Renderer<HostContainer, HostContext> {

    getRootHostContext(_rootContainer: HostContainer): HostContext {
        return {}
    }

    getChildHostContext(_parentHostContext: HostContext, _type: UI.ComponentType, _rootContainer: HostContainer): HostContext {
        return {}
    }

    createInstance(component: UI.Component, _rootContainer: HostContainer, _hostContext: HostContext): CUDL.Primitive {
        console.warn("Creating instance for component:", component.constructor.name);

        if (component instanceof UI.View) {
            return {} as CUDL.Primitive;  // Placeholder for a div or similar container
        }

        else if (component instanceof UI.Text) {
            return {} as CUDL.Primitive;  // Placeholder for a div or similar container
        }

        throw new Error(`Unsupported component type: ${component.constructor.name}`);
    }

    appendInitialChild(_parent: CUDL.Primitive, _child: CUDL.Primitive): void {
    }

    finalizeInitialChildren(_instance: CUDL.Primitive, _type: UI.ComponentType, _props: UI.ComponentProps, _rootContainer: HostContainer, _hostContext: HostContext): boolean {
        return false;   // Don't call commitMount
    }

    prepareForCommit(_containerInfo: HostContainer): Record<string, unknown> | null {
        return null;
    }

    resetAfterCommit(_containerInfo: HostContainer): void {
        // No-op
    }

    commitMount(_instance: CUDL.Primitive, _type: UI.ComponentType, _props: UI.ComponentProps): void {
        // No-op
    }

    insertBefore(_parent: CUDL.Primitive, _child: CUDL.Primitive, _beforeChild: CUDL.Primitive): void {
    }

    removeChild(_parent: CUDL.Primitive, _child: CUDL.Primitive): void {
    }

    appendChildToContainer(_container: HostContainer, _child: CUDL.Primitive): void {
    }

    insertInContainerBefore(_container: HostContainer, _child: CUDL.Primitive, _beforeChild: CUDL.Primitive): void {
    }

    removeChildFromContainer(_container: HostContainer, _child: CUDL.Primitive): void {
    }

    clearContainer(_container: HostContainer): void {
    }
}
