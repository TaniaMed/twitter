'use strict';

function randName() {
	return 'fun'+ Math.ceil(Math.random() * 10);
}
function loadData(url) {
	const functionName = randName();
	return new Promise((done, fail) => {
		window[functionName] = done;

		const script = document.scripts[0].cloneNode();
		script.src = `${url}?jsonp=${functionName}`;
		document.body.appendChild(script);
	})
};
const imgAll = document.getElementsByTagName('img');
const h3All = document.getElementsByTagName('h3');
const pAll = document.getElementsByTagName('p');
const outputAll = document.getElementsByTagName('output');

function showTwit(twit) {
	Array.from(imgAll).forEach(img => {
		if (img.hasAttribute('data-wallpaper')) {
			img.src = twit.wallpaper;
		};
		if (img.hasAttribute('data-pic')) {
			img.src = twit.pic;
		};
	});
	Array.from(h3All).forEach(h3 => {
		if (h3.hasAttribute('data-username')) {
			h3.innerHTML = twit.username;
		};
	});
	Array.from(pAll).forEach(p => {
		if (p.hasAttribute('data-description')) {
			p.innerHTML = twit.description;
		};
	});
	Array.from(outputAll).forEach(output => {
		if (output.hasAttribute('data-tweets')) {
			output.innerHTML = twit.tweets;
		};
		if (output.hasAttribute('data-followers')) {
			output.innerHTML = twit.followers;
		};
		if (output.hasAttribute('data-following')) {
			output.innerHTML = twit.followers;
		};
	});
}
let data = loadData('https://neto-api.herokuapp.com/twitter/jsonp')
	.then(showTwit);
	
