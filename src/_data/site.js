module.exports = {
	title: "Aprendo español",
	description: "Aprendo español",
	caption: "Español",
	version: "0.1.0",
	lang: "es",
	mail: "info@elektrolurch.net",

	scriptdir: "/static",
	imagedir: "/static/img",
	//~ pagelogo: "/static/pagelogo.png",

	author: {
		name: "John Doe",
		year: 2024,
		hide: false,
		mail: "john@elektrolurch.net",
		code: "&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#106;&#111;&#104;&#110;&#64;&#101;&#108;&#101;&#107;&#116;&#114;&#111;&#108;&#117;&#114;&#99;&#104;&#46;&#110;&#101;&#116;"
	}, 

	env: process.env.ELEVENTY_ENV === 'production'
}
