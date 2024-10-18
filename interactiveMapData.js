var mapData = {
    "hypertension":[],
    //"gastro":[],
    "rhumatologie":[]
};

var gebi=(x)=>document.getElementById(x),
dqs=el=>document.querySelector(el),
dqa=el=>document.querySelectorAll(el),
pd=()=>window.parent.document,
pgebi=(x)=>window.parent.document.getElementById(x),
pdqs=el=>window.parent.document.querySelector(el),
pdqa=el=>window.parent.document.querySelectorAll(el),
ach=(c,o)=>{c.appendChild(o)},
pdce=function(el){
    let attrib=arguments[1]||[],it=arguments[2]||'',ih=arguments[3]||'',al=attrib.length,del=window.parent.document.createElement(el);
    if(al)for(let i=0;i<al;++i){del.setAttributeNS(null, attrib[i][0],attrib[i][1]);}
    if(it!='')del.textContent=it;
    if(ih!='')del.innerHTML=ih;
    return del;
},
sht=e=>{e.style.visibility='visible';e.style.display='table'},
hid=e=>{e.style.visibility='hidden';e.style.display='none'},
shd=e=>{e.style.visibility='visible';e.style.display='block'},
dce=function(el){
    let attrib=arguments[1]||[],ih=arguments[2]||'',al=attrib.length,del=document.createElementNS(svgns,el);
    if(al)for(let i=0;i<al;++i){del.setAttributeNS(null, attrib[i][0],attrib[i][1]);}
    if(ih!='')del.textContent=ih;
    return del;
},
getdocWidth=()=>_max(
    noz(window.outerWidth),
    noz(window.innerWidth),
    noz(document.documentElement.clientWidth),
    noz(document.width),
    noz(document.documentElement.scrollWidth),
    noz((document.body && typeof document.body.scrollWidth != 'undefined')?document.body.scrollWidth:0),
    noz((document.body && typeof document.body.offsetWidth != 'undefined')?document.body.offsetWidth:0),
    noz((document.body && typeof document.body.clientWidth != 'undefined')?document.body.clientWidth:0)
),
noz=(a)=>{
    if (typeof(a) != 'number') return 0;
    if (a==null) return 0;
    if (isNaN(a)) return 0;
    return a;
},
_max=function(){
    var a=arguments;
    if (a.length==0) return false;
    var b=a[0];
    for (var i=1 ; i<a.length ; i++)
        if (a[i]>b)
            b=a[i];
    return b;
},
getScrollXY=()=>{
  var scrOfX = 0, scrOfY = 0;
  if( typeof( window.pageYOffset ) == 'number' ) {
    scrOfY = window.pageYOffset;
    scrOfX = window.pageXOffset;
  } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
    scrOfY = document.body.scrollTop;
    scrOfX = document.body.scrollLeft;
  } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
    scrOfY = document.documentElement.scrollTop;
    scrOfX = document.documentElement.scrollLeft;
  }
  return [ scrOfX, scrOfY ];
},
pbod=pdqs('body'),
pbom=pdqs('main'),
addEvent=(elm,evType,fn,useCapture)=>{
    if(elm.addEventListener){
        elm.addEventListener(evType,fn,useCapture);
        return true;
    }
    else if(elm.attachEvent){
        var r=elm.attachEvent('on'+evType,fn);
        return r;
    }
    else{
        elm['on'+evType]=fn;
    }
},
remEvent=(elm,evType,fn,useCapture)=>{
    if(elm.removeEventListener){
        removeEventListener(evType,fn,useCapture);
    }
    else if(elm.detachEvent){
        var r=elm.detachEvent('on'+evType,fn);
        return r;
    }
    else{
        elm['on'+evType]=null;
    }
},
callMe=(askPage)=>{
    const suff=(window.parent.location.href.includes('msdconnect.fr') ? '' : '-preprod'),
    environMap = 'map'+suff,
    environVideo = 'video'+suff,
    environUserType = 'usertype'+suff,
    environScoringtool = 'pah-scoring-tool'+suff;
    console.log('suff: '+suff);
    if (askPage==='gastro') {

        var ajs=[],ajd=[],acss=[];
        // map htp
        const rgxhtp=/\/therapeutic-areas\/hypertension-pulmonaire($|\/$|\/htp-tec(\/)*|\/htap(\/)*|\/diagnostic-de-lhtp(\/)*)($|#([A-Za-z0-9\-])+$)/g;
        if(
            window.parent.location.href.includes('hypertension-pulmonaire/nous-contacter') // testing only
            ||
            window.parent.location.href.search(rgxhtp) !== -1
            ||
            window.parent.location.href.includes('centres-experts-france')
        ){
            ajs.push(`https://bo.msdconnect.fr/static/${environMap}/map-htp.js`);
            ajd.push('');
            acss.push(`https://bo.msdconnect.fr/static/${environMap}/map-htp.css`);
        }
        // map rotateq
        if(
            window.parent.location.href.includes('post_type=product') /* for draft */
            ||
            window.parent.location.href.includes('products/rotateq') /* for published */
            ||
            window.parent.location.href.includes('la-vaccination-contre-les-rotavirus-face-a-la-diversite-des-souches')
        ){
            ajs.push(`https://bo.msdconnect.fr/static/${environMap}/map-rotavirus.js`);
            ajd.push('');
            acss.push(`https://bo.msdconnect.fr/static/${environMap}/map-rotavirus.css`);
        }

        // map hpv
        if(
            window.parent.location.href.includes('/gardasil-9/la-couverture-vaccinale-hpv/')
            ||
            window.parent.location.href.includes('/interactive-block/')
        ){
            ajs.push(`https://bo.msdconnect.fr/static/${environMap}/map-hpv.js`);
            ajd.push('');
            acss.push(`https://bo.msdconnect.fr/static/${environMap}/map-hpv.css`);
        }
        // video exit popin
        if(
            window.parent.location.href.includes('/therapeutic-areas/hypertension-pulmonaire/')  || 
            window.parent.location.href.includes('/therapeutic-areas/gastroenterologie/')  || 
            window.parent.location.href.includes('/therapeutic-areas/rhumatologie/') 
        ){
            ajs.push(`https://bo.msdconnect.fr/static/${environVideo}/videopop.js`);
            ajd.push('3');
        }
        // user type popin
        if(
            window.parent.location.href.includes('/therapeutic-areas/hypertension-pulmonaire/')
        ) {
            ajs.push(`https://bo.msdconnect.fr/static/${environUserType}/usertype.js`);
            ajd.push('3');
        }

        // pilote filters
        if(
            window.parent.location.href.includes('france/test-filtres-onco/') ||
            window.parent.location.href.includes('/therapeutic-areas/pilote/immersions-et-interviews-dexperts/interviews-dexperts') ||
            window.parent.location.href.includes('/therapeutic-areas/pilote/immersions-et-interviews-dexperts/immersions-dans-un-etablissement') ||
            window.parent.location.href.includes('/therapeutic-areas/pilote/articles-publications') 
        ){
            ajs.push(`https://bo.msdconnect.fr/static/pilote${suff}/pilfilSlide.js`);
            ajd.push('');

        }

        // emailing chaptering
        if(window.parent.location.href.includes('/france/test-chapitrage-email-mcf-3512')){
            ajs.push('https://bo.msdconnect.fr/static/chapitrage/brightcovejump.js');
            ajd.push('');
        }

        // PAH Scoring Tool.
        if(
            window.parent.location.href.includes('/pour-ma-pratique/saavy') ||
            window.parent.location.href.includes('/pour-ma-pratique/scoring-htap/')
        ){
            ajs.push(`https://bo.msdconnect.fr/static/${environScoringtool}/pahscor-tool.js`);
            ajd.push('');
        }

        // PAH Scoring Tool test
        if(
            window.parent.location.href.includes('/pour-ma-pratique/scoring-htap-je-reevalue-en-3-clics/')
        ){
            ajs.push(`https://bo.msdconnect.fr/static/${environScoringtool}/pahscor-tool-test.js`);
            ajd.push('');
        }

        if(
            window.parent.location.href.includes('/pour-ma-pratique/sota-shortcut')            
        ){
            ajs.push(`https://bo.msdconnect.fr/static/${environScoringtool}/sota-shortcut-preprod.js`);
            ajd.push('');
        }


        //optin booster
        if(
            window.parent.location.href.includes('/optin-or-not-optin') ||
            window.parent.location.href.includes('/gastroenterologie/pour-mes-patients/certificats-medicaux-bilingues-francais-anglais-pour-les-voyages-en-avion-pdf')
        ){
            ajs.push(`https://bo.msdconnect.fr/static/popoptin${suff}/popoptin.js`);
            ajd.push('');
        }
        if(
            window.parent.location.href.includes('/les-infections-a-papillomavirus-humains') ||
            window.parent.location.href.includes('/pediatrie-les-infections-a-pneumocoques') || 
            window.parent.location.href.includes('/calendrier-des-vaccinations-et-recommandations-vaccinales-en-vigueur')
          )
        {
            ajs.push(`https://bo.msdconnect.fr/static/popoptin${suff}/newsletter-pop.js`);
            ajd.push('');
        }

        var currentUrl = window.parent.location.href;
        
        // Define the array of desired URLs
        var desiredUrl = 'https://mconnect-preprod.go-vip.net/france/therapeutic-areas/oncologie/';

        var vaccinesUrl = 'https://mconnect-preprod.go-vip.net/france/therapeutic-areas/vaccins/';
        
        // Check if the current URL matches any of the desired URLs
        if (desiredUrl == currentUrl) {
            ajs.push(`https://bo.msdconnect.fr/static/popoptin${suff}/loginshortcut-popup.js`);
            ajd.push('');
        }

        if(vaccinesUrl == currentUrl) {
            ajs.push(`https://bo.msdconnect.fr/static/calender-table${suff}/calender-preprod.js`);
            ajd.push('');
        }

        if(!ajs.length){
            ajs.push('https://bo.msdconnect.fr/static/pleasewait.js');
            ajd.push('');
        }
        console.log('ajs: ',ajs);
        for(let i=0,len=ajs.length;i<len;++i){
            $.when((function(jsi,jsd){
                if(jsd===''){
                    $.getScript(jsi);
                } else {
                    const oac=gCook('OptanonConsent'),pc=gCookProp(oac,'groups'),hasConsent=gCookCatConsent(pc,'C000'+jsd);
                    console.log('oac = ',oac);
                    console.log('pc = ',pc);
                    console.log('haConsent = ',hasConsent)
                    if(hasConsent)$.getScript(jsi);
                }
            })(ajs[i], ajd[i])
            ).done(function(){});
        }
        if(acss.length){
            for(let i=0,len=acss.length;i<len;++i){
                $("head").append("<link>");
                let mycss = $("head").children(":last");
                mycss.attr({
                    rel:  "stylesheet",
                    type: "text/css",
                    href: acss[i]
                });
            }
        }

        return;
    }

    if (askPage==='hypertension') {

        var ajsn=[],ajdn=[],acssn=[];

        if(
            window.parent.location.href.includes('/pour-ma-pratique/saavy') ||
            window.parent.location.href.includes('/pour-ma-pratique/scoring-htap') ||
            window.parent.location.href.includes('/sota-shortcut')
        ){
            ajsn.push(`https://bo.msdconnect.fr/static/${environScoringtool}/sota-shortcut-preprod.js`);
            ajdn.push('');
        }       

        if(!ajsn.length){
            ajsn.push('https://bo.msdconnect.fr/static/pleasewait.js');
            ajdn.push('');
        }

       

        console.log('ajsn: ',ajsn);
        for(let i=0,len=ajsn.length;i<len;++i){
            $.when((function(jsin,jsdn){
                if(jsdn===''){
                    $.getScript(jsin);
                } else {
                    const oacn=gCook('OptanonConsent'),pcn=gCookProp(oacn,'groups'),hasConsentn=gCookCatConsent(pcn,'C000'+jsdn);
                    console.log('oacn = ',oacn);
                    console.log('pcn = ',pcn);
                    console.log('haConsent = ',hasConsentn)
                    if(hasConsentn)$.getScript(jsin);
                }
            })(ajsn[i], ajdn[i])
            ).done(function(){});
        }
        if(acssn.length){
            for(let i=0,len=acssn.length;i<len;++i){
                $("head").append("<link>");
                let mycssn = $("head").children(":last");
                mycssn.attr({
                    rel:  "stylesheet",
                    type: "text/css",
                    href: acssn[i]
                });
            }
        }

        return;
    }



    // doneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

    var js1 = `https://bo.msdconnect.fr/static/${environMap}/interMapData-hypertension.js`;
    var js3 = `https://bo.msdconnect.fr/static/${environMap}/interMapData-rhumatologie.js`;
    if (window.location.href.includes('msdconnect.fr')) {
        js1 = `https://bo.msdconnect.fr/static/${environMap}/interMapData-hypertension.js`;
        js3 = `https://bo.msdconnect.fr/static/${environMap}/interMapData-rhumatologie.js`;
    }
    $.when(
        $.getScript( js1 ).done(function(){
            mapData.hypertension = mapDataHypertension;
        }),
        $.getScript( js3 ).done(function(){
            mapData.rhumatologie = mapDataRhumatologie;
        })
    ).done(function(){
        if(window.convertMapData) {
            convertMapData();
        }
    });
},gCook=(cname)=>{
    const name=cname+"=",decodedCookie=decodeURIComponent(document.cookie),ca=decodedCookie.split(';');
    for (let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name)==0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
},gCookProp=(str,prop)=>{
    const p=str.split('&');
    for (let i = 0; i <p.length; i++) {
        let sp=p[i].split('=');
        //console.log('sp = ',sp)
        if (sp[0]===prop) {
            return sp[1].toString();
        }
    }
    return '';
},gCookCatConsent=(str,cat)=>{
    const cs=str.split(',');
    for (const cats of cs) {
        let sc=cats.split(':');
        if(sc[0]===cat) return parseInt(sc[1],10);
    }
},
sYrCook=(cname,val)=>{
    document.cookie = cname+"="+JSON.stringify(val)+";max-age="+(365*24*60*60*1000)+";samesite=lax;path=/;secure";
};
callMe(mapPage);
