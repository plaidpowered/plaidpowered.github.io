(function() {

	document.addEventListener( 'click', function( event ) {
		let clickTarget = event.target.closest('a');
		if ( ! clickTarget ) {
			return;
		}
	
		let linkUrl = new URL( clickTarget.href );
		if ( linkUrl.hostname !== document.location.hostname 
		  || linkUrl.pathname !== document.location.pathname
		  || linkUrl.hash === '' ) {
			return;
		}
	
		let anchorElement = document.getElementById( linkUrl.hash.substring( 1 ) );
		if ( ! anchorElement ) {
			return;
		}
	
		event.preventDefault();
	
		let offset = 0;
		let anchorBox = anchorElement.getBoundingClientRect();
		window.scrollTo({
			top: anchorBox.y + window.pageYOffset - offset,
			left: 0,
			behavior: 'smooth'
		});
	
	} );

})();