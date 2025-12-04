document.addEventListener('DOMContentLoaded', () => {

    // ===============================================
    // DATA HOBI LENGKAP
    // GANTI PATH 'image' DENGAN LOKASI GAMBAR ANDA YANG SEBENARNYA
    // Contoh: "images/coding.jpg"
    // ===============================================
    const hobbyData = {
        coding: {
            title: "Membangun dengan Kode (Python)",
            duration: "Pengalaman: Lebih dari 1 tahun",
            description: "Perjalanan saya dengan koding, terutama **Python**, dimulai sekitar satu tahun yang lalu, didorong oleh rasa ingin tahu untuk memahami bagaimana dunia digital bekerja. Saya menyukai tantangan dalam memecahkan masalah kompleks dan mengubahnya menjadi logika yang bersih dan fungsional. Coding bagi saya bukan hanya pekerjaan teknis, tetapi juga seni berpikir logis dan menciptakan efisiensi.",
            image: "images/coding.jpg" // GANTI DENGAN PATH GAMBAR KODING ANDA
        },
        memasak: {
            title: "Kreasi Dapur: Menemukan Kehangatan Rasa",
            duration: "Pengalaman: Sejak masa karantina (Awal Pandemi)",
            description: "Memasak adalah terapi dan ungkapan cinta. Minat ini mekar sejak masa karantina, di mana dapur menjadi pusat eksplorasi. Saya menikmati proses meracik bumbu dan mengikuti resep, namun juga berani berimprovisasi. Dari hidangan Asia yang kaya rasa hingga kue-kue yang menghangatkan hati, tujuan saya adalah selalu menghadirkan makanan yang tidak hanya lezat tetapi juga menyentuh jiwa.",
            image: "images/memasak.jpg" // GANTI DENGAN PATH GAMBAR MEMASAK ANDA
        },
        merajut: {
            title: "Seni Merajut: Kesabaran yang Fungsional",
            duration: "Pengalaman: Sejak 1 tahun lalu",
            description: "Merajut mengajarkan saya tentang **ketekunan** dan **nilai dari proses yang lambat**. Dimulai sekitar satu tahun lalu, aktivitas ini menawarkan istirahat yang menenangkan dari layar. Setiap simpul dan baris adalah meditasi. Saya suka membuat barang-barang yang dapat digunakan, seperti syal, topi, atau selimut kecil, yang mewujudkan kehangatan dan perhatian yang mendalam.",
            image: "images/merajut.jpg" // GANTI DENGAN PATH GAMBAR MERAJUT ANDA
        },
        membaca: {
            title: "Menjelajah Dunia Kata",
            duration: "Pengalaman: Hobi seumur hidup",
            description: "Membaca adalah gerbang saya menuju pemahaman dan empati. Saya menikmati spektrum luas, mulai dari fiksi ilmiah yang mendorong batas imajinasi hingga buku sejarah dan psikologi yang memperkaya perspektif. Saya percaya bahwa cerita dan informasi adalah nutrisi bagi jiwa, dan meluangkan waktu untuk membaca adalah investasi terbaik dalam pengembangan diri.",
            image: "images/membaca.jpg" // GANTI DENGAN PATH GAMBAR MEMBACA ANDA
        },
        berkebun: {
            title: "Sentuhan Hijau: Menanam Ketenangan",
            duration: "Pengalaman: Mulai aktif 6 bulan terakhir",
            description: "Saya menemukan kedamaian yang luar biasa dalam berkebun. Meskipun baru aktif beberapa bulan terakhir, merawat tanaman mengajarkan saya tentang kesabaran, memperhatikan detail, dan menghargai siklus alam. Baik itu menanam herba untuk masakan atau merawat sukulen, proses menyaksikan kehidupan tumbuh dari tangan sendiri adalah pengalaman yang membumi dan sangat memuaskan.",
            image: "images/berkebun.jpg" // GANTI DENGAN PATH GAMBAR BERKEBUN ANDA
        },
        fotografi: {
            title: "Mengabadikan Momen: Jendela Visual",
            duration: "Pengalaman: Hobi sesekali",
            description: "Fotografi bagi saya adalah cara untuk melatih mata agar melihat keindahan dalam hal-hal biasa. Saya tidak terikat pada peralatan profesional, tetapi lebih pada komposisi, cahaya, dan momen. Hobi ini mendorong saya untuk lebih hadir di lingkungan sekitar dan mengabadikan cerita diam yang mungkin terlewatkan. Foto yang bagus adalah memori yang dibingkai dengan emosi.",
            image: "images/fotografi.jpg" // GANTI DENGAN PATH GAMBAR FOTOGRAFI ANDA
        }
    };

    // ===============================================
    // PENGATURAN ELEMEN MODAL
    // ===============================================
    const modal = document.getElementById("hobbyModal");
    const closeBtn = document.querySelector(".close-btn");
    const hobbyItems = document.querySelectorAll(".hobby-item");
    const modalTitle = document.getElementById("modalTitle");
    const modalDuration = document.getElementById("modalDuration");
    const modalDescription = document.getElementById("modalDescription");
    const modalImage = document.getElementById("modalImage");

    // Fungsi untuk membuka modal dan mengisi konten
    function openModal(hobbyKey) {
        const data = hobbyData[hobbyKey];
        if (data) {
            modalTitle.textContent = data.title;
            modalDuration.textContent = data.duration;
            modalDescription.textContent = data.description;
            modalImage.src = data.image; // Mengisi path gambar
            
            modal.style.display = "block";
        }
    }

    // ===============================================
    // LOGIKA KLIK DAN PENUTUPAN MODAL
    // ===============================================

    // 1. Event listener untuk klik pada setiap item hobi
    hobbyItems.forEach(item => {
        item.addEventListener('click', () => {
            const hobbyKey = item.getAttribute('data-hobby');
            openModal(hobbyKey);
        });
    });

    // Fungsi untuk menutup modal
    function closeModal() {
        modal.style.display = "none";
    }

    // 2. Menutup modal saat klik tombol tutup (X)
    closeBtn.addEventListener('click', closeModal);

    // 3. Menutup modal saat klik di luar area modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // 4. Menutup modal saat tombol ESC ditekan
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});
