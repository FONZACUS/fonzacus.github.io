// workbox if('serviceWorker' in navigator){navigator.serviceWorker.register('/wb.js')};
// JQ cookiebar, change css, XHR, fadeto
$.cookie('css')&&$('link').attr('href',$.cookie('css'));$(function(a){a.ac=function(){'y'!=a.cookie('cc')&&(a('<P ID="ic" STYLE="position:fixed;top:0;z-index:99;color:#FFF;background:#000">Cookie?<INPUT TYPE="button" VALUE="yep" ID="yc">').appendTo('body'),a('#yc').click(function(){a.cookie('cc','y',{expires:99,path:'/'});a('#ic').hide()}));return null}});
$(function(){$.ac();$('[inc]').each(function(){$(this).load($(this).attr('inc'))});$('.fadeto').fadeTo(999,1);$('a').click(function(){$('link').attr('href',$(this).attr('rel'));$.cookie('css',$(this).attr('rel'),{expires:99,path:'/'});return!1})});
// JS pick css
document.write('<DIV STYLE="position:fixed;z-index:9;top:0;left:0;color:#FFF;background:#000"><A HREF="#" REL="/a/c/bootstrap.min.css">&loz;Lite</A><BR><A HREF="#" REL="/a/c/d/bootstrap.min.css">&diams;Dark</A></DIV>');
