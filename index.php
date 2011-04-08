<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Twitter Parsing by @egermano</title>
		<meta name="generator" content="Studio 3 http://aptana.com/">
		<meta name="author" content="Bruno Germano">
		<!-- Date: 2011-04-08 -->
		<style rel="stylesheet" type="text/css" media="all" >
			#tweets{
				width:350px;
			}
		</style>
		<script src="twitter-parsing.js" language="JavaScript" type="text/javascript"></script>
		<script src="twitter.js" language="JavaScript" type="text/javascript"></script>
	</head>
	<body>
		<?php
			$user = 'egermano';
			
			$search = "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=".$user."&trim_user=false";
			
			$tw = curl_init();
			
			curl_setopt($tw, CURLOPT_URL, $search);
			curl_setopt($tw, CURLOPT_RETURNTRANSFER, TRUE);
			$twi = curl_exec($tw);
		?>
		<ul id="tweets">
		</ul>
		<script language="JavaScript" type="text/javascript">
		
			// load tweets PHP
			var tweets = <?=$twi?>;
		
			//render tweets
			for(var i=0, len=tweets.length;i<len;i++) {
				var li = document.createElement('li');
				li.className = 'tweet';
				li.innerHTML = buildTweet(tweets[i]);
				document.getElementById('tweets').appendChild(li);
			}
		
			// get a twitter content
			var test = document.getElementById('tweets').innerHTML;
		
			//parse a content
			document.getElementById('tweets').innerHTML = test.parseURL().parseHashtag().parseUsername();
		</script>
		<?php
			curl_close($tw);
		?>
		<div id="footer">
			by <a href="http://egermano.com">@egermano</a> - follow me on <a href="http://twitter.com/egermano">Twitter</a>
		</div>
	</body>
</html>
