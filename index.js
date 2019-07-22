if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/wb.js')};
$(function(){
  $('.inc').each(function(){
    $(this).load(this.dataset.source)
  })
});
// FADETOin body because .load flickers
$(function(){
  $('.fadeto').fadeTo(999,1)
});

