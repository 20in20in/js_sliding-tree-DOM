document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".tree");document.querySelectorAll(".tree li").forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.textContent,e.firstChild.textContent="",e.prepend(t)}),e.addEventListener("click",function(e){if("span"===e.target.tagName.toLowerCase()){var t=e.target.nextElementSibling;t&&"ul"===t.tagName.toLowerCase()&&(t.hidden=!t.hidden)}})});
//# sourceMappingURL=index.be1e8d29.js.map