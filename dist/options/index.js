import{deepmerge as o}from"deepmerge-ts";import t from"@nikolarhristov/pipeline/dist/options/index.js";const l={files:"**/*.{js,mjs,cjs,ts}",pipeline:o(t.pipeline,{failed:async e=>`Error: Cannot format file ${e} !`,accomplished:async(e,i,a,s)=>`Formatted ${e} in ${i}.`,fulfilled:async e=>`Successfully formatted a total of ${e.files} JS and TS ${e.files===1?"file":"files"}.`})};var f=l;export{f as default,l as options};
