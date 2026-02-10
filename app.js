const track = document.getElementById("logoTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let index = 0;

function getStep() {
    const img = track.querySelector("img");
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap) || 0;

    return img.offsetWidth + gap;
}

nextBtn.onclick = () => {
    const step = getStep();
    const maxIndex = track.children.length - 5;

    if (index < maxIndex) {
        index++;
        track.style.transform = `translateX(-${index * step}px)`;
    }
};

prevBtn.onclick = () => {
    const step = getStep();

    if (index > 0) {
        index--;
        track.style.transform = `translateX(-${index * step}px)`;
    }
};
