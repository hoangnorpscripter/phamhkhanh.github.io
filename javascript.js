document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio();
    audio.src = "music.mp3"; // Đường dẫn tới tập tin âm thanh của bạn
    audio.autoplay = true; // Tự động phát nhạc khi trang được tải
    audio.loop = true; // Lặp lại nhạc tự động

    // Chèn phần tử audio vào body của trang
    document.body.appendChild(audio);
});