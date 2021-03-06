module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("img");
  
    // Copy `css/` to `_site/css`
    // Keeps the same directory structure.
    eleventyConfig.addPassthroughCopy("css");

    // Pass through the javascript
    eleventyConfig.addPassthroughCopy("js");
  
    // Copy any .jpg file to `_site`, via Glob pattern
    // Keeps the same directory structure.
    eleventyConfig.addPassthroughCopy("**/*.jpg");
  };