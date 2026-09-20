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
            "The Luftwaffe began attacking important British radar stations and other Fighter Command infrastructure. Radar was a critical part of Britain's early-warning network."
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
            "The Luftwaffe shifted its main daylight bombing effort toward London. The campaign against the capital marked a major change in German targeting."
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
            "31 October is commonly used as the conventional end date of the Battle of Britain, although German bombing of Britain continued afterward."
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
   ARCHIVE INFORMATION
========================================================= */

const archiveData = {

    images: {

        title: "IMAGES",

        description:
            "Historical photographs, aircraft, commanders, maps, radar stations and other visual material.",

        folder: "images/"

    },


    videos: {

        title: "VIDEOS",

        description:
            "Historical footage and documentary material related to the Battle of Britain.",

        folder: "videos/"

    },


    pamphlets: {

        title: "PAMPHLETS",

        description:
            "Wartime pamphlets, posters, public information material and propaganda documents.",

        folder: "pamphlets/"

    },


    booklets: {

        title: "BOOKLETS",

        description:
            "Historical booklets, military publications and reference documents.",

        folder: "booklets/"

    }

};


/* =========================================================
   OPEN ARCHIVE
========================================================= */

function openArchive(type) {

    const data = archiveData[type];

    if (!data) return;


    document.getElementById("modal-title").textContent =
        data.title;


    document.getElementById("modal-description").textContent =
        data.description;


    const container =
        document.getElementById("media-container");


    container.innerHTML = "";


    /*
       IMPORTANT:

       Browsers cannot automatically list every file
       inside a folder.

       Therefore, for now, we use a simple placeholder.

       Later, when you give me the actual filenames,
       we can replace this with the real files.
    */


    if (type === "images") {

        container.innerHTML = `

            <div class="media-item">

                <img src="images/example.jpg"
                     alt="Battle of Britain">

                <div class="media-info">

                    <h4>Example Image</h4>

                    <p>
                        Replace this image with your
                        historical photograph.
                    </p>

                </div>

            </div>

        `;

    }


    else if (type === "videos") {

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
                        Replace example.mp4 with
                        your video.
                    </p>

                </div>

            </div>

        `;

    }


    else if (type === "pamphlets") {

        container.innerHTML = `

            <div class="pdf-item">

                <iframe
                    src="pamphlets/example.pdf">
                </iframe>

            </div>

        `;

    }


    else if (type === "booklets") {

        container.innerHTML = `

            <div class="pdf-item">

                <iframe
                    src="booklets/example.pdf">
                </iframe>

            </div>

        `;

    }


    document
        .getElementById("archive-modal")
        .classList.add("show");


    document.body.style.overflow = "hidden";

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
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================================= */

document
    .getElementById("archive-modal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeArchive();

        }

    });


/* =========================================================
   ESC KEY CLOSES MODAL
========================================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeArchive();

    }

});
