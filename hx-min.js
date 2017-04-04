var HXGlobalJS=function(e,i){function t(e){b.length&&m&&(O=new HXVideoLinks(e.VidLinkOptions),0!==i.length&&(T=new HXPopUpProblems(c.PUPOptions,i)));var t=$("a.hx-vidtime");if(t.on("click tap",function(){var e=l($(this).attr("data-time")),i=$(this).attr("href"),t=i.slice(i.indexOf("#video")),a=t.replace("#video",""),o=i.slice(i.indexOf("/jump_to_id/")+13,i.indexOf("#video")),n=0===i.indexOf("#")?!0:!1;n?(r({"link starts video at time":e}),O.jumpToTime(a,e)):(localStorage.HXVideoLinkGo="true",localStorage.HXVideoLinkUnit=o,localStorage.HXVideoLinkNumber=a,localStorage.HXVideoLinkTime=e,r({"storing video info for jump":{unit:o,"video number":a,time:e}}))}),e.collapsedNav&&($(".sequence-nav").hide(),$(".sequence-bottom").hide(),$(".sequence > .path").hide(),$("h3.unit-title").hide()),e.makeSmiles){var a=$('<span class="hx-smileystack hx-meh fa-stack fa-lg"><span class="fa fa-circle fa-stack-2x"></span><span class="fa fa-meh-o fa-stack-2x"></span></span>'),o=$('<span class="hx-smileystack hx-smile fa-stack fa-lg"><span class="fa fa-circle fa-stack-2x"></span><span class="fa fa-smile-o fa-stack-2x"></span></span>'),s=$('<span class="hx-smileyspacer"></span>');$(".hx-smileystack").remove(),$(".hx-smileyspacer").remove(),$(".sequence-bottom").prepend(s),$(".sequence-bottom").append(a),$(a).on("click tap",function(){$(a).remove(),$(".sequence-bottom").append(o),r("Smile!")})}if(e.openPageDiscussion&&$(".discussion-show.btn").click(),e.markExternalLinks&&(r("marking external links"),$(".vert .xblock a, .static_tab_wrapper .xblock a").each(function(e,i){var t=$(i).attr("href");"undefined"!=typeof t&&(t.includes("edx.org")||t.includes("jump_to_id")||t.includes("/courses/")||t.includes("cloudfront.net")||t.includes("javascript:void")||"#"==t.slice(0,1)||$(i).append(' <span class="fa fa-external-link"><span class="sr">External link</span></span>'))})),e.makeTOC){$(".edx-notes-wrapper-content").length?$(".edx-notes-wrapper-content:first-of-type").prepend('<div id="autoTOC" class="hx-autotoc"></div>'):$("#seq_content .xblock:first-of-type").prepend('<div id="autoTOC" class="hx-autotoc"></div>');var h="<h3>Table of Contents</h3><ul>",p=$("h3, h4").filter(function(){return $(this).is(":visible")});$("#autoTOC ul");p.each(function(e){$(this).attr("id","TOCLink"+e);var i,t=$(this).text();$(this).is("h3")&&(i=3,$(p[e-1]).is("h3")||0==e?h+='<li class="autotoc'+i+'"><a href="#TOCLink'+e+'">'+t+"</a></li>":$(p[e-1]).is("h4")&&(h+='</ul></li><li class="autotoc'+i+'"><a href="#TOCLink'+e+'">'+t+"</a></li>")),$(this).is("h4")&&(i=4,$(p[e-1]).is("h3")?(e>0&&h.slice(0,h.length-5),h+='<ul><li class="autotoc'+i+'"><a href="#TOCLink'+e+'">'+t+"</a></li>"):$(p[e-1]).is("h4")&&(h+='<li class="autotoc'+i+'"><a href="#TOCLink'+e+'">'+t+"</a></li>"))}),h+="</ul>",$("#autoTOC").append(h)}$("[class^=hx-togglebutton]").on("click tap",function(){var e=n(this.className,"hx-togglebutton");$(".hx-toggletarget"+e).slideToggle("fast"),r({"Toggle button":"pressed","Toggle number":e})}),$("[class^=hx-highlighter]").on("click tap",function(){var i=n(this.className,"hx-highlighter");e.highlightState?$(".hx-highlight"+i).animate({backgroundColor:e.highlightColor},200):$(".hx-highlight"+i).animate({backgroundColor:e.highlightBackground},200),e.highlightState=!e.highlightState,r({"Highlight button":"pressed","Highlight number":i})});var d=$(".hx-popup-opener");d.length&&($("map").each(function(e){var i=[];$(this).find("area").each(function(e){i.push('<li class="'+this.className.split(/\s+/)[0]+' hx-popup-opener" title="'+this.title+'"><a href="javascript:;">'+this.title+"</a></li>")});var t="<ul>"+i.join("")+"</ul>";t="<h4>Clickable Areas:</h4>"+t,$(this).after(t)}),d=$(".hx-popup-opener"),d.on("click tap",function(){var e=this.className,i=e.split(/\s+/)[0];$("div."+i).dialog({dialogClass:"hx-popup-dialog",title:$(this).attr("title"),show:{effect:"fade",duration:200},hide:{effect:"fade",duration:100},buttons:{Close:function(){$(this).dialog("close")}}},function(e){$("div."+e).css({display:""}),alert(e)}),r({"Pop-up Dialog":"opened",Dialog:i})}));var f=$('span[class^="hx-footnote"]');if(f.length)for(var u,g,w,S,L,y=0;y<f.length;y++)u=f[y],g=n(u.className,"hx-footnote"),w=$("div.hx-footnote-target"+g),$(u).addClass("hx-footnote-style"),$(u).wrap("<sup></sup>"),S=$('h3:contains("Footnote")'),L=$(S[S.length-1]).parent(),$(w).detach().appendTo(L),$(u).wrap('<a href="#hxfoot'+g+'" name="hxfootback'+g+'"></a>').wrap(),w.prepend('<a name="hxfoot'+g+'"></a>'),w.append('<p><a href="#hxfootback'+g+'">(back)</a></p>');v.length&&(v.slick(e.slickOptions),r({slider:"created"})),x.length&&k.length&&(x.slick(e.slickNavOptions),k.slick(e.slickBigOptions),r({"paired slider":"created"}))}function a(e,i){e=e.replace("%2B","+"),e=e.replace("%3A",":");var t=e.match(/https:\/\/.+.org\//)[0];if("site"==i)return t;var a=e.replace("courses/course","asset");a.search("xblock/block-v1")>-1&&(a=a.replace("xblock/block","asset"),a=a.replace("+type@","/"));var o=a.indexOf("+"),n=a.indexOf("/",o);return a=a.slice(0,n),a+="+type@asset+block/","partial"==i?a.replace(t,""):a}function o(e){var i=a(e,"partial"),t={};return i=i.split(":")[1],t.institution=i.split("+")[0],t.id=i.split("+")[1],t.run=i.split("+")[2],t}function n(e,i){for(var t=e.split(/\s+/),a=0;a<t.length;a++)if(0===t[a].indexOf(i))return t[a].slice(i.length);return-1}function s(e,i,t){var a={};return e||i?a=e?i?$.extend(!0,{},t,i,e):$.extend(!0,{},t,e):$.extend(!0,{},t,i):t}function l(e){e=e.toString();var i=e.split(":"),t=0;return 3==i.length?t=3600*parseInt(i[0])+60*parseInt(i[1])+Number(i[2]):2==i.length?t=60*parseInt(i[0])+Number(i[1]):1==i.length&&(t=Number(i[0])),t}function r(e){console.log(JSON.stringify(e)),Logger.log(f+".hxjs",e)}var c={makeTOC:!1,collapsedNav:!1,makeSmiles:!1,openPageDiscussion:!1,markExternalLinks:!1,highlightColor:"#ff0",highlightBackground:"rgba(0,0,0,0)",highlightState:!0,slickOptions:{arrows:!0,dots:!0,infinite:!0,slidesToShow:3,slidesToScroll:3},slickNavOptions:{asNavFor:".hx-bigslider",variableWidth:!0,focusOnSelect:!0,slidesToShow:3,slidesToScroll:1},slickBigOptions:{asNavFor:".hx-navslider",arrows:!1,dots:!0,fade:!0,adaptiveHeight:!0,slidesToShow:1,slidesToScroll:1},PUPOptions:{width:800,effect:"fade",effectlength:200,myPosition:"center",atPosition:"center",ofTarget:window},VidLinkOptions:{hideLinkAfter:5,effect:"slide",hide:{direction:"down"},show:{direction:"down"},speed:500,location:"bl"}},h=a(window.location.href,"complete");r(h);var p=a(window.location.href,"site");if(p.indexOf("studio")>-1)return void console.log("Running HXJS in studio is probably not great.");var d=o(window.location.href),f=d.institution+"."+d.id+"_"+d.run;r({"HX.js":"enabled"}),r({"course log id":f}),$.getMultiScripts=function(e,i){var t=$.map(e,function(e){return $.getScript((i||"")+e)});return t.push($.Deferred(function(e){$(e.resolve)})),$.when.apply($,t)};var u=[],g={};u.push("hxGlobalOptions.js");var v=$(".hx-slider"),x=$(".hx-navslider"),k=$(".hx-bigslider");(v.length||x.length&&k.length)&&(r({image_slider:"found"}),u.push("slick.js"));var m=!0;void 0!==typeof e.dontLoadVideoStuff&&e.dontLoadVideoStuff===!0&&(m=!1,console.log("skipping loading video js"));var b=$(".video");if(m&&b.length){r({video:"found"}),u.push("HXVideoLinks.js");var O;if(0!==i.length){u.push("HXPopUpProblems.js");var T}}$.getMultiScripts(u,h).done(function(){r({"Loaded scripts":u}),g=hxGlobalOptions?s(e,hxGlobalOptions,c):s(e,{},c),t(g)}).fail(function(){r("Did not load scripts."),g=s(e,{},c),t(g)}),function(e){e.fn.hxKonami=function(i,t){return void 0===t&&(t="38,38,40,40,37,39,37,39,66,65"),this.each(function(){var a=[];e(this).keydown(function(e){for(a.push(e.keyCode);a.length>t.split(",").length;)a.shift();a.toString().indexOf(t)>=0&&(a=[],i(e))})})}}(jQuery),$(window).hxKonami(function(){alert("+30 Lives"),r({"easter egg":"Konami Code"})}),this.hmsToTime=l,this.logThatThing=r};if("undefined"==typeof hxLocalOptions)var hxLocalOptions={};if("undefined"==typeof HXPUPTimer)var HXPUPTimer=[];$(document).ready(function(){HXGlobalJS(hxLocalOptions,HXPUPTimer)});