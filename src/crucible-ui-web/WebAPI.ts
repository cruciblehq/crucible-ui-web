import type { API } from "@cruciblehq/ui";

/**
 * Crucible UI Web's implementation of the UI API.
 * 
 * Widget environments run inside a SES (Secure EcmaScript) sandbox, which
 * limits access to system resources. This class provides methods to interact
 * with the system outside the SES sandbox. Only the methods listed here are
 * available to the widget environment.
 */
export class WebAPI implements API {

    log(...data: any[]): void { // eslint-disable-line @typescript-eslint/no-explicit-any
        console.log(...data);
    }
}
