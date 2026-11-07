/* Circolo Il Fortino Games: funzionamento offline.
   Pagine e giochi.js: prima dalla rete (cosi' gli aggiornamenti si vedono subito), copia di scorta se offline.
   Immagini e audio: dalla copia salvata, scaricati una volta sola.
   Se aggiungi un gioco non serve toccare questo file. */
const C="fortino-games-v6";
const F=["./", "index.html", "giochi.js", "intro_on.webp","intro_off.webp", "vlady_assi.webp","muro.webp","vernice.webp","stucco.webp","fori.webp","breccia.webp","calcinacci.webp","tavola.webp","pavimento.webp","vlady_lenzuolo.webp","vlady_cazzuola.webp","vlady_trapano.webp","vlady_mazza.webp","vlady_scala.webp", "morto-un-presidente.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "arch.jpg", "arresto.jpg", "c_arch_acc.webp", "c_arch_amm.webp", "c_arch_dif.webp", "c_arch_sem.webp", "c_cec_acc.webp", "c_cec_amm.webp", "c_cec_dif.webp", "c_cec_sem.webp", "c_danila_acc.webp", "c_danila_amm.webp", "c_danila_dif.webp", "c_danila_sem.webp", "c_giulia_acc.webp", "c_giulia_amm.webp", "c_giulia_dif.webp", "c_giulia_sem.webp", "c_josef_acc.webp", "c_josef_amm.webp", "c_josef_dif.webp", "c_josef_sem.webp", "c_luca_acc.webp", "c_luca_amm.webp", "c_luca_dif.webp", "c_luca_sem.webp", "c_rolando_acc.webp", "c_rolando_amm.webp", "c_rolando_dif.webp", "c_rolando_sem.webp", "cec.jpg", "cover.jpg", "danila.jpg", "fabiano.jpg", "fascicolo.webp", "giulia.jpg", "josef.jpg", "luc_book.webp", "luc_bye.webp", "luc_cnt.webp", "luc_sem.webp", "luc_up.webp", "luca.jpg", "mapfull.jpg", "r_bagni.jpg", "r_oro.jpg", "rolando.jpg", "s_bagno.jpg", "s_bar.jpg", "s_caffe.jpg", "s_carte.jpg", "s_corpo.jpg", "s_cucina.jpg", "s_disimp.jpg", "s_giardino.jpg", "s_grande.jpg", "s_magbar.jpg", "s_notte.jpg", "s_oro.jpg", "s_piazzetta.jpg", "s_porta.jpg", "s_saletta.jpg", "s_salone.jpg", "s_spogl.jpg", "tel_foto.jpg", "tessera_retro.jpg", "vl_bye.webp", "vl_dx.webp", "vl_giu_sx.webp", "vl_idea.webp", "vl_mostra.webp", "vl_ok.webp", "vl_pensa.webp", "vl_pensa2.webp", "vl_spiega.webp", "vl_su_sx.webp", "vl_sus_giu.webp", "vl_sussurra.webp", "w1.jpg", "w2.jpg", "w4.jpg", "w5.jpg", "w6.jpg", "w7.jpg", "w9.jpg", "finale.mp3", "tema.mp3"];
/* Installazione: scarica tutto dalla rete, saltando la cache del browser (cosi' non riprende file vecchi). */
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>Promise.allSettled(F.map(f=>c.add(new Request(f,{cache:"reload"}))))))});
/* Attivazione: cancella le copie vecchie e, se il telefono aveva una versione precedente,
   ricarica da solo le pagine aperte, cosi' chi aveva il sito vecchio vede subito quello nuovo. */
self.addEventListener("activate",e=>{e.waitUntil((async()=>{
  const old=(await caches.keys()).filter(x=>x!==C);
  await Promise.all(old.map(x=>caches.delete(x)));
  await self.clients.claim();
  if(old.length){const w=await self.clients.matchAll({type:"window"});w.forEach(c=>{try{c.navigate(c.url)}catch(_){}})}
})())});
self.addEventListener("fetch",e=>{
  const req=e.request;if(req.method!=="GET")return;
  const url=new URL(req.url);if(url.origin!==location.origin)return;
  const fresh=req.mode==="navigate"||/\.(html|js|webmanifest)$/.test(url.pathname)||url.pathname.endsWith("/");
  const put=res=>{if(res&&res.ok){const cl=res.clone();caches.open(C).then(c=>c.put(req,cl))}return res};
  if(fresh){
    e.respondWith(fetch(req,{cache:"no-cache"}).then(put).catch(()=>caches.match(req,{ignoreSearch:true}).then(r=>r||caches.match("index.html"))));
  }else{
    e.respondWith(caches.match(req,{ignoreSearch:true}).then(r=>r||fetch(req).then(put)));
  }
});
