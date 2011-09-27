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
//All of the above is changin resources, as in actual <img src=""> files. What it is doing is searching the SRC
//of all the img tags for keywoards, in this case 'lspeaker1' and 'dj_table' and so on. And once it finds those
//it change that url for the one provided.

$('#songboard').css('color', 'rgba(20,0,0,1)');
$('#songboard_artist').css('text-shadow', 'none');
$('#songboard_title').css('text-shadow', 'none');
//This is just simple CSS work. 
//The first line is changing the font color of the div with the id of "songboard" - The Color of the Title / Artist 
//The color is in RGBA format for no real reason. It can be your standard hex if you like. 
//The second and third lines are changing attributes of the artist and title itself, in this case "text-shadow"
//Instead of "none" you can replace it with a color.
$('#left_speaker').css('background', 'url("http://img838.imageshack.us/img838/5222/blankad.png")');
$('#right_speaker').css('background', 'url("http://img838.imageshack.us/img838/5222/blankad.png")');
//These two lines are chaning the background element of the divs where the speakers are located.
//The speaker box is the div background, while the shaking speakers we repaced in lines 6-11 are what the div holds
}

var timerId = setInterval(doTheme, 10000); 
//this line right here reapplies the theme every ten seconds. Vital if you are using things that change dynamically
//such as avatars, laptops, spotlight. 