
/**
 * @author Bruno Germano
 * @file jquery.twitterParsing.js
 * @date 18/03/2014 12:14
 */


/**
 * Prototyping String,link
 *
 * @param string str A url to create a link.
 * @param object opt Option param [bool nofollow, bool newWindow, string className]
 */
String.prototype.link = function(str,opt) {
	aux = "";
	if(!opt)
		return "<a href='"+ str +"'>" + this + "</a>"
	else {
		if(opt.nofollow)
			aux += " rel='nofollow' "
		if(opt.newWindow)
			aux += " target='_blank' "
		if(opt.className)
			aux += " class='" + opt.className + "' "

		return "<a href='"+ str +"'" + aux + ">" + this + "</a>"
	}
}

/**
 * Prototyping String to create a parseURL method
 *
 * Method will create a links in url strings
 *
 * @param none
 */
String.prototype.parseURL = function() {
	return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/g, function(url) {
		var options = {nofollow:true, newWindow: true};
		return url.link(url, options);
	});
};

/**
 * Prototyping String to create a parseUsername method
 *
 * Method will create a links in @username strings
 *
 * @param none
 */
String.prototype.parseUsername = function() {
	return this.replace(/[@]+[A-Za-z0-9-_]+/g, function(u) {
		var username = u.replace("@","")
		var options = {nofollow:true, newWindow: true};
		return u.link("http://twitter.com/"+username, options);
	});
};

/**
 * Prototyping String to create a parseHashtag method
 *
 * Method will create a links in #hashtags strings
 *
 * @param none
 */
String.prototype.parseHashtag = function() {
	return this.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
		var tag = t.replace("#","%23")
		var options = {nofollow:true, newWindow: true};
		return t.link("http://twitter.com/search?q="+tag+"&src=hash", options );
	});
};

/**
 * jquery Plugin to parse twitter messagens
 * @param  object $ jQuery denpendency
 * @return self element/object
 */
(function($){
    $.fn.twitterParsing = function(){
        return this.each(function(){
            var $text = $(this).text();

            $(this).html($text.parseURL().parseHashtag().parseUsername());
        });
    };
}(jQuery));