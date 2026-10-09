const DRUPAL_BASE_URL = "https://empathybytes.library.gatech.edu";

/*
 * Props for an <img> showing a Drupal image file. Uses the small WebP copies
 * generated at build time (see onCreateNode in gatsby-node.js) instead of the
 * 1-2 MB original, and keeps a plain <img> so each page's existing CSS still
 * applies. Falls back to the original Drupal URL for files that weren't resized
 * (e.g. SVGs).
 *
 * Query the file with:
 *   localImage { childImageSharp { gatsbyImageData(width: <3x display width>, formats: [AUTO, WEBP]) } }
 * Use three times the display width: sharp only makes sizes up to `width` and never
 * larger than the original, so this keeps 3x phone screens as sharp as the original.
 *
 * `sizes` should describe how wide the image is shown, so 2x/3x screens pick a
 * sharp-enough file without downloading a larger one than needed. It can also be
 * a function of the image's aspect ratio (width / height), for object-fit: cover
 * boxes where a wide photo is shown wider than its box.
 */
/*
 * sizes for the interview card thumbnails (FlexibleCard "interview"): a 150x150
 * box on desktop, a full-width 16:10 box below 800px (collection.css). Both use
 * object-fit: cover, so wide photos need more width than the box itself.
 */
export const interviewThumbnailSizes = (aspectRatio) =>
  `(max-width: 800px) calc((100vw - 140px) * ${Math.max(1, aspectRatio * 0.625).toFixed(2)}), ` +
  `${Math.round(150 * Math.max(1, aspectRatio))}px`;

export const drupalImageProps = (file, sizes) => {
  const image = file?.localImage?.childImageSharp?.gatsbyImageData;

  if (!image) {
    const url = file?.uri?.url || file?.url || "";
    return { src: url && !url.startsWith("http") ? DRUPAL_BASE_URL + url : url };
  }

  const webp = image.images.sources?.find((source) => source.type === "image/webp");
  const source = webp || image.images.fallback;

  return {
    src: image.images.fallback.src,
    srcSet: source.srcSet,
    sizes: (typeof sizes === "function" ? sizes(image.width / image.height) : sizes) || source.sizes,
    loading: "lazy",
    decoding: "async",
  };
};
