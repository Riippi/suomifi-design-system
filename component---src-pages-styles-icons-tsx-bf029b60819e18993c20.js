"use strict";(self.webpackChunksuomifi_design_system=self.webpackChunksuomifi_design_system||[]).push([[491],{42687:function(t,e,i){var a=i(67294),s=i(93927),n=i(20631),l=i(96157),o=i(51666),r=i(27134),k={title:n.TN,icon:a.createElement(s.m,{icon:"magicWand"}),items:[{to:"/styles/",showAsTo:"/styles/info/",label:n.pz},{to:"/styles/icons/",label:l.TN},{to:"/styles/typography/",label:o.TN},{to:"/styles/colors/",label:r.title}]};e.Z=k},55236:function(t,e,i){i.r(e);var a=i(67294),s=i(9925),n=i(34394),l=i(46248),o=i(93927),r=i(28117),k=i(96157),u=i(79292),m=i(45214),h=i(86341),y=i(42687),c=i(3845),g=i(44150),v=[{id:"baseIcons",title:k.ep,icons:n.baseIcons},{id:"illustrativeIcons",title:k.mP,icons:n.illustrativeIcons},{id:"doctypeIcons",title:k.uq,icons:n.doctypeIcons}],p=(0,s.default)(l.JO).withConfig({displayName:"icons__StyledIcon",componentId:"sc-17zsf7e-0"})(["height:1.5em;width:1.5em;"]),d=(0,s.default)(o.m).withConfig({displayName:"icons__StyledStaticIcon",componentId:"sc-17zsf7e-1"})(["height:256px;width:256px;"]);e.default=function(){return a.createElement(u.Z,{sideNavData:y.Z},a.createElement(m.Z,{title:k.TN}),a.createElement(g.X6,{variant:"h1"},k.TN),a.createElement(g.nv,{variant:"lead"},a.createElement(g.xv,{variant:"lead"},k.mf)),v.map((function(t){return a.createElement(h.Z,{key:t.id,mainTitle:t.title,description:"",exampleFirst:!1,noCode:!0},a.createElement(c.Z,{style:{padding:0,justifyContent:"flex-start",background:"none",border:"none",paddingLeft:"60px"}},t.icons.map((function(e){return i=e,s=t.id,n=e,a.createElement("div",{key:i,style:Object.assign({margin:r.R.spacing.xs+" "+r.R.spacing.xxxl+" "+r.R.spacing.xl+" 0",lineHeight:"1rem",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",width:"6rem",height:"6rem"},l)},"baseIcons"===s?a.createElement(p,{icon:i}):a.createElement(d,{icon:i}),a.createElement("div",null,n));var i,s,n,l}))))})))}},27134:function(t){t.exports=JSON.parse('{"title":"Värit","intro":"Pääväreihin kuuluvat sininen (brandBase) sekä (highlightBase), valkoinen (whiteBase) ja harmaa (depthBase). Tekstien päävärinä käytetään mustaa (blackBase). Korosteväreinä käytetään oranssia (accentBase) ja harmaan eri sävyjä. Yleisilme on vaalean neutraali, ja väriä käytetään harkiten korostamaan keskeisiä toimintoja ja sisältöjä.","note.title":"Saavutettavuus ja käytettävyys","note.items":["Kun käytät komponenttien tarjoamaa valmista Suomi.fi-väriteemaa käyttöohjeistuksien mukaisesti, täyttyvät saavutettavuuskriteeristön (WCAG) kontrastivaatimukset ja väriyhdistelmät ovat saavutettavuudeltaan riittäviä.","Jos haluat modifioida värit sopimaan erilaiseen visuaaliseen ilmeeseen, muista varmistaa, että valitsemasi väriyhdistelmien kontrastit täyttävät saavutettavuuskriteeristön (WCAG) asettamat vaatimukset.","Huomioi, että saavutettavuuskriteeristön (WCAG) kontrastivaatimukset eivät koske komponentteja, joiden käyttö on estetty. On kuitenkin tärkeää varmistaa, että estetty sävy eroaa kontrastiltaan tarpeeksi aktiivisen tilan väristä. Suomi.fi-komponentteihin on toteutettu valmiiksi estetty-tila oikeaoppisesti.","Tutustu näihin kohtiin tarkemmin saavutettavuuskriteeristön ohjeistuksessa: WCAG 2.1., onnistumiskriteeri 1.4.3 Kontrasti (minimi). ",""],"sections":[{"title":"","paragraphs":[{"image.key":"","image.alt":"","text":""},{"image.key":"","image.alt":"","text":""},{"image.key":"","image.alt":"","text":""}],"links":[{"text":"WCAG 2.1 kontrasti vaatimukset","url":"https://www.w3.org/TR/WCAG21/"},{"text":"","url":""},{"text":"","url":""}]},{"title":"","paragraphs":[{"image.key":"","image.alt":"","text":""},{"image.key":"","image.alt":"","text":""},{"image.key":"","image.alt":"","text":""}],"links":[{"text":"","url":""},{"text":"","url":""},{"text":"","url":""}]},{"title":"","paragraphs":[{"image.key":"","image.alt":"","text":""},{"image.key":"","image.alt":"","text":""},{"image.key":"","image.alt":"","text":""}],"links":[{"text":"","url":""},{"text":"","url":""},{"text":"","url":""}]}],"textColors.title":"Tekstit","textColors.description":"Tekstien pääväri on musta (blackBase). Estetyissä (disabled) teksteissä käytetään vaalean harmaata (depthBase). Tekstin korostevärinä käytetään tummaa harmaata (depthDark1). Vihjeteksteissä käytetään tummanharmaata (blackLight1). Vihjetekstit tarkoittavat tekstejä, jotka ovat lomakekentissä ohjeistamassa käyttäjää ennen kuin käyttäjä aloittaa kirjoittamaan kenttään.","brandColors.title":"Brändiväri","brandColors.description":"Brändiväriä (brandBase) käytetään suomi.fi palveluiden logossa, alatunnisteessa sekä palveluiden yläreunan värillisessä palkissa.","controlColors.title":"Linkit, painikkeet ja valinnat","controlColors.description":"Sinistä (highlightBase) sekä siitä johdettuja vaalempia sävyä (highlightLight) käytetään interaktiivisissa elementeissä ja valittujen elementtien korostamisessa. Violettia (accentTertiaryDark1) käytetään linkkien vierailun jälkeisessä tilassa (visited state). Estetyissä tiloissa käytetään harmaata (depthBase). Sinisestä johdettua tummempaa sävyä (highlightDark1) käytetään esim. painikkeiden hovertilassa (hover state). Oranssia (accentBase) väriä käytetään kaikkien komponenttien fokustilassa (focus state). ","iconColors.title":"Ikonit","iconColors.description":"Kuvitusikoneissa käytetään harmaata (depthBase) sekä oranssia (accentBase) korostevärinä. Toiminnallisissa ikoneissa käytetään toiminnallisten elementtien sinistä (highlightBase) väriä sekä tummaa harmaata (depthDark1).","backgroundColors.title":"Taustat ja reunukset","backgroundColors.description":"Sivun taustaväri on vaalean harmaa (depthLight3) ja sisältöalueen tausta on valkea (whiteBase). Reunuksien väri on harmaa (depthLight1). Lisäksi käytössä on sinisestä (highlightBase) väristä johdettuja sävyjä (highlightLight4, highlightLight3 ja highlightLight2) sekä kirkkaan vaaleansininen (depthSecondary). ","trafficColors.title":"Liikennevalovärit","trafficColors.description":"Liikennevalovärit kuvaavat komponenttien, elementtien tai toimintojen tilatietoa. Vihreä (successBase) kuvaa onnistumista tai positiivista toimintoa. Keltainen (warningBase) kuvaa esim. tehtävää tai muuta asiaa, johon käyttäjän tulee reagoida. Punainen (alertBase) kuvaa virhetilaa tai häiriötä. Pelkkä väri ei riitä tiedon tai toiminnallisuuksien esittämiseen vaan tieto pitää esittää myös sanallisesti.","accentColors.title":"Korostevärit","accentColors.description":"Korostevärejä käytetään tilanteissa, joissa väriä tarvitaan luomaan eroavaisuutta.","blackBase.label":"Text Dark","blackLight1.label":"Text Grey","depthBase.label":"Arctic Hill","depthLight3.label":"Arctic Hill Light","depthLight1.label":"Arctic Hill Light","depthLight2.label":"Arctic Hill Light","depthDark1.label":"Artic Hill Dark","depthSecondary.label":"Blueberry Milk","depthSecondaryDark1.label":"Blueberry Milk Dark","brandBase.label":"Suomi.fi","highlightBase.label":"Lake","highlightLight1.label":"Lake Light","highlightLight2.label":"Lake Light","highlightLight3.label":"Lake Light","highlightLight4.label":"Lake Light","highlightDark1.label":"Lake Dark","accentBase.label":"Cloudberry","accentSecondary.label":"Sky","accentSecondaryLight1.label":"Sky Light","accentTertiary.label":"Heather","accentTertiaryDark1.label":"Heather Dark","successBase.label":"Traffic Green","successSecondary.label":"Traffic Green Light","warningBase.label":"Traffic Yellow","warningLight47.label":"Traffic Red Light","alertBase.label":"Traffic Red","alertLight1.label":"Traffic Red Light","whiteBase.label":"Snow"}')},96157:function(t){t.exports=JSON.parse('{"TN":"Ikonit (Icons)","mf":"Tältä sivulla löydät kaikki ikonit jotka ovat käytössä suomi.fi palveluissa. Ikonien käyttöohjeistukset löydät ikonien komponentti sivulta.","ep":"Perusikonit (Base icons)","mP":"Kuvitusikonit (Illustrative icons)","uq":"Liitetiedosto-ikonit (Doctype icons)"}')},51666:function(t){t.exports=JSON.parse('{"TN":"Typografia","mf":"Suomi.fi:n typografiateema sisältää kooltaan ja tyyliltään määritellyt tekstikomponentit ja tekstitokenit.","gG":"Saavutettavuus ja käytettävyys","TK":["Kuten näkevä käyttäjä, ruudunlukijakäyttäjäkin muodostaa kokonaiskäsityksen sisällöstä otsikoiden perusteella.","Otsikointihierarkia on yhtenäinen (h1, h2, h3, h4, h5), eikä välistä saa puuttua otsikkotasoja. Oikea heading-tasojen hierarkia tukee rakenteen hahmottamista.","Otsikkotasojen puuttuminen välistä tai otsikkotasojen epäjärjestys vaikeuttaa sisällön hahmottamista ruudunlukijaa käytettäessä. Ruudunlukija tulkitsee vain heading-merkityt komponentit otsikoiksi.","Huomioi tekstiä koskevat saavutettavuusohjeistukset (WCAG 2.1): 1.4.3 Kontrasti (minimi), 1.4.4 Tekstin koon muuttaminen, 1.4.12 Tekstin välistys.","","","",""],"NS":[{"title":"","paragraphs":[{"image.key":"","image.alt":"","text":"","listItems":[{"text":""},{"text":""},{"text":""},{"text":""},{"text":""}]},{"image.key":"","image.alt":"","text":"","listItems":[{"text":""},{"text":""},{"text":""},{"text":""},{"text":""}]},{"image.key":"","image.alt":"","text":"","listItems":[{"text":""},{"text":""},{"text":""},{"text":""},{"text":""}]}],"links":[{"text":"Verkkosisällön saavutettavuusohjeet (WCAG) 2.1","url":"https://www.w3.org/Translations/WCAG21-fi/"},{"text":"","url":""},{"text":"","url":""}]},{"title":"Kirjasintyyppi","paragraphs":[{"image.key":"","image.alt":"","text":"Suomi.fi-tyyleissä sekä käyttöliittymäkomponenteissa käytetty kirjaisin Source Sans Pro on Googlen välittämä open source fontti, kaikki sen leikkaukset ovat ilmaisia ja vapaasti käytettävissäsi (Open Font License). Kirjaisimen voi ladata omalle työasemalle Google Fontsista.","listItems":[{"text":""},{"text":""},{"text":""},{"text":""},{"text":""}]},{"image.key":"","image.alt":"","text":"","listItems":[{"text":""},{"text":""},{"text":""},{"text":""},{"text":""}]},{"image.key":"","image.alt":"","text":"","listItems":[{"text":""},{"text":""},{"text":""},{"text":""},{"text":""}]}],"links":[{"text":"Source Sans Pro","url":"https://fonts.google.com/specimen/Source+Sans+Pro"},{"text":"","url":""},{"text":"","url":""}]},{"title":"","paragraphs":[{"image.key":"","image.alt":"","text":"","listItems":[{"text":""},{"text":""},{"text":""},{"text":""},{"text":""}]},{"image.key":"","image.alt":"","text":"","listItems":[{"text":""},{"text":""},{"text":""},{"text":""},{"text":""}]},{"image.key":"","image.alt":"","text":"","listItems":[{"text":""},{"text":""},{"text":""},{"text":""},{"text":""}]}],"links":[{"text":"","url":""},{"text":"","url":""},{"text":"","url":""}]}],"VS":"Otsikkotyylit (Heading)","n3":"Otsikoiden koot on määritelty erikseen sekä desktop- että mobiilinäytöille. Otsikot vaihtuvat normaalikoosta (Regular) pieneen kokoon (Small). Small-tyyppiset otsikkotyylit on määritelty erikokoisiksi kaikille muille otsikoille paitsi h5-otsikolle. Etusivun pääotsikolle on määritelty myös erillinen Hero-tyyli, jota käytetään erottamaan otsikkotyyli muiden sivujen pääotsikoista.","ZV":"Tekstityylit","CU":"Lähtökohtaisesti käytetään 18px fonttia. Kun halutaan erottaa rakenteellisesti visuaalisin keinoin tietty tekstikappale tms., voidaan käyttää pienempää 16px fonttia. Leipäteksteissä käytetään Source Sans Pro Regular -fonttia, mutta joskus jotain tekstiosuutta halutaan korostaa ja käytetään Source Sans Pro Semibold -fonttia. Nämä korostukset on pääasiallisesti määritelty komponenteittain tai esimerkiksi otsikkotyyleissä. Joissain harvoissa tapauksissa käytetään Source Sans Pro Italic fonttia, kuten placeholder -tekstinä komponenteissa."}')}}]);
//# sourceMappingURL=component---src-pages-styles-icons-tsx-bf029b60819e18993c20.js.map