function changeImage(imagePath) {
    const mainbox = document.getElementById("mainbox");
    const i1 = document.getElementsByClassName("i1");

    mainbox.style.opacity = 0;

    setTimeout(() => {
        mainbox.src = imagePath;
        mainbox.style.opacity = 1;
    }, 400);

    for (const img of i1) {
        img.classList.remove('selected');
        img.style.borderStyle = "none";
    }

    const selectedImg = Array.from(i1).find(img => img.src.includes(imagePath));

    if (selectedImg) {
        selectedImg.classList.add('selected');
        selectedImg.style.borderStyle = "solid";
    }

}