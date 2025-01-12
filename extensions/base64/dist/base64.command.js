"use strict";(()=>{var x,C,b,F;x=new WeakMap,C=new WeakMap,b=new WeakMap;F=new WeakMap;function s(e,r){return i=>new Promise((n,a)=>{let u=new MessageChannel;u.port1.onmessage=c=>{let h=r??e;c.data.type===h?n(c.data.result):a(new Error(`Unexpected message type: ${c.data.type} (expected: ${h})`))},window.parent.postMessage({type:e,payload:i},"*",[u.port2])})}function p(e){return(r,i)=>{let n=new MessageChannel;n.port1.onmessage=a=>{r(a.data.result)},window.parent.postMessage({type:e,payload:i},"*",[n.port2])}}var t;(function(e){e.Render="Render",e.RenderList="RenderList",e.RenderMarkdown="RenderMarkdown",e.Loading="Loading.",e.RunAppleScript="RunAppleScript",e.RunAppleScriptResult="RunAppleScriptResult",e.InitOnSearchChange="InitOnSearchChange",e.OnSearchChange="OnSearchChange",e.InitOnFilterChange="InitOnFilterChange",e.OnFilterChange="OnFilterChange",e.HttpRequestInited="HttpRequestInited",e.HttpRequestResult="HttpRequestResult",e.HttpRawFetch="HttpRawFetch",e.HttpFetchCancel="HttpFetchCancel",e.HttpFetchSend="HttpFetchSend",e.HttpFetchReadBody="HttpFetchReadBody",e.ClipboardHasText="ClipboardHasText",e.ClipboardHasImage="ClipboardHasImage",e.ClipboardHasHtml="ClipboardHasHtml",e.ClipboardHasRtf="ClipboardHasRtf",e.ClipboardHasFiles="ClipboardHasFiles",e.ClipboardWriteText="ClipboardWriteText",e.ClipboardWriteHtml="ClipboardWriteHtml",e.ClipboardWriteHtmlAndText="ClipboardWriteHtmlAndText",e.ClipboardWriteRtf="ClipboardWriteRtf",e.ClipboardWriteFilesUris="ClipboardWriteFilesUris",e.ClipboardWriteFiles="ClipboardWriteFiles",e.ClipboardClear="ClipboardClear",e.ClipboardReadText="ClipboardReadText",e.ClipboardReadHtml="ClipboardReadHtml",e.ClipboardReadRtf="ClipboardReadRtf",e.ClipboardReadFiles="ClipboardReadFiles",e.ClipboardReadFilesUris="ClipboardReadFilesUris",e.ClipboardReadImageBinary="ClipboardReadImageBinary",e.ClipboardReadImageBase64="ClipboardReadImageBase64",e.ClipboardWriteImageBinary="ClipboardWriteImageBinary",e.ClipboardWriteImageBase64="ClipboardWriteImageBase64",e.DialogAsk="DialogAsk",e.DialogConfirm="DialogConfirm",e.DialogMessage="DialogMessage",e.DialogOpen="DialogOpen",e.DialogSave="DialogSave",e.FsReadDir="FsReadDir",e.FsReadFile="FsReadFile",e.FsReadTextFile="FsReadTextFile",e.FsStat="FsStat",e.FsLstat="FsLstat",e.FsExists="FsExists",e.FsMkdir="FsMkdir",e.FsCreate="FsCreate",e.FsCopyFile="FsCopyFile",e.FsRemove="FsRemove",e.FsRename="FsRename",e.FsTruncate="FsTruncate",e.FsWriteFile="FsWriteFile",e.FsWriteTextFile="FsWriteTextFile",e.ShellxExecute="ShellxExecute",e.ShellxKill="ShellxKill",e.ShellxStdinWrite="ShellxStdinWrite",e.ShellxOpen="ShellxOpen",e.ShellxSpawn="ShellxSpawn",e.NotificationSendNotification="NotificationSendNotification",e.NotificationRequestPermission="NotificationRequestPermission",e.NotificationIsPermissionGranted="NotificationIsPermissionGranted",e.OsPlatform="OsPlatform",e.OsArch="OsArch",e.OsExeExtension="OsExeExtension",e.OsFamily="OsFamily",e.OsHostname="OsHostname",e.OsEol="OsEol",e.OsVersion="OsVersion",e.OsLocale="OsLocale"})(t||(t={}));var D=s(t.ShellxExecute),M=s(t.ShellxKill),N=s(t.ShellxStdinWrite),B=s(t.ShellxOpen);var j={readText:s(t.ClipboardReadText),writeText:s(t.ClipboardWriteText),readImageBase64:s(t.ClipboardReadImageBase64),writeImageBase64:s(t.ClipboardWriteImageBase64),readFiles:s(t.ClipboardReadFiles),writeFiles:s(t.ClipboardWriteFiles),readRtf:s(t.ClipboardReadRtf),writeRtf:s(t.ClipboardWriteRtf),readHtml:s(t.ClipboardReadHtml),writeHtml:s(t.ClipboardWriteHtml),writeHtmlAndText:s(t.ClipboardWriteHtmlAndText),hasText:s(t.ClipboardHasText),hasRtf:s(t.ClipboardHasRtf),hasHtml:s(t.ClipboardHasHtml),hasImage:s(t.ClipboardHasImage),hasFiles:s(t.ClipboardHasFiles)},U={ask:function(e,r){return s(t.DialogAsk)({message:e,options:r})},confirm:function(e,r){return s(t.DialogConfirm)({message:e,options:r})},message:function(e,r){return s(t.DialogMessage)({message:e,options:r})},open:s(t.DialogOpen),save:s(t.DialogSave)};var l=class{sendNotification(r){return s(t.NotificationSendNotification)(r)}requestPermission(){return s(t.NotificationRequestPermission)()}isPermissionGranted(){return s(t.NotificationIsPermissionGranted)()}},q=new l;var J=s(t.HttpRawFetch),$=s(t.HttpFetchCancel),G=s(t.HttpFetchSend),z=s(t.HttpFetchReadBody);var f=p(t.InitOnSearchChange),K=p(t.InitOnFilterChange);function d(e){console.log("render component",e.toJSON()),postMessage({type:t.Render,payload:e.toJSON()})}var o=class{constructor(r=[]){this.items=r,this.isShowingDetail=!1,this.isLoading=!1,this.filtering=!0,this.titleLayout="row",this.setItems=i=>(this.items=i,this),this.addItem=i=>(this.items.push(i),this),this.setLoading=i=>(this.isLoading=i,this),this.setShowingDetail=i=>(this.isShowingDetail=i,this)}setTitleLayout(r){return this.titleLayout=r,this}setFiltering(r){return this.filtering=r,this}toJSON(){return{type:"list",isLoading:this.isLoading,isShowingDetail:this.isShowingDetail,filtering:this.filtering,titleLayout:this.titleLayout,items:this.items.map(r=>r.detail?{...r,detail:r.detail.toJSON()}:r)}}};var V=s(t.RunAppleScript,t.RunAppleScriptResult);function m(e){try{let r=new TextEncoder().encode(e);return btoa(String.fromCharCode.apply(null,r))}catch{return""}}function g(e){try{let r=atob(e).split("").map(n=>n.charCodeAt(0));return new TextDecoder().decode(new Uint8Array(r))}catch{return""}}async function R(){let e=await w(),r=new o(e).setFiltering(!1);f(async i=>{let n=await w(i);r.setItems(n),d(r)}),d(r)}async function w(e=""){let r=m(e),i=g(e);return[{title:"Encoded",icon:"code.svg",subtitle:r,actions:[{type:"CopyToClipboard",content:r}]},{title:"Decoded",icon:"code.svg",subtitle:i,actions:[{type:"CopyToClipboard",content:i}]}]}R();})();

"undefined"!=typeof document&&document.addEventListener("keydown",e=>{"Escape"!==e.key||window.$__IS_ACTION_OPEN__||window.parent.postMessage({type:"escape"},"*")});
