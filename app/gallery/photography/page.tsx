import Image from "next/image";
import Link from "next/link";

const photographs = [
  {
    id: 1,
    title: "Potret Indonesia",
    artist: "Kassian Céphas",
    year: "1885",
    price: "Rp 85.000.000",
    image: "https://images.unsplash.com/photo-1542611436-c72b0fe45d41",
    description: "Salah satu karya fotografi tertua di Indonesia yang menangkap kehidupan di Yogyakarta pada abad ke-19. Kassian Céphas dikenal sebagai fotografer pribumi pertama di Indonesia."
  },
  {
    id: 2,
    title: "Kemerdekaan Indonesia",
    artist: "Frans Mendur",
    year: "1945",
    price: "Rp 150.000.000",
    image: "https://images.unsplash.com/photo-1576510595341-858cb4378927",
    description: "Foto bersejarah yang menangkap momen proklamasi kemerdekaan Indonesia. Frans Mendur adalah salah satu fotografer yang mendokumentasikan momen bersejarah ini."
  },
  {
    id: 3,
    title: "Kehidupan Pasar Tradisional",
    artist: "Don Hasman",
    year: "1970",
    price: "Rp 95.000.000",
    image: "https://images.unsplash.com/photo-1555674876-c69b8047f78c",
    description: "Dokumentasi kehidupan pasar tradisional di Jakarta tahun 1970-an. Don Hasman terkenal dengan foto-foto dokumenter kehidupan sehari-hari masyarakat Indonesia."
  },
  {
    id: 4,
    title: "Potret Suku Dayak",
    artist: "Sebastião Salgado",
    year: "1990",
    price: "Rp 200.000.000",
    image: "https://images.unsplash.com/photo-1564849444446-f876dcef378e",
    description: "Potret kehidupan suku Dayak di pedalaman Kalimantan. Salgado menangkap keunikan budaya dan kehidupan sehari-hari suku asli Indonesia."
  },
  {
    id: 5,
    title: "Gunung Bromo",
    artist: "Rio Wibowo",
    year: "2015",
    price: "Rp 75.000.000",
    image: "https://images.unsplash.com/photo-1589308454676-02527bb05d76",
    description: "Pemandangan spektakuler Gunung Bromo saat matahari terbit. Rio Wibowo dikenal dengan foto-foto landscape yang memukau."
  },
  {
    id: 6,
    title: "Tari Kecak",
    artist: "Deniek G. Sukarya",
    year: "2008",
    price: "Rp 120.000.000",
    image: "https://images.unsplash.com/photo-1576510294188-b8e85a602e6f",
    description: "Momen dramatis pertunjukan Tari Kecak di Bali. Deniek terkenal dengan kemampuannya menangkap esensi budaya Indonesia."
  },
  {
    id: 7,
    title: "Jakarta Senja",
    artist: "Oscar Motuloh",
    year: "2019",
    price: "Rp 180.000.000",
    image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af",
    description: "Potret kehidupan urban Jakarta saat senja. Oscar Motuloh dikenal dengan street photography yang menangkap jiwa kota."
  },
  {
    id: 8,
    title: "Orangutan Kalimantan",
    artist: "Riza Marlon",
    year: "2017",
    price: "Rp 135.000.000",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745",
    description: "Foto wildlife yang menangkap kehidupan orangutan di habitat aslinya. Riza Marlon adalah fotografer wildlife terkemuka Indonesia."
  },
  {
    id: 9,
    title: "Potret Pengrajin Batik",
    artist: "Rama Surya",
    year: "2012",
    price: "Rp 90.000.000",
    image: "https://images.unsplash.com/photo-1576510572627-71c52ee07466",
    description: "Dokumentasi proses pembuatan batik tradisional. Rama Surya terkenal dengan foto-foto yang menangkap warisan budaya Indonesia."
  },
  {
    id: 10,
    title: "Nelayan Tradisional",
    artist: "Firman Hidayat",
    year: "2020",
    price: "Rp 110.000.000",
    image: "https://images.unsplash.com/photo-1575454363041-d7b1d7709e9c",
    description: "Potret kehidupan nelayan tradisional di pesisir Indonesia. Firman Hidayat fokus pada dokumentasi kehidupan maritim Indonesia."
  }
];

export default function PhotographyGallery() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <div className="bg-amber-800 text-amber-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center text-amber-200 mb-8 hover:text-amber-100"
          >
            ← Kembali ke Beranda
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri Fotografi</h1>
          <p className="text-lg text-amber-200">
            Koleksi karya fotografi terbaik dari fotografer ternama Indonesia
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photographs.map((photo) => (
            <div 
              key={photo.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {photo.title}
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-amber-700 font-medium">{photo.artist}</p>
                  <p className="text-gray-600 text-sm">Tahun: {photo.year}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {photo.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-amber-800">
                    {photo.price}
                  </p>
                  <button className="bg-amber-800 text-amber-50 px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-700 transition-colors">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 