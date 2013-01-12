/**
* @author Alex Cyphus
* @file add-twitter-links.js
* @dependecies none
*
* A plain JavaScript tool to automatically parse the body of a HTML document
* for any Twitter Usernames (i.e. @ACyphus) or hashtags (i.e. #hashtag) and make them into links to twitter.
* To use, simply add the JS file into your HTML, and then call the updatetags() function on page load.
*/

/**
* Function that parses content to find Twitter usernames or hashtags and
* then replaces the words with a html link with the original content inside the a tags.
*/
function addTwitterLinks(e){
	return e.replace(/(^|\s)[\@\#]([a-zA-z0-9_]*)/g,
		function(e,t,n){
			var r='<a href="http://twitter.com/';
			if(e.charAt(0)==="#"||e.charAt(1)==="#") {
				r+="hashtag/";
				return r+encodeURI(n)+'" target="_blank">'+e+"</a>";
			} else {
				return r+encodeURI(n)+'" target="_blank">'+e+"</a>";
			}
		}
	);

}

/**
* Function that puts the contents of the HTML body tag into a variable,
* then calls the addTwitterLinks function on the content.
* AddTwitterLinks then returns the content into the HTML body tag.
*/
function updatetags(){
	var e=document.getElementsByTagName("body").item(0).innerHTML;
	document.getElementsByTagName("body").item(0).innerHTML=addTwitterLinks(e);
}