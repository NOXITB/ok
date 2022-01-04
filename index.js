var youtube=require("youtube-view-bot");

function play(){
	youtube.play_pause_video()
}
//duration in seconds e.g. 10,20
youtube.watch_video("https://www.youtube.com/watch?v=sqkVHiKJLek","70")