define(["./defaultValue-81eec7ed","./Transforms-adcb8b68","./Matrix2-37e55508","./RuntimeError-8952249c","./ComponentDatatype-a15c9a19","./GeometryAttribute-6586dca9","./GeometryAttributes-32b29525","./vgxxxxcommonjsHelpers20220421","./combine-3c023bda","./WebGLConstants-508b9636"],(function(e,t,n,r,a,i,o,c,u,s){"use strict";function m(){this._workerName="createPlaneOutlineGeometry"}m.packedLength=0,m.pack=function(e,t){return t},m.unpack=function(t,n,r){return e.defined(r)?r:new m};const y=new n.Cartesian3(-.5,-.5,0),p=new n.Cartesian3(.5,.5,0);return m.createGeometry=function(){const e=new o.GeometryAttributes,r=new Uint16Array(8),c=new Float64Array(12);return c[0]=y.x,c[1]=y.y,c[2]=y.z,c[3]=p.x,c[4]=y.y,c[5]=y.z,c[6]=p.x,c[7]=p.y,c[8]=y.z,c[9]=y.x,c[10]=p.y,c[11]=y.z,e.position=new i.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:c}),r[0]=0,r[1]=1,r[2]=1,r[3]=2,r[4]=2,r[5]=3,r[6]=3,r[7]=0,new i.Geometry({attributes:e,indices:r,primitiveType:i.PrimitiveType.LINES,boundingSphere:new t.BoundingSphere(n.Cartesian3.ZERO,Math.sqrt(2))})},function(t,n){return e.defined(n)&&(t=m.unpack(t,n)),m.createGeometry(t)}}));
