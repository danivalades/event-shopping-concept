/* Sets --s, the scale of the 390x844 frames, so three fit per row */
(function(){var d=document.documentElement;function fit(){var w=d.clientWidth,cols=w>=900?3:w>=600?2:1,pad=w>=900?80:w>=600?64:32,cap=cols===3?0.87:1;
var s=Math.min(cap,(w-pad-24*(cols-1))/cols/390);d.style.setProperty('--s',(Math.floor(s*1000)/1000).toString())}
fit();window.addEventListener('resize',fit)})();

/* Page switcher: tabs reflected in the URL hash, arrow keys, only the selected panel shown */
(function(){
var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));if(!tabs.length)return;
var panels=[].slice.call(document.querySelectorAll('[role=tabpanel]'));
function keyFromHash(){var h=location.hash.slice(1);
 if(tabs.some(function(t){return t.dataset.key===h}))return{key:h};
 var el=h&&document.getElementById(h),pn=el&&el.closest('[role=tabpanel]');
 return pn?{key:pn.dataset.key,scrollTo:el}:{key:'home'}}
function select(key){tabs.forEach(function(t){var on=t.dataset.key===key;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1});
 panels.forEach(function(p){p.hidden=p.dataset.key!==key});
 window.dispatchEvent(new Event('resize'))}
function route(){var r=keyFromHash();select(r.key);if(r.scrollTo)r.scrollTo.scrollIntoView()}
tabs.forEach(function(t,i){
 t.addEventListener('click',function(){location.hash=t.dataset.key});
 t.addEventListener('keydown',function(e){var n={ArrowRight:i+1,ArrowLeft:i-1,Home:0,End:tabs.length-1}[e.key];if(n===undefined)return;
  e.preventDefault();var to=tabs[(n+tabs.length)%tabs.length];to.focus();location.hash=to.dataset.key})});
window.addEventListener('hashchange',route);route();
})();
