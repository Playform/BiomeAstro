/**
 * @module Option
 *
 */
export default interface Type extends Option {
    [key: string]: any;
    Rome?: boolean | Rome;
}
import type Rome from "./Rome.js";
import type Option from "files-pipe/Target/Interface/Option.js";