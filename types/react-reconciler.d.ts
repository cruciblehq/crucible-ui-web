// types/react-reconciler.d.ts
/**
 * TypeScript module augmentation for `react-reconciler`.
 *
 * React reconciler does not yet export type definitions for the Reconciler
 * package, which causes TypeScript to error when Crucible UI imports it. This
 * declaration file provides minimal placeholder types that allow the Crucible
 * UI host configuration to compile successfully without depending on the
 * official `@types/react-reconciler` package.
 *
 * These types are intentionally generic and non-restrictive. They only serve
 * to describe the public surface required for Crucible UI’s internal usage:
 * the `HostConfig` type template and the `Reconciler` factory function.
 *
 * When React officially publishes `react-reconciler` type definitions,
 * this file should be deleted and replaced with the real types.
 */
declare module "react-reconciler" {
    namespace Reconciler {
        // minimal placeholder types so TypeScript stops erroring
        export type OpaqueHandle = unknown;

        export type HostConfig<
            Type,
            Props,
            Container,
            Instance,
            TextInstance,
            SuspenseInstance,
            HydratableInstance,
            PublicInstance,
            HostContext,
            UpdatePayload,
            ChildSet,
            TimeoutHandle,
            NoTimeout
        > = any;

        // minimal interface for the reconciler instance
        export interface ReconcilerInstance {
            createContainer(...args: any[]): any;
            updateContainer(...args: any[]): any;
            getPublicRootInstance?(...args: any[]): any;
            injectIntoDevTools?(...args: any[]): any;
        }
    }

    function Reconciler<
        TConfig extends Reconciler.HostConfig<any, any, any, any, any, any, any, any, any, any, any, any, any>
    >(config: TConfig): Reconciler.ReconcilerInstance;

    export default Reconciler;
}
