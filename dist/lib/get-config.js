import{access as e,constants as n,readFile as i}from"fs/promises";import{dirname as m,resolve as a}from"path";import{cwd as c}from"process";import{fileURLToPath as f}from"url";var d=async t=>{const r=a(`${c()}/${t}`);let o=(await i(a(`${m(f(import.meta.url))}/../config/${t}`),"utf-8")).toString();try{await e(r,n.R_OK),o=(await i(r,"utf-8")).toString()}catch{}return o};export{d as default};
