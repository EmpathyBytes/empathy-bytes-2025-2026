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
          "node--olympics_timeline_event": "filter[status][value]=1", // Only published timeline events
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
            "filter[status]": "1"
          },
          "node--olympics_timeline_event": {
            "include": "field_field_event_images",
            "fields[node--olympics_timeline_event]": "title,field_field_display_date,field_field_event_body,field_field_event_date,field_field_event_order,field_field_event_subtitle,field_field_event_title,field_field_event_url,path,relationships",
            "filter[status]": "1"
          }
        }
      },
    },
    // Olympic timeline photos
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `olympic-timeline-images`,
        path: `${__dirname}/src/images/olympic_timeline_photos`,
      },
    },
    // Gatsby image plugins
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `olympic-images`,
        path: `${__dirname}/src/images/olympic_village_photo_gallery`,
      },
    },
  ],
};