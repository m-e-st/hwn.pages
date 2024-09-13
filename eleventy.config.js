const htmlMinifier = require ('html-minifier-terser');
const lucideIcons = require("@grimlink/eleventy-plugin-lucide-icons");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(lucideIcons);
  	eleventyConfig.addShortcode("anchor", function setAnchor(anchorName) { return `<a name="${anchorName}"><br><br><hr></a>`; });
  	eleventyConfig.addFilter("Datum", function(value) { 
		const string = value.toISOString();
		return string.slice(8,10) +'.' + string.slice(5,7) + '.' + string.slice(0,4);
	});
	
	eleventyConfig.addTransform ('htmlMinifier', function(content,outputPath) {
		if (	(process.env.ELEVENTY_ENV === 'production')
			&&	(outputPath)
			&&	( (outputPath.indexOf('.html') > -1) ||  (outputPath.indexOf('.css') > -1) )
		   ) {
			return htmlMinifier.minify (content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
				minifyJS: true,
				minifyCSS: true,
			});
		}
		return content;
	});
  	
	// Folders to copy to build dir (See. 1.1)
	eleventyConfig.addPassthroughCopy("src/static/**");
	eleventyConfig.addPassthroughCopy("src/favicon.ico");
	eleventyConfig.addPassthroughCopy("src/**/*.php");
	
	// This allows Eleventy to watch for file changes during local development.
	eleventyConfig.addWatchTarget("src/**/*.php");
	eleventyConfig.setUseGitIgnore(false);

	return {
		dir: {
			input: "src/",
			output: "public",
			includes: "_includes",
			layouts: "_layouts"
		},
		templateFormats: ["html", "md", "njk"],
		htmlTemplateEngine: "njk",
		passthroughFileCopy: true	// 1.1 Enable eleventy to pass dirs specified above
	};
};

