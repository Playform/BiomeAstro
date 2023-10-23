/**
 * @module Option
 *
 */
export default interface Type extends Option {
    [key: string]: any;
    Biome?: boolean | Biome;
}
import type Biome from "./Biome.js";
import type Option from "files-pipe/Target/Interface/Option.js";