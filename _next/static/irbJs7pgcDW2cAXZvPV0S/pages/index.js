(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{RNiq:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("YFqc"),u=n.n(r),s=n("m/Pd"),c=n.n(s),i=n("tKWW"),o=n("xG6Q"),m=n("zrwo"),d=n("0iUn"),f=n("sLSF"),p=n("MI3g"),b=n("a7VT"),h=n("Tit0"),E=n("AT/M"),v=n("vYYK"),g=function(e){function t(){var e,n;Object(d.default)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return n=Object(p.default)(this,(e=Object(b.default)(t)).call.apply(e,[this].concat(l))),Object(v.a)(Object(E.default)(Object(E.default)(n)),"state",{status:"idle",result:null}),Object(v.a)(Object(E.default)(Object(E.default)(n)),"mounted",!1),Object(v.a)(Object(E.default)(Object(E.default)(n)),"fetch",function(e){n.setState({status:"loading"},function(){n.props.fetch(e).then(function(e){n.mounted&&n.setState({status:"success",result:e})}).catch(function(e){n.mounted&&n.setState({status:"error",result:e.message})})})}),Object(v.a)(Object(E.default)(Object(E.default)(n)),"clear",function(){n.setState({result:null})}),n}return Object(h.default)(t,e),Object(f.default)(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.props.autoFetch&&this.fetch()}},{key:"componentDidUpdate",value:function(e){this.props.fetch!==e.fetch&&this.fetch()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return this.props.render(Object(m.a)({},this.state,{fetch:this.fetch,clear:this.clear}))}}]),t}(l.a.Component);g.defaultProps={autoFetch:!0};var j=g,O=[{title:"Startups incubées",value:o.length},{title:"Intrapreneurs",value:8},{title:"m² d&apos;espace dédié",value:150},{title:"Startups en création",value:2}];t.default=function(){return l.a.createElement(i.k,null,l.a.createElement(c.a,null,l.a.createElement("title",null,"Incubateur des ministères sociaux")),l.a.createElement(i.j,{title:"Bienvenue à l'incubateur des ministères sociaux",tagline:"incubateur.social.gouv.fr"}),l.a.createElement(i.p,{className:"section-white",title:"",subTitle:"",style:{padding:"1em 0"}},l.a.createElement(i.d,{chiffres:O})),l.a.createElement(i.p,{title:"Notre actualité",subTitle:""},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(j,{fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return fetch(document.location.origin+"/static/github-stats.json").then(function(e){return e.json()})}),render:function(e){var t,n=e.status,a=e.result;return"success"===n&&a&&l.a.createElement(i.d,{chiffres:(t=a,[{title:"Projets open-source",value:t.count},{title:"Tickets",value:t.issues},{title:"Commits",value:t.commits},{title:"Contributeurs",value:t.contributors}])})}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(i.a.all,null)),l.a.createElement("p",{align:"center"},l.a.createElement("a",{href:"/actus"}," Voir toutes actus")),l.a.createElement(i.p,{title:"L'incubateur des ministères sociaux, qu'est-ce donc ?",subTitle:"",className:"section-color"},l.a.createElement("div",{className:"container"},l.a.createElement("br",null),"C'est à la fois un lieu, une démarche et un ensemble de personnes !",l.a.createElement("br",null),l.a.createElement("br",null),"L'incubateur des ministères sociaux reprend la démarche et les grands principes de"," ",l.a.createElement("a",{href:"http://beta.gouv.fr",target:"_blank",rel:"noopener noreferrer"},"beta.gouv"),", à savoir :",l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,"Un leitmotiv : la résolution d'irritants dont vous êtes témoin"),l.a.createElement("li",null,"Des produits fabriqués par des agents"," ",l.a.createElement("a",{href:"/actus/saison2"},' "intrapreneurs"')," "),l.a.createElement("li",null,"Un plateau qui rassemble les développeurs, les coachs, les intrapreneurs et bien d'autres ;)"),l.a.createElement("li",null,"De la co - construction, des petits pas et des produits utilisables très rapidement")),"L'incubateur offre ainsi l'opportunité de tester de nouveaux modes de conception de services, plus simples, plus agiles et en proximité avec les usagers !",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(u.a,{href:"/fonctionnement-incubateur"},l.a.createElement("a",null,l.a.createElement("center",null,l.a.createElement("img",{src:"../static/images/schema%20inc%201%20v1.png",alt:"Illustration fonctionnement IMS",width:"600",height:"286",style:{margin:" 0 auto",borderRadius:"50px"}}),l.a.createElement("br",null),"En savoir plus")))," ")),l.a.createElement("div",{id:"produits"}),l.a.createElement(i.q,{className:"section-color",title:"Découvrez nos startups"}))}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);