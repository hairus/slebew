import"./vue-e44c720a.js";import{_ as r}from"../js/app2.js";import{r as i,a as l,b as s,l as n,n as d,z as v}from"./@vue-2f47e84f.js";const c={name:"dropZone",setup(){const a=i(!1);return{active:a,toggleActive:()=>{a.value=!a.value}}}},f=v('<div class="dz-message needsclick text-center" data-v-9090ff07><div class="mb-3" data-v-9090ff07><i class="display-4 text-muted bx bxs-cloud-upload" data-v-9090ff07></i></div><h4 data-v-9090ff07>Drop files here or click to upload.</h4><label for="dropzoneFile" class="stretched-link btn btn-light" data-v-9090ff07>Upload</label><input type="file" id="dropzoneFile" class="dropzoneFile btn btn-light" data-v-9090ff07></div>',1),p=[f];function g(a,e,_,t,m,b){return l(),s("div",{onDragenter:e[0]||(e[0]=n((...o)=>t.toggleActive&&t.toggleActive(...o),["prevent"])),onDragleave:e[1]||(e[1]=n((...o)=>t.toggleActive&&t.toggleActive(...o),["prevent"])),onDragover:e[2]||(e[2]=n(()=>{},["prevent"])),onDrop:e[3]||(e[3]=n((...o)=>t.toggleActive&&t.toggleActive(...o),["prevent"])),class:d([{"active-dropzone":t.active},"dropzone"])},p,34)}const u=r(c,[["render",g],["__scopeId","data-v-9090ff07"]]);export{u as D};
