/* Battle of Britain presentation

   HOW TO ADD YOUR MATERIAL
   1. Copy the file into the matching folder next to index.html:
        images/      pictures (.jpg .png .webp)
        pamphlets/   pamphlet scans (.jpg .png) or PDFs
        videos/      video files (.mp4 .webm)
        booklet/     the booklet as a PDF (or as page images)
   2. Add one line for it in the MEDIA lists below. Each line needs the file
      path and, if you like, a title shown under it.
   3. Save and refresh the page. The count on each button updates by itself.

   Browsers cannot list a folder on their own, which is why each file is listed here.
*/

const MEDIA = {
  images: [
    // { file: "images/dowding.jpg", title: "Air Chief Marshal Sir Hugh Dowding" },
  ],

  pamphlets: [
    // { file: "pamphlets/leaflet-1.jpg", title: "Air raid precautions leaflet" },
    // { file: "pamphlets/leaflet-2.pdf", title: "Pamphlet as a PDF" },
  ],

  videos: [
    // { file: "videos/radar.mp4", title: "Chain Home radar" },
    // { file: "videos/clip.mp4", title: "With a poster image", poster: "images/clip-poster.jpg" },
    // { youtube: "VIDEO_ID", title: "A YouTube video (needs internet)" },
  ],

  booklet: [
    // { file: "booklet/booklet.pdf", title: "Booklet" },
  ],
};

(function () {
  "use strict";

  const NAMES = {
    images: "images",
    pamphlets: "pamphlets",
    videos: "videos",
    booklet: "booklet",
  };

  const SINGULAR = {
    images: "Image",
    pamphlets: "Pamphlet",
    videos: "Video",
    booklet: "Booklet",
  };

  const isPdf = (file) => /\.pdf$/i.test(file || "");

  /* Small helper for building elements. */
  function h(tag, props, ...children) {
    const node = document.createElement(tag);
    Object.entries(props || {}).forEach(([key, value]) => {
      if (value === false || value == null) return;
      if (key === "class") node.className = value;
      else node.setAttribute(key, value === true ? "" : value);
    });
    children.flat().filter((c) => c != null && c !== false).forEach((c) => node.append(c));
    return node;
  }

  /* ---------- Viewer (full-screen images and PDFs) ---------- */

  const viewer = document.getElementById("viewer");
  const viewerBody = document.getElementById("viewer-body");
  const viewerTitle = document.getElementById("viewer-title");
  const viewerPrev = document.getElementById("viewer-prev");
  const viewerNext = document.getElementById("viewer-next");
  let viewerItems = [];
  let viewerIndex = 0;

  function drawViewer() {
    const item = viewerItems[viewerIndex];
    const many = viewerItems.length > 1;
    viewerTitle.textContent = (item.title || "") + (many ? `  (${viewerIndex + 1} of ${viewerItems.length})` : "");
    viewerBody.replaceChildren(
      isPdf(item.file)
        ? h("iframe", { src: item.file, title: item.title || "Document" })
        : h("img", { src: item.file, alt: item.title || "" })
    );
    viewerPrev.hidden = !many;
    viewerNext.hidden = !many;
  }

  function openViewer(items, index) {
    viewerItems = items;
    viewerIndex = index;
    drawViewer();
    if (!viewer.open) viewer.showModal();
  }

  function stepViewer(direction) {
    if (viewerItems.length < 2) return;
    viewerIndex = (viewerIndex + direction + viewerItems.length) % viewerItems.length;
    drawViewer();
  }

  viewerPrev.addEventListener("click", () => stepViewer(-1));
  viewerNext.addEventListener("click", () => stepViewer(1));
  document.getElementById("viewer-close").addEventListener("click", () => viewer.close());

  viewer.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") stepViewer(-1);
    if (event.key === "ArrowRight") stepViewer(1);
  });

  /* Clicking the dark area outside the viewer closes it. */
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) viewer.close();
  });

  viewer.addEventListener("close", () => viewerBody.replaceChildren());

  /* ---------- Panel builders ---------- */

  function emptyState(key) {
    return h(
      "div",
      { class: "empty" },
      h(
        "p",
        {},
        `No ${NAMES[key]} added yet. Put the files in the `,
        h("code", {}, `${key}/`),
        " folder, then list them under ",
        h("code", {}, `MEDIA.${key}`),
        " in script.js."
      )
    );
  }

  /* Images and pamphlets: a grid of thumbnails that open in the viewer. */
  function buildGallery(key) {
    const list = MEDIA[key];
    const items = list.map((item, i) => ({
      file: item.file,
      title: item.title || `${SINGULAR[key]} ${i + 1}`,
    }));
    const grid = h("div", { class: "grid" });

    items.forEach((item, i) => {
      const visual = isPdf(item.file)
        ? h("span", { class: "doc-tile" }, item.title)
        : h("img", { src: item.file, alt: "", loading: "lazy" });
      const button = h(
        "button",
        { type: "button", class: "thumb", "aria-label": `View ${item.title}` },
        visual
      );
      button.addEventListener("click", () => openViewer(items, i));
      grid.append(h("figure", { class: "tile" }, button, list[i].title ? h("figcaption", {}, list[i].title) : null));
    });

    return grid;
  }

  /* Videos: play in place. */
  function buildVideos() {
    const grid = h("div", { class: "grid grid-video" });

    MEDIA.videos.forEach((item) => {
      const player = item.youtube
        ? h("iframe", {
            src: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(item.youtube)}`,
            title: item.title || "Video",
            allow: "fullscreen; picture-in-picture",
            allowfullscreen: true,
            loading: "lazy",
          })
        : h("video", { src: item.file, controls: true, preload: "metadata", poster: item.poster });
      grid.append(h("figure", { class: "tile" }, player, item.title ? h("figcaption", {}, item.title) : null));
    });

    return grid;
  }

  /* Booklet: shown large, in place. If there is more than one file, pick between them. */
  function buildBooklet() {
    const list = MEDIA.booklet.map((item, i) => ({
      file: item.file,
      title: item.title || `${SINGULAR.booklet} ${i + 1}`,
    }));
    const frame = h("div", { class: "booklet-frame" });
    const bar = h("div", { class: "booklet-bar" });
    const choices = [];
    let current = 0;

    const fullScreen = h("button", { type: "button" }, "Full screen");
    fullScreen.addEventListener("click", () => openViewer(list, current));
    const newTab = h("a", { href: list[0].file, target: "_blank", rel: "noopener" }, "Open in new tab");

    function show(i) {
      current = i;
      const item = list[i];
      frame.replaceChildren(
        isPdf(item.file)
          ? h("iframe", { src: item.file, title: item.title })
          : h("img", { src: item.file, alt: item.title })
      );
      newTab.setAttribute("href", item.file);
      choices.forEach((button, index) => button.setAttribute("aria-current", index === i ? "true" : "false"));
    }

    if (list.length > 1) {
      list.forEach((item, i) => {
        const button = h("button", { type: "button" }, item.title);
        button.addEventListener("click", () => show(i));
        choices.push(button);
        bar.append(button);
      });
    }

    bar.append(fullScreen, newTab);
    show(0);
    return h("div", {}, bar, frame);
  }

  function buildPanel(key) {
    if (!MEDIA[key].length) return emptyState(key);
    if (key === "videos") return buildVideos();
    if (key === "booklet") return buildBooklet();
    return buildGallery(key);
  }

  /* ---------- Buttons ---------- */

  const buttons = Array.from(document.querySelectorAll(".media-btn"));
  const hint = document.getElementById("media-hint");

  function panelFor(button) {
    return document.getElementById(button.getAttribute("aria-controls"));
  }

  /* Emptying the panel also stops any video that was playing. */
  function closePanel(button) {
    button.setAttribute("aria-expanded", "false");
    const panel = panelFor(button);
    panel.hidden = true;
    panel.replaceChildren();
  }

  buttons.forEach((button) => {
    const key = button.dataset.kind;
    const count = MEDIA[key].length;
    button.querySelector(".count").textContent = count ? `(${count})` : "";

    button.addEventListener("click", () => {
      const wasOpen = button.getAttribute("aria-expanded") === "true";
      buttons.forEach(closePanel);

      if (wasOpen) {
        hint.hidden = false;
        return;
      }

      const panel = panelFor(button);
      panel.replaceChildren(buildPanel(key));
      panel.hidden = false;
      button.setAttribute("aria-expanded", "true");
      hint.hidden = true;
    });
  });
})();
