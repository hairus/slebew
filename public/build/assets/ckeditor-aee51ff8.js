import{C as f,a as h}from"./ckeditor-ba2e9e5e.js";import{L as b}from"./main-611df75c.js";import{P as g}from"./page-header-1e01951d.js";import{_ as B,c as k,w as o,r as e,o as y,b as t,d as C,a as i}from"../js/app2.js";import"./_commonjsHelpers-de833af9.js";import"./vue.esm-bundler-6cfaa817.js";import"./logo-light-9f0efe74.js";import"./logo-9faa3827.js";import"./avatar-1-15b743f1.js";import"./avatar-3-36dc574b.js";import"./axios-9cbf0d09.js";const x={components:{Layout:b,PageHeader:g,ckeditor:f.component},data(){return{editor:h,editorData:"<h3>Hello World!</h3><h5><b>This is an simple editable area.</b></h5>",content:"<h1>Some initial content</h1>",plugins:["advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker","searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking","save table contextmenu directionality emoticons template paste textcolor"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons",options:{height:300,style_formats:[{title:"Bold text",inline:"b"},{title:"Red text",inline:"span",styles:{color:"#ff0000"}},{title:"Red header",block:"h1",styles:{color:"#ff0000"}},{title:"Example 1",inline:"span",classes:"example1"},{title:"Example 2",inline:"span",classes:"example2"},{title:"Table styles"},{title:"Table row 1",selector:"tr",classes:"tablerow1"}]}}}},w=i("p",{class:"card-title-desc"},"Super simple wysiwyg editor on Bootstrap",-1),v={class:"form-ckeditor"};function T(E,a,V,H,l,L){const r=e("PageHeader"),n=e("BCardTitle"),s=e("ckeditor",!0),c=e("BCardBody"),d=e("BCard"),p=e("BCol"),m=e("BRow"),u=e("Layout");return y(),k(u,null,{default:o(()=>[t(r,{title:"Form Editors",pageTitle:"Forms"}),t(m,null,{default:o(()=>[t(p,{cols:"12"},{default:o(()=>[t(d,{"no-body":""},{default:o(()=>[t(c,null,{default:o(()=>[t(n,null,{default:o(()=>[C("CK Editor")]),_:1}),w,i("div",v,[t(s,{modelValue:l.editorData,"onUpdate:modelValue":a[0]||(a[0]=_=>l.editorData=_),editor:l.editor},null,8,["modelValue","editor"])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const q=B(x,[["render",T]]);export{q as default};
