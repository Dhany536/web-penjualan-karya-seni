import Image from "next/image";
import Link from "next/link";

const paintings = [
  {
    id: 1,
    title: "Penangkapan Pangeran Diponegoro",
    artist: "Raden Saleh",
    year: "1857",
    price: "Rp 250.000.000.000",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    description: "Lukisan ikonik yang menggambarkan momen bersejarah penangkapan Pangeran Diponegoro oleh Belanda. Raden Saleh melukisnya dengan gaya romantisme Eropa, menunjukkan ketegangan dramatis saat penangkapan. Karya ini menjadi simbol perlawanan terhadap kolonialisme."
  },
  {
    id: 2,
    title: "Potret Diri dan Matahari",
    artist: "Affandi",
    year: "1977",
    price: "Rp 180.000.000.000",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
    description: "Salah satu karya ekspresionisme terbaik Affandi yang menggambarkan dirinya dengan latar matahari. Lukisan ini dibuat dengan teknik khas Affandi, menggunakan cat langsung dari tube dengan goresan spontan yang menunjukkan energi dan emosi yang kuat."
  },
  {
    id: 3,
    title: "Gadis Bali dengan Bunga",
    artist: "Basuki Abdullah",
    year: "1952",
    price: "Rp 120.000.000.000",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642",
    description: "Lukisan realis yang memperlihatkan keindahan wanita Bali tradisional. Basuki Abdullah terkenal dengan kemampuannya menangkap detail dan keanggunan subjek, terutama dalam lukisan potret."
  },
  {
    id: 4,
    title: "Pasar Ikan",
    artist: "Hendra Gunawan",
    year: "1980",
    price: "Rp 145.000.000.000",
    image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee",
    description: "Menggambarkan kehidupan pasar ikan tradisional dengan gaya khas Hendra yang penuh warna dan dinamis. Lukisan ini mencerminkan kehidupan sehari-hari masyarakat Indonesia."
  },
  {
    id: 5,
    title: "Keluarga Petani",
    artist: "S. Sudjojono",
    year: "1950",
    price: "Rp 95.000.000.000",
    image: "https://images.unsplash.com/photo-1600002415506-dd06090d3480",
    description: "Lukisan yang menggambarkan kehidupan petani Indonesia dengan gaya realisme sosial. Sudjojono dikenal sebagai bapak seni lukis Indonesia modern yang mengangkat tema-tema kehidupan rakyat."
  },
  {
    id: 6,
    title: "Perempuan dari Desa",
    artist: "Srihadi Soedarsono",
    year: "1985",
    price: "Rp 165.000.000",
    image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee",
    description: "Lukisan yang menggambarkan kehidupan perempuan desa dengan gaya realis-impresionisme. Srihadi Soedarsono dikenal dengan kemampuannya menangkap esensi kehidupan pedesaan Indonesia dengan sentuhan warna yang lembut dan penuh perasaan."
  },
  {
    id: 7,
    title: "Perjuangan Rakyat",
    artist: "Dullah",
    year: "1978",
    price: "Rp 185.000.000",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    description: "Karya bersejarah yang menggambarkan semangat perjuangan rakyat Indonesia. Dullah, yang dikenal sebagai pelukis revolusi, menciptakan karya ini berdasarkan pengalamannya langsung menyaksikan perjuangan kemerdekaan Indonesia."
  },
  {
    id: 8,
    title: "Borobudur dalam Kabut",
    artist: "Widayat",
    year: "1982",
    price: "Rp 210.000.000",
    image: "https://images.unsplash.com/photo-1600002415506-dd06090d3480",
    description: "Interpretasi magis dari Candi Borobudur dalam balutan kabut pagi. Widayat menggunakan teknik dekoratif khasnya dengan tekstur yang tebal dan warna-warna mistis untuk menangkap keagungan candi ini."
  },
  {
    id: 9,
    title: "Pasar Malam Jakarta",
    artist: "Lee Man Fong",
    year: "1960",
    price: "Rp 235.000.000",
    image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73",
    description: "Lukisan yang menangkap suasana pasar malam di Jakarta era 60-an. Lee Man Fong menggabungkan teknik lukis Tiongkok klasik dengan tema kehidupan urban Indonesia, menciptakan karya yang unik dan bersejarah."
  },
  {
    id: 10,
    title: "Tarian Legong",
    artist: "Arie Smit",
    year: "1975",
    price: "Rp 195.000.000",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642",
    description: "Penggambaran tarian Legong Bali dengan gaya koloristik yang khas. Arie Smit, seniman Belanda yang menetap di Bali, terkenal dengan penggunaan warna-warna cerah yang menangkap keceriaan dan dinamika budaya Bali."
  },
  // ... tambahkan 5 lukisan lainnya dengan format yang sama
];

export default function PaintingsGallery() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri Lukisan</h1>
          <p className="text-lg text-amber-200">
            Koleksi karya seni lukis terbaik dari seniman-seniman ternama Indonesia
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paintings.map((painting) => (
            <div 
              key={painting.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={painting.image}
                  alt={painting.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {painting.title}
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-amber-700 font-medium">{painting.artist}</p>
                  <p className="text-gray-600 text-sm">Tahun: {painting.year}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {painting.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-amber-800">
                    {painting.price}
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