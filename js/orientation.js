window.onload = function() {	// Find matches
var mql = window.matchMedia("(orientation: portrait)");

// If there are matches, we're in portrait
if(mql.matches) {  
	// Portrait orientation
	console.log('portrait!');
} else {  
	// Landscape orientation
	console.log('landscape!');
}  
// Add a media query change listener
mql.addListener(function(m) {
	if(m.matches) {
		// Changed to portrait
		console.log('changed to portrait!');
	}
	else {
		// Changed to landscape
		console.log('changed to landscape!');
	}
});

}