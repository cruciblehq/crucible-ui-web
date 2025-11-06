import type { API } from "@cruciblehq/ui";

export class HostAPI implements API {

    log(message: string): void {
        console.warn(`[HostAPI] ${message}`);
    }
}
