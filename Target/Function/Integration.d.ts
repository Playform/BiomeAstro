/**
 * @module Integration
 *
 */
declare const _default: (_Option?: Option) => AstroIntegration;
export default _default;
import type Option from "../Interface/Option.js";
import type { AstroIntegration } from "astro";
export declare const Default: Omit<{} & {
    Rome: any;
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Exclude: false;
    Files: string;
    Action: Omit<{} & {
        Failed: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Accomplished: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Fulfilled: (Plan: import("files-pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
        Read: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Wrote: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<import("files-pipe/Target/Interface/Buffer.js").Type>;
        Passed: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<boolean>;
        Changed: (Plan: import("files-pipe/Target/Interface/Plan.js").default) => Promise<import("files-pipe/Target/Interface/Plan.js").default>;
    }, "__proto__">;
    Logger: 2;
}, "__proto__">;
export declare const Merge: import("files-pipe/Target/Interface/Merge.js").default<import("files-pipe/Target/Function/Merge.js").PMF>;
