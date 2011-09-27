$('BODY').css('background-color', 'white');
//Changes the background color of the whole shebang.

var wallpaper = $('img[src*="wallpaper"]'); $(wallpaper).attr('src','http://i53.tinypic.com/a5akbd.jpg');
//Changing the Wallpaper. This is the line that does it. 

var floor = $('img[src*="floor"]'); $(floor).attr('src','http://i56.tinypic.com/15re39x.jpg');
//This is the line that changes the floor.

var djtable = $('img[src*="dj_table"]'); $(djtable).attr('src','http://img847.imageshack.us/img847/2996/djtable.png');
//This the line that changes the actual dj table.

var guage = $('img[src*="guage"]'); $(guage).attr('src','http://www.example.com/example.png');
//This the line that would change the guage. More on that in a few lines.

var needle = $('img[src*="needle"]'); $(needle).attr('src','http://img847.imageshack.us/img847/2996/djtable.png');
//This the line that would change the needle on the guage.

//The reason I have not changed the guage in my themes yet is because I have yet to change the awesome/lame buttons.
//They are put into one image, here: https://s3.amazonaws.com/static.turntable.fm/roommanager_assets/props/vote_btns.png
//They are in a div that changes so the speaker method used in lines 33 & 34 won't work, and neither will anything else.
//I'm sure the answer is right in front of my face, but honestly, I can't think of anything to change it to. These are 
//the reasons I'm releasing all of this.

var lspeak1 = $('img[src*="lspeaker1"]'); $(lspeak1).attr('src','http://img838.imageshack.us/img838/5222/blankad.png');
var lspeak2 = $('img[src*="lspeaker2"]'); $(lspeak2).attr('src','http://img838.imageshack.us/img838/5222/blankad.png');
var lspeak3 = $('img[src*="lspeaker3"]'); $(lspeak3).attr('src','http://img838.imageshack.us/img838/5222/blankad.png');
//These three lines change the images that give the left speakers in TT the "vibrate" effect. These are blank PNGs.

var rspeak1 = $('img[src*="rspeaker1"]'); $(rspeak1).attr('src','http://img838.imageshack.us/img838/5222/blankad.png');
var rspeak2 = $('img[src*="rspeaker2"]'); $(rspeak2).attr('src','http://img838.imageshack.us/img838/5222/blankad.png');
var rspeak3 = $('img[src*="rspeaker3"]'); $(rspeak3).attr('src','http://img838.imageshack.us/img838/5222/blankad.png');
//These three lines change the images that give the right speakers in TT the "vibrate" effect. These are blank PNGs.

$('#left_speaker').css('background', 'url("http://img838.imageshack.us/img838/5222/blankad.png")');
$('#right_speaker').css('background', 'url("http://img838.imageshack.us/img838/5222/blankad.png")');
//These lines change the background box for the speakers.

$('#songboard').css('color', 'rgba(20,0,0,1)');
//This line changes the font color of the Song Title/Artist. You can use use hex format instead of RGBA. I use RGBA
//So I can add an Opacity to the font color.

$('#songboard_artist').css('text-shadow', 'none');
$('#songboard_title').css('text-shadow', 'none');
//These two lines control the font shadow for the Song Title/Artist. You change 'none' to the usual text-shadow format
//which is: "0 0 5px red" that is the default is used. Feel free to experiment.

var orangehead = $('img[src*="/avatars/15/scaled/55/headfront"]'); $(orangehead).attr('src','http://i54.tinypic.com/1252qyt.jpg');
//This particular line changes the head of the Orange Bear to have a moustache. Needs to be reapplied, not reccomended for 
//bookmarklet use. You can change other avatars by changing the "15" and other body parts by changing "headfront" 
//Current body parts include, but are not limited to:
//legs
//fronttorso
//backtorso
//leftarm
//rightarm
//headfront
//headback
//bodyback
//bodyfront
//torso
//frontlegs
//backlegs
//leftarm_front
//leftarm_back
//rightarm_front
//rightarm_back
//If you are curious which applies to which, right click your avatar and click "inspect element" (works in chrome)

$('#spotlight').css('background', 'url("http://i54.tinypic.com/nxv1cj.jpg")');
//This changes the spotlight. Changes every song, not reccomended for bookmarklet use

var maclaptop = $('img[src*="laptop_mac"]'); $(maclaptop).attr('src','http://i56.tinypic.com/ojnvjd.jpg');
var linuxlaptop = $('img[src*="laptop_linux"]'); $(linuxlaptop).attr('src','http://i54.tinypic.com/2cofl39.jpg');
var pclaptop = $('img[src*="laptop_pc"]'); $(pclaptop).attr('src','http://i52.tinypic.com/5dt2qf.jpg');
var chromelaptop = $('img[src*="laptop_chrome"]'); $(chromelaptop).attr('src','http://i53.tinypic.com/2v8s783.jpg');
//These lines change the laptop images. They change whenever the DJ Queue does. Not reccomended for bookmarklet use.