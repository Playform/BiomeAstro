var l=(...[o={}])=>{Object.entries(o).forEach(([t,a])=>Object.defineProperty(o,t,{value:a===!0?s[t]:o[t]}));const{Path:r,Cache:c,Logger:p,Exclude:m,Action:u,Biome:n}=f(s,o),i=new Set;return typeof r<"u"&&(Array.isArray(r)||r instanceof Set)&&r.forEach(t=>i.add(t)),{name:"astro-biome",hooks:{"astro:build:done":async({dir:t})=>{i.size||i.add(t);const a=await(await import("@biomejs/js-api")).Rome.create({distribution:(await import("@biomejs/js-api")).Distribution.NODE}),y=f(u,{Wrote:async e=>{try{return a.formatContent(e.Buffer.toString(),{filePath:(await import("path")).resolve(e.Input)}).content}catch{return e.Buffer}}});try{typeof n=="object"&&a&&(n.$schema=void 0,a.applyConfiguration(n))}catch(e){console.log(e)}for(const e of i)await(await(await(await new(await import("files-pipe")).default(c,p).In(e)).By("**/*.{js,mjs,cjs,ts,json}")).Not(m)).Pipe(y)}}}};const{default:s}=await import("../Variable/Option.js"),{default:f}=await import("typescript-esbuild/Target/Function/Merge.js");export{s as Default,f as Merge,l as default};
