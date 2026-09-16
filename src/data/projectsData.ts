import { ProjectItem } from "../types";
import jamalPosThumb from "../assets/images/regenerated_image_1788951612712.png";
import jamalpos0 from "../assets/images/jamalpos_0.png";
import jamalpos1 from "../assets/images/jamalpos_1.png";

// --- Replace this section at the top ---
import reedThumb from "../assets/images/regenerated_image_1788951615428.png";
import reedSlide1 from "../assets/images/r1.png";
import reedSlide2 from "../assets/images/r2.png";
import reedSlide3 from "../assets/images/r3.png";
import reedSlide4 from "../assets/images/r4.png";
import reedSlide5 from "../assets/images/r5.png";
import reedSlide6 from "../assets/images/r6.png";
import reedSlide7 from "../assets/images/r7.png";

import festika8Thumb from "../assets/images/regenerated_image_1788951617990.png";

import hrisThumb from "../assets/images/regenerated_image_1788951619931.png";
import jw1 from "../assets/images/jw1.png";
import jw2 from "../assets/images/jw2.png";
import jw3 from "../assets/images/jw3.png";
import jw4 from "../assets/images/jw4.png";
import jw5 from "../assets/images/jw5.png";
import jw6 from "../assets/images/jw6.png";
import jw7 from "../assets/images/jw7.png";
import jw8 from "../assets/images/jw8.png";
import jw9 from "../assets/images/jw9.png";
import jw10 from "../assets/images/jw10.png";
import jw11 from "../assets/images/jw11.png";

import echoThumb from "../assets/images/regenerated_image_1788951623306.png";
import echo0 from "../assets/images/echo_0.png";
import echo1 from "../assets/images/echo_1.png";

import lernaThumb from "../assets/images/regenerated_image_1788953630200.png";
import lerna1 from "../assets/images/1.png";
import lerna2 from "../assets/images/2.png";
import lerna3 from "../assets/images/3.png";
import lerna4 from "../assets/images/4.png";
import lerna5 from "../assets/images/5.png";
import lerna6 from "../assets/images/6.png";
import lerna7 from "../assets/images/7.png";
import lerna8 from "../assets/images/8.png";
import lerna9 from "../assets/images/9.png";
import lerna10 from "../assets/images/10.png";
import lerna11 from "../assets/images/11.png";
import lerna12 from "../assets/images/12.png";

import jourmalismStarting from "../assets/images/starting.jpg";
import jourmalismLogin from "../assets/images/login.jpg";
import jourmalismHomepage from "../assets/images/homepage.jpg";
import jourmalismHabits from "../assets/images/Habits.jpg";
import jourmalismAddedHabits from "../assets/images/AddedHabits.jpg";
import jourmalismFinishedHabits from "../assets/images/Finished Habits.jpg";
import jourmalismLeaderboard from "../assets/images/Leaderboard.jpg";
import jourmalismFriends from "../assets/images/friends.jpg";
import jourmalismAccountSettings from "../assets/images/AccountSettings.jpg";
import jourmalismDarkHomepage from "../assets/images/homepage(dark).jpg";

import buhilmi1 from "../assets/images/buhilmi/1.jpg";
import buhilmi2 from "../assets/images/buhilmi/2.jpg";
import buhilmi3 from "../assets/images/buhilmi/3.jpg";
import buhilmi4 from "../assets/images/buhilmi/4.jpg";
import buhilmi5 from "../assets/images/buhilmi/5.jpg";
import buhilmi6 from "../assets/images/buhilmi/6.jpg";
import buhilmi7 from "../assets/images/buhilmi/7.jpg";
import buhilmi8 from "../assets/images/buhilmi/8.jpg";

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    slug: "jamalpos",
    title: "JamalPOS",
    subtitle: "Point of Sale (POS) dan Inventory Management System",
    category: "ui-ux",
    categoryLabel: "Point of Sale & Inventory",
    year: "2025",
    client: "Retail & F&B Operations",
    role: "Lead Product Designer & System Architect",
    tools: ["Figma", "React 19", "Tailwind CSS", "TypeScript"],
    accentColor: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.35)",
    thumbnail: jamalPosThumb,
    heroImage: jamalPosThumb,
    overview:
      "JamalPOS merupakan proyek Point of Sale (POS) dan Inventory Management System yang dirancang untuk membantu bisnis retail atau F&B dalam mengelola transaksi penjualan sekaligus persediaan barang. Sistem ini menyediakan fitur kasir seperti pencarian produk, keranjang transaksi, held order, serta metode pembayaran cash, QRIS, dan debit.",
    challenge:
      "Selain itu, JamalPOS memiliki fitur manajemen inventori untuk mengelola produk, stok, supplier, wastage, dan penyesuaian stok, serta dashboard analitik untuk memantau revenue, margin, tren penjualan, produk terlaris, dan deadstock.",
    solution:
      "Sistem juga menerapkan pembagian akses antara Cashier dan Manager/Owner serta menyediakan audit log untuk mencatat aktivitas pengguna. Secara keseluruhan, JamalPOS dibuat sebagai portfolio project yang mensimulasikan sistem kasir terintegrasi dengan manajemen inventori dan analitik bisnis.",
    highlights: [
      "Fitur Kasir: Pencarian produk instan, keranjang transaksi, held order, dan pembayaran (Cash, QRIS, Debit)",
      "Manajemen Inventori: Produk, stok real-time, supplier, wastage, dan penyesuaian stok otomatis",
      "Dashboard Analitik: Revenue, margin, tren penjualan harian/mingguan, produk terlaris, & deadstock",
      "Role-Based Access: Pembagian hak akses antara Cashier dan Manager/Owner serta audit logging",
    ],
    metrics: [
      { label: "Latency", value: "< 1s" },
      { label: "Audit Log", value: "100% Real-time" },
      { label: "Payment", value: "Cash, QRIS, Debit" },
      { label: "Roles", value: "Cashier & Owner" },
    ],
    gallery: [
      {
        id: "p1-m1",
        url: jamalpos0,
        caption:
          "JamalPOS Cashier Till Terminal — Orders, product categories, & payment methods",
        type: "ui-screen",
      },
      {
        id: "p1-m2",
        url: jamalpos1,
        caption:
          "JamalPOS Stock & Till Synchronizer — Unified inventory and checkout source of truth",
        type: "ui-screen",
      },
      {
        id: "p1-m3",
        url: jamalPosThumb,
        caption: "JamalPOS Complete Dual-Screen Presentation Banner",
        type: "ui-screen",
      },
      {
        id: "p1-m4",
        url: jamalpos0, // Slide 4: Replace with your own screenshot url/import
        caption: "JamalPOS Inventory Management & Stock Replenishment View",
        type: "ui-screen",
      },
      {
        id: "p1-m5",
        url: jamalpos1, // Slide 5: Replace with your own screenshot url/import
        caption: "JamalPOS Sales Margin & Revenue Analytics Dashboard",
        type: "ui-screen",
      },
      {
        id: "p1-m6",
        url: jamalPosThumb, // Slide 6: Replace with your own screenshot url/import
        caption: "JamalPOS Cashier Shift Audit Log & Role-Based Security",
        type: "ui-screen",
      },
    ],
    liveUrl: "https://pussystem.vercel.app/pos.html",
    demoUrl: "https://pussystem.vercel.app/pos.html",
    figmaUrl:
      "https://www.figma.com/design/JpinXvxESSyI09QjfpUB0e/jamalism?node-id=894-1015",
    hasInteractiveDemo: true,
  },
  {
    id: "p2",
    slug: "reed",
    title: "REED",
    subtitle: "Web Platform to Read Manga, Manhwa and community.",
    category: "ui-ux",
    categoryLabel: "Manga & Comic Platform",
    year: "2025",
    client: "Digital Publishing & Community",
    role: "UI/UX Designer & Frontend Developer",
    tools: ["Figma", "React", "Tailwind CSS", "Web Reader API"],
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.35)",
    thumbnail: reedThumb,
    heroImage: reedThumb,
    overview:
      "REED adalah sebuah prototipe platform untuk membaca manga secara digital. Situs web ini dirancang agar pengguna dapat menjelajahi berbagai katalog judul manga, mencari seri tertentu, menyaring daftar bacaan berdasarkan genre, dan membaca setiap bab secara langsung melalui antarmuka pembaca web khusus.",
    challenge:
      "Selain fitur utama membaca dan melihat detail katalog, situs ini juga dilengkapi dengan forum komunitas interaktif di mana pengguna dapat berbagi rekomendasi bacaan, berdiskusi, serta menyukai atau menyimpan kiriman dari pembaca lain.",
    solution:
      "Untuk pengalaman membaca yang lebih terorganisir, platform ini menyediakan sistem akun pengguna untuk mengatur biodata profil, menyimpan koleksi manga favorit ke dalam daftar bookmark, serta menawarkan halaman khusus untuk langganan keanggotaan premium yang memberikan akses fitur eksklusif seperti membaca tanpa iklan, pengunduhan mode luring (offline), dan akses bab lebih awal.",
    highlights: [
      "Katalog Manga Komprehensif: Jelajahi seri populer, pencarian cepat, dan filter multi-genre",
      "Antarmuka Pembaca Web Khusus: Pengalaman membaca vertikal & horizontal tanpa distraksi",
      "Forum Komunitas Interaktif: Bagikan rekomendasi bacaan, diskusi chapter, & interaksi suka/simpan",
      "Akun & Keanggotaan Premium: Bookmark koleksi favorit, baca bebas iklan, & download offline",
    ],
    metrics: [
      { label: "Interface", value: "Reader Optimized" },
      { label: "Catalog Filter", value: "Multi-Genre" },
      { label: "Community", value: "Forums & Reviews" },
      { label: "Mode", value: "Offline & Premium" },
    ],
    gallery: [
      {
        id: "p2-m1",
        url: reedSlide1,
        caption: "REED Welcome Back Modal & Reader Authentication Interface",
        type: "ui-screen",
      },
      {
        id: "p2-m2",
        url: reedSlide2,
        caption:
          "REED Manga Catalog & Trending Reader Dashboard (ORV Chapter 12)",
        type: "ui-screen",
      },
      {
        id: "p2-m3",
        url: reedSlide3,
        caption: "REED Complete Digital Manga Platform Showcase",
        type: "ui-screen",
      },
      {
        id: "p2-m4",
        url: reedSlide4,
        caption: "REED Web Reader Interface — Vertical Webtoon Scroll Mode",
        type: "ui-screen",
      },
      {
        id: "p2-m5",
        url: reedSlide5,
        caption: "REED Community Discussion Forum & Reader Review Feed",
        type: "ui-screen",
      },
      {
        id: "p2-m6",
        url: reedSlide6,
        caption: "REED User Profile & Bookmarked Manga Library Collections",
        type: "ui-screen",
      },
      {
        id: "p2-m7",
        url: reedSlide7,
        caption: "REED Premium Membership & Offline Reading Experience",
        type: "ui-screen",
      },
    ],
    liveUrl: "https://reedbyjamalism.vercel.app",
    demoUrl: "https://reedbyjamalism.vercel.app",
    figmaUrl:
      "https://www.figma.com/design/JpinXvxESSyI09QjfpUB0e/jamalism?node-id=894-1015",
    hasInteractiveDemo: true,
  },
  {
    id: "p3",
    slug: "festika-8",
    title: "Festika 8",
    subtitle: "Creative Team Coordinator a Technology Festival.",
    category: "3d-art",
    categoryLabel: "Festival Creative Direction & Branding",
    year: "2024",
    client: "Festika Mahasiswa University",
    role: "Creative Leader & Graphic Designer",
    tools: ["Figma", "Illustrator", "Blender", "Photoshop"],
    accentColor: "#991B1B",
    glowColor: "rgba(153, 27, 27, 0.35)",
    thumbnail: festika8Thumb,
    heroImage: festika8Thumb,
    overview:
      "Festika 8 (Festival Teknologi, Inovasi, Kesenian, dan Olahraga) merupakan kegiatan mahasiswa yang menggabungkan berbagai bidang, mulai dari teknologi, inovasi, seni, hingga olahraga dalam satu rangkaian acara. Kegiatan ini menjadi wadah bagi mahasiswa untuk mengembangkan kreativitas, menunjukkan kemampuan, serta membangun kolaborasi dan kebersamaan antarmahasiswa.",
    challenge:
      "Dalam Festika 8, saya berperan sebagai Creative Leader yang bertanggung jawab dalam mengarahkan tim kreatif, mengembangkan konsep visual dan kebutuhan desain acara, serta memastikan seluruh materi kreatif memiliki identitas visual yang konsisten dan sesuai dengan konsep kegiatan.",
    solution:
      "Peran ini juga melibatkan koordinasi dengan divisi lain untuk memastikan kebutuhan visual dan publikasi dapat mendukung keseluruhan pelaksanaan acara, mulai dari maskot robotik, emblem roset geometris merah, hingga media cetak dan digital.",
    highlights: [
      "Peran Creative Leader: Memimpin tim kreatif dan perancangan brand guideline festival",
      "Konsep Identitas Visual: Merancang logo geometris roset merah khas Festika 8",
      "Maskot Robot Interaktif: Desain karakter maskot putih-merah dengan propulsi jet",
      "Materi Publikasi Menyeluruh: Desain feed media sosial, umbul-umbul, id-card, dan backdrop panggung",
    ],
    metrics: [
      { label: "Role", value: "Creative Leader" },
      { label: "Scope", value: "End-to-End Festival" },
      { label: "Team", value: "Multi-Division Lead" },
      { label: "Output", value: "Print & Digital Assets" },
    ],
    gallery: [
      {
        id: "p3-m1",
        url: festika8Thumb,
        caption:
          "Festika 8 Official Festival Poster & Red Geometrical Rosette Emblem",
        type: "render",
      },
      {
        id: "p3-m2",
        url: festika8Thumb, // Slide 2: Replace with your own screenshot url/import
        caption:
          "Festika 8 Robotic Mascot Character Sheet & Jet Propulsion Art",
        type: "render",
      },
      {
        id: "p3-m3",
        url: festika8Thumb, // Slide 3: Replace with your own screenshot url/import
        caption: "Festika 8 Event Stage Backdrop & Merchandise Identity",
        type: "render",
      },
      {
        id: "p3-m4",
        url: festika8Thumb, // Slide 4: Replace with your own screenshot url/import
        caption: "Festika 8 Social Media Feeds & Promotional Banner Suite",
        type: "render",
      },
    ],
    liveUrl: "https://instagram.com/mr_jamaaal",
    figmaUrl:
      "https://www.figma.com/design/JpinXvxESSyI09QjfpUB0e/jamalism?node-id=894-1015",
    hasInteractiveDemo: false,
  },
  {
    id: "p4",
    slug: "jamal-worshipper-hris",
    title: "Jamal Worshipper (HRIS)",
    subtitle:
      "Human Resources Information System (Attendance, Leave & Payroll)",
    category: "ui-ux",
    categoryLabel: "HRIS Enterprise Platform",
    year: "2024",
    client: "Internal Enterprise Operations",
    role: "Product Designer & Frontend Engineer",
    tools: ["Figma", "React", "Tailwind CSS", "TypeScript"],
    accentColor: "#38BDF8",
    glowColor: "rgba(56, 189, 248, 0.35)",
    thumbnail: hrisThumb,
    heroImage: hrisThumb,
    overview:
      "Jamal HRIS (Jamal Worshipper) merupakan sistem Human Resources Information System yang dirancang untuk membantu perusahaan mengelola kebutuhan administrasi karyawan secara terintegrasi. Sistem ini berfokus pada tiga kebutuhan utama, yaitu attendance, leave, dan payroll, sehingga dapat mengurangi ketergantungan pada pencatatan spreadsheet dan mempermudah pengelolaan data karyawan.",
    challenge:
      "Aplikasi dilengkapi dengan sistem login dan role-based access untuk membedakan akses pengguna sesuai perannya, seperti Admin, Frontend, Backend, Finance, Customer Success, dan QA Engineer.",
    solution:
      "Secara keseluruhan, Jamal HRIS merupakan prototype sistem HR yang mensimulasikan pengelolaan informasi dan aktivitas karyawan dalam satu platform yang intuitif dengan sentuhan visual ceria.",
    highlights: [
      "Tiga Modul Utama: Manajemen presensi (attendance), pengajuan cuti (leave), dan penggajian (payroll)",
      "Role-Based Access Control: Hak akses spesifik untuk Admin, Frontend, Backend, Finance, CS, dan QA",
      "Dashboard Analitik: Visualisasi kehadiran harian (0/6 present), monitoring keterlambatan, & pembagian divisi",
      "Pengurangan Spreadsheet: Otomasi alur persetujuan cuti dan rekapitulasi data absensi terpusat",
    ],
    metrics: [
      { label: "Core Focus", value: "Attendance & Payroll" },
      { label: "Role Access", value: "6 Divisions" },
      { label: "Platform", value: "Centralized Web" },
      { label: "Architecture", value: "Modular System" },
    ],
    gallery: [
      {
        id: "p4-m1",
        url: jw1,
        caption: "Jamal HRIS Cat Meme Authentication & Access Portal",
        type: "ui-screen",
      },
      {
        id: "p4-m2",
        url: jw2,
        caption:
          "Jamal HRIS Integrated Analytics Dashboard (Attendance, Leave & Payroll)",
        type: "ui-screen",
      },
      {
        id: "p4-m3",
        url: jw3,
        caption: "Jamal HRIS Complete Dual-Screen Presentation Banner",
        type: "ui-screen",
      },
      {
        id: "p4-m4",
        url: jw4,
        caption: "Jamal HRIS Employee Attendance Tracking & Clock-in Timeline",
        type: "ui-screen",
      },
      {
        id: "p4-m5",
        url: jw5,
        caption:
          "Jamal HRIS Leave Request Approval Workflow & Quota Monitoring",
        type: "ui-screen",
      },
      {
        id: "p4-m6",
        url: jw6,
        caption:
          "Jamal HRIS Payroll Salary Engine & Automated Deduction Breakdown",
        type: "ui-screen",
      },
      {
        id: "p4-m7",
        url: jw7,
        caption:
          "Jamal HRIS Department Organizational Chart & 6 Division Roles",
        type: "ui-screen",
      },
      {
        id: "p4-m8",
        url: jw8,
        caption: "Jamal HRIS Overtime Logs & Remote Work Approval Terminal",
        type: "ui-screen",
      },
      {
        id: "p4-m9",
        url: jw9,
        caption: "Jamal HRIS Employee Profile Dossier & Employment Contracts",
        type: "ui-screen",
      },
      {
        id: "p4-m10",
        url: jw10,
        caption: "Jamal HRIS System Audit Logs & Security Access Telemetry",
        type: "ui-screen",
      },
      {
        id: "p4-m11",
        url: jw11,
        caption: "Jamal HRIS Mobile Responsive Layout & Self-Service Portal",
        type: "ui-screen",
      },
    ],
    liveUrl: "https://jamal-worshipper.vercel.app/employee-dashboard.html",
    demoUrl: "https://jamal-worshipper.vercel.app/employee-dashboard.html",
    figmaUrl:
      "https://www.figma.com/design/JpinXvxESSyI09QjfpUB0e/jamalism?node-id=894-1015",
    hasInteractiveDemo: true,
  },
  {
    id: "p5",
    slug: "echo-of-the-hollow",
    title: "Echo of the Hollow",
    subtitle: "2D Dark Fantasy Adventure Game & Bengi Character Design",
    category: "3d-art",
    categoryLabel: "Game Design & Character Art",
    year: "2024",
    client: "Festika 7 Creative Division",
    role: "Graphic Designer & Character Artist",
    tools: ["Pixel Art", "Illustrator", "Photoshop", "Unity 2D"],
    accentColor: "#DC2626",
    glowColor: "rgba(220, 38, 38, 0.35)",
    thumbnail: echoThumb,
    heroImage: echoThumb,
    overview:
      "Festika 7 (Festival Teknologi, Inovasi, Kesenian, dan Olahraga) merupakan kegiatan mahasiswa yang menggabungkan berbagai bidang, mulai dari teknologi, inovasi, seni, hingga olahraga dalam satu rangkaian acara. Kegiatan ini menjadi wadah bagi mahasiswa untuk mengembangkan kreativitas, menunjukkan kemampuan, serta membangun kolaborasi dan kebersamaan antarmahasiswa.",
    challenge:
      "Dalam Festika 7, saya berperan sebagai anggota Sie Graphic Design yang bertanggung jawab dalam membuat dan mengembangkan berbagai kebutuhan desain visual acara, seperti materi publikasi, media sosial, serta aset grafis lainnya.",
    solution:
      'Peran ini juga melibatkan kolaborasi dengan anggota tim kreatif dan divisi terkait untuk memastikan setiap materi visual sesuai dengan konsep dan identitas Festika 7, termasuk pengembangan karakter ikonik "Bengi" dan demo game atmosferik 2D "Echo of the Hollow".',
    highlights: [
      "Karakter Utama Bengi: Karakter bertanduk misterius dengan siluet gelap dan jubah merah ikonik",
      "Demo Game 2D: Rancang visual dungeon retro dengan pencahayaan obor merah atmosferik",
      "Sie Graphic Design: Kolaborasi intensif merancang aset grafis dan media promosi acara",
      "Identitas Visual Tematik: Memadukan tema dark fantasy petualangan dengan estetika festival",
    ],
    metrics: [
      { label: "Role", value: "Graphic Design" },
      { label: "Main Character", value: "Bengi" },
      { label: "Game Style", value: "2D Dark Fantasy" },
      { label: "Event", value: "Festika 7" },
    ],
    gallery: [
      {
        id: "p5-m1",
        url: echo0,
        caption: "Bengi Character Design & Adventurer Visual Sheet",
        type: "render",
      },
      {
        id: "p5-m2",
        url: echo1,
        caption: "Echo of the Hollow 2D Pixel Dungeon Gate & Torchlit Scene",
        type: "ui-screen",
      },
      {
        id: "p5-m3",
        url: echoThumb,
        caption: "Festika 7 Sie Graphic Design Visual Showcase",
        type: "render",
      },
    ],
    liveUrl: "https://instagram.com/mr_jamaaal",
    figmaUrl:
      "https://www.figma.com/design/JpinXvxESSyI09QjfpUB0e/jamalism?node-id=894-1015",
    hasInteractiveDemo: false,
  },
  {
    id: "p6",
    slug: "lerna",
    title: "LERNA",
    subtitle:
      "Konsep Aplikasi Edukasi Digital dengan Fitur Sosial & Gamifikasi",
    category: "ui-ux",
    categoryLabel: "Digital Education & Gamification",
    year: "2025",
    client: "EdTech Platform & Social Learning",
    role: "UI/UX Designer & Product Concept",
    tools: ["Figma", "Mobile UI/UX", "Design System", "Gamification Design"],
    accentColor: "#1E88E5",
    glowColor: "rgba(30, 136, 229, 0.35)",
    thumbnail: lernaThumb,
    heroImage: lernaThumb,
    overview:
      "Lerna merupakan konsep aplikasi edukasi digital yang menggabungkan proses belajar dengan fitur sosial dan gamifikasi. Aplikasi ini dirancang untuk membantu pengguna belajar secara lebih interaktif melalui Smart Learning Dashboard, Adaptive Learning, komunitas, chat, dan gamifikasi seperti level, misi, serta kustomisasi avatar.",
    challenge:
      "Lerna juga memiliki fitur e-commerce yang memungkinkan pengguna mengakses produk atau kebutuhan pembelajaran dalam satu platform. Secara keseluruhan, Lerna bertujuan menciptakan pengalaman belajar yang lebih personal, interaktif, dan engaging bagi penggunanya.",
    solution:
      'Melalui antarmuka onboarding yang intuitif dan monogram identitas "LE" yang khas, pengguna disajikan opsi autentikasi instan (Masuk, Daftar, dan Google SSO) yang langsung mengarahkan mereka ke ekosistem belajar gamifikasi berbasis pencapaian XP dan misi harian.',
    highlights: [
      "Smart Learning Dashboard: Visualisasi progres materi terstruktur & rekomendasi belajar adaptif",
      "Fitur Sosial & Chat: Forum interaktif dan ruang diskusi antar pembelajar",
      "Gamifikasi Komprehensif: Sistem level, misi harian berhadiah XP, dan kustomisasi avatar",
      "E-Commerce Terintegrasi: Toko kebutuhan perlengkapan belajar & modul dalam satu platform",
    ],
    metrics: [
      { label: "Ecosystem", value: "EdTech + Social" },
      { label: "Mechanics", value: "XP & Quests" },
      { label: "Auth Flow", value: "SSO & Direct" },
      { label: "Store", value: "In-app E-Commerce" },
    ],
    gallery: [
      {
        id: "p6-m1",
        url: lerna1,
        caption: "Lerna Mobile Onboarding & Gamified Smart Learning System",
        type: "ui-screen",
      },
      {
        id: "p6-m2",
        url: lerna2,
        caption: "Lerna Monogram Brand Identity & UI Design Tokens",
        type: "ui-screen",
      },
      {
        id: "p6-m3",
        url: lerna3,
        caption: "Lerna Smart Learning Dashboard & Course Progression Tree",
        type: "ui-screen",
      },
      {
        id: "p6-m4",
        url: lerna4,
        caption:
          "Lerna Adaptive Learning Engine & Personalized Recommendations",
        type: "ui-screen",
      },
      {
        id: "p6-m5",
        url: lerna5,
        caption: "Lerna Community Learning Forum & Peer Discussion Feed",
        type: "ui-screen",
      },
      {
        id: "p6-m6",
        url: lerna6,
        caption: "Lerna Gamified XP System, Level Up & Daily Quests",
        type: "ui-screen",
      },
      {
        id: "p6-m7",
        url: lerna7,
        caption: "Lerna Student Avatar Customization & Collectible Badges",
        type: "ui-screen",
      },
      {
        id: "p6-m8",
        url: lerna8,
        caption: "Lerna In-App E-Commerce & Learning Material Marketplace",
        type: "ui-screen",
      },
      {
        id: "p6-m9",
        url: lerna9,
        caption: "Lerna Interactive Quiz Assessment & Knowledge Checks",
        type: "ui-screen",
      },
      {
        id: "p6-m10",
        url: lerna10,
        caption: "Lerna Video Lecture Player with Live Notes & Bookmarks",
        type: "ui-screen",
      },
      {
        id: "p6-m11",
        url: lerna11,
        caption: "Lerna Spaced Repetition Flashcard Study Deck",
        type: "ui-screen",
      },
      {
        id: "p6-m12",
        url: lerna12,
        caption: "Lerna 1-on-1 Mentor Session Booking & Study Schedule",
        type: "ui-screen",
      },
    ],
    liveUrl: "https://github.com/jamalism/lerna-edtech",
    figmaUrl:
      "https://www.figma.com/design/JpinXvxESSyI09QjfpUB0e/jamalism?node-id=894-1015",
    hasInteractiveDemo: false,
  },
  {
    id: "p7",
    slug: "jourmalism",
    title: "JOURMALISM",
    subtitle: "Daily habit tracker and personal journaling application.",
    category: "ui-ux",
    categoryLabel: "Habit Tracking & Personal Journaling",
    year: "2025",
    client: "Personal Productivity & Wellness",
    role: "Product Designer & Frontend Engineer",
    tools: ["React", "Supabase", "Authentication", "Row-Level Security"],
    accentColor: "#2563EB",
    glowColor: "rgba(37, 99, 235, 0.35)",
    thumbnail: jourmalismHomepage,
    heroImage: jourmalismHomepage,
    overview:
      "Jourmalism is a minimalist, mobile-first daily habit tracker and personal journaling application designed to encourage steady momentum through visual clarity and zero-friction interactions.",
    challenge:
      "The platform combines structured routine tracking with mindful daily reflections in one unified dashboard, removing the need to switch between separate to-do and note-taking apps.",
    solution:
      "Users can organize habits by time of day, track active streaks through a 7-day consistency strip, complete tasks with responsive spring-animated toggles, and record daily thoughts with attached photo memories. Supabase authentication and Row-Level Security provide private, persistent synchronization across devices.",
    highlights: [
      "Unified Dashboard: Habits, streaks, routines, and journaling in one focused workspace",
      "7-Day Consistency Strip: A visual overview of active habit momentum",
      "Responsive Habit Toggles: Spring-animated completion interactions for quick daily updates",
      "Private Cloud Sync: Supabase authentication and Row-Level Security across devices",
    ],
    metrics: [
      { label: "Platform", value: "Mobile-first Web App" },
      { label: "Core Focus", value: "Habits & Journaling" },
      { label: "Backend", value: "Supabase" },
      { label: "Security", value: "Row-Level Security" },
    ],
    gallery: [
      {
        id: "p7-m1",
        url: jourmalismStarting,
        caption: "Jourmalism landing page - Small habits, big changes",
        type: "ui-screen",
      },
      {
        id: "p7-m2",
        url: jourmalismLogin,
        caption: "Jourmalism sign-in experience",
        type: "ui-screen",
      },
      {
        id: "p7-m3",
        url: jourmalismHomepage,
        caption: "Jourmalism daily dashboard with habits and journal",
        type: "ui-screen",
      },
      {
        id: "p7-m4",
        url: jourmalismHabits,
        caption: "Jourmalism routine tracking dashboard",
        type: "ui-screen",
      },
      {
        id: "p7-m5",
        url: jourmalismAddedHabits,
        caption: "Jourmalism add-habit flow",
        type: "ui-screen",
      },
      {
        id: "p7-m6",
        url: jourmalismFinishedHabits,
        caption: "Jourmalism completed habits and streak progress",
        type: "ui-screen",
      },
      {
        id: "p7-m7",
        url: jourmalismLeaderboard,
        caption: "Konco community leaderboard",
        type: "ui-screen",
      },
      {
        id: "p7-m8",
        url: jourmalismFriends,
        caption: "Konco friends and habit community",
        type: "ui-screen",
      },
      {
        id: "p7-m9",
        url: jourmalismAccountSettings,
        caption: "Jourmalism account settings and security preferences",
        type: "ui-screen",
      },
      {
        id: "p7-m10",
        url: jourmalismDarkHomepage,
        caption: "Jourmalism dark mode dashboard",
        type: "ui-screen",
      },
    ],
    liveUrl: "https://jourmalism.vercel.app/",
    demoUrl: "https://jourmalism.vercel.app/",
    hasInteractiveDemo: true,
  },
  {
    id: "p8",
    slug: "dapur-ibu-hilmi",
    title: "Dapur Ibu Hilmi",
    subtitle: "Authentic Indonesian food rooted in heritage family recipes.",
    category: "ui-ux",
    categoryLabel: "Culinary Brand & Food Ordering Experience",
    year: "2025",
    client: "Dapur Ibu Hilmi",
    role: "Web Designer & Frontend Developer",
    tools: ["React", "Tailwind CSS", "Responsive Web Design", "WhatsApp Ordering"],
    accentColor: "#D97706",
    glowColor: "rgba(217, 119, 6, 0.35)",
    thumbnail: buhilmi1,
    heroImage: buhilmi1,
    overview:
      "Dapur Ibu Hilmi is a warm, editorial food website presenting authentic Indonesian cuisine through the story of a family kitchen. The experience pairs heritage storytelling with an approachable menu and direct ordering journey.",
    challenge:
      "The website needed to communicate the care behind each dish while helping visitors discover specialties, understand the kitchen's philosophy, and move naturally from browsing to ordering.",
    solution:
      "The experience highlights Banyuwangi-inspired dishes such as Nasi Tempong, Soto Ayam, Ayam Bakar Hitam, Ayam Kremes, and Ayam Pedas Santan through rich food photography, curated menu categories, an aesthetic kitchen gallery, and direct WhatsApp ordering. It also supports custom family dining, mini tumpeng celebrations, and corporate lunch sets.",
    highlights: [
      "Heritage Storytelling: Multi-generational bumbu rempah traditions presented through an editorial brand experience",
      "Artisanal Menu: Signature Indonesian dishes with clear categories, descriptions, and ordering actions",
      "Direct Conversion: WhatsApp ordering with GoFood and GrabFood delivery availability",
      "Hospitality Focus: Custom family dining, mini tumpeng, and corporate catering enquiries",
    ],
    metrics: [
      { label: "Cuisine", value: "Authentic Indonesian" },
      { label: "Ordering", value: "WhatsApp Direct" },
      { label: "Delivery", value: "GoFood & GrabFood" },
      { label: "Availability", value: "09:00 - 22:00 WITA" },
    ],
    gallery: [
      { id: "p8-m1", url: buhilmi1, caption: "Dapur Ibu Hilmi website showcase", type: "image" },
      { id: "p8-m2", url: buhilmi2, caption: "Dapur Ibu Hilmi website showcase", type: "image" },
      { id: "p8-m3", url: buhilmi3, caption: "Dapur Ibu Hilmi website showcase", type: "image" },
      { id: "p8-m4", url: buhilmi4, caption: "Dapur Ibu Hilmi website showcase", type: "image" },
      { id: "p8-m5", url: buhilmi5, caption: "Dapur Ibu Hilmi website showcase", type: "image" },
      { id: "p8-m6", url: buhilmi6, caption: "Dapur Ibu Hilmi website showcase", type: "image" },
      { id: "p8-m7", url: buhilmi7, caption: "Dapur Ibu Hilmi website showcase", type: "image" },
      { id: "p8-m8", url: buhilmi8, caption: "Dapur Ibu Hilmi website showcase", type: "image" },
    ],
    liveUrl: "https://dapur-ibu-hilmi.vercel.app/",
    demoUrl: "https://dapur-ibu-hilmi.vercel.app/",
    hasInteractiveDemo: true,
  },
];
