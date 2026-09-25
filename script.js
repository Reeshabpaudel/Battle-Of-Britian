/* =====================================================
   BATTLE OF BRITAIN
   INTERACTIVE PRESENTATION SCRIPT
===================================================== */


/* =====================================================
   TIMELINE DATA
===================================================== */

const events = [

    {
        date: "10 JULY 1940",

        title: "THE BATTLE BEGINS",

        description:
            "The Battle of Britain officially began on 10 July 1940. The preliminary phase involved German attacks on convoys, shipping and coastal targets around the English Channel."
    },


    {
        date: "12 AUGUST 1940",

        title: "RADAR ATTACKS",

        description:
            "The Luftwaffe began major attacks against British radar stations and other Fighter Command infrastructure as part of the effort to weaken Britain's air defence system."
    },


    {
        date: "13 AUGUST 1940",

        title: "ADLERTAG — EAGLE DAY",

        description:
            "The Luftwaffe launched a major offensive against British airfields, aircraft and supporting infrastructure. Fighter Command faced sustained attacks across southern England."
    },


    {
        date: "18 AUGUST 1940",

        title: "THE HARDEST DAY",

        description:
            "18 August saw intense fighting across southern England. Major attacks were made against RAF airfields, including Kenley and other Fighter Command facilities."
    },


    {
        date: "7 SEPTEMBER 1940",

        title: "THE BLITZ BEGINS",

        description:
            "The Luftwaffe shifted its major daylight bombing effort toward London. This represented an important change from the previous emphasis on Fighter Command's airfields."
    },


    {
        date: "15 SEPTEMBER 1940",

        title: "BATTLE OF BRITAIN DAY",

        description:
            "Large German daylight raids were met by Fighter Command. 15 September became known as Battle of Britain Day and is widely treated as an important moment in the campaign."
    },


    {
        date: "17 SEPTEMBER 1940",

        title: "OPERATION SEA LION POSTPONED",

        description:
            "Germany postponed Operation Sea Lion. The Luftwaffe had not established the air superiority required for the planned invasion of Britain."
    },


    {
        date: "31 OCTOBER 1940",

        title: "CONVENTIONAL END OF THE BATTLE",

        description:
            "31 October 1940 is the official British end date commonly used for the Battle of Britain. German bombing continued after this date as the Blitz developed into a longer campaign."
    }

];



/* =====================================================
   IMAGE DATA
===================================================== */

const imageGallery = [

    {
        file: "command_room.jpeg",

        title: "COMMAND ROOM",

        description:
            "British command and control environment during the air defence of Britain."
    },


    {
        file: "control_room.jpeg",

        title: "CONTROL ROOM",

        description:
            "Control and information processing formed a critical part of Britain's air defence system."
    },


    {
        file: "france.webp",

        title: "FRANCE, 1940",

        description:
            "The fall of France in June 1940 created the strategic situation that preceded the Battle of Britain."
    },


    {
        file: "plane.webp",

        title: "AIRCRAFT",

        description:
            "Aircraft were the principal combat instruments of the air battle."
    },


    {
        file: "running.webp",

        title: "GROUND CREW",

        description:
            "Ground personnel played an important role in maintaining aircraft and sustaining operations."
    },


    {
        file: "spitfires.jpeg",

        title: "SPITFIRES",

        description:
            "The Supermarine Spitfire became one of the most recognisable fighters associated with the Battle of Britain."
    },


    {
        file: "squadron.jpeg",

        title: "RAF SQUADRON",

        description:
            "Fighter squadrons provided the operational units used by Fighter Command."
    }

];



/* =====================================================
   VIDEO DATA
===================================================== */

const videoGallery = [

    {
        file: "intro_short.mp4",

        title: "INTRODUCTION",

        description:
            "Short introductory video for the Battle of Britain presentation."
    },


    {
        file: "introuduction.mp4",

        title: "BATTLE OF BRITAIN INTRODUCTION",

        description:
            "Introduction to the historical context of the Battle of Britain."
    }

];



/* =====================================================
   SHOW TIMELINE EVENT
===================================================== */

function showEvent(index) {

    const event =
        events[index];


    document
        .getElementById("event-date")
        .textContent =
        event.date;


    document
        .getElementById("event-title")
        .textContent =
        event.title;


    document
        .getElementById("event-description")
        .textContent =
        event.description;


    const items =
        document.querySelectorAll(
            ".timeline-item"
        );


    items.forEach(item => {

        item.classList.remove(
            "active"
        );

    });


    items[index]
        .classList.add(
            "active"
        );

}



/* =====================================================
   SMOOTH SCROLL
===================================================== */

function scrollToSection(sectionID) {

    const section =
        document.getElementById(
            sectionID
        );


    if (section) {

        section.scrollIntoView({

            behavior: "smooth"

        });

    }

}



/* =====================================================
   OPEN ARCHIVE
===================================================== */

function openArchive(type) {

    const modal =
        document.getElementById(
            "archive-modal"
        );


    const title =
        document.getElementById(
            "modal-title"
        );


    const description =
        document.getElementById(
            "modal-description"
        );


    const container =
        document.getElementById(
            "media-container"
        );


    container.innerHTML = "";


    /* =================================================
       IMAGES
    ================================================= */

    if (type === "images") {

        title.textContent =
            "IMAGES";


        description.textContent =
            "Historical photographs and visual material related to the Battle of Britain.";


        container.className =
            "media-container image-gallery";


        imageGallery.forEach(
            (image, index) => {

                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "gallery-card";


                card.innerHTML = `

                    <div class="gallery-image-wrapper">

                        <img
                            src="images/${encodeURIComponent(image.file)}"
                            alt="${image.title}"
                            loading="lazy"
                            onclick="openImageViewer(${index})"
                            onerror="this.style.opacity='0.2'"
                        >

                        <div class="image-number">

                            ${String(index + 1)
                                .padStart(2, "0")}

                        </div>

                    </div>


                    <div class="gallery-info">

                        <h4>
                            ${image.title}
                        </h4>

                        <p>
                            ${image.description}
                        </p>

                    </div>

                `;


                container.appendChild(
                    card
                );

            }
        );

    }



    /* =================================================
       VIDEOS
    ================================================= */

    else if (type === "videos") {

        title.textContent =
            "VIDEOS";


        description.textContent =
            "Videos included with the Battle of Britain presentation.";


        container.className =
            "media-container video-gallery";


        videoGallery.forEach(
            video => {

                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "video-card";


                card.innerHTML = `

                    <video controls preload="metadata">

                        <source
                            src="videos/${encodeURIComponent(video.file)}"
                            type="video/mp4"
                        >

                        Your browser does not
                        support video playback.

                    </video>


                    <div class="video-info">

                        <h3>
                            ${video.title}
                        </h3>

                        <p>
                            ${video.description}
                        </p>

                    </div>

                `;


                container.appendChild(
                    card
                );

            }
        );

    }



    /* =================================================
       BOOKLET
    ================================================= */

    else if (type === "booklet") {

        title.textContent =
            "BATTLE OF BRITAIN BOOKLET";


        description.textContent =
            "Reference booklet included with the presentation.";


        container.className =
            "media-container";


        container.innerHTML = `

            <div class="booklet-viewer">

                <iframe
                    src="booklets/book.pdf"
                    title="Battle of Britain Booklet">

                </iframe>

            </div>

        `;

    }



    /* =================================================
       REFERENCES
    ================================================= */

    else if (type === "references") {

        title.textContent =
            "REFERENCES";


        description.textContent =
            "Selected historical and primary-source resources for the Battle of Britain, 10 July–31 October 1940.";


        container.className =
            "media-container";


        container.innerHTML = `

            <div class="reference-list">


                <a
                    class="reference-card"
                    href="https://www.rafmuseum.org.uk/research/online-exhibitions/history-of-the-battle-of-britain/introduction-to-the-phases-of-the-battle-of-britain/"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="reference-number">
                        01
                    </div>

                    <h3>
                        RAF MUSEUM — PHASES OF THE BATTLE
                    </h3>

                    <p>
                        Official RAF Museum overview of the
                        Battle of Britain phases and the
                        10 July–31 October 1940 period.
                    </p>

                    <span class="source">
                        OPEN SOURCE →
                    </span>

                </a>



                <a
                    class="reference-card"
                    href="https://www.rafmuseum.org.uk/research/research-enquiries/history-of-aviation-timeline/british-military-aviation/1940-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="reference-number">
                        02
                    </div>

                    <h3>
                        RAF MUSEUM — 1940 TIMELINE
                    </h3>

                    <p>
                        Chronological information on British
                        military aviation during 1940,
                        including the beginning of the battle.
                    </p>

                    <span class="source">
                        OPEN SOURCE →
                    </span>

                </a>



                <a
                    class="reference-card"
                    href="https://www.nationalarchives.gov.uk/education/resources/significant-events/battle-of-britain-map/"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="reference-number">
                        03
                    </div>

                    <h3>
                        NATIONAL ARCHIVES — FIGHTER DEFENCES MAP
                    </h3>

                    <p>
                        Historical map showing Britain's
                        fighter defence system during 1940.
                    </p>

                    <span class="source">
                        OPEN SOURCE →
                    </span>

                </a>



                <a
                    class="reference-card"
                    href="https://www.portals.livewp.nationalarchives.gov.uk/explore-the-collection/explore-by-time-period/second-world-war/the-battle-of-britains-hardest-day/"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="reference-number">
                        04
                    </div>

                    <h3>
                        NATIONAL ARCHIVES — HARDEST DAY
                    </h3>

                    <p>
                        Primary-source material concerning
                        the intense fighting of 18 August 1940.
                    </p>

                    <span class="source">
                        OPEN SOURCE →
                    </span>

                </a>



                <a
                    class="reference-card"
                    href="https://www.nationalarchives.gov.uk/education/resources/home-front-1939-1945-part-one/german-air-attacks/"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="reference-number">
                        05
                    </div>

                    <h3>
                        NATIONAL ARCHIVES — GERMAN AIR ATTACKS
                    </h3>

                    <p>
                        Primary-source material covering
                        German air attacks on England in 1940.
                    </p>

                    <span class="source">
                        OPEN SOURCE →
                    </span>

                </a>



                <a
                    class="reference-card"
                    href="https://www.iwm.org.uk/collections/search?query=Battle%20of%20Britain%201940"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="reference-number">
                        06
                    </div>

                    <h3>
                        IMPERIAL WAR MUSEUMS — COLLECTIONS
                    </h3>

                    <p>
                        Photographs, documents and objects
                        associated with the Battle of Britain.
                    </p>

                    <span class="source">
                        OPEN SOURCE →
                    </span>

                </a>



                <a
                    class="reference-card"
                    href="https://www.nationalarchives.gov.uk/education/resources/significant-events/battle-of-britain-poster/"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="reference-number">
                        07
                    </div>

                    <h3>
                        NATIONAL ARCHIVES — BATTLE OF BRITAIN POSTER
                    </h3>

                    <p>
                        Historical wartime poster from
                        the National Archives collection.
                    </p>

                    <span class="source">
                        OPEN SOURCE →
                    </span>

                </a>



                <a
                    class="reference-card"
                    href="https://www.rafmuseum.org.uk/documents/ALD-London/Battle_of_Britain_KS3.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="reference-number">
                        08
                    </div>

                    <h3>
                        RAF MUSEUM — BATTLE OF BRITAIN RESOURCE
                    </h3>

                    <p>
                        Educational resource covering the
                        Battle of Britain and the people who
                        participated in it.
                    </p>

                    <span class="source">
                        OPEN SOURCE →
                    </span>

                </a>


            </div>

        `;

    }


    /* =================================================
       SHOW MODAL
    ================================================= */

    modal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}



/* =====================================================
   FULL IMAGE VIEWER
===================================================== */

function openImageViewer(index) {

    const image =
        imageGallery[index];


    const viewer =
        document.getElementById(
            "image-viewer"
        );


    const viewerImage =
        document.getElementById(
            "viewer-image"
        );


    const viewerTitle =
        document.getElementById(
            "viewer-title"
        );


    const viewerDescription =
        document.getElementById(
            "viewer-description"
        );


    viewerImage.src =
        "images/" +
        encodeURIComponent(
            image.file
        );


    viewerImage.alt =
        image.title;


    viewerTitle.textContent =
        image.title;


    viewerDescription.textContent =
        image.description;


    viewer.dataset.currentIndex =
        index;


    viewer.classList.add(
        "show"
    );

}



/* =====================================================
   NEXT IMAGE
===================================================== */

function nextImage() {

    const viewer =
        document.getElementById(
            "image-viewer"
        );


    let current =
        parseInt(
            viewer.dataset.currentIndex
        );


    current++;


    if (
        current >=
        imageGallery.length
    ) {

        current = 0;

    }


    openImageViewer(
        current
    );

}



/* =====================================================
   PREVIOUS IMAGE
===================================================== */

function previousImage() {

    const viewer =
        document.getElementById(
            "image-viewer"
        );


    let current =
        parseInt(
            viewer.dataset.currentIndex
        );


    current--;


    if (current < 0) {

        current =
            imageGallery.length - 1;

    }


    openImageViewer(
        current
    );

}



/* =====================================================
   CLOSE IMAGE VIEWER
===================================================== */

function closeImageViewer() {

    document
        .getElementById(
            "image-viewer"
        )
        .classList.remove(
            "show"
        );

}



/* =====================================================
   CLOSE ARCHIVE
===================================================== */

function closeArchive() {

    document
        .getElementById(
            "archive-modal"
        )
        .classList.remove(
            "show"
        );


    document.body.style.overflow =
        "auto";

}



/* =====================================================
   CLICK OUTSIDE MODAL
===================================================== */

document
    .getElementById(
        "archive-modal"
    )
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                this
            ) {

                closeArchive();

            }

        }
    );


document
    .getElementById(
        "image-viewer"
    )
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                this
            ) {

                closeImageViewer();

            }

        }
    );



/* =====================================================
   KEYBOARD CONTROLS
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        const viewer =
            document.getElementById(
                "image-viewer"
            );


        const archive =
            document.getElementById(
                "archive-modal"
            );


        if (
            event.key ===
            "Escape"
        ) {

            if (
                viewer.classList
                    .contains("show")
            ) {

                closeImageViewer();

            }

            else if (
                archive.classList
                    .contains("show")
            ) {

                closeArchive();

            }

        }


        if (
            viewer.classList
                .contains("show")
        ) {

            if (
                event.key ===
                "ArrowRight"
            ) {

                nextImage();

            }


            if (
                event.key ===
                "ArrowLeft"
            ) {

                previousImage();

            }

        }

    }
);
