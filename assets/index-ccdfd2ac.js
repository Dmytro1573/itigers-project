(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();(()=>{const o={openMenuBtn:document.querySelector("[data-menuBTN-open]"),closeMenuBtn:document.querySelector("[data-menuBTN-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body")};o.openMenuBtn.addEventListener("click",n),o.closeMenuBtn.addEventListener("click",n);function n(){o.menu.classList.toggle("is-open"),o.body.classList.toggle("no-scroll")}window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(o.menu.classList.remove("is-open"),o.body.classList.remove("no-scroll"))})})();