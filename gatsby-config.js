/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true,
    FAST_DEV: true, // Enable fast development mode
    PRESERVE_FILE_DOWNLOAD_CACHE: true, // Preserve file cache between builds
    PARALLEL_SOURCING: true, // Run source plugins in parallel
  },
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  //pathPrefix: "/empathy-bytes-2023",
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://empathybytes.library.gatech.edu/`,
        // Performance optimizations
        apiBase: `jsonapi`,
        skipFileDownloads: true,
        concurrentRequests: 10,
        requestTimeout: 30000,

        // Only fetch what you need
        filters: {
          "node--article": "filter[status][value]=1",
          "node--collection": "filter[status][value]=1",
          "node--olympics_gallery_image": "filter[status][value]=1",
        },

        cache: true,

        params: {
          "node--article": {
            include: "field_image,field_audio,field_tags",
            "fields[node--article]":
              "title,field_author,field_video_url,field_hg_dateline,field_blurb,body,field_transcript,path,relationships",
            "filter[status]": "1",
          },

          "node--collection": {
            include: "field_image",
            "fields[node--collection]": "title,body,path,relationships",
            "filter[status]": "1",
          },

          // Olympic gallery content type
          "node--olympics_gallery_image": {
            include: "field_olympic_gallery_image",
            "fields[node--olympics_gallery_image]":
              "field_caption,field_date,field_photographer_source,field_olympic_gallery_image,path,relationships",
            "filter[status]": "1",
          },
        },
      },
    },
  ],
};