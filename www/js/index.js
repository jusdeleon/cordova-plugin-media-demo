window.document.addEventListener("deviceready", activate, false);

function activate() {

	var srcs = [
		'assets/track-a.mp3',
		'assets/track-b.mp3',
		// 'http://mf-live.a8hosting.com/docs/default-source/n2--blinkie-beats-cd1-(en)/29)-the-bird-catcher.mp3?sfvrsn=2',
		// 'http://mf-live.a8hosting.com/docs/default-source/n2--blinkie-beats-cd2-(en)/1)-walk-and-stop.mp3?sfvrsn=2',
	];

	var media = [];

	srcs.forEach(function(src) {
		var track = new Media(src);

		media.push(track);
	});

	$('.play').click(function() {
		var index = $(this).parent('.track').data('index');

		media[index].play();
	});


	$('.pause').click(function() {
		var index = $(this).parent('.track').data('index');

		media[index].pause();
	});
}

