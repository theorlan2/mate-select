window.onload = function(){
  
  crear_select();
}

var li = new Array();
function crear_select(){
var div_cont_select = document.querySelectorAll("[data-mate-select='active']");
var select_ = '';
for (var e = 0; e < div_cont_select.length; e++) {
div_cont_select[e].setAttribute('data-indx-select',e);
div_cont_select[e].setAttribute('data-selec-open','false');
var ul_cont = document.querySelectorAll("[data-indx-select='"+e+"'] > .cont_select_int");
 select_ = document.querySelectorAll("[data-indx-select='"+e+"'] >select")[0];
var select_optiones = select_.options;
document.querySelectorAll("[data-indx-select='"+e+"']  > .selecionado_opcion ")[0].setAttribute('data-n-select',e);
for (var i = 0; i < select_optiones.length; i++) {
li[i] = document.createElement('li');
if (select_optiones[i].selected == true || select_.value == select_optiones[i].innerHTML ) {
li[i].className = 'active';
document.querySelector("[data-indx-select='"+e+"']  > .selecionado_opcion ").innerHTML = select_optiones[i].innerHTML;
};
li[i].setAttribute('data-index',i);
li[i].setAttribute('data-selec-index',e);
// funcion click al selecionar 
li[i].addEventListener( 'click', function(){  _select_option(this.getAttribute('data-index'),this.getAttribute('data-selec-index')); });

li[i].innerHTML = select_optiones[i].innerHTML;
ul_cont[0].appendChild(li[i]);

    }; // Fin For select_optiones
  }; // fin for divs_cont_select
} // Fin Function 

var cont_slc = 0;
function open_select(idx){
var idx1 =  idx.getAttribute('data-n-select');
  var ul_cont_li = document.querySelectorAll("[data-indx-select='"+idx1+"'] > .cont_select_int > li");
var hg = 0;
var t_select = document.querySelectorAll("[data-n-select='"+idx1+"']")[0].offsetHeight;
var elmMargin = parseInt(document.defaultView.getComputedStyle(document.querySelectorAll("[data-n-select='"+idx1+"']")[0], '').getPropertyValue('margin-top')) + parseInt(document.defaultView.getComputedStyle(document.querySelectorAll("[data-n-select='"+idx1+"']")[0], '').getPropertyValue('margin-bottom'));
var slect_open = document.querySelectorAll("[data-indx-select='"+idx1+"']")[0].getAttribute('data-selec-open');

  hg = hg+t_select+elmMargin;
  for (var i = 0; i < ul_cont_li.length; i++) {
hg += ul_cont_li[i].offsetHeight;
}; 
 if (slect_open == 'false') {  
 document.querySelectorAll("[data-indx-select='"+idx1+"']")[0].setAttribute('data-selec-open','true');
 document.querySelectorAll("[data-indx-select='"+idx1+"']")[0].style.height = hg+"px";
 document.querySelectorAll("[data-indx-select='"+idx1+"'] > .icon_select_mate")[0].style.transform = 'rotate(180deg)';
}else{
 document.querySelectorAll("[data-indx-select='"+idx1+"']")[0].setAttribute('data-selec-open','false');
 var hg2 = t_select+elmMargin; 
 document.querySelectorAll("[data-indx-select='"+idx1+"'] > .icon_select_mate")[0].style.transform = 'rotate(0deg)';
 document.querySelectorAll("[data-indx-select='"+idx1+"']")[0].style.height = hg2+"px";
 }

} // fin function open_select

function salir_select(indx){
var select_ = document.querySelectorAll("[data-indx-select='"+indx+"'] > select")[0];
var hg = 0;
var t_select = document.querySelectorAll("[data-n-select='"+indx+"']")[0].offsetHeight;
var elmMargin = parseInt(document.defaultView.getComputedStyle(document.querySelectorAll("[data-n-select='"+indx+"']")[0], '').getPropertyValue('margin-top')) + parseInt(document.defaultView.getComputedStyle(document.querySelectorAll("[data-n-select='"+indx+"']")[0], '').getPropertyValue('margin-bottom'));
  hg = t_select+elmMargin; 
  document.querySelectorAll("[data-indx-select='"+indx+"']")[0].style.height = hg+"px";
document.querySelector("[data-indx-select='"+indx+"'] > .icon_select_mate").style.transform = 'rotate(0deg)';
 document.querySelectorAll("[data-indx-select='"+indx+"']")[0].setAttribute('data-selec-open','false');
 
}


function _select_option(indx,selc){
  var li_s = document.querySelectorAll("[data-indx-select='"+selc+"'] >.cont_select_int > li");
  var p_act = document.querySelectorAll("[data-indx-select='"+selc+"'] > .selecionado_opcion")[0].innerHTML = li_s[indx].innerHTML;
var select_optiones = document.querySelectorAll("[data-indx-select='"+selc+"'] > select > option");
for (var i = 0; i < li_s.length; i++) {
if (li_s[i].className == 'active') {
li_s[i].className = '';
};
li_s[indx].className = 'active';

};
select_optiones[indx].selected = true;
salir_select(selc); 
}

