function doTheme() {

var wallpaper = $('img[src*="wallpaper"]'); $(wallpaper).attr('src','http://i53.tinypic.com/a5akbd.jpg');
var floor = $('img[src*="floor"]'); $(floor).attr('src','http://i56.tinypic.com/15re39x.jpg');
var djtable = $('img[src*="dj_table"]'); $(djtable).attr('src','http://img847.imageshack.us/img847/2996/djtable.png');
var lspeak1 = $('img[src*="lspeaker1"]'); $(lspeak1).attr('src','http://img838.imageshack.us/img838/5222/blankad.png');
var lspeak2 = $('img[src*="lspeaker2"]'); $(lspeak2).attr('src','http://img838.imageshack.us/img838/5222/blankad.png');
var lspeak3 = $('img[src*="lspeaker3"]'); $(lspeak3).attr('src','http://img838.imageshack.us/img838/5222/blankad.png');
var rspeak1 = $('img[src*="rspeaker1"]'); $(rspeak1).attr('src','http://img838.imageshack.us/img838/5222/blankad.png');
var rspeak2 = $('img[src*="rspeaker2"]'); $(rspeak2).attr('src','http://img838.imageshack.us/img838/5222/blankad.png');
var rspeak3 = $('img[src*="rspeaker3"]'); $(rspeak3).attr('src','http://img838.imageshack.us/img838/5222/blankad.png');
$('#songboard').css('color', 'rgba(20,0,0,1)');
$('#songboard_artist').css('text-shadow', 'none');
$('#songboard_title').css('text-shadow', 'none');
$('#left_speaker').css('background', 'url("http://img838.imageshack.us/img838/5222/blankad.png")');
$('#right_speaker').css('background', 'url("http://img838.imageshack.us/img838/5222/blankad.png")');
}

var timerId = setInterval(doTheme, 10000); 