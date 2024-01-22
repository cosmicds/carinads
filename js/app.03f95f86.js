(()=>{var e={2466:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});var n=o(8081),a=o.n(n),i=o(3645),r=o.n(i),l=r()(a());l.push([e.id,"html{height:100%;margin:0;padding:0;background-color:#000;overflow:hidden;-ms-overflow-style:none;scrollbar-width:none}html ::-webkit-scrollbar{display:none}body{height:100%;margin:0;padding:0;font-family:Verdana,Arial,Helvetica,sans-serif}#main-content,body{position:fixed;width:100%}#main-content{height:var(--app-content-height);overflow:hidden;transition:height .1s ease-in-out}#app{width:100%;height:100%;margin:0;overflow:hidden}#app .wwtelescope-component{position:absolute;top:0;width:100%;height:100%;border-style:none;border-width:0;margin:0;padding:0}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-to{opacity:0}.modal{position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;color:#fff;background-color:rgba(0,0,0,.7);display:flex;align-items:center;justify-content:center}#modal-loading{background-color:#000}#modal-loading .container{display:flex;flex-direction:row;align-items:center;justify-content:center}#modal-loading .container .spinner{background-image:url(https://cosmicds.github.io/cds-website/misc/lunar_loader.gif);background-repeat:no-repeat;background-size:contain;width:3rem;height:3rem}#modal-loading .container p{margin:0 0 0 1rem;padding:0;font-size:150%}#modal-readytostart{cursor:pointer;color:#999}#modal-readytostart:hover{color:#2aa5f7}#modal-readytostart div{margin:0;padding:0;background-image:url(https://cosmicds.github.io/cds-website/logos/wwt_globe_bg.png);background-repeat:no-repeat;background-size:contain;background-position:50%;width:20rem;height:20rem;max-width:70%;max-height:70%;display:flex;align-items:center;justify-content:center}#modal-readytostart div .icon{width:60%;height:60%;margin-left:14%;margin-top:3%}.control-icon{pointer-events:auto}.control-icon:hover{cursor:pointer}.control-icon:focus{color:#fff}#bottom-content{display:flex;flex-direction:column;position:absolute;bottom:.5rem;right:.5rem;width:calc(100% - 1rem);pointer-events:none;align-items:center;gap:5px}#tools{z-index:10;color:#fff}#tools .opacity-range{width:50vw}#tools .clickable{cursor:pointer}#tools select{background:#fff;color:#000;border-radius:3px}.tool-container{flex-direction:row;gap:5px;pointer-events:auto}#credits,.tool-container{display:flex;align-items:center}#credits{color:#ddd;font-size:calc(.7em + .2vw);justify-self:flex-end;align-self:flex-end;justify-content:center}#credits p{margin:0;padding:0;line-height:1}#credits a{text-decoration:none;color:#fff;pointer-events:auto}#credits a:hover{text-decoration:underline}#credits a[class^=share-network]:hover{text-decoration:none;filter:brightness(75%)}#credits img{height:35px;vertical-align:middle;margin:2px}@media only screen and (max-width:600px){#credits img{height:24px}}#credits svg{vertical-align:middle;height:24px}#top-content{position:absolute;top:.5rem;left:.5rem;width:calc(100% - 1rem);display:flex;justify-content:space-between;align-items:flex-start}#top-content #center-buttons-wrapper{display:flex;flex-direction:row}#top-content #right-button-container{display:flex;flex-direction:column;gap:10px}.ui-text{color:#f0ab52;background:#000;padding:5px 5px;border:2px solid #000;border-radius:10px;font-size:calc(.7em + .2vw)}.ui-text:focus{color:#fff}.slider-label{font-weight:700;font-size:calc(.8em + .5vw);padding:5px 10px;text-align:center;line-height:20px}.slider-label .light-type{font-size:calc(.56em + .35vw)}.slider-label:hover{cursor:pointer}.bottom-sheet .v-overlay__content{align-self:flex-end;padding:0;margin:0;max-width:100%;height:34%}.v-dialog--fullscreen{background:#000;overflow-y:hidden}.info-text{height:33vh;padding-bottom:25px}.info-text a{text-decoration:none}.video-wrapper{height:100%;background:#000;text-align:center;z-index:1000}.close-icon{position:absolute;top:10px;right:10px;z-index:15}.close-icon:hover{cursor:pointer}video{height:100%;width:auto;max-width:100%;-o-object-fit:contain;object-fit:contain}.scrollable{overflow-y:auto}.no-bottom-border-radius{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.v-overlay{height:100vh}.v-navigation-drawer{height:40%!important}.v-navigation-drawer__scrim{display:none}.v-window-item{height:-moz-fit-content;height:fit-content}#tabs{width:calc(100% - 3em);align-self:left}#tab-items .v-card-text{font-size:max(14px,calc(.8em + .3vw));padding-top:max(2vw,16px);padding-left:max(4vw,16px);padding-right:max(4vw,16px)}#tab-items .v-card-text .end-spacer{height:25px}#close-text-icon{position:absolute;top:.25em;right:.77083em;color:#fff}#close-splash-icon{position:absolute;top:20px;right:20px;color:#f0ab52}#splash-screen{width:auto;height:auto;max-width:min(70vw,1624px);max-height:min(70vh,2030px);-o-object-fit:contain;object-fit:contain}#splash-overlay .v-overlay__content{position:fixed;margin:auto;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}#splash-overlay .v-overlay__content a:hover{cursor:pointer}#splash-close{position:absolute;top:5.5%;left:89%;height:4%;width:3.8%}#show-layers-button{font-size:calc(.75em + .5vw);pointer-events:auto}#video-container{position:absolute;width:100%;height:100%;max-width:100%;overflow:hidden;padding:0}.v-tabs:not(.v-tabs--vertical).v-tabs--right>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__next,.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev{display:none}@media (max-width:600px){#left-controls{display:block}#video-container{display:inherit}#tabs h3{font-size:1em}#tab-items .v-card-text .end-spacer{height:70px}}@media (max-width:300px){#tabs h3{font-size:.67em}}",""]);const s=l},2495:(e,t,o)=>{"use strict";var n=o(9963),a=o(5722),i=o(7582),r=o(6252),l=o(3577);const s=o.p+"media/CarinaFinal.fdf47ce7.mp4";var c=o(3885),d=o(9720),u=o(5911),h=o(5765),p=o(8015),m=o(4007),f=o(1669),g=o(9003),b=o(3379),w=o(7689),v=o(3558),_=o(9801),y=o(2734),k=o(2853),x=o(6418),S={id:"main-content"},W=["src"],U={class:"modal",id:"modal-loading"},I=(0,r._)("div",{class:"container"},[(0,r._)("div",{class:"spinner"}),(0,r._)("p",null,"Loading …")],-1),C=[I],T={id:"top-content"},j={id:"center-buttons-wrapper"},z={id:"bottom-content"},V={key:0,id:"tools"},O={class:"tool-container"},L=(0,r._)("br",null,null,-1),N=(0,r._)("span",{class:"light-type"},"(Visible)",-1),D=(0,r._)("br",null,null,-1),A=(0,r._)("span",{class:"light-type"},"(Infrared)",-1),B=(0,r._)("span",null,"Background imagery:",-1),M=["value"],E=(0,r._)("div",{id:"credits",class:"ui-text"},[(0,r._)("div",{id:"icons-container"},[(0,r._)("a",{href:"https://www.cosmicds.cfa.harvard.edu/",target:"_blank",rel:"noopener noreferrer"},[(0,r._)("img",{alt:"CosmicDS Logo",src:"https://cosmicds.github.io/cds-website/logos/cosmicds_logo_for_dark_backgrounds.png"})]),(0,r._)("a",{href:"https://worldwidetelescope.org/home/",target:"_blank",rel:"noopener noreferrer"},[(0,r._)("img",{alt:"WWT Logo",src:"https://cosmicds.github.io/cds-website/logos/logo_wwt.png"})]),(0,r._)("a",{href:"https://science.nasa.gov/learners",target:"_blank",rel:"noopener noreferrer",class:"pl-1"},[(0,r._)("img",{alt:"SciAct Logo",src:"https://cosmicds.github.io/cds-website/logos/logo_sciact.png"})]),(0,r._)("a",{href:"https://nasa.gov/",target:"_blank",rel:"noopener noreferrer",class:"pl-1"},[(0,r._)("img",{alt:"SciAct Logo",src:"https://cosmicds.github.io/cds-website/logos/NASA_Partner_color_300_no_outline.png"})])])],-1),H={class:"video-wrapper"},P=(0,r._)("video",{controls:"",id:"info-video"},[(0,r._)("source",{src:s,type:"video/mp4"})],-1),J=(0,r._)("h3",null,"Information",-1),R=(0,r._)("h3",null,"Using WWT",-1),Y=(0,r._)("h4",null,"Explore!",-1),q=(0,r._)("a",{href:"https://webbtelescope.org/contents/media/images/2022/031/01G77PKB8NKR7S8Z6HBXMYATGJ",target:"_blank",rel:"noopener noreferrer"},"Carina Nebula",-1),Z=(0,r._)("br",null,null,-1),F=(0,r._)("br",null,null,-1),K=(0,r._)("br",null,null,-1),G=(0,r._)("br",null,null,-1),X=(0,r._)("br",null,null,-1),Q=(0,r._)("h4",null,"Images as “data”",-1),$=(0,r._)("br",null,null,-1),ee=(0,r._)("br",null,null,-1),te=(0,r._)("br",null,null,-1),oe=(0,r._)("br",null,null,-1),ne=(0,r._)("h4",null,"Visible vs Infrared Light",-1),ae=(0,r._)("a",{href:"https://hubblesite.org/contents/articles/the-electromagnetic-spectrum",target:"_blank",rel:"noopener noreferrer"},"spectrum",-1),ie=(0,r._)("br",null,null,-1),re=(0,r._)("br",null,null,-1),le=(0,r._)("br",null,null,-1),se=(0,r._)("br",null,null,-1),ce=(0,r._)("br",null,null,-1),de=(0,r._)("h3",null,"Credits:",-1),ue=(0,r._)("h4",null,[(0,r._)("a",{href:"https://www.cosmicds.cfa.harvard.edu/",target:"_blank",rel:"noopener noreferrer"},"CosmicDS"),(0,r.Uk)(" Mini Stories Team:")],-1),he=(0,r._)("br",null,null,-1),pe=(0,r._)("br",null,null,-1),me=(0,r._)("br",null,null,-1),fe=(0,r._)("br",null,null,-1),ge=(0,r._)("br",null,null,-1),be=(0,r._)("br",null,null,-1),we=(0,r._)("br",null,null,-1),ve=(0,r._)("h4",null,"WorldWide Telescope Team:",-1),_e=(0,r._)("br",null,null,-1),ye=(0,r._)("br",null,null,-1),ke=(0,r._)("br",null,null,-1),xe=(0,r._)("br",null,null,-1),Se=(0,r._)("br",null,null,-1),We=(0,r._)("br",null,null,-1),Ue=(0,r._)("div",{style:{"min-height":"120px"}},[(0,r._)("p",null,[(0,r.Uk)(" The frame above provides an "),(0,r._)("b",null,"interactive view "),(0,r.Uk)("of the night sky, powered by WorldWide Telescope (WWT). Here you can see a portion of the Carina Nebula imaged by the "),(0,r._)("a",{href:"https://hubblesite.org/",target:"_blank",rel:"noopener noreferrer"},"Hubble Space Telescope"),(0,r.Uk)(" and the "),(0,r._)("a",{href:"https://webbtelescope.org/",target:"_blank",rel:"noopener noreferrer"},"James Webb Space Telescope"),(0,r.Uk)(". These colorful images are overlaid against a background of the whole sky. ")]),(0,r._)("p",null,"You can zoom out to see where these images fit within a larger cloud of gas and dust."),(0,r._)("p",null,"You can zoom in to see stunning detail within both images."),(0,r._)("p",null,"You can switch between the Hubble and Webb images and compare their views by using the slider, or you can hide both images and explore the whole sky. Click the reset button if you want to return to the location of the Carina Nebula.")],-1),Ie=(0,r._)("h3",null,"Credits:",-1),Ce=(0,r._)("h4",null,[(0,r._)("a",{href:"https://www.cosmicds.cfa.harvard.edu/",target:"_blank",rel:"noopener noreferrer"},"CosmicDS"),(0,r.Uk)(" Mini Stories Team:")],-1),Te=(0,r._)("br",null,null,-1),je=(0,r._)("br",null,null,-1),ze=(0,r._)("br",null,null,-1),Ve=(0,r._)("br",null,null,-1),Oe=(0,r._)("br",null,null,-1),Le=(0,r._)("br",null,null,-1),Ne=(0,r._)("br",null,null,-1),De=(0,r._)("h4",null,"WorldWide Telescope Team:",-1),Ae=(0,r._)("br",null,null,-1),Be=(0,r._)("br",null,null,-1),Me=(0,r._)("br",null,null,-1);function Ee(e,t,a,s,I,Ee){var He=(0,r.up)("WorldWideTelescope"),Pe=(0,r.up)("icon-button"),Je=(0,r.up)("font-awesome-icon"),Re=(0,r.up)("funding-acknowledgment");return(0,r.wg)(),(0,r.j4)(c.q,{id:"app",style:(0,l.j5)(e.cssVars)},{default:(0,r.w5)((function(){return[(0,r._)("div",S,[(0,r.Wm)(He,{"wwt-namespace":e.wwtNamespace},null,8,["wwt-namespace"]),(0,r.Wm)(w.y,{"model-value":e.showSplashScreen,absolute:"",opacity:"0.6",id:"splash-overlay"},{default:(0,r.w5)((function(){return[(0,r.wy)((0,r._)("img",{id:"splash-screen",src:o(2030)("./Carina_Nebula_Splash_Screen".concat(e.mobile?"_Mobile":"","_Close.png")),"max-width":"70vw","max-height":"70vh",contain:""},null,8,W),[[x.L,e.closeSplashScreen]]),(0,r._)("a",{id:"splash-close",onClick:t[0]||(t[0]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.closeSplashScreen&&e.closeSplashScreen.apply(e,(0,i.ev)([],(0,i.CR)(t),!1))})})]})),_:1},8,["model-value"]),(0,r.Wm)(n.uT,{name:"fade"},{default:(0,r.w5)((function(){return[(0,r.wy)((0,r._)("div",U,C,512),[[n.F8,e.isLoading]])]})),_:1}),(0,r._)("div",T,[(0,r.Wm)(Pe,{modelValue:e.showVideoSheet,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.showVideoSheet=t}),id:"video-icon",color:e.accentColor,"fa-icon":"video","tooltip-location":e.smallSize?"bottom":"end","tooltip-text":"Watch video","tooltip-offset":"10px","show-tooltip":!e.mobile},null,8,["modelValue","color","tooltip-location","show-tooltip"]),(0,r._)("div",j,[(0,r._)("button",{id:"show-layers-button",class:"ui-text",onClick:t[2]||(t[2]=function(t){return e.showLayers=!e.showLayers})},(0,l.zw)(e.showLayers?"Hide Images":"Show Images"),1),(0,r.Wm)(Pe,{id:"reset-icon","fa-icon":"redo",color:e.accentColor,onActivate:t[3]||(t[3]=function(){return e.resetView(!1)}),"tooltip-text":"Return to Carina","tooltip-location":"bottom","tooltip-offset":"3px","show-tooltip":!e.mobile},null,8,["color","show-tooltip"])]),(0,r.Wm)(Pe,{id:"text-icon","fa-icon":"book-open",color:e.accentColor,modelValue:e.showTextSheet,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.showTextSheet=t}),"tooltip-text":"Learn more","tooltip-location":e.smallSize?"bottom":"start","tooltip-offset":e.smallSize?"0":"10px","show-tooltip":!e.mobile},null,8,["color","modelValue","tooltip-location","tooltip-offset","show-tooltip"])]),(0,r._)("div",z,[e.showLayers?((0,r.wg)(),(0,r.iD)("div",V,[(0,r._)("div",O,["crossfade"==e.currentTool?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r._)("span",{class:"ui-text slider-label",onClick:t[5]||(t[5]=function(t){return e.crossfadeOpacity=0}),onKeyup:t[6]||(t[6]=(0,n.D2)((function(t){return e.crossfadeOpacity=0}),["enter"])),tabindex:"0"},[(0,r.Uk)("Hubble"),L,N],32),(0,r.wy)((0,r._)("input",{class:"opacity-range",type:"range","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.crossfadeOpacity=t})},null,512),[[n.nr,e.crossfadeOpacity]]),(0,r._)("span",{class:"ui-text slider-label",onClick:t[8]||(t[8]=function(t){return e.crossfadeOpacity=100}),onKeyup:t[9]||(t[9]=(0,n.D2)((function(t){return e.crossfadeOpacity=100}),["enter"])),tabindex:"0"},[(0,r.Uk)("JWST"),D,A],32)],64)):"choose-background"==e.currentTool?((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[B,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.curBackgroundImagesetName=t})},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.backgroundImagesets,(function(e){return(0,r.wg)(),(0,r.iD)("option",{value:e.imagesetName,key:e.imagesetName},(0,l.zw)(e.displayName),9,M)})),128))],512),[[n.bM,e.curBackgroundImagesetName]])],64)):(0,r.kq)("",!0)])])):(0,r.kq)("",!0),E]),(0,r.Wm)(p.B,{id:"video-container",modelValue:e.showVideoSheet,"onUpdate:modelValue":t[13]||(t[13]=function(t){return e.showVideoSheet=t}),transition:"slide-y-transition",fullscreen:""},{default:(0,r.w5)((function(){return[(0,r._)("div",H,[(0,r.Wm)(Je,{class:"close-icon",icon:"times",size:"lg",onClick:t[11]||(t[11]=function(t){return e.showVideoSheet=!1}),onKeyup:t[12]||(t[12]=(0,n.D2)((function(t){return e.showVideoSheet=!1}),["enter"])),tabindex:"0"}),P])]})),_:1},8,["modelValue"]),(0,r.Wm)(p.B,{class:"bottom-sheet",id:"text-bottom-sheet","hide-overlay":"",persistent:"",absolute:"",width:"100%",scrim:!1,location:"bottom",modelValue:e.showTextSheet,"onUpdate:modelValue":t[18]||(t[18]=function(t){return e.showTextSheet=t}),transition:"dialog-bottom-transition"},{default:(0,r.w5)((function(){return[(0,r.Wm)(d._,{height:"100%"},{default:(0,r.w5)((function(){return[(0,r.Wm)(v.d,{modelValue:e.tab,"onUpdate:modelValue":t[14]||(t[14]=function(t){return e.tab=t}),height:"32px","slider-color":"white",id:"tabs",dense:"",grow:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(_.L,{tabindex:"0"},{default:(0,r.w5)((function(){return[J]})),_:1}),(0,r.Wm)(_.L,{tabindex:"0"},{default:(0,r.w5)((function(){return[R]})),_:1})]})),_:1},8,["modelValue"]),(0,r.Wm)(Je,{id:"close-text-icon",class:"control-icon",icon:"times",size:"lg",onClick:t[15]||(t[15]=function(t){return e.showTextSheet=!1}),onKeyup:t[16]||(t[16]=(0,n.D2)((function(t){return e.showTextSheet=!1}),["enter"])),tabindex:"0"}),(0,r.Wm)(y.Oo,{modelValue:e.tab,"onUpdate:modelValue":t[17]||(t[17]=function(t){return e.tab=t}),id:"tab-items",class:"pb-2 no-bottom-border-radius"},{default:(0,r.w5)((function(){return[(0,r.Wm)(k.H,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(d._,{class:"no-bottom-border-radius scrollable"},{default:(0,r.w5)((function(){return[(0,r.Wm)(u.Z,{class:"info-text no-bottom-border-radius"},{default:(0,r.w5)((function(){return[Y,(0,r.Uk)(" As scientists, we learn by observing and noticing. Explore these images of the "),q,(0,r.Uk)(" and see what you can find."),Z,(0,r.Uk)(" • Look for stars that are “invisible” to our eyes because they are blocked by dust but shine in JWST’s infrared image."),F,(0,r.Uk)(" • Look near the edge of the dusty, dense clouds in the JWST image. See if you can find bright yellow arcs that indicate gas and dust being blown away by young forming stars."),K,(0,r.Uk)(" • Scan the dark blue region of the JWST image and see if you can find reddish smudgy objects that might be galaxies. Switch over to the Hubble image. Do you see those galaxies in the Hubble image?"),G,X,Q,(0,r.Uk)(" When you think about scientific data, pictures might not immediately spring to mind, but in astronomy, images are some of the most important pieces of data available. "),$,ee,(0,r.Uk)(" Images show us the structure of objects in space, which here provides clues on how stars form and evolve. In the Hubble and JWST images of the Carina Nebula, you can see regions of very high density dust and gas (the brown parts of the images) where new stars are being born. If you zoom out, you will see that the images are at the edge of what appears to be a larger bubble, which is the cavern of lower density gas carved out by winds from massive stars. "),te,oe,ne,(0,r.Uk)(" Our eyes can detect visible light, but visible light is only a small part of a broader "),ae,(0,r.Uk)(" of light that has different energies, ranging from gamma rays and x-rays to infrared light and radio waves. Images from each part of the spectrum can tell a different part of the story about objects in space. "),ie,re,(0,r.Uk)(" The Hubble Space Telescope takes pictures in visible light, like our eyes. The James Webb Space Telescope takes pictures in infrared light. Some “night vision” cameras image objects in the dark using infrared light. Animals and people “glow” in infrared in the dark because we usually have higher temperatures than our surroundings. "),le,se,ce,de,ue,(0,r.Uk)(" Jon Carifio"),he,(0,r.Uk)(" John Lewis"),pe,(0,r.Uk)(" Pat Udomprasert"),me,(0,r.Uk)(" Alyssa Goodman"),fe,(0,r.Uk)(" Mary Dussault"),ge,(0,r.Uk)(" Evaluator: Sue Sunbury"),be,we,ve,(0,r.Uk)(" Peter Williams"),_e,(0,r.Uk)(" A. David Weigel"),ye,(0,r.Uk)(" Jon Carifio"),ke,xe,(0,r.Wm)(Re),(0,r.Wm)(m.C,{class:"end-spacer"})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(k.H,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(d._,{class:"no-bottom-border-radius scrollable",style:{height:"100%"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(u.Z,{class:"info-text no-bottom-border-radius"},{default:(0,r.w5)((function(){return[(0,r.Wm)(f.K,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(g.o,{align:"center"},{default:(0,r.w5)((function(){return[(0,r.Wm)(b.D,{cols:"4"},{default:(0,r.w5)((function(){return[(0,r.Wm)(h.v,{label:"",outlined:""},{default:(0,r.w5)((function(){return[(0,r.Uk)(" Pan ")]})),_:1})]})),_:1}),(0,r.Wm)(b.D,{cols:"8",class:"pt-2"},{default:(0,r.w5)((function(){return[(0,r._)("strong",null,(0,l.zw)(e.touchscreen?"press + drag":"click + drag"),1),(0,r.Uk)(" "+(0,l.zw)(e.touchscreen?":":"or")+" ",1),(0,r._)("strong",null,(0,l.zw)(e.touchscreen?":":"W-A-S-D"),1),(0,r.Uk)(" "+(0,l.zw)(e.touchscreen?":":"keys"),1),Se]})),_:1})]})),_:1}),(0,r.Wm)(g.o,{align:"center"},{default:(0,r.w5)((function(){return[(0,r.Wm)(b.D,{cols:"4"},{default:(0,r.w5)((function(){return[(0,r.Wm)(h.v,{label:"",outlined:""},{default:(0,r.w5)((function(){return[(0,r.Uk)(" Zoom ")]})),_:1})]})),_:1}),(0,r.Wm)(b.D,{cols:"8",class:"pt-2"},{default:(0,r.w5)((function(){return[(0,r._)("strong",null,(0,l.zw)(e.touchscreen?"pinch in and out":"scroll in and out"),1),(0,r.Uk)(" "+(0,l.zw)(e.touchscreen?":":"or")+" ",1),(0,r._)("strong",null,(0,l.zw)(e.touchscreen?":":"I-O"),1),(0,r.Uk)(" "+(0,l.zw)(e.touchscreen?":":"keys"),1),We]})),_:1})]})),_:1}),(0,r.Wm)(g.o,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(b.D,{cols:"12"},{default:(0,r.w5)((function(){return[Ue]})),_:1})]})),_:1}),(0,r.Wm)(g.o,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(b.D,{cols:"12"},{default:(0,r.w5)((function(){return[Ie,Ce,(0,r.Uk)(" Jon Carifio"),Te,(0,r.Uk)(" John Lewis"),je,(0,r.Uk)(" Pat Udomprasert"),ze,(0,r.Uk)(" Alyssa Goodman"),Ve,(0,r.Uk)(" Mary Dussault"),Oe,(0,r.Uk)(" Evaluator: Sue Sunbury"),Le,Ne,De,(0,r.Uk)(" Peter Williams"),Ae,(0,r.Uk)(" A. David Weigel"),Be,(0,r.Uk)(" Jon Carifio"),Me,(0,r.Wm)(m.C,{class:"end-spacer"})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["modelValue"])])]})),_:1},8,["style"])}var He=o(1643);const Pe=(0,r.aZ)({extends:a.MiniDSBase,props:{wtml:{type:Object,required:!0},wwtNamespace:{type:String,required:!0},url:{type:String,required:!0},thumbnailUrl:{type:String,required:!0},bgWtml:{type:String,required:!0},bgName:{type:String,required:!0}},data:function(){return{layers:{},cfOpacity:50,title:"Compare JWST and Hubble images of Carina!",description:"Pan, zoom, and compare the images using AAS WorldWide Telescope.",hashtags:["jwst","hubble","wwt","carina","unfoldtheuniverse"],ready:!1,backgroundImagesets:[],showSplashScreen:!1,showLayers:!0,layersLoaded:!1,sheet:null,currentTool:"crossfade",tab:0,accentColor:"#F0AB52",networks:[{name:"facebook",color:"#1877f2",text:"Share"},{name:"twitter",color:"#1da1f2",text:"Tweet"}]}},created:function(){var e=this;this.waitForReady().then((function(){e.backgroundImagesets=(0,i.ev)([],(0,i.CR)(a.skyBackgroundImagesets),!1);var t=Object.entries(e.wtml).map((function(t){var o=(0,i.CR)(t,2),n=o[0],a=o[1];return e.loadImageCollection({url:a,loadChildFolders:!1}).then((function(t){var o,a=t.get_children();if(null!=a){var i=a[0],r=null!==(o=i.get_backgroundImageset())&&void 0!==o?o:i.get_studyImageset();if(null!==r)return e.addImageSetLayer({url:r.get_url(),mode:"autodetect",name:n,goto:!1})}}))}));Promise.all(t).then((function(t){t.forEach((function(t){void 0!==t&&(e.layers[t.get_name()]=t,(0,He.p7)(t,["opacity",.5]))})),e.layersLoaded=!0,e.resetView();var o=function(t){e.showSplashScreen=!1,window.removeEventListener("keyup",o)};window.addEventListener("keyup",o),window.addEventListener("keyup",(function(t){["Esc","Escape"].includes(t.key)&&e.showVideoSheet&&(e.showVideoSheet=!1)}))})),e.loadImageCollection({url:e.bgWtml,loadChildFolders:!0}).then((function(t){e.curBackgroundImagesetName=e.bgName,e.backgroundImagesets.unshift(new a.BackgroundImageset("unWISE","unwise"))}));var o=function(t){e.showSplashScreen=!1,window.removeEventListener("keypress",o)};window.addEventListener("keypress",o)}))},computed:{crossfadeOpacity:{get:function(){return this.cfOpacity},set:function(e){this.layers.hubble&&(0,He.p7)(this.layers.hubble,["opacity",1-.01*e]),this.layers.jwst&&(0,He.p7)(this.layers.jwst,["opacity",.01*e]),this.cfOpacity=e}},curBackgroundImagesetName:{get:function(){return null==this.wwtBackgroundImageset?"":this.wwtBackgroundImageset.get_name()},set:function(e){this.setBackgroundImageByName(e)}},hashtagString:function(){return this.hashtags.join(",")},isLoading:function(){return!this.ready},mobile:function(){return this.smallSize&&this.touchscreen},showTextSheet:{get:function(){return"text"===this.sheet},set:function(e){this.selectSheet("text")}},showVideoSheet:{get:function(){return"video"===this.sheet},set:function(e){if(this.selectSheet("video"),!e){var t=document.querySelector("#info-video");t.pause()}}},smallSize:function(){return this.$vuetify.display.smAndDown},cssVars:function(){return{"--app-content-height":this.showTextSheet?"66%":"100%"}}},methods:{closeSplashScreen:function(){this.showSplashScreen=!1},selectSheet:function(e){var t=this;this.sheet==e?(this.sheet=null,this.$nextTick((function(){t.blurActiveElement()}))):this.sheet=e},resetView:function(e){void 0===e&&(e=!0);var t=Math.PI/180,o=this.layers.jwst.get_imageSet();this.gotoRADecZoom({raRad:t*o.get_centerX(),decRad:t*o.get_centerY(),zoomDeg:.8595,rollRad:1.799,instant:e})}},watch:{showLayers:function(e){Object.values(this.layers).forEach((function(t){(0,He.p7)(t,["enabled",e])}))},layersLoaded:function(e){e&&(this.ready=!0)},ready:function(e){e&&(this.showSplashScreen=!0)}}});o(2890);var Je=o(3744);const Re=(0,Je.Z)(Pe,[["render",Ee]]),Ye=Re;var qe=o(1251),Ze=o(8460),Fe=o(1563);o(5133);const Ke=(0,Ze.Rd)({icons:{defaultSet:"mdi",aliases:qe.j,sets:{mdi:qe.t}},locale:{locale:"en",fallback:"en",messages:{en:Fe.Z}},theme:{defaultTheme:"dark"}});var Ge=o(3636),Xe=o(9417),Qe=o(3024),$e=o(7810),et=o(6407);Ge.vI.add(Xe.OwZ),Ge.vI.add(Xe.Qj4),Ge.vI.add(Xe.TL5),Ge.vI.add(Xe.m6i),Ge.vI.add(Xe.vNB),Ge.vI.add(Xe.zc),Ge.vI.add(Xe.XQY),Ge.vI.add(Xe.XSV),Ge.vI.add(Xe.vsP),Ge.vI.add(Xe.N7g),Ge.vI.add(Xe.MUh),Ge.vI.add(Xe.Tab),Ge.vI.add(Xe.R8d),Ge.vI.add(Qe.neY),Ge.vI.add(Qe.mdU),Ge.vI.add(Xe.IyC),Ge.vI.add(Xe.Ond),Ge.vI.add(Xe.NBC),Ge.vI.add(Xe.cwv),Ge.vI.add(Xe.cnt),Ge.vI.add(Xe.Psp);var tt=function(e,t){return e.style.visibility=t.value?"hidden":""};(0,n.ri)(Ye,{wwtNamespace:"carinads",wtml:{jwst:"https://web.wwtassets.org/specials/2023/cosmicds-carina/collection/jwst_carina.wtml",hubble:"https://web.wwtassets.org/specials/2023/cosmicds-carina/collection/carina_nebula.wtml"},url:"https://web.wwtassets.org/specials/2023/cosmicds-carina/",thumbnailUrl:"https://cdn.worldwidetelescope.org/thumbnails/jwst.jpg",bgWtml:"https://data1.wwtassets.org/packages/2022/07_jwst/smacs0723/jwst_smacs0723.wtml",bgName:"unwise"}).use(et.wwtPinia).use(Ke).directive("hide",{beforeMount:function(e,t,o,n){tt(e,t)},updated:function(e,t,o,n){tt(e,t)}}).component("WorldWideTelescope",et.WWTComponent).component("font-awesome-icon",$e.GN).component("icon-button",a.IconButton).component("funding-acknowledgment",a.FundingAcknowledgment).mount("#app")},2890:(e,t,o)=>{var n=o(2466);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var a=o(4402).Z;a("838e0e72",n,!0,{sourceMap:!1,shadowMode:!1})},2030:(e,t,o)=>{var n={"./Carina_Nebula_Splash_Screen_Close.png":2797,"./Carina_Nebula_Splash_Screen_Mobile_Close.png":3311};function a(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=2030},2797:(e,t,o)=>{"use strict";e.exports=o.p+"img/Carina_Nebula_Splash_Screen_Close.e9332cc1.png"},3311:(e,t,o)=>{"use strict";e.exports=o.p+"img/Carina_Nebula_Splash_Screen_Mobile_Close.19646d48.png"}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={id:n,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,(()=>{var e=[];o.O=(t,n,a,i)=>{if(!n){var r=1/0;for(d=0;d<e.length;d++){for(var[n,a,i]=e[d],l=!0,s=0;s<n.length;s++)(!1&i||r>=i)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(l=!1,i<r&&(r=i));if(l){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,a,i]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e={143:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var a,i,[r,l,s]=n,c=0;if(r.some((t=>0!==e[t]))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(s)var d=s(o)}for(t&&t(n);c<r.length;c++)i=r[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},n=self["webpackChunk_cosmicds_carinads"]=self["webpackChunk_cosmicds_carinads"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=o.O(void 0,[998],(()=>o(2495)));n=o.O(n)})();
//# sourceMappingURL=app.03f95f86.js.map