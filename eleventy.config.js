export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ "./src/public/": "/" });
  eleventyConfig.addWatchTarget("./src/public/");

  eleventyConfig.addGlobalData("currentYear", () => new Date().getFullYear());

  return {
    dir: {
      input: "src/content",
      output: "dist",
      includes: "../includes",
      layouts: "../layouts",
      data: "../data",
    },
    templateFormats: ["md", "liquid", "html"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
};
