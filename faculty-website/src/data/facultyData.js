export const facultyInfo = {
  home: {
    title: "Teknoloji ve Mühendislik Fakültesi",
    description: "İnovasyon odaklı eğitim ve araştırma merkezi",
    stats: {
      established: 1985,
      students: 4200,
      facultyMembers: 320,
      labs: 45
    },
    highlights: [
      "Akreditasyonlu mühendislik programları",
      "Sanayi işbirlikli projeler",
      "Uluslararası değişim programları",
      "Startup kuluçka merkezi"
    ],
    news: [
      {
        title: "Yapay Zeka Laboratuvarı Açıldı",
        date: "15 Eylül 2023",
        excerpt: "Son teknoloji ekipmanlarla donatılmış yeni laboratuvar"
      },
      {
        title: "IEEE Robotik Yarışmasında Birincilik",
        date: "5 Mayıs 2023",
        excerpt: "Öğrencilerimiz ulusal yarışmada altın madalya kazandı"
      }
    ]
  },
  departments: [
    { 
      id: 1,
      name: "Bilgisayar Mühendisliği", 
      description: "Algoritmik düşünce ve yazılım inovasyonu",
      head: "Prof. Dr. Ayşe Yılmaz",
      established: 1990,
      programs: {
        undergraduate: {
          duration: "4 yıl",
          quota: 120,
          language: "İngilizce"
        },
        graduate: [
          "Veri Bilimi (Tezli)",
          "Siber Güvenlik (Tezsiz)"
        ]
      },
      facilities: [
        "Yapay Zeka Lab",
        "Siber Güvenlik Odası",
        "HPC Kümeleri"
      ]
    },
    { 
      id: 2,
      name: "Elektrik-Elektronik Mühendisliği", 
      description: "Akıllı sistemler ve ileri elektronik",
      head: "Prof. Dr. Mehmet Kaya",
      established: 1985,
      programs: {
        undergraduate: {
          duration: "4 yıl",
          quota: 90,
          language: "Türkçe"
        },
        graduate: [
          "Enerji Sistemleri",
          "Mikroelektronik"
        ]
      },
      facilities: [
        "IoT Laboratuvarı",
        "Yarı İletken Üretim Ünitesi",
        "Güç Elektroniği Test Merkezi"
      ]
    },
    { 
      id: 3,
      name: "Makine Mühendisliği", 
      description: "Dijital dönüşümle tasarım ve üretim",
      head: "Prof. Dr. Emre Demir",
      established: 1988,
      programs: {
        undergraduate: {
          duration: "4 yıl",
          quota: 110,
          language: "Türkçe"
        },
        graduate: [
          "Robotik ve Otomasyon",
          "Malzeme Bilimi"
        ]
      },
      facilities: [
        "3D Yazıcı Farm",
        "Rüzgar Tüneli",
        "CAD/CAM Stüdyoları"
      ]
    },
    {
      id: 4,
      name: "Endüstri Mühendisliği",
      description: "Sistem optimizasyonu ve veri analitiği",
      head: "Prof. Dr. Zeynep Akar",
      established: 1995,
      programs: {
        undergraduate: {
          duration: "4 yıl",
          quota: 80,
          language: "İngilizce"
        },
        graduate: [
          "Tedarik Zinciri Yönetimi",
          "Yöneylem Araştırması"
        ]
      },
      facilities: [
        "Sanal Gerçeklik Simülasyon Merkezi",
        "ERP Laboratuvarı",
        "Veri Analitiği Hub'ı"
      ]
    }
  ],
  classrooms: [
    { 
      id: "A101",
      name: "Ana Bina - Amfi 1", 
      capacity: 120, 
      type: "Amfi",
      features: [
        "Akıllı Tahta",
        "Ses Yalıtımlı",
        "Projeksiyon",
        "Kablosuz Mikrofon"
      ],
      schedule: {
        monday: ["09:00-12:00", "13:30-15:30"],
        tuesday: ["10:00-12:00"]
      }
    },
    { 
      id: "LAB302",
      name: "Bilgisayar Laboratuvarı", 
      capacity: 30, 
      type: "Laboratuvar",
      features: [
        "40 adet i7 işlemcili PC",
        "3D Yazıcı",
        "VR Seti",
        "Sunucu Odası"
      ],
      reservedFor: ["Bilgisayar Mühendisliği"]
    },
    { 
      id: "RC101",
      name: "Araştırma Merkezi - Toplantı Odası", 
      capacity: 20, 
      type: "Toplantı",
      features: [
        "Akıllı Ekran",
        "Video Konferans Sistemi",
        "Beyaz Tahta",
        "Kablosuz Şarj"
      ],
      bookingRequired: true
    }
  ],
  facultyMembers: [
    {
      id: 1001,
      name: "Prof. Dr. Ahmet Korkmaz",
      department: "Bilgisayar Mühendisliği",
      expertise: ["Yapay Zeka", "Makine Öğrenmesi"],
      contact: "ahmet.korkmaz@uni.edu"
    },
    {
      id: 1002,
      name: "Doç. Dr. Elif Yıldız",
      department: "Elektrik-Elektronik Mühendisliği",
      expertise: ["IoT", "Sensör Ağları"],
      contact: "elif.yildiz@uni.edu"
    }
  ],
  researchCenters: [
    {
      name: "Yapay Zeka ve Veri Bilimi Merkezi",
      director: "Prof. Dr. Ahmet Korkmaz",
      focusAreas: ["Derin Öğrenme", "Büyük Veri"]
    },
    {
      name: "Sürdürülebilir Enerji Merkezi",
      director: "Prof. Dr. Can Demirel",
      focusAreas: ["Güneş Enerjisi", "Akıllı Şebekeler"]
    }
  ]
};