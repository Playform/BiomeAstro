var l=(...[o={}])=>{Object.entries(o).forEach(([t,a])=>Object.defineProperty(o,t,{value:a===!0?n[t]:o[t]}));const{Path:r,Cache:p,Logger:c,Exclude:m,Action:y,Biome:f}=s(n,o),i=new Set;return typeof r<"u"&&(Array.isArray(r)||r instanceof Set)&&r.forEach(t=>i.add(t)),{name:"@playform/format",hooks:{"astro:build:done":async({dir:t})=>{i.size||i.add(t);const a=await(await import("@biomejs/js-api")).Biome.create({distribution:(await import("@biomejs/js-api")).Distribution.NODE}),u=s(y,{Wrote:async e=>{try{return a.formatContent(e.Buffer.toString(),{filePath:(await import("path")).resolve(e.Input)}).content}catch{return e.Buffer}}});try{typeof f=="object"&&a&&(f.$schema=void 0,a.applyConfiguration(f))}catch(e){console.log(e)}for(const e of i)await(await(await(await new(await import("@playform/pipe")).default(p,c).In(e)).By("**/*.{js,mjs,cjs,ts,json}")).Not(m)).Pipe(u)}}}};const{default:n}=await import("../Variable/Option.js"),{default:s}=await import("@playform/build/Target/Function/Merge.js");export{n as Default,s as Merge,l as default};
