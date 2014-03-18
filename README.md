Twitter Highlights
=============

A JavaScript code to parse and highlight urls, usernames and hashtags to twitter.

Usage
-----

Non jquery use:

````javascript
	// get a twitter content
	var text = document.getElementById('tweet1').innerHTML;

	//parse a content
	document.getElementById('tweets').innerHTML = text.parseURL().parseHashtag().parseUsername();
````

With jquery:

````javascript
	// get a twitter content
	$('.tweets').twitterParsing();
````