document.getElementById('downloadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const url = document.getElementById('url').value;
    const format = document.getElementById('format').value;

    
    if (!url) {
        alert('يرجى إدخال رابط الفيديو');
        return;
    }

    if (format === 'mp4') {
        alert(`تم تحميل الفيديو بصيغة MP4 من الرابط: ${url}`);
    } else if (format === 'mp3') {
        alert(`تم تحميل الصوت بصيغة MP3 من الرابط: ${url}`);
    } else {
        alert('صيغة غير صالحة');
    }

    document.getElementById('url').value = '';
});
