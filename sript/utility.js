function renderDateTime() {
    // perhitungan isi tanggal dan waktu
    const periode = document.getElementById('periode');
    const today = new Date();
    const year = today.getFullYear();
    const month = getMonthName();
    const day = String(today.getDate()).padStart(2, '0');
    let hour = today.getHours();
    if(hour<10) hour = `0${hour}`;
    let minute = today.getMinutes();
    if(minute<10) minute = `0${minute}`;
    periode.innerHTML = `Periode ${day} ${month} ${year} | Waktu Report ${hour}:${minute} WIB`;
}
