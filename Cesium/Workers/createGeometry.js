define(["./defaultValue-81eec7ed","./PrimitivePipeline-d3c76b88","./createTaskProcessorWorker","./Transforms-adcb8b68","./Matrix2-37e55508","./RuntimeError-8952249c","./ComponentDatatype-a15c9a19","./WebGLConstants-508b9636","./vgxxxxcommonjsHelpers20220421","./combine-3c023bda","./GeometryAttribute-6586dca9","./GeometryAttributes-32b29525","./GeometryPipeline-db257970","./AttributeCompression-27507afe","./EncodedCartesian3-96fdc0ef","./IndexDatatype-f1dcdf35","./IntersectionTests-77f7e37a","./Plane-6ee42cab","./WebMercatorProjection-2839e524"],(function(e,t,r,n,o,i,s,a,c,f,u,d,b,m,l,p,y,P,k){"use strict";const C={};function G(t){let r=C[t];return e.defined(r)||("object"==typeof exports?C[r]=r=require(`Workers/${t}`):require([`Workers/${t}`],(function(e){r=e,C[r]=e}))),r}return r((function(r,n){const o=r.subTasks,i=o.length,s=new Array(i);for(let t=0;t<i;t++){const r=o[t],n=r.geometry,i=r.moduleName;if(e.defined(i)){const e=G(i);s[t]=e(n,r.offset)}else s[t]=n}return Promise.all(s).then((function(e){return t.PrimitivePipeline.packCreateGeometryResults(e,n)}))}))}));
