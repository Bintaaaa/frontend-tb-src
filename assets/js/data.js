const sliderData = [
  {
    id: 1,
    year: 2020,
    text: "Tanpabatas dimulai dengan adanya keresahan yang dirasakan 2 orang mahasiswa yang sedang kebingungan mencari uang tambahan untuk kehidupan selama merantau dengan tujuan kuliah.",
    img: "../assets/img/pplwithlaptop.png",
  },
  {
    id: 2,
    year: 2020,
    text: `Suatu hari laptop kami mengalami kendala, tidak bisa meng install software untuk kegiatan perkuliahan, mau tidak mau harus upgrade OS dari 32 bit ke 64 bit. Karena belum mengerti cara instalasi OS kami pun meminta tolong teman kami , Setelah proses instalasi os selesai, bukannya menyelesaikan masalah tetapi laptop kami malah mendapat masalah yang lebih serius, yaitu lemot.`,
    img: "../assets/img/guywithfile.png",
  },
  {
    id: 3,
    year: 2020,
    text: `Karena posisinya sedang ada dirumah bukan dikosan, kami mencoba untuk melakukan instalasi OS sendiri, beberapa kali mengalami kegagalan saat proses instalasi OS, tetapi kegagalan tersebut tidak membuat kami menyerah kami terus melakukan trial and error, hingga pada akhirnya proses instalasi OS pun berhasil, walaupun menghabiskan waktu yang cukup lama.`,
    img: "../assets/img/error404slider.png",
  },
  {
    id: 4,
    year: 2020,
    text: `Keberhasilan tersebut sangat berkesan dihati, tidak lama terlintas dipikiran instalasi OS bisa menjadi sebuah peluang usaha, dan masih ada hubungan dengan jurusan yang sedang ditempuh di perkuliahan, jadi kami putuskan  untuk membuat usaha dibidang jasa reparasi dengan nama “Tanpabatas” dengan harapan kedepannya bisa menyediakan jasa yang lebih banyak lagi terkait dunia teknologi dan memperbanyak cabang di seluruh indonesia serta tidak menutup kemungkinan hingga keluar negeri. “Tiada batasan yang tidak bisa kami dobrak”`,
    img: "../assets/img/slidersuccess.png",
  },
  {
    id: 5,
    year: 2020,
    text: `Berjalan selama 3 bulan tanpabatas belum memiliki kantor pusat, perlengkapan pun masih seadanya, karena memang usaha ini berjalan tanpa modal sama sekali, hanya keinginan dan usaha untuk membantu orangtua serta untuk jajan sehari-hari. Di bulan ke 4 kami mendapatkan partner kerja, yang memang masih teman 1 kosan, kami mencoba untuk merayu bergabung dengan tim tanpabatas, tidak lama tawaran kami pun diterima dan kebetulannya partner baru kami memiliki lahan yang cukup untuk dijadikan kantor pertama Tanpabatas.`,
    img: "../assets/img/community.png",
  },
  {
    id: 6,
    year: 2021,
    text: `1 tahun kemudian setelah memiliki kantor dan beberapa perlengkapan yang sudah upgrade, kami mulai kedatangan pelanggang yang cukup ramai, entah dari instagram ataupun google maps. Perusahaan hingga hotel pun mulai menghubungi kami. Sejak Tanpabatas mulai ramai dikenal, kami pun berencana untuk memperluas pasar yang kami punya, tidak hanya servis laptop/PC saja kami mulai berani untuk membuka jasa pembuatan website, jasa pembuatan aplikasi mobile dan design grafis dengan skill kami yang pada saat itu masih basic.`,
    img: "../assets/img/onlinereview.png",
  },
  {
    id: 7,
    year: 2022,
    text: `Berjalan 2 tahun Tanpabatas mengalami beberapa perubahan dan peningkatan dari struktur organisasi, hingga sistem pendataan pelanggan. Dikarenakan kami sudah memiliki website dan berlangganan hosting serta domain kami membuat website database untuk pendataan pelanggan dan website utama untuk media promosi serta fitur fitur yang berguna bagi pelanggan. Peningkatan yang terjadi bukan hanya pada sistem saja, tetapi kualitas diri dari tiap tiap individu yang ada di tim tanpabatas, semua orang yang ada di tim Tanpabatas mengikuti program dari pemerintah yang bernama Kampus Merdeka, tujuannya adalah untuk mengasah skill dan mendapat sertifikasi.`,
    img: "../assets/img/slidergrup.png",
  },
];


const employeeData = [
  {
    id: 1,
    name: 'Edwin Hardianto',
    img: "../assets/img/edmin.png",
    role:"UI/UX Designer",
    desc: "Mahasiswa Universitas Singaperbangsa Kawarang yang menekuni bidang UI/UX Designer",
    ig: "#",
    fb: "#",
    ld: "#"
  },
  {
    id: 2,
    name: 'Edward Yazid Mahhendra',
    img: "../assets/img/edward.png",
    role:  "UI/UX Designer",
    desc: "Mahasiswa Universitas Singaperbangsa Kawarang",
    ig: "#",
    fb: "#",
    ld: "#"
  },
  {
    id: 3,
    name: 'Mohammad Bukhori',
    img: "../assets/img/bukhori.png",
    role:  "UI/UX Designer",
    desc: "Mahasiswa Universitas Singaperbangsa Kawarang",
    ig: "#",
    fb: "#",
    ld: "#"
  },
  {
    id: 4,
    name: 'Arif Khaerunas',
    img: "../assets/img/arip.png",
    role:  "Front-End",
    desc: "Mahasiswa Universitas Singaperbangsa Kawarang yang menekuni bidang UI/UX Designer",
    ig: "#",
    fb: "#",
    ld: "#"
  },
  {
    id: 4,
    name: 'Abimanyu Satria',
    img: "../assets/img/bimbim.png",
    role:  "FullStack",
    desc: "Sahrul Hayato sedboi professional :(",
    ig: "#",
    fb: "#",
    ld: "#"
  },
  {
    id: 4,
    name: 'Farahim',
    img: "../assets/img/ahim.png",
    role:  "Fullstack",
    desc: "Mahasiswa Universitas Singaperbangsa Kawarang yang menekuni bidang UI/UX Designer",
    ig: "#",
    fb: "#",
    ld: "#"
  },

];

const cardData = [

  {
    id: 1,
    title: "Jasa Reparasi Laptop",
    img: "../assets/img/laptopt.png",
    color: "#7CCC6C",
  },
  {
    id: 2,
    title: "Jasa Pembuatan Website",
    img: "../assets/img/com.png",
    color: "#FF808B",
  },
  {
    id: 3,
    title: "Jasa Pembuatan Desain",
    img: "../assets/img/paint.png",
    color: "#FF8F1C",
  },
  {
    id: 4,
    title: "Jasa Pembuatan Aplikasi Mobile",
    img: "../assets/img/hpo.png",
    color: "#664EFF",
  },

]

export { sliderData, employeeData, cardData };
