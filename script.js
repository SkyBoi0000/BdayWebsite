window.onload = function () {
    const song = document.getElementById("song");
    song.muted = false;
    song.play().catch(() => {});

    // Collage setup
    const collage = document.getElementById("collage");
    const imageCount = 80; // Adjust based on how many images you have
    const folder = "collage/";
    const ext = ".jpg"; // Change if you use .png, etc.

    for (let i = 1; i <= imageCount; i++) {
        const img = document.createElement("img");
        img.src = `${folder}${i}${ext}`;
        collage.appendChild(img);
    }

    // Repeat images to cover the full scroll area
    for (let i = 1; i <= imageCount; i++) {
        const img = document.createElement("img");
        img.src = `${folder}${i}${ext}`;
        collage.appendChild(img);
    }
};

document.addEventListener("click", function () {
    const song = document.getElementById("song");
    if (song.paused) song.play();
});
