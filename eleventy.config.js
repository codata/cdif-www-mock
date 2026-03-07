/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
    // Passthrough copy for images and static assets
    eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });

    // Custom collection to ensure sections are ordered correctly
    // Collections get populated from the `content` folder.
    eleventyConfig.addCollection("sections", function (collectionApi) {
        return collectionApi.getFilteredByGlob("content/*.md").sort(function (a, b) {
            // Sort by the 'order' defined in frontmatter
            return Math.sign((a.data.order || 0) - (b.data.order || 0));
        });
    });

    return {
        dir: {
            input: ".", // Top level is input because content is at /content
            includes: "src/_includes",
            data: "src/_data",
            output: "_site"
        },
        // markdown files, nunjucks files, html files are processed
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};
