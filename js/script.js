$(function() {
	var date = new Date(2016, 0, 1);
	var now = new Date();
	var diff = (date.getTime()/1000) - (now.getTime()/1000);
	var clock = $('.counter_wrap').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true,
		language: 'sv-se'
	});
	var clickArea = document.getElementById("clickArea");
	clickArea.href = clickTag;
});