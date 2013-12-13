function initCufon() {
	Cufon.replace('.login-link span', { fontFamily: 'archer', hover: true });
	Cufon.replace('.login-box .heading-holder h2', { textShadow: '#6eaabb -1px 1px, #6eaabb 1px 1px, #6eaabb -1px -1px', fontFamily: 'archer' });
	Cufon.replace('.login-box .button', { textShadow: '#c65c28 -1px 1px, #c65c28 1px 1px, #c65c28 -1px -1px', fontFamily: 'archer'});
	Cufon.replace('.footer-container p', { fontFamily: 'archer'});

	Cufon.replace('.effects-test .shadow', { textShadow: '#555 1px 1px, #000 2px 2px', fontFamily: 'Frutiger' });
	Cufon.replace('.effects-test .gradient', { color: '-linear-gradient(#aaa, 0.45=#888, 0.45=#555, #000)', fontFamily: 'Frutiger' });

	// cufon with hover effects:
	Cufon.replace('.effects-test .gradient2',{color: '-linear-gradient(#f00, 0.45=#faa, 0.45=#f55, #000)', hover: {
		color: '-linear-gradient(#aaf, 0.45=#00f, 0.45=#55f, #000)',
		textShadow: '5px 5px #999'
	}, fontFamily: 'Frutiger', hoverables: {strong: true}});
}

initCufon();