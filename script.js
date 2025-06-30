document.addEventListener('DOMContentLoaded', (event) => {
    const overlay = document.getElementById('overlay');
    const acceptButton = document.getElementById('accept-button');
    const video = document.getElementById('video');

    // Ngăn chặn video tự động phát cho đến khi nút được nhấn
    video.pause();

    acceptButton.addEventListener('click', () => {
        overlay.hidden = true; // Ẩn lớp phủ
        video.play();         // Bắt đầu phát video
        // Nếu video có âm thanh và bạn muốn tự động phát,
        // bạn có thể cần video.muted = true; ban đầu
        // và cung cấp tùy chọn bật âm thanh cho người dùng.
        // Tuy nhiên, với autoplay có âm thanh bị chặn,
        // việc gọi play() sau click là cách tốt nhất.
    });

    // Nếu bạn muốn chặn hoàn toàn các phím media hoặc tương tác chuột,
    // các hàm oncontextmenu, onkeydown, onmousedown trong body đã làm điều đó.
});
