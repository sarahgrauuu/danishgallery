(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const i=document.querySelector("#open-nav"),a=document.querySelector("#close-nav"),o=document.querySelector("#overlay");i.addEventListener("click",function(){o.classList.toggle("gem"),o.classList.add("appear"),console.log("click")});a.addEventListener("click",function(){o.classList.toggle("gem"),o.classList.remove("appear")});const u=document.querySelector("#open-filters"),d=document.querySelector("#close-filters"),r=document.querySelector(".filters");u.addEventListener("click",function(){r.classList.toggle("gem2"),r.classList.add("appear2")});d.addEventListener("click",function(){r.classList.toggle("gem2"),r.classList.remove("appear2")});