//inisiasi soal dalam quiz
const questions = [
    {
        question: "Pengelolaan Sampah yang benar yang dapat di lakukan di rumah adalah...",
        optionA: "a. Pembakaran",
        optionB: "b. Pemilahan",
        optionC: "c. Pengangkutan",
        optionD: "d. Pengolahan Akhir",
        correctOption: "optionB"
    },

    {
        question: "Satuan karya (Saka) Pramuka binaan lingkungan hidup dinamakan apa?",
        optionA: "a. Saka Bayangkara",
        optionB: "b. Saka Bakti Husada",
        optionC: "c. Saka Kalpataru",
        optionD: "d. Saka Wanabakti",
        correctOption: "optionC"
    },

    {
        question: "Bagaimana cara yang paling tepat  merubah sungai di Kota Pekalongan menjadi sungai yang bebas dari pencemaran?",
        optionA: "a. Melakukan pengawasan terhadap industri yang menghasilkan air limbah",
        optionB: "b. Memberikan bantuan IPAL kepada pelaku industri",
        optionC: "c. Melakukan sosialisasi kepada pelaku industri",
        optionD: "d. Membangun IPAL Komunal untuk mengolah semua air limbah yang dihasilkan industri di Kota Pekalongan",
        correctOption: "optionA"
    },

    {
        question: "Berikut termasuk upaya penyelamatan lingkungan dari kerusakan, kecuali..",
        optionA: "a. Penenaman mangrove",
        optionB: "b. Pemanfaatan limbah tahu menjadi biogas",
        optionC: "c. Reboisasi",
        optionD: "d. Pembalakan liar",
        correctOption: "optionD"
    },

    {
        question: "Sampah / limbah yang termasuk limbah B3 adalah...",
        optionA: "a. Oli bekas",
        optionB: "b. Daun-daunan",
        optionC: "c. Botol air mineral",
        optionD: "d. Plastik bekas kemasan",
        correctOption: "optionA"
    },

    {
        question: "Dampak perubahan iklim yang sudah di rasakan menusia adalah...",
        optionA: "a. Rob",
        optionB: "b. Suhu udara meningkat",
        optionC: "c. Meningkatkan muka air laut",
        optionD: "d. Semua benar",
        correctOption: "optionD"
    },

    {
        question: "Gas berbahaya yang di hasilkan dari asap kendaraan bermotor adalah...",
        optionA: "a. Karbondioksida",
        optionB: "b. Karbonmonoksida",
        optionC: "c. Metan",
        optionD: "d. Oksigen",
        correctOption: "optionB"
    },

    {
        question: "Gerakan penghijauan terus di galakkan karena banyak manfaat dari pohon, yaitu menghasilkan...",
        optionA: "a. Karbondioksida",
        optionB: "b. Karbonmonoksida",
        optionC: "c. Metan",
        optionD: "d. Oksigen",
        correctOption: "optionD"
    },

    {
        question: "Terjadinya banjir dan tanah longsor diakibatkan perbuatan manusia yaitu...",
        optionA: "a. Pembalakan liar",
        optionB: "b. Pembakaran sampah",
        optionC: "c. Buang sampah sembarangan",
        optionD: "d. Buang limbah sembarangan",
        correctOption: "optionA"
    },

    {
        question: "Berikut merupakan upaya pelestarian lingkungan yaitu...",
        optionA: "a. Hemat dalam penggunaan air",
        optionB: "b. Mematikan peralatan listrik yang tidak di gunakan",
        optionC: "c. Hemat dalam pemakaian bahan bakar",
        optionD: "d. Semua benar",
        correctOption: "optionD"
    },

    {
        question: "Berikut yang merupakan sumber energi yang dapat di perbaharui...",
        optionA: "a. Matahari",
        optionB: "b. Bensin",
        optionC: "c. Solar",
        optionD: "d. Pertamax",
        correctOption: "optionA"
    },

  
    {
        question: "Upaya yang dapat di lakukan oleh pelajar untuk melestarikan lingkungan, kecuali...",
        optionA: "a. Buang sampah pada tempatnya",
        optionB: "b. Menyiram tanaman di rumah",
        optionC: "c. Pemilahan sampah",
        optionD: "d. Membakar sampah",
        correctOption: "optionD"
    },


    {
        question: "Peraturan daerah kota pekalongan yang mengatur tentang pengelolaan sampah adalah...",
        optionA: "a. Perda No.3 Tahun 2010",
        optionB: "b. Perda No.16 Tahun 2012",
        optionC: "c. Perda No.2 Tahun 2010",
        optionD: "d. Perda No.17 Tahun 2012",
        correctOption: "optionB"
    },

    {
        question: "Berikut merupakan cara untuk mengurangi dampak perubahan iklim...",
        optionA: "a. Menanam Pohon",
        optionB: "b. Bersepeda",
        optionC: "c. Mengelola limbah dengan benar",
        optionD: "d. Semua Benar",
        correctOption: "optionD"
    },

    {
        question: "Bagaimana cara mengelola limbah cair dari produksi batik...",
        optionA: "a. Mengalirkan ke sungai",
        optionB: "b. Mengolahnya di IPAL",
        optionC: "c. Digunakan untuk menyiram tanaman",
        optionD: "d. Di buang ke selokan",
        correctOption: "optionB"
    },

    {
        question: "Mengapa Kota Pekalongan terkena banjir rob?",
        optionA: "a. Penurunan muka tanah",
        optionB: "b. Permukaan air laut naik",
        optionC: "c. Perubahan iklim",
        optionD: "d. Semua benar",
        correctOption: "optionD"
    },

    {
        question: "Apa nama Undang Undang yang mengatur tentang perlindungan dan pengelolaan lingkungan hidup?",
        optionA: "a. Undang Undang Nomor 32 tahun 2008 tentang Perlindungan dan Pengelolaan Lingkungan Hidup",
        optionB: "b. Undang Undang Nomor 32 tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup",
        optionC: "c. Undang Undang Nomor 32 tahun 2010 tentang Perlindungan dan Pengelolaan Lingkungan Hidup",
        optionD: "d. Undang Undang Nomor 32 tahun 2011 tentang Perlindungan dan Pengelolaan Lingkungan Hidup",
        correctOption: "optionB"
    },

    {
        question: "Penghargaan untuk kota terbersih adalah...",
        optionA: "a. ADIPURA",
        optionB: "b. ADIWIYATA",
        optionC: "c. WANAWIYATA",
        optionD: "d. KALPATARU ",
        correctOption: "optionA"
    },

    {
        question: "Penghargaan sekolah berbudaya lingkungan adalah...",
        optionA: "a. Sekolah ADIWIYATA",
        optionB: "b. Sekolah ADIPURA",
        optionC: "c. Sekolah Wana Wiyata",
        optionD: "d. Sekolah KALPATARU",
        correctOption: "optionA"
    },

    {
        question: "Masalah lingkungan utama yang dihadapi oleh Kota Pekalongan adalah sebagai berikut...",
        optionA: "a. Limbah cair, gas dan padat",
        optionB: "b. Limbah cair, sampah rumah tangga dan rob",
        optionC: "c. Limbah B3, sampah dan banjir",
        optionD: "d. Sampah, banjir dan pencemaran udara",
        correctOption: "optionB"
    },

    {
        question: "Apa yang dimaksud dengan sampah?",
        optionA: "a. Sisa kegiatan manusia yang tidak berguna",
        optionB: "b. Sisa kegiatan sehari hari manusia dan /atau proses alam yang berbentuk padat",
        optionC: "c. Sisa kegiatan manusia dan / proses alam yang berbentuk padat dan tidak berguna",
        optionD: "d. Sisa kegiatan manusia yang berbau, tidak berguna dan dibuang ke TPA",
        correctOption: "optionB"
    },

    {
        question: "Nama Kementerian Republik Indonesia yang menangani lingkungan hidup...",
        optionA: "a. Kementerian Lingkungan Hidup Republik Indonesia",
        optionB: "b. Kementerian Lingkungan Hidup dan Pertanian Republik Indonesia",
        optionC: "c. Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia",
        optionD: "d. Kementerian Lingkungan Hidup dan Kelautan Republik Indonesia",
        correctOption: "optionC"
    },

    {
        question: "Apa kepanjangan dari limbah B3?",
        optionA: "a. Limbah Bahan Beracun dan Berbahaya",
        optionB: "b. Limbah Bahan Berbahaya dan Beracun",
        optionC: "c. Limbah Bahan Berbahaya dan Bereaktif",
        optionD: "d. limbah Bahan Beracun dan Bereaktif",
        correctOption: "optionB"
    },

    {
        question: "Dibawah ini adalah sungai yang melintasi Kota Pekalongan , kecuali...",
        optionA: "a. Asem Binatur",
        optionB: "b. Meduri",
        optionC: "c. Bremi",
        optionD: "d. Pencongan",
        correctOption: "optionD"
    },

    {
        question: "Berikut ini adalah data monografi Kota Pekalongan yang benar...",
        optionA: "a. Luas : 45,25 km2, jumlah kelurahan : 47, jumlah kecamatan : 4",
        optionB: "b. Luas : 452,5 km2, jumlah kelurahan : 27, jumlah kecamatan : 4",
        optionC: "c. Luas : 45,25 km2, jumlah kelurahan : 27, jumlah kecamatan : 4",
        optionD: "d. Luas : 452,5 km2, jumlah kelurahan : 47, jumlah kecamatan : 4",
        correctOption: "optionC"
    },

    {
        question: "Apa yang dimaksud dengan Lubang Resapan Biopori?",
        optionA: "a. Lubang untuk sampah rumah tangga",
        optionB: "b. Lubang dengan bor pada tanah pekarangan untuk mengolah sampah rumah tangga",
        optionC: "c. Lubang dengan kedalaman + 1m diisi dengan sampah organik dimanfaatkan sebagai resapan air hujan",
        optionD: "d. Lubang yang berisi pompa untuk menyedot air dan disalurkan pada sungai terdekat",
        correctOption: "optionC"
    },

    {
        question: "Dimana lokasi paling tepat untuk membuat lubang biopori?",
        optionA: "a. dekat dengan sungai",
        optionB: "b. di halaman",
        optionC: "c. ditempat yang tergenang dan dilalui air hujan",
        optionD: "d. dekat dengan sumur",
        correctOption: "optionC"
    },

    {
        question: "Didalam produksi kerajinan batik, dampak lingkungan yang paling utama apa?",
        optionA: "a. Limbah cair",
        optionB: "b. Sampah domestik",
        optionC: "c. Emisi udara",
        optionD: "d. Dampak sosial",
        correctOption: "optionA"
    },

    {
        question: "Berbagai manfaat dari Lubang resapan biopori kecuali...",
        optionA: "a. mencegah penyakit diare",
        optionB: "b. mengurangi resiko banjir",
        optionC: "c. mengurangi sampah organik",
        optionD: "d. menghasilkan kompos",
        correctOption: "optionA"
    },

    {
        question: "Berikut ini adalah salah satu unit pengolahan limbah cair, kecuali...",
        optionA: "a. Bak equalisasi",
        optionB: "b. Bak pengendapan",
        optionC: "c. Bak pendinginan",
        optionD: "d. Bak anaerob",
        correctOption: "optionC"
    },

    {
        question: "Tumbuhan pengganggu yang tumbuh subur pada air yang tercemar adalah...",
        optionA: "a. Teratai",
        optionB: "b. Kangkung",
        optionC: "c. Enceng gondok",
        optionD: "d. Talas",
        correctOption: "optionC"
    },

    {
        question: "Mengolah limbah cair produksi batik merupakan kewajiban...",
        optionA: "a. Pengusaha batik",
        optionB: "b. Karang taruna",
        optionC: "c. Pelajar sekolah",
        optionD: "d. Tentara",
        correctOption: "optionA"
    },

    {
        question: "Berikut adalah manfaat sampah kecuali...",
        optionA: "a. Dapat di olah menjadi kompos",
        optionB: "b. Dapat di olah menjadi barang yang lebih bernilai",
        optionC: "c. Menimbulkan bau dan penyakit",
        optionD: "d. Dapat di olah menjadi kerajinan",
        correctOption: "optionC"
    },

    {
        question: "Berikut adalah contoh sampah organik yaitu...",
        optionA: "a. Kardus",
        optionB: "b. Kulit buah",
        optionC: "c. Plastik",
        optionD: "d. Kertas",
        correctOption: "optionB"
    },

    {
        question: "Fungsi taman kota adalah sebagai berikut...",
        optionA: "a. Penghasil O²",
        optionB: "b. Ruang publik untuk aktivitas positif warga",
        optionC: "c. Paru-paru kota",
        optionD: "d. Semua benar",
        correctOption: "optionD"
    },

    {
        question: "Menteri Lingkungan Hidup dan Kehutanan RI masa Kabinet Kerja Pemerintahan Presiden Ir. Joko Widodo saat ini adalah...",
        optionA: "a. Prof. Dr. Gusti Muhammad Hatta",
        optionB: "b. Prof. Dr. Emil Salim",
        optionC: "c. Dr. Ir. Siti Nurbaya Bakar, M.Sc",
        optionD: "d. Dr. Baltasar Kambuaya",
        correctOption: "optionC"
    },

    {
        question: "Kesatuan ruang dengan semua benda, daya, keadaan, dan makhluk hidup, termasuk manusia dan perilakunya, yang mempengaruhi alam itu sendiri, kelangsungan perikehidupan, dan kesejahteraan manusia serta makhluk hidup lain disebut dengan...",
        optionA: "a. Ekosistem",
        optionB: "b. Ekologi",
        optionC: "c. Lingkungan hidup",
        optionD: "d. Tata lingkungan",
        correctOption: "optionC"
    },

    {
        question: "Sisa suatu usaha dan/atau kegiatan adalah...",
        optionA: "a. Sampah",
        optionB: "b. Limbah",
        optionC: "c. Polusi",
        optionD: "d. Polutan",
        correctOption: "optionB"
    },

    {
        question: "Undang-undang tentang Perlindungan dan Pengelolaan Lingkungan hidup adalah...",
        optionA: "a. UU Nomor 23 tahun 2004",
        optionB: "b. UU Nomor 22 tahun 2007",
        optionC: "c. UU Nomor 40 tahun 2007",
        optionD: "d. UU Nomor 32 tahun 2009",
        correctOption: "optionD"
    },

    {
        question: "Limbah dibawah ini adalah yang termasuk limbah B3, kecuali :",
        optionA: "a. Limbah dari cair dari rumah makan",
        optionB: "b. Accu bekas",
        optionC: "c. Sisa pembakaran batu bara",
        optionD: "d. Baterai bekas",
        correctOption: "optionA"
    },

    /*add new question*/

    {
        question: "Dalam prinsip 3R, Reduce memiliki arti...",
        optionA: "a. menggunakan ulang sampah",
        optionB: "b. mendaur ulang sampah",
        optionC: "c. mengurangi penggunaan sampah",
        optionD: "d. mengurai sampah",
        correctOption: "optionC"
    },

    {
        question: "Menggunakan ulang sampah yang masih bisa digunakan merupakan salah satu dari prinsip 3R, yaitu...",
        optionA: "a. Reduce",
        optionB: "b. Reuse",
        optionC: "c. Recylce",
        optionD: "d. Replace",
        correctOption: "optionB"
    },

    {
        question: "Dalam prinsip 3R, Reuse memiliki arti...",
        optionA: "a. menggunakan ulang sampah",
        optionB: "b. mendaur ulang sampah",
        optionC: "c. mengurangi penggunaan sampah",
        optionD: "d. mengurai sampah",
        correctOption: "optionA"
    },

    {
        question: "Dalam prinsip 3R, Recycle memiliki arti...",
        optionA: "a. menggunakan ulang sampah",
        optionB: "b. mendaur ulang sampah",
        optionC: "c. mengurangi penggunaan sampah",
        optionD: "d. mengurai sampah",
        correctOption: "optionB"
    },

    {
        question: "Mengolah sampah plastik menjadi Paving Block merupakan contoh penerapan dari prinsip...",
        optionA: "a. Reduce",
        optionB: "b. Reuse",
        optionC: "c. Recylce",
        optionD: "d. Replace",
        correctOption: "optionD"
    },

    {
        question: "Membawa tas belanja sendiri untuk menampung barang belanja adalah salah satu contoh dari prinsip... ",
        optionA: "a. Reduce",
        optionB: "b. Reuse",
        optionC: "c. Recylce",
        optionD: "d. Replace",
        correctOption: "optionA"
    },

    {
        question: "Yang merupakan prinsip 3R adalah...",
        optionA: "a. Reduce, Reuse, Replace",
        optionB: "b. Reuse, Reduce, Rechoose",
        optionC: "c. Recycle, Reuse, Rebonding",
        optionD: "d. Reduce, Reuse, Recycle",
        correctOption: "optionD"
    },

    {
        question: 'Semangat 3R yang diwujudkan dalam gerakan Jateng Gayeng "Telung NG" adalah...',
        optionA: "a. Ngelongi, Ngolah, lan Ngganti",
        optionB: "b. Ngolah, Nganggo, lan Ngumbah",
        optionC: "c. Ngelongi, Nganggo, lan Ngolah",
        optionD: "d. Nganggo, Ngubur, lan Ngolah",
        correctOption: "optionC"
    },

    {
        question: "TPA di Kota Pekalongan berada di Kelurahan...",
        optionA: "a. Krapyak",
        optionB: "b. Degayu",
        optionC: "c. Jenggot",
        optionD: "d. Bandengan",
        correctOption: "optionB"
    },

    {
        question: "Di bawah ini yang bukan merupakan sampah anorganik adalah...",
        optionA: "a. botol kaca",
        optionB: "b. plasik bekas shampo",
        optionC: "c. daun bungkus nasi pecel",
        optionD: "d. kardus",
        correctOption: "optionC"
    },

    {
        question: "Di bawah ini adalah alasan tidak boleh membuang sampah di sungai, kecuali...",
        optionA: "a. menyebabkan banjir",
        optionB: "b. merusak ekosistem",
        optionC: "c. menimbulkan masalah kesehatan bagi manusia",
        optionD: "d. lebih praktis",
        correctOption: "optionD"
    },

    {
        question: "Apa yang akan terjadi saat styrofoam dimusnahkan dengan cara dibakar?",
        optionA: "a. merusak lapisan ozon",
        optionB: "b. membuat udara lebih segar",
        optionC: "c. mengusir hama",
        optionD: "d. menjadikan tanah lebih subur",
        correctOption: "optionA"
    },

    {
        question: "Hari Lingkungan Hidup Sedunia diperingati setiap tanggal...",
        optionA: "a. 5 Juni",
        optionB: "b. 6 Juni",
        optionC: "c. 7 Juni",
        optionD: "d. 8 Juni",
        correctOption: "optionA"
    },

    {
        question: "Hari Peduli Sampah Nasional diperingati setiap tanggal...",
        optionA: "a. 20 Februari",
        optionB: "b. 21 Februari",
        optionC: "c. 22 Februari",
        optionD: "d. 23 Februari",
        correctOption: "optionB"
    },

    {
        question: "Setiap tanggal 5 November diperingati sebagai hari...",
        optionA: "a. Hari Lingkungan Hidup Sedunia",
        optionB: "b. Hari Peduli Sampah Nasional",
        optionC: "c. Hari Menanam Pohon Indonesia dan Bulan Menanam Nasional",
        optionD: "d. Cipta Puspa dan Satwa Nasional",
        correctOption: "optionD"
    },

    {
        question: "Hari Menanam Pohon Indonesia dan Bulan Menanam Nasional jatuh pada tanggal...",
        optionA: "a. 26 November",
        optionB: "b. 27 November",
        optionC: "c. 28 November",
        optionD: "d. 29 November",
        correctOption: "optionC"
    },

    {
        question: "Sampah organik dapat digunakan sebagai...",
        optionA: "a. bahan bakar",
        optionB: "b. racun",
        optionC: "c. pupuk alami",
        optionD: "d. pengusir hama",
        correctOption: "optionC"
    },

    {
        question: "Di bawah ini merupakan cara pemanfaatan sampah yang baik dan benar,kecuali...",
        optionA: "a. reduce",
        optionB: "b. replace",
        optionC: "c. recycle",
        optionD: "d. reuse",
        correctOption: "optionB"
    },

    {
        question: "Kegiatan pemilahan sampah yang pertama kali, dapat dilakukan pada...",
        optionA: "a. Tempat Pembuangan Akhir (TPA)",
        optionB: "b. Tempat Penampungan Sementara (TPS)",
        optionC: "c. Sumber Sampah",
        optionD: "d. Pengangkutan Sampah",
        correctOption: "optionC"
    },

    {
        question: "Masuknya atau dimasukkannya makhluk hidup, zat, energi atau komponen lain kedalam lingkungan hidup oleh kegiatan manusia sehingga menyebabkan turunnya kualitas lingkungan disebut...",
        optionA: "a. Pencemaran lingkungan",
        optionB: "b. Polusi",
        optionC: "c. Polutan",
        optionD: "d. Pemanasan global",
        correctOption: "optionA"
    },

    {
        question: "Suatu zat yang dapat mencemari lingkungan dan dapat mengganggu kelangsungan hidup makhluk hidup disebut...",
        optionA: "a. Polusi",
        optionB: "b. Polutan",
        optionC: "c. Pencemaran",
        optionD: "d. Sampah",
        correctOption: "optionB"
    },

    {
        question: "Botol sirup bekas yang digunakan lagi untuk menyimpan air minum merupakan contoh...",
        optionA: "a. Recycle",
        optionB: "b. Reuse",
        optionC: "c. Reduce",
        optionD: "d. Repair",
        correctOption: "optionB"
    },

    {
        question: "Zat yang dapat menyebabkan rusaknya lapisan ozon adalah...",
        optionA: "a. CO2",
        optionB: "b. CO",
        optionC: "c. N2O",
        optionD: "d. CFC",
        correctOption: "optionD"
    }

]