"use strict";if(typeof t==="undefined"){var t={}}(function(e,r){if(typeof define==="function"&&define.amd){define([],r)}else if(typeof module==="object"&&module.exports){module.exports=r()}else{t.portfolio=r()}})(this,function(){return function(e){var t=e();if(typeof process==="object"&&typeof process.versions==="object"&&typeof process.versions.node==="string"){var r=require("fs");var n=require("path");var _=n.join(__dirname,"portfolio.wasm");var a=r.readFileSync(_);var c=new WebAssembly.Module(a);var o=new WebAssembly.Instance(c,t.imports);return t.initialize(o)}else{var f=fetch("portfolio.wasm",{credentials:"same-origin"});var o=typeof WebAssembly.instantiateStreaming==="function"?WebAssembly.instantiateStreaming(f,t.imports).then(function(e){return e.instance}):f.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.compile(e)}).then(function(e){return WebAssembly.instantiate(e,t.imports)});return o.then(function(e){var r=t.initialize(e);console.log("Finished loading Rust wasm module 'portfolio'");return r})["catch"](function(e){console.log("Error loading Rust wasm module 'portfolio':",e);throw e})}}(function(){var p={};p.STDWEB_PRIVATE={};p.STDWEB_PRIVATE.to_utf8=function s(e,r){var t=p.HEAPU8;for(var n=0;n<e.length;n+=1){var _=e.charCodeAt(n);if(_>=55296&&_<=57343){_=65536+((_&1023)<<10)|e.charCodeAt(n+=1)&1023}if(_<=127){t[r++]=_}else if(_<=2047){t[r++]=192|_>>6;t[r++]=128|_&63}else if(_<=65535){t[r++]=224|_>>12;t[r++]=128|_>>6&63;t[r++]=128|_&63}else if(_<=2097151){t[r++]=240|_>>18;t[r++]=128|_>>12&63;t[r++]=128|_>>6&63;t[r++]=128|_&63}else if(_<=67108863){t[r++]=248|_>>24;t[r++]=128|_>>18&63;t[r++]=128|_>>12&63;t[r++]=128|_>>6&63;t[r++]=128|_&63}else{t[r++]=252|_>>30;t[r++]=128|_>>24&63;t[r++]=128|_>>18&63;t[r++]=128|_>>12&63;t[r++]=128|_>>6&63;t[r++]=128|_&63}}};p.STDWEB_PRIVATE.noop=function(){};p.STDWEB_PRIVATE.to_js=function S(e){var n=p.HEAPU8[e+12];if(n===0){return undefined}else if(n===1){return null}else if(n===2){return p.HEAP32[e/4]}else if(n===3){return p.HEAPF64[e/8]}else if(n===4){var _=p.HEAPU32[e/4];var r=p.HEAPU32[(e+4)/4];return p.STDWEB_PRIVATE.to_js_string(_,r)}else if(n===5){return false}else if(n===6){return true}else if(n===7){var _=p.STDWEB_PRIVATE.arena+p.HEAPU32[e/4];var r=p.HEAPU32[(e+4)/4];var a=[];for(var t=0;t<r;t+=1){a.push(p.STDWEB_PRIVATE.to_js(_+t*16))}return a}else if(n===8){var c=p.STDWEB_PRIVATE.arena;var o=c+p.HEAPU32[e/4];var r=p.HEAPU32[(e+4)/4];var f=c+p.HEAPU32[(e+8)/4];var a={};for(var t=0;t<r;t+=1){var i=p.HEAPU32[(f+t*8)/4];var E=p.HEAPU32[(f+4+t*8)/4];var u=p.STDWEB_PRIVATE.to_js_string(i,E);var s=p.STDWEB_PRIVATE.to_js(o+t*16);a[u]=s}return a}else if(n===9){return p.STDWEB_PRIVATE.acquire_js_reference(p.HEAP32[e/4])}else if(n===10||n===12||n===13){var T=p.HEAPU32[e/4];var _=p.HEAPU32[(e+4)/4];var l=p.HEAPU32[(e+8)/4];var A=0;var P=false;var a=function(){if(_===0||P===true){if(n===10){throw new ReferenceError("Already dropped Rust function called!")}else if(n===12){throw new ReferenceError("Already dropped FnMut function called!")}else{throw new ReferenceError("Already called or dropped FnOnce function called!")}}var e=_;if(n===13){a.drop=p.STDWEB_PRIVATE.noop;_=0}if(A!==0){if(n===12||n===13){throw new ReferenceError("FnMut function called multiple times concurrently!")}}var r=p.STDWEB_PRIVATE.alloc(16);p.STDWEB_PRIVATE.serialize_array(r,arguments);try{A+=1;p.STDWEB_PRIVATE.dyncall("vii",T,[e,r]);var t=p.STDWEB_PRIVATE.tmp;p.STDWEB_PRIVATE.tmp=null}finally{A-=1}if(P===true&&A===0){a.drop()}return t};a.drop=function(){if(A!==0){P=true;return}a.drop=p.STDWEB_PRIVATE.noop;var e=_;_=0;if(e!=0){p.STDWEB_PRIVATE.dyncall("vi",l,[e])}};return a}else if(n===14){var _=p.HEAPU32[e/4];var r=p.HEAPU32[(e+4)/4];var d=p.HEAPU32[(e+8)/4];var b=_+r;switch(d){case 0:return p.HEAPU8.subarray(_,b);case 1:return p.HEAP8.subarray(_,b);case 2:return p.HEAPU16.subarray(_,b);case 3:return p.HEAP16.subarray(_,b);case 4:return p.HEAPU32.subarray(_,b);case 5:return p.HEAP32.subarray(_,b);case 6:return p.HEAPF32.subarray(_,b);case 7:return p.HEAPF64.subarray(_,b)}}else if(n===15){return p.STDWEB_PRIVATE.get_raw_value(p.HEAPU32[e/4])}};p.STDWEB_PRIVATE.serialize_object=function T(e,r){var t=Object.keys(r);var n=t.length;var _=p.STDWEB_PRIVATE.alloc(n*8);var a=p.STDWEB_PRIVATE.alloc(n*16);p.HEAPU8[e+12]=8;p.HEAPU32[e/4]=a;p.HEAPU32[(e+4)/4]=n;p.HEAPU32[(e+8)/4]=_;for(var c=0;c<n;c+=1){var o=t[c];var f=_+c*8;p.STDWEB_PRIVATE.to_utf8_string(f,o);p.STDWEB_PRIVATE.from_js(a+c*16,r[o])}};p.STDWEB_PRIVATE.serialize_array=function l(e,r){var t=r.length;var n=p.STDWEB_PRIVATE.alloc(t*16);p.HEAPU8[e+12]=7;p.HEAPU32[e/4]=n;p.HEAPU32[(e+4)/4]=t;for(var _=0;_<t;_+=1){p.STDWEB_PRIVATE.from_js(n+_*16,r[_])}};var a=typeof TextEncoder==="function"?new TextEncoder("utf-8"):typeof util==="object"&&util&&typeof util.TextEncoder==="function"?new util.TextEncoder("utf-8"):null;if(a!=null){p.STDWEB_PRIVATE.to_utf8_string=function A(e,r){var t=a.encode(r);var n=t.length;var _=0;if(n>0){_=p.STDWEB_PRIVATE.alloc(n);p.HEAPU8.set(t,_)}p.HEAPU32[e/4]=_;p.HEAPU32[(e+4)/4]=n}}else{p.STDWEB_PRIVATE.to_utf8_string=function A(e,r){var t=p.STDWEB_PRIVATE.utf8_len(r);var n=0;if(t>0){n=p.STDWEB_PRIVATE.alloc(t);p.STDWEB_PRIVATE.to_utf8(r,n)}p.HEAPU32[e/4]=n;p.HEAPU32[(e+4)/4]=t}}p.STDWEB_PRIVATE.from_js=function P(e,r){var t=Object.prototype.toString.call(r);if(t==="[object String]"){p.HEAPU8[e+12]=4;p.STDWEB_PRIVATE.to_utf8_string(e,r)}else if(t==="[object Number]"){if(r===(r|0)){p.HEAPU8[e+12]=2;p.HEAP32[e/4]=r}else{p.HEAPU8[e+12]=3;p.HEAPF64[e/8]=r}}else if(r===null){p.HEAPU8[e+12]=1}else if(r===undefined){p.HEAPU8[e+12]=0}else if(r===false){p.HEAPU8[e+12]=5}else if(r===true){p.HEAPU8[e+12]=6}else if(t==="[object Symbol]"){var n=p.STDWEB_PRIVATE.register_raw_value(r);p.HEAPU8[e+12]=15;p.HEAP32[e/4]=n}else{var _=p.STDWEB_PRIVATE.acquire_rust_reference(r);p.HEAPU8[e+12]=9;p.HEAP32[e/4]=_}};var t=typeof TextDecoder==="function"?new TextDecoder("utf-8"):typeof util==="object"&&util&&typeof util.TextDecoder==="function"?new util.TextDecoder("utf-8"):null;if(t!=null){p.STDWEB_PRIVATE.to_js_string=function d(e,r){return t.decode(p.HEAPU8.subarray(e,e+r))}}else{p.STDWEB_PRIVATE.to_js_string=function d(e,r){var t=p.HEAPU8;e=e|0;r=r|0;var n=(e|0)+(r|0);var _="";while(e<n){var a=t[e++];if(a<128){_+=String.fromCharCode(a);continue}var c=a&127>>2;var o=0;if(e<n){o=t[e++]}var f=c<<6|o&63;if(a>=224){var i=0;if(e<n){i=t[e++]}var E=(o&63)<<6|i&63;f=c<<12|E;if(a>=240){var u=0;if(e<n){u=t[e++]}f=(c&7)<<18|(E<<6|u&63);_+=String.fromCharCode(55232+(f>>10));f=56320+(f&1023)}}_+=String.fromCharCode(f);continue}return _}}p.STDWEB_PRIVATE.id_to_ref_map={};p.STDWEB_PRIVATE.id_to_refcount_map={};p.STDWEB_PRIVATE.ref_to_id_map=new WeakMap;p.STDWEB_PRIVATE.ref_to_id_map_fallback=new Map;p.STDWEB_PRIVATE.last_refid=1;p.STDWEB_PRIVATE.id_to_raw_value_map={};p.STDWEB_PRIVATE.last_raw_value_id=1;p.STDWEB_PRIVATE.acquire_rust_reference=function(e){if(e===undefined||e===null){return 0}var r=p.STDWEB_PRIVATE.id_to_refcount_map;var t=p.STDWEB_PRIVATE.id_to_ref_map;var n=p.STDWEB_PRIVATE.ref_to_id_map;var _=p.STDWEB_PRIVATE.ref_to_id_map_fallback;var a=n.get(e);if(a===undefined){a=_.get(e)}if(a===undefined){a=p.STDWEB_PRIVATE.last_refid++;try{n.set(e,a)}catch(c){_.set(e,a)}}if(a in t){r[a]+=1}else{t[a]=e;r[a]=1}return a};p.STDWEB_PRIVATE.acquire_js_reference=function(e){return p.STDWEB_PRIVATE.id_to_ref_map[e]};p.STDWEB_PRIVATE.increment_refcount=function(e){p.STDWEB_PRIVATE.id_to_refcount_map[e]+=1};p.STDWEB_PRIVATE.decrement_refcount=function(e){var r=p.STDWEB_PRIVATE.id_to_refcount_map;if(0==--r[e]){var t=p.STDWEB_PRIVATE.id_to_ref_map;var n=p.STDWEB_PRIVATE.ref_to_id_map_fallback;var _=t[e];delete t[e];delete r[e];n["delete"](_)}};p.STDWEB_PRIVATE.register_raw_value=function(e){var r=p.STDWEB_PRIVATE.last_raw_value_id++;p.STDWEB_PRIVATE.id_to_raw_value_map[r]=e;return r};p.STDWEB_PRIVATE.unregister_raw_value=function(e){delete p.STDWEB_PRIVATE.id_to_raw_value_map[e]};p.STDWEB_PRIVATE.get_raw_value=function(e){return p.STDWEB_PRIVATE.id_to_raw_value_map[e]};p.STDWEB_PRIVATE.alloc=function b(e){return p.web_malloc(e)};p.STDWEB_PRIVATE.dyncall=function(e,r,t){return p.web_table.get(r).apply(null,t)};p.STDWEB_PRIVATE.utf8_len=function D(e){var r=0;for(var t=0;t<e.length;t+=1){var n=e.charCodeAt(t);if(n>=55296&&n<=57343){n=65536+((n&1023)<<10)|e.charCodeAt(t+=1)&1023}if(n<=127){r+=1}else if(n<=2047){r+=2}else if(n<=65535){r+=3}else if(n<=2097151){r+=4}else if(n<=67108863){r+=5}else{r+=6}}return r};p.STDWEB_PRIVATE.prepare_any_arg=function(e){var r=p.STDWEB_PRIVATE.alloc(16);p.STDWEB_PRIVATE.from_js(r,e);return r};p.STDWEB_PRIVATE.acquire_tmp=function(e){var r=p.STDWEB_PRIVATE.tmp;p.STDWEB_PRIVATE.tmp=null;return r};var r=null;var n=null;var _=null;var c=null;var o=null;var f=null;var i=null;var E=null;Object.defineProperty(p,"exports",{value:{}});function u(){var e=p.instance.exports.memory.buffer;r=new Int8Array(e);n=new Int16Array(e);_=new Int32Array(e);c=new Uint8Array(e);o=new Uint16Array(e);f=new Uint32Array(e);i=new Float32Array(e);E=new Float64Array(e);p.HEAP8=r;p.HEAP16=n;p.HEAP32=_;p.HEAPU8=c;p.HEAPU16=o;p.HEAPU32=f;p.HEAPF32=i;p.HEAPF64=E}return{imports:{env:{__cargo_web_snippet_08a3b15e1358700ac92bc556f9e9b8af660fc2c7:function(e,r){e=p.STDWEB_PRIVATE.to_js(e);r=p.STDWEB_PRIVATE.to_js(r);e.nodeValue=r},__cargo_web_snippet_0aced9e2351ced72f1ff99645a129132b16c0d3c:function(e){var r=p.STDWEB_PRIVATE.get_raw_value(e);return p.STDWEB_PRIVATE.register_raw_value(r)},__cargo_web_snippet_0c326292efc233420ade892f70743acb4a852fd7:function(e,r,t,n){r=p.STDWEB_PRIVATE.to_js(r);t=p.STDWEB_PRIVATE.to_js(t);n=p.STDWEB_PRIVATE.to_js(n);p.STDWEB_PRIVATE.from_js(e,function(){try{return{value:function(){return r.createElementNS(t,n)}(),success:true}}catch(e){return{error:e,success:false}}}())},__cargo_web_snippet_0da47658267a7497de743e1b0892f992ba6ca6ef:function(e,r){e=p.STDWEB_PRIVATE.to_js(e);r=p.STDWEB_PRIVATE.to_js(r);e.type=r},__cargo_web_snippet_0e54fd9c163fcf648ce0a395fde4500fd167a40b:function(e){var r=p.STDWEB_PRIVATE.acquire_js_reference(e);return r instanceof DOMException&&r.name==="InvalidCharacterError"},__cargo_web_snippet_2908dbb08792df5e699e324eec3e29fd6a57c2c9:function(e){var r=p.STDWEB_PRIVATE.acquire_js_reference(e);return r instanceof HTMLInputElement},__cargo_web_snippet_3c5e83d16a83fc7147ec91e2506438012952f55a:function(e){var r=p.STDWEB_PRIVATE.acquire_js_reference(e);return r instanceof Element},__cargo_web_snippet_46518012593da937dd5f35c2fc1c5e1dcade260b:function(e,r,t,n){r=p.STDWEB_PRIVATE.to_js(r);t=p.STDWEB_PRIVATE.to_js(t);n=p.STDWEB_PRIVATE.to_js(n);p.STDWEB_PRIVATE.from_js(e,function(){try{return{value:function(){return r.insertBefore(t,n)}(),success:true}}catch(e){return{error:e,success:false}}}())},__cargo_web_snippet_465ffdf4814bf5d08a3abdf8fe5e61a220b98c34:function(e){var r=p.STDWEB_PRIVATE.acquire_js_reference(e);return r instanceof Node},__cargo_web_snippet_5f8f03c2f100be177db5a7d58ca6b8cbbeaa0c93:function(e,r){r=p.STDWEB_PRIVATE.to_js(r);p.STDWEB_PRIVATE.from_js(e,function(){return r.namespaceURI}())},__cargo_web_snippet_614a3dd2adb7e9eac4a0ec6e59d37f87e0521c3b:function(e,r){r=p.STDWEB_PRIVATE.to_js(r);p.STDWEB_PRIVATE.from_js(e,function(){return r.error}())},__cargo_web_snippet_690311d2f9134ac0983620c38a9e6460d4165607:function(e,r){r=p.STDWEB_PRIVATE.to_js(r);p.STDWEB_PRIVATE.from_js(e,function(){return r.nextSibling}())},__cargo_web_snippet_6fcce0aae651e2d748e085ff1f800f87625ff8c8:function(e){p.STDWEB_PRIVATE.from_js(e,function(){return document}())},__cargo_web_snippet_72fc447820458c720c68d0d8e078ede631edd723:function(e,r,t){console.error("Panic location:",p.STDWEB_PRIVATE.to_js_string(e,r)+":"+t)},__cargo_web_snippet_7c8dfab835dc8a552cd9d67f27d26624590e052c:function(e){var r=p.STDWEB_PRIVATE.acquire_js_reference(e);return r instanceof DOMException&&r.name==="SyntaxError"},__cargo_web_snippet_80d6d56760c65e49b7be8b6b01c1ea861b046bf0:function(e){p.STDWEB_PRIVATE.decrement_refcount(e)},__cargo_web_snippet_8a049af1e4867892fca647811a9472e4c5832053:function(e,r){e=p.STDWEB_PRIVATE.to_js(e);r=p.STDWEB_PRIVATE.to_js(r);e.add(r)},__cargo_web_snippet_91749aeb589cd0f9b17cbc01b2872ba709817982:function(e,r,t){r=p.STDWEB_PRIVATE.to_js(r);t=p.STDWEB_PRIVATE.to_js(t);p.STDWEB_PRIVATE.from_js(e,function(){try{return{value:function(){return r.createElement(t)}(),success:true}}catch(e){return{error:e,success:false}}}())},__cargo_web_snippet_97495987af1720d8a9a923fa4683a7b683e3acd6:function(e,r){console.error("Panic error message:",p.STDWEB_PRIVATE.to_js_string(e,r))},__cargo_web_snippet_9f22d4ca7bc938409787341b7db181f8dd41e6df:function(e){p.STDWEB_PRIVATE.increment_refcount(e)},__cargo_web_snippet_a152e8d0e8fac5476f30c1d19e4ab217dbcba73d:function(e,r,t){r=p.STDWEB_PRIVATE.to_js(r);t=p.STDWEB_PRIVATE.to_js(t);p.STDWEB_PRIVATE.from_js(e,function(){try{return{value:function(){return r.querySelector(t)}(),success:true}}catch(e){return{error:e,success:false}}}())},__cargo_web_snippet_a1f43b583e011a9bbeae64030b81f677e6c29005:function(e,r){e=p.STDWEB_PRIVATE.to_js(e);r=p.STDWEB_PRIVATE.to_js(r);e.checked=r},__cargo_web_snippet_ab05f53189dacccf2d365ad26daa407d4f7abea9:function(e,r){r=p.STDWEB_PRIVATE.to_js(r);p.STDWEB_PRIVATE.from_js(e,function(){return r.value}())},__cargo_web_snippet_afafe9a462a05084fec65cacc7d6598e145ff3e3:function(e,r,t){r=p.STDWEB_PRIVATE.to_js(r);t=p.STDWEB_PRIVATE.to_js(t);p.STDWEB_PRIVATE.from_js(e,function(){return r.createTextNode(t)}())},__cargo_web_snippet_b06dde4acf09433b5190a4b001259fe5d4abcbc2:function(e,r){r=p.STDWEB_PRIVATE.to_js(r);p.STDWEB_PRIVATE.from_js(e,function(){return r.success}())},__cargo_web_snippet_bb618d13cbb219642bd219af99ee1519e5658d77:function(e,r){r=p.STDWEB_PRIVATE.to_js(r);p.STDWEB_PRIVATE.from_js(e,function(){return r.classList}())},__cargo_web_snippet_c023351d5bff43ef3dd317b499821cd4e71492f0:function(e){var r=p.STDWEB_PRIVATE.acquire_js_reference(e);return r instanceof DOMException&&r.name==="HierarchyRequestError"},__cargo_web_snippet_c26ddf75f581148e029dfcd95c037bb50d502e43:function(e,r){e=p.STDWEB_PRIVATE.to_js(e);r=p.STDWEB_PRIVATE.to_js(r);e.value=r},__cargo_web_snippet_cd41a77d0178ae27c833ef2950e5f1a48a1455c1:function(e,r,t){r=p.STDWEB_PRIVATE.to_js(r);t=p.STDWEB_PRIVATE.to_js(t);p.STDWEB_PRIVATE.from_js(e,function(){try{return{value:function(){return r.removeChild(t)}(),success:true}}catch(e){return{error:e,success:false}}}())},__cargo_web_snippet_da2febd72f9938d90bc2bf2905643f595b07abd9:function(e,r,t){e=p.STDWEB_PRIVATE.to_js(e);r=p.STDWEB_PRIVATE.to_js(r);t=p.STDWEB_PRIVATE.to_js(t);e.setAttribute(r,t)},__cargo_web_snippet_db12d53e9596e9bc7860a8231ec85044629926e7:function(e){var r=p.STDWEB_PRIVATE.acquire_js_reference(e);return r instanceof HTMLTextAreaElement},__cargo_web_snippet_dc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf:function(){console.error("Encountered a panic!")},__cargo_web_snippet_de2896a7ccf316486788a4d0bc433c25d2f1a12b:function(e){var r=p.STDWEB_PRIVATE.acquire_js_reference(e);return r instanceof DOMException&&r.name==="NotFoundError"},__cargo_web_snippet_e741b9d9071097746386b2c2ec044a2bc73e688c:function(e,r){e=p.STDWEB_PRIVATE.to_js(e);r=p.STDWEB_PRIVATE.to_js(r);e.appendChild(r)},__cargo_web_snippet_e854289309e564012996fbb70e7c19bf4e6a8866:function(e){var r=p.STDWEB_PRIVATE.acquire_js_reference(e);return r instanceof DOMException&&r.name==="NamespaceError"},__cargo_web_snippet_e9638d6405ab65f78daf4a5af9c9de14ecf1e2ec:function(e){e=p.STDWEB_PRIVATE.to_js(e);p.STDWEB_PRIVATE.unregister_raw_value(e)},__cargo_web_snippet_ec62bad51093fd25faa38be3170e100862e191f3:function(e,r){e=p.STDWEB_PRIVATE.to_js(e);r=p.STDWEB_PRIVATE.to_js(r);e.remove(r)},__cargo_web_snippet_f03767d5868baf486b51c1e3988d0ce100e850ca:function(e,r){r=p.STDWEB_PRIVATE.to_js(r);p.STDWEB_PRIVATE.from_js(e,function(){return r.lastChild}())},__cargo_web_snippet_f6358c198ebcc61c9da370cca2679c0b8bc81a7b:function(e,r){e=p.STDWEB_PRIVATE.to_js(e);r=p.STDWEB_PRIVATE.to_js(r);e.removeAttribute(r)},__cargo_web_snippet_f750c7bda400081b4d7209f43f9d59214d39f6ea:function(e,r,t){e=p.STDWEB_PRIVATE.to_js(e);r=p.STDWEB_PRIVATE.to_js(r);t=p.STDWEB_PRIVATE.to_js(t);var n=e;r.removeEventListener(t,n);n.drop()},__web_on_grow:u}},initialize:function(e){Object.defineProperty(p,"instance",{value:e});Object.defineProperty(p,"web_malloc",{value:p.instance.exports.__web_malloc});Object.defineProperty(p,"web_free",{value:p.instance.exports.__web_free});Object.defineProperty(p,"web_table",{value:p.instance.exports.__indirect_function_table});u();p.instance.exports.main();return p.exports}}})});