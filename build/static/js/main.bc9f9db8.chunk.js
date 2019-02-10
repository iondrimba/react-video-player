(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){t.exports=n(42)},,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(10),s=n.n(o),r=n(1),c=n(2),u=n(4),l=n(3),h=n(5),p=n(6),d=function(t){return t.split(":").reduce(function(t,e){return 60*t+ +e})},m=function(t){var e=parseInt(t,10),n=Math.floor(e/3600),i=Math.floor((e-3600*n)/60),a=e-3600*n-60*i;return n<10&&(n="0"+n),i<10&&(i="0"+i),a<10&&(a="0"+a),"".concat(n,":").concat(i,":").concat(a)},v=function(t,e){return t/e*100},f=n(11),y=n.n(f),k=function(){function t(){Object(r.a)(this,t),this.history=y()()}return Object(c.a)(t,[{key:"onChange",value:function(t){this.history.listen(function(e,n){e.state&&t(e.state.spot)})}},{key:"update",value:function(t){t.name?this.history.push("".concat(t.name),{spot:t.time}):this.history.push(t)}}]),t}(),b=(n(24),function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:this.props.display?"timer":"timer timer--hide",style:{transform:"translateX(".concat(this.props.position-30,"px)")}},this.props.time)}}]),e}(i.Component)),g=(n(26),function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={scale:0,duration:n.props.duration,mousePosition:0,display:!1,time:0},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"onClick",value:function(t){this.props.onSeek(v(t.nativeEvent.layerX,t.currentTarget.offsetWidth))}},{key:"onMouseMove",value:function(t){var e=v(t.nativeEvent.layerX,t.currentTarget.offsetWidth)*this.props.duration/100;this.setState({display:!0,time:m(e),mousePosition:t.nativeEvent.layerX,scale:t.nativeEvent.layerX/t.currentTarget.offsetWidth})}},{key:"onMouseLeave",value:function(t){this.setState({scale:0,display:!1})}},{key:"render",value:function(){return a.a.createElement("div",{className:"seeker",onClick:this.onClick.bind(this),onMouseLeave:this.onMouseLeave.bind(this),onMouseMove:this.onMouseMove.bind(this)},a.a.createElement(b,{time:this.state.time,display:this.state.display,position:this.state.mousePosition}),a.a.createElement("div",{className:"seeker__knob",style:{transform:"translateX(".concat(this.props.currentPositionPercentual*this.props.width/100-5,"px)")}}),a.a.createElement("div",{className:"seeker__line seeker__line--bg"}),a.a.createElement("div",{className:"seeker__line seeker__line--mover",style:{transform:"scaleX(".concat(this.state.scale,")")}}),a.a.createElement("div",{className:"seeker__line seeker__line--current",style:{transform:"scaleX(".concat(this.props.currentPositionPercentual/100,")")}}))}}]),e}(i.Component)),w=(n(28),function(){return a.a.createElement("svg",{className:"star",xmlns:"http://www.w3.org/2000/svg",viewBox:"60 0 121 115",preserveAspectRatio:"xMinYMax meet"},a.a.createElement("polygon",{points:"124.635,8.232 139.966,39.295 174.248,44.277 149.442,68.456 155.297,102.598 124.635,86.479   93.974,102.598 99.83,68.456 75.024,44.277 109.306,39.295 "}))}),E=(n(30),function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.props.animate&&requestAnimationFrame(function(){requestAnimationFrame(function(){t.toolTip&&(t.toolTip.style="opacity:1;transform: rotate(0deg) translateY(-97%)")})})}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{ref:function(e){t.toolTip=e},className:"tool-tip"},a.a.createElement("img",{className:"tool-tip__image",src:this.props.thumb,width:200,height:150,alt:"tooltip"}),a.a.createElement("p",{className:"tool-tip__description"},this.props.description))}}]),e}(i.Component)),O=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={spot:{}},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"getSpotPosition",value:function(t,e){var n=d(t);return{transform:"translateX(".concat(v(n,e)*this.props.containerWidth/100,"px)")}}},{key:"onClick",value:function(){this.props.onClick(this.props.spot)}},{key:"onMouseOver",value:function(t){this.setState({spot:t})}},{key:"onMouseLeave",value:function(){this.setState({spot:{}})}},{key:"toolTip",value:function(){var t=null;return this.state.spot.name&&(t=a.a.createElement(E,{animate:!0,thumb:this.state.spot.thumb,description:this.state.spot.description})),t}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{ref:function(e){t.spot=e},className:"hotspot",onClick:this.onClick.bind(this),onMouseLeave:this.onMouseLeave.bind(this),onMouseOver:this.onMouseOver.bind(this,this.props.spot),style:this.getSpotPosition(this.props.spot.time,this.props.duration)},a.a.createElement(w,null),this.toolTip())}}]),e}(i.Component),j=(n(32),function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"hotspot-container"},this.props.hotSpots.map(function(e,n){return a.a.createElement(O,{onClick:t.props.onClick.bind(t),containerWidth:t.props.width,spot:e,duration:t.props.duration,key:n})}))}}]),e}(i.Component)),C=(n(34),function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"onPlayClick",value:function(){this.props.onClick(!0)}},{key:"onPauseClick",value:function(){this.props.onClick(!1)}},{key:"render",value:function(){return a.a.createElement("div",{className:"play-pause"},a.a.createElement("svg",{onClick:this.onPlayClick.bind(this),className:"button ".concat(this.props.playing?"hide":""),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 283.5 283.5"},a.a.createElement("circle",{cx:"141.7",cy:"141.7",r:"137.5",className:"button__bg"}),a.a.createElement("path",{d:"M113.6 78.1L201.8 141.7 113.6 205.4",className:"button__icon"})),a.a.createElement("svg",{onClick:this.onPauseClick.bind(this),className:"button ".concat(this.props.playing?"":"hide"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 283.5 283.5"},a.a.createElement("circle",{cx:"141.7",cy:"141.7",r:"137.5",className:"button__bg"}),a.a.createElement("g",{xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("rect",{height:"120",width:"30",x:"95",y:"85"}),a.a.createElement("rect",{height:"120",width:"30",x:"150",y:"85"}))))}}]),e}(i.Component)),S=(n(36),function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).history=new k,n.history.onChange(n.seekSpot.bind(Object(p.a)(Object(p.a)(n)))),n.state={duration:0,currentPositionPercentual:0,playing:!1,width:0},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.video.controls=!1,this.video.addEventListener("timeupdate",this.onTimeUpdate.bind(this)),this.video.addEventListener("loadedmetadata",this.onLoadMetadata.bind(this)),this.video.addEventListener("seeked",this.onSeeked.bind(this)),window.addEventListener("resize",this.onResize.bind(this)),this.onResize()}},{key:"onResize",value:function(){this.setState({width:document.querySelector(".seeker").offsetWidth})}},{key:"onLoadMetadata",value:function(){this.setState({duration:this.video.duration})}},{key:"onTimeUpdate",value:function(){this.setState({currentPositionPercentual:v(this.video.currentTime,this.video.duration)}),this.video.ended&&(this.setState({playing:!1,currentPositionPercentual:0}),this.history.update("/"))}},{key:"onSeeked",value:function(){var t=this,e=setTimeout(function(){t.setState({playing:!0}),t.video.play(),t.seeking.classList.remove("seeking-overlay--show"),clearTimeout(e)},300)}},{key:"seekSpot",value:function(t){this.seek(v(d(t),this.video.duration))}},{key:"seek",value:function(t){var e=this;this.setState({playing:!1}),this.video.pause(),requestAnimationFrame(function(){requestAnimationFrame(function(){e.seeking.classList.add("seeking-overlay--show")})});var n=setTimeout(function(){e.video.currentTime=t*e.video.duration/100,clearTimeout(n)},100)}},{key:"onHotSpotClick",value:function(t,e){this.history.update(t)}},{key:"onPlayPauseClick",value:function(t){this.setState({playing:t}),this.state.playing?this.video.pause():this.video.play()}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"player"},a.a.createElement("div",{className:"video-container"},a.a.createElement("video",{className:"video",ref:function(e){t.video=e}},a.a.createElement("source",{src:this.props.source,type:"video/mp4"})),a.a.createElement("div",{ref:function(e){t.seeking=e},className:"seeking-overlay"}),a.a.createElement(C,{onClick:this.onPlayPauseClick.bind(this),playing:this.state.playing})),a.a.createElement(g,{onSeek:this.seek.bind(this),duration:this.state.duration,width:this.state.width,currentPositionPercentual:this.state.currentPositionPercentual}),a.a.createElement(j,{hotSpots:this.props.hotSpots,width:this.state.width,onClick:this.onHotSpotClick.bind(this),duration:this.state.duration}))}}]),e}(i.Component)),P=(n(38),n(40),function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={hotSpots:[]},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("./data.json").then(function(t){return t.json()}).then(function(e){t.setState({hotSpots:e})})}},{key:"render",value:function(){return a.a.createElement("div",{className:"app"},a.a.createElement(S,{source:"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",hotSpots:this.state.hotSpots}))}}]),e}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[12,2,1]]]);
//# sourceMappingURL=main.bc9f9db8.chunk.js.map