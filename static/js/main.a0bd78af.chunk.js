(this["webpackJsonptelegram-graph"]=this["webpackJsonptelegram-graph"]||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n.n(c),i=n(22),r=n(61),j=n(62),l=n(10),b=n(11),o=n(51),d=n.n(o),h=n(60),O=n(23),u=n(42),x=n(4),g=n(59),m=n(18),p=function(e){var t=e.sigma,n=e.settings;return t.settings(n),t.refresh(),null},C=n(15),f=n(52),S=n(21),v=n(54),k=n.n(v),w=n(20),y={size:{lessThan:500,greaterThanOrEqualTo:0}},L=function(e){var t=e.onSubmit,n=Object(S.a)(e,["onSubmit"]);return Object(a.jsx)(w.a,{initialValues:Object(l.a)({},y),onSubmit:t,children:function(e){var t=e.handleSubmit,c=e.handleChange,s=e.values;return Object(a.jsx)(x.a,Object(l.a)(Object(l.a)({},n),{},{onChange:k()(t,666),children:Object(a.jsxs)(x.a.Group,{children:[Object(a.jsx)(x.a.Label,{children:"Size Range"}),Object(a.jsx)(x.a.Control,{type:"number",name:"size.greaterThanOrEqualTo",value:s.size.greaterThanOrEqualTo,min:"0",step:"10",onChange:c}),Object(a.jsx)(x.a.Control,{type:"number",name:"size.lessThan",value:s.size.lessThan,min:"0",step:"10",onChange:c})]})}))}})},G=n(57),N=n.n(G),z={linLogMode:!0,adjustSizes:!1,barnesHutTheta:.5,barnesHutOptimize:!1,edgeWeightInfluence:0,iterationsPerRender:1,outboundAttractionDistribution:!1,scalingRatio:1,strongGravityMode:!1,slowDown:1,gravity:1,alignNodeSiblings:!1,nodeSiblingsScale:1,nodeSiblingsAngleMin:0,worker:!0},T=n(58),M=n.n(T),D={directed:!0,multigraph:!1,compound:!0,rankDir:"TB"},R=(n(109),{Dagre:{ForceControls:function(e){var t=e.onSubmit,n=Object(S.a)(e,["onSubmit"]);return Object(a.jsx)(w.a,{initialValues:Object(l.a)({},D),onSubmit:t,children:function(e){var t=e.handleSubmit,c=e.handleChange,s=e.values;return Object(a.jsxs)(x.a,Object(l.a)(Object(l.a)({},n),{},{onChange:t,children:[Object(a.jsx)(x.a.Group,{children:Object(a.jsxs)(x.a.Label,{children:[Object(a.jsx)(x.a.Check,{inline:!0,type:"switch",name:"directed",checked:s.directed,onChange:c}),Object(a.jsx)("span",{children:"directed"})]})}),Object(a.jsx)(x.a.Group,{children:Object(a.jsxs)(x.a.Label,{children:[Object(a.jsx)(x.a.Check,{inline:!0,type:"switch",name:"multigraph",checked:s.multigraph,onChange:c}),Object(a.jsx)("span",{children:"multigraph"})]})}),Object(a.jsx)(x.a.Group,{children:Object(a.jsxs)(x.a.Label,{children:[Object(a.jsx)(x.a.Check,{inline:!0,type:"switch",name:"compound",checked:s.compound,onChange:c}),Object(a.jsx)("span",{children:"compound"})]})})]}))}})},ForceComponent:M.a},ForceLink:{ForceControls:function(e){var t=e.onSubmit,n=Object(S.a)(e,["onSubmit"]);return Object(a.jsx)(w.a,{initialValues:Object(l.a)({},z),onSubmit:t,children:function(e){var t=e.handleSubmit,c=e.handleChange,s=e.values;return Object(a.jsxs)(x.a,Object(l.a)(Object(l.a)({},n),{},{onChange:t,children:[Object(a.jsx)(x.a.Group,{children:Object(a.jsxs)(x.a.Label,{children:[Object(a.jsx)(x.a.Check,{inline:!0,type:"switch",name:"linLogMode",checked:s.linLogMode,onChange:c}),Object(a.jsx)("span",{children:"linLogMode"})]})}),Object(a.jsx)(x.a.Group,{children:Object(a.jsxs)(x.a.Label,{children:[Object(a.jsx)(x.a.Check,{inline:!0,type:"switch",name:"adjustSizes",checked:s.adjustSizes,onChange:c}),Object(a.jsx)("span",{children:"adjustSizes"})]})}),Object(a.jsx)(x.a.Group,{children:Object(a.jsxs)(x.a.Label,{children:[Object(a.jsx)(x.a.Check,{inline:!0,type:"switch",name:"barnesHutOptimize",checked:s.barnesHutOptimize,onChange:c}),Object(a.jsx)("span",{children:"barnesHutOptimize"})]})}),Object(a.jsxs)(x.a.Group,{children:[Object(a.jsx)(x.a.Label,{children:"barnesHutTheta"}),Object(a.jsx)(x.a.Control,{type:"number",name:"barnesHutTheta",value:s.barnesHutTheta,min:"0",step:"0.1",onChange:c})]}),Object(a.jsxs)(x.a.Group,{children:[Object(a.jsx)(x.a.Label,{children:"edgeWeightInfluence"}),Object(a.jsx)(x.a.Control,{type:"number",name:"edgeWeightInfluence",value:s.edgeWeightInfluence,min:"0",step:"0.1",onChange:c})]}),Object(a.jsxs)(x.a.Group,{children:[Object(a.jsx)(x.a.Label,{children:"iterationsPerRender"}),Object(a.jsx)(x.a.Control,{type:"number",name:"iterationsPerRender",value:s.iterationsPerRender,min:"0",step:"1",onChange:c})]}),Object(a.jsx)(x.a.Group,{children:Object(a.jsxs)(x.a.Label,{children:[Object(a.jsx)(x.a.Check,{inline:!0,type:"switch",name:"outboundAttractionDistribution",checked:s.outboundAttractionDistribution,onChange:c}),Object(a.jsx)("span",{children:"outboundAttractionDistribution"})]})}),Object(a.jsxs)(x.a.Group,{children:[Object(a.jsx)(x.a.Label,{children:"scalingRatio"}),Object(a.jsx)(x.a.Control,{type:"number",name:"scalingRatio",value:s.scalingRatio,min:"0",step:"0.1",onChange:c})]}),Object(a.jsx)(x.a.Group,{children:Object(a.jsxs)(x.a.Label,{children:[Object(a.jsx)(x.a.Check,{inline:!0,type:"switch",name:"strongGravityMode",checked:s.strongGravityMode,onChange:c}),Object(a.jsx)("span",{children:"strongGravityMode"})]})}),Object(a.jsxs)(x.a.Group,{children:[Object(a.jsx)(x.a.Label,{children:"slowDown"}),Object(a.jsx)(x.a.Control,{type:"number",name:"slowDown",value:s.slowDown,min:"0",step:"1",onChange:c})]}),Object(a.jsxs)(x.a.Group,{children:[Object(a.jsx)(x.a.Label,{children:"gravity"}),Object(a.jsx)(x.a.Control,{type:"number",name:"gravity",value:s.gravity,min:"0",step:"0.1",onChange:c})]}),Object(a.jsx)(x.a.Group,{children:Object(a.jsxs)(x.a.Label,{children:[Object(a.jsx)(x.a.Check,{inline:!0,type:"switch",name:"alignNodeSiblings",checked:s.alignNodeSiblings,onChange:c}),Object(a.jsx)("span",{children:"alignNodeSiblings"})]})}),Object(a.jsxs)(x.a.Group,{children:[Object(a.jsx)(x.a.Label,{children:"nodeSiblingsScale"}),Object(a.jsx)(x.a.Control,{type:"number",name:"nodeSiblingsScale",value:s.nodeSiblingsScale,min:"0",step:"0.1",onChange:c})]}),Object(a.jsxs)(x.a.Group,{children:[Object(a.jsx)(x.a.Label,{children:"nodeSiblingsAngleMin"}),Object(a.jsx)(x.a.Control,{type:"number",name:"nodeSiblingsAngleMin",value:s.nodeSiblingsAngleMin,min:"0",step:"1",onChange:c})]}),Object(a.jsx)(x.a.Group,{children:Object(a.jsxs)(x.a.Label,{children:[Object(a.jsx)(x.a.Check,{inline:!0,type:"switch",name:"worker",checked:s.worker,onChange:c}),Object(a.jsx)("span",{children:"worker"})]})})]}))}})},ForceComponent:N.a}}),A=function(e){var t=e.gexfUrl,n=Object(c.useRef)(),s=Object(c.useState)({width:0,height:0}),i=Object(b.a)(s,2),r=i[0],j=i[1],o=Object(c.useState)({}),S=Object(b.a)(o,2),v=S[0],k=S[1],w=Object(c.useState)(void 0),y=Object(b.a)(w,2),G=y[0],N=y[1],z=Object(c.useState)({}),T=Object(b.a)(z,2),M=T[0],D=T[1],A=Object(c.useState)(void 0),I=Object(b.a)(A,2),E=I[0],H=I[1],F=Object(c.useState)("#000"),B=Object(b.a)(F,2),P=B[0],W=(B[1],Object(c.useState)("#f00")),q=Object(b.a)(W,2),V=q[0],J=(q[1],Object(c.useState)("#fff")),K=Object(b.a)(J,2),U=K[0],Q=(K[1],Object(c.useState)(!0)),X=Object(b.a)(Q,2),Y=X[0],Z=X[1],$=Object(c.useState)(!0),_=Object(b.a)($,2),ee=_[0],te=_[1],ne=Object(c.useState)(!1),ae=Object(b.a)(ne,2),ce=ae[0],se=ae[1],ie=Object(c.useMemo)((function(){return E&&R[E]?R[E]:{}}),[E]),re=ie.ForceControls,je=ie.ForceComponent,le=Object(c.useMemo)((function(){return{nodeColor:"default",edgeColor:"default",labelSize:"fixed",labelThreshold:5,defaultLabelSize:15,batchEdgesDrawing:!0,drawNodes:Y,drawEdges:ee,drawLabels:ce,defaultNodeColor:P,defaultEdgeColor:V,defaultLabelColor:U}}),[Y,ee,ce,P,V,U]),be=Object(c.useCallback)((function(e){var t=e.data;N(t.node.id)}),[N]),oe=Object(c.useCallback)((function(){N(void 0)}),[N]),de=Object(c.useCallback)((function(e){var t=e.target;Z(t.checked)}),[Z]),he=Object(c.useCallback)((function(e){var t=e.target;te(t.checked)}),[te]),Oe=Object(c.useCallback)((function(e){var t=e.target;se(t.checked)}),[se]),ue=Object(c.useCallback)((function(e){var t=e.target;H(t.value)}),[H]),xe=Object(c.useCallback)((function(e){D(e)}),[D]),ge=Object(c.useCallback)((function(e){k(e)}),[k]),me=Object(c.useCallback)((function(e){j(e.bounds)}),[j]);return Object(a.jsx)(g.a,{fluid:!0,className:"graph-viewer p-3",children:Object(a.jsxs)(h.a,{children:[Object(a.jsx)(O.a,{xs:3,children:Object(a.jsxs)(m.a,{children:[Object(a.jsx)(m.a.Item,{className:"d-flex align-items-center",children:Object(a.jsx)(x.a.Group,{className:"m-0",children:Object(a.jsxs)(x.a.Label,{children:[Object(a.jsx)(x.a.Check,{inline:!0,type:"switch",checked:Y,onChange:de}),Object(a.jsx)("span",{children:"Draw Nodes"})]})})}),Object(a.jsx)(m.a.Item,{className:"d-flex ",children:Object(a.jsx)(x.a.Group,{className:"m-0",children:Object(a.jsxs)(x.a.Label,{children:[Object(a.jsx)(x.a.Check,{inline:!0,type:"switch",checked:ee,onChange:he}),Object(a.jsx)("span",{children:"Draw Edges"})]})})}),Object(a.jsx)(m.a.Item,{className:"d-flex ",children:Object(a.jsx)(x.a.Group,{className:"m-0",children:Object(a.jsxs)(x.a.Label,{children:[Object(a.jsx)(x.a.Check,{inline:!0,type:"switch",checked:ce,onChange:Oe}),Object(a.jsx)("span",{children:"Draw Labels"})]})})}),Object(a.jsx)(m.a.Item,{children:Object(a.jsx)(L,{onSubmit:ge})}),Object(a.jsx)(m.a.Item,{children:Object(a.jsx)(x.a,{children:Object(a.jsxs)(x.a.Group,{className:"m-0",children:[Object(a.jsx)(x.a.Label,{children:"Sorting"}),Object(a.jsxs)(x.a.Control,{as:"select",onChange:ue,children:[Object(a.jsx)("option",{children:"Select an Algorithm"}),Object.keys(R).map((function(e){return Object(a.jsx)("option",{value:e,children:e},"algorithm-".concat(e))}))]})]})})}),re?Object(a.jsx)(m.a.Item,{children:Object(a.jsx)(re,{onSubmit:xe})}):null]})}),Object(a.jsx)(O.a,{xs:9,children:Object(a.jsx)(u.a,{className:"sigma-card",children:Object(a.jsx)(u.a.Body,{className:"p-0",children:Object(a.jsx)(f.a,{bounds:!0,onResize:me,children:function(e){var c=e.measureRef;return Object(a.jsx)("div",{ref:c,className:"sigma-wrapper",children:Object(a.jsxs)(C.f,{ref:n,renderer:"canvas",style:{height:r.height},onOverNode:be,onOutNode:oe,children:[Object(a.jsx)(C.b,{default:"curvedArrow"}),Object(a.jsx)(p,{settings:le}),Object(a.jsxs)(C.d,{path:t,children:[G?Object(a.jsx)(C.c,{neighborsOf:G}):Object(a.jsx)(C.c,{nodesBy:d()(v)}),je?Object(a.jsx)(je,Object(l.a)(Object(l.a)({},M),{},{children:Object(a.jsx)(C.a,{})})):Object(a.jsx)(C.a,{}),Object(a.jsx)(C.e,{initialSize:10})]})]})})}})})})})]})})};n(110);Object(i.render)(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(j.a,{defaultActiveKey:"telegram",children:Object(a.jsx)(r.a,{mountOnEnter:!0,className:"position-relative",eventKey:"telegram",title:"Telegram",children:Object(a.jsx)(A,{gexfUrl:"./gephi/telegram.gexf"})})})}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.a0bd78af.chunk.js.map