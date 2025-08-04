window.onload = function () {
    const song = document.getElementById("song");

    // Attempt to play automatically
    song.play().catch(() => {
        // If autoplay fails, wait for user interaction
        const resumeAudio = () => {
            song.play();
            document.removeEventListener("click", resumeAudio);
        };
        document.addEventListener("click", resumeAudio);
    });

    // Collage setup
    const collage = document.getElementById("collage");
    const imageCount = 75;
    const folder = "collage/";
    const ext = ".jpg";

    for (let i = 1; i <= imageCount * 2; i++) {
        const img = document.createElement("img");
        img.src = `${folder}${(i - 1) % imageCount + 1}${ext}`;
        collage.appendChild(img);
    }
};
