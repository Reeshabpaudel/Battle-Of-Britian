/* =========================================================
   BATTLE TIMELINE
========================================================= */

const events = [

    {
        date: "10 JULY 1940",
        title: "THE BATTLE BEGINS",
        description:
            "The Battle of Britain began with German attacks against British shipping and targets around the English Channel. This period became known as the Kanalkampf."
    },

    {
        date: "12 AUGUST 1940",
        title: "RADAR ATTACKS",
        description:
            "The Luftwaffe began attacking important British radar stations and other Fighter Command infrastructure."
    },

    {
        date: "13 AUGUST 1940",
        title: "ADLERTAG — EAGLE DAY",
        description:
            "The Luftwaffe launched a major offensive against RAF targets. Fighter Command faced sustained attacks across southern England."
    },

    {
        date: "18 AUGUST 1940",
        title: "MAJOR CLASHES",
        description:
            "Heavy fighting continued as German attacks placed increasing pressure on RAF airfields, aircraft and personnel."
    },

    {
        date: "7 SEPTEMBER 1940",
        title: "THE BLITZ BEGINS",
        description:
            "The Luftwaffe shifted its main daylight bombing effort toward London."
    },

    {
        date: "15 SEPTEMBER 1940",
        title: "BATTLE OF BRITAIN DAY",
        description:
            "Large German daylight raids were met by Fighter Command. The date became an important symbolic moment in the Battle of Britain."
    },

    {
        date: "17 SEPTEMBER 1940",
        title: "OPERATION SEA LION POSTPONED",
        description:
            "Germany postponed Operation Sea Lion. The Luftwaffe had not achieved the air superiority considered necessary for the planned invasion."
    },

    {
        date: "31 OCTOBER 1940",
        title: "CONVENTIONAL END OF THE BATTLE",
        description:
            "31 October is commonly used as the conventional end date of the Battle of Britain."
    }

];


/* =========================================================
   SHOW TIMELINE EVENT
========================================================= */

function showEvent(index) {

    const event = events[index];

    document.getElementById("event-date").textContent =
        event.date;

    document.getElementById("event-title").textContent =
        event.title;

    document.getElementById("event-description").textContent =
        event.description;

    const items =
        document.querySelectorAll(".timeline-item");

    items.forEach(item => {
        item.classList.remove("active");
    });

    items[index].classList.add("active");
}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

function scrollToSection(sectionID) {

    const section =
        document.getElementById(sectionID);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================================
   IMAGE GALLERY
========================================================= */

/*
   IMPORTANT:

   These are the filenames exactly as you provided them.

   If GitHub filenames contain spaces, parentheses, etc.,
   encodeURI() below makes the browser URL-safe.
*/

const imageGallery = [

    {
        file: "OIP (1).webp",
        title: "Historical Image 01",
        description: "Battle of Britain historical material."
    },

    {
        file: "OIP (3).webp",
        title: "Historical Image 02",
        description: "Battle of Britain historical material."
    },

    {
        file: "OIP.webp",
        title: "Historical Image 03",
        description: "Battle of Britain historical material."
    },

    {
        file: "WhatsApp Image 2026-09-10 at 11.19.06.jpeg",
        title: "Historical Image 04",
        description: "Battle of Britain historical material."
    },

    {
        file: "inclass 1.heic",
        title: "Historical Image 05",
        description: "HEIC image. Convert to JPG or WebP if it does not display."
    },

    {
        file: "testimage",
        title: "Test Image",
        description: "Test image. Add an extension if required."
    }

];


/* =========================================================
   OPEN ARCHIVE
========================================================= */

function openArchive(type) {

    const modal =
        document.getElementById("archive-modal");

    const title =
        document.getElementById("modal-title");

    const description =
        document.getElementById("modal-description");

    const container =
        document.getElementById("media-container");


    container.innerHTML = "";


    /* ================= IMAGES ================= */

    if (type === "images") {

        title.textContent = "IMAGES";

        description.textContent =
            "Historical photographs, aircraft, commanders, maps and other visual material.";

        container.className = "media-container image-gallery";


        imageGallery.forEach((image, index) => {

            const card =
                document.createElement("div");

            card.className = "gallery-card";


            card.innerHTML = `

                <div class="gallery-image-wrapper">

                    <img
                        src="images/${encodeURI(image.file)}"
                        alt="${image.title}"
                        loading="lazy"
                        onclick="openImageViewer(${index})"
                        onerror="this.parentElement.classList.add('image-error')"
                    >

                    <div class="image-number">
                        ${String(index + 1).padStart(2, "0")}
                    </div>

                </div>

                <div class="gallery-info">

                    <h4>${image.title}</h4>

                    <p>${image.description}</p>

                </div>

            `;


            container.appendChild(card);

        });

    }


    /* ================= VIDEOS ================= */

    else if (type === "videos") {

        title.textContent = "VIDEOS";

        description.textContent =
            "Historical footage and documentary material related to the Battle of Britain.";

        container.className = "media-container";


        container.innerHTML = `

            <div class="media-item">

                <video controls>

                    <source
                        src="videos/example.mp4"
                        type="video/mp4">

                    Your browser does not support
                    video playback.

                </video>

                <div class="media-info">

                    <h4>Example Video</h4>

                    <p>
                        Replace example.mp4 with your video.
                    </p>

                </div>

            </div>

        `;

    }


    /* ================= PAMPHLETS ================= */

    else if (type === "pamphlets") {

        title.textContent = "PAMPHLETS";

        description.textContent =
            "Wartime pamphlets, posters and public information material.";

        container.className = "media-container";


        container.innerHTML = `

            <div class="pdf-item">

                <iframe
                    src="pamphlets/example.pdf">
                </iframe>

            </div>

        `;

    }


    /* ================= BOOKLETS ================= */

    else if (type === "booklets") {

        title.textContent = "BOOKLETS";

        description.textContent =
            "Historical booklets and military publications.";

        container.className = "media-container";


        container.innerHTML = `

            <div class="pdf-item">

                <iframe
                    src="booklets/example.pdf">
                </iframe>

            </div>

        `;

    }


    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   FULL IMAGE VIEWER
========================================================= */

function openImageViewer(index) {

    const image = imageGallery[index];

    const viewer =
        document.getElementById("image-viewer");

    const viewerImage =
        document.getElementById("viewer-image");

    const viewerTitle =
        document.getElementById("viewer-title");

    const viewerDescription =
        document.getElementById("viewer-description");


    viewerImage.src =
        "images/" + encodeURI(image.file);

    viewerImage.alt =
        image.title;

    viewerTitle.textContent =
        image.title;

    viewerDescription.textContent =
        image.description;


    viewer.dataset.currentIndex = index;

    viewer.classList.add("show");

}


/* =========================================================
   NEXT IMAGE
========================================================= */

function nextImage() {

    const viewer =
        document.getElementById("image-viewer");

    let current =
        parseInt(viewer.dataset.currentIndex);

    current++;

    if (current >= imageGallery.length) {
        current = 0;
    }

    openImageViewer(current);

}


/* =========================================================
   PREVIOUS IMAGE
========================================================= */

function previousImage() {

    const viewer =
        document.getElementById("image-viewer");

    let current =
        parseInt(viewer.dataset.currentIndex);

    current--;

    if (current < 0) {
        current = imageGallery.length - 1;
    }

    openImageViewer(current);

}


/* =========================================================
   CLOSE IMAGE VIEWER
========================================================= */

function closeImageViewer() {

    document
        .getElementById("image-viewer")
        .classList.remove("show");

}


/* =========================================================
   CLOSE ARCHIVE
========================================================= */

function closeArchive() {

    document
        .getElementById("archive-modal")
        .classList.remove("show");

    document.body.style.overflow = "auto";

}


/* =========================================================
   CLOSE MODALS BY CLICKING OUTSIDE
========================================================= */

document
    .getElementById("archive-modal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeArchive();

        }

    });


document
    .getElementById("image-viewer")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeImageViewer();

        }

    });


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener("keydown", function(event) {

    const viewer =
        document.getElementById("image-viewer");

    const archive =
        document.getElementById("archive-modal");


    if (event.key === "Escape") {

        if (viewer.classList.contains("show")) {

            closeImageViewer();

        } else {

            closeArchive();

        }

    }


    if (viewer.classList.contains("show")) {

        if (event.key === "ArrowRight") {

            nextImage();

        }

        if (event.key === "ArrowLeft") {

            previousImage();

        }

    }

});
