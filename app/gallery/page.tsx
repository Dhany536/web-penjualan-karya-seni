'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const allArtworks = [
  // Lukisan
  {
    id: "painting-1",
    title: "Penangkapan Pangeran Diponegoro",
    artist: "Raden Saleh",
    category: "Lukisan",
    year: "1857",
    price: "Rp 250.000.000.000",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    description: "Lukisan ikonik yang menggambarkan momen bersejarah penangkapan Pangeran Diponegoro oleh Belanda."
  },
  {
    id: "painting-2",
    title: "Potret Diri dan Matahari",
    artist: "Affandi",
    category: "Lukisan",
    year: "1977",
    price: "Rp 180.000.000.000",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
    description: "Karya ekspresionisme terbaik Affandi yang menggambarkan dirinya dengan latar matahari."
  },
  {
    id: "painting-3",
    title: "Gadis Bali dengan Bunga",
    artist: "Basuki Abdullah",
    category: "Lukisan",
    year: "1952",
    price: "Rp 120.000.000.000",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642",
    description: "Lukisan realis yang memperlihatkan keindahan wanita Bali tradisional."
  },
  {
    id: "painting-4",
    title: "Pasar Ikan",
    artist: "Hendra Gunawan",
    category: "Lukisan",
    year: "1980",
    price: "Rp 145.000.000.000",
    image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee",
    description: "Menggambarkan kehidupan pasar ikan tradisional dengan gaya khas Hendra yang penuh warna."
  },
  {
    id: "painting-5",
    title: "Keluarga Petani",
    artist: "S. Sudjojono",
    category: "Lukisan",
    year: "1950",
    price: "Rp 95.000.000.000",
    image: "https://images.unsplash.com/photo-1600002415506-dd06090d3480",
    description: "Lukisan yang menggambarkan kehidupan petani Indonesia dengan gaya realisme sosial."
  },
  // Digital Art
  {
    id: "digital-1",
    title: "Garuda Wisnu Digital",
    artist: "Agan Harahap",
    category: "Digital Art",
    year: "2021",
    price: "Rp 95.000.000",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42",
    description: "Interpretasi digital modern dari Garuda Wisnu Kencana dengan teknologi NFT."
  },
  {
    id: "digital-2",
    title: "Metaverse Wayang",
    artist: "Muklay",
    category: "Digital Art",
    year: "2022",
    price: "Rp 180.000.000",
    image: "https://images.unsplash.com/photo-1600002415506-dd06090d3480",
    description: "Transformasi wayang kulit ke dalam dunia metaverse dengan teknologi Web3."
  },
  {
    id: "digital-3",
    title: "Jakarta 2099",
    artist: "Ardneks",
    category: "Digital Art",
    year: "2023",
    price: "Rp 150.000.000",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
    description: "Visualisasi futuristik kota Jakarta dengan gaya cyberpunk."
  },
  {
    id: "digital-4",
    title: "NFT Batik Evolution",
    artist: "Melissa Sunjaya",
    category: "Digital Art",
    year: "2022",
    price: "Rp 225.000.000",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642",
    description: "Koleksi NFT yang menampilkan evolusi motif batik dalam bentuk digital."
  },
  {
    id: "digital-5",
    title: "Virtual Reality Borobudur",
    artist: "Reza Arap",
    category: "Digital Art",
    year: "2023",
    price: "Rp 275.000.000",
    image: "https://images.unsplash.com/photo-1600002415506-dd06090d3480",
    description: "Rekonstruksi digital Candi Borobudur dalam format VR."
  },
  // Fotografi
  {
    id: "photo-1",
    title: "Potret Indonesia",
    artist: "Kassian Céphas",
    category: "Fotografi",
    year: "1885",
    price: "Rp 85.000.000",
    image: "https://images.unsplash.com/photo-1581337036808-f5c2c0c9ea5a",
    description: "Karya fotografi tertua di Indonesia yang menangkap kehidupan di Yogyakarta."
  },
  {
    id: "photo-2",
    title: "Kemerdekaan Indonesia",
    artist: "Frans Mendur",
    category: "Fotografi",
    year: "1945",
    price: "Rp 150.000.000",
    image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee",
    description: "Foto bersejarah yang menangkap momen proklamasi kemerdekaan Indonesia."
  },
  {
    id: "photo-3",
    title: "Kehidupan Pasar Tradisional",
    artist: "Don Hasman",
    category: "Fotografi",
    year: "1970",
    price: "Rp 95.000.000",
    image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73",
    description: "Dokumentasi kehidupan pasar tradisional di Jakarta tahun 1970-an."
  },
  {
    id: "photo-4",
    title: "Potret Suku Dayak",
    artist: "Sebastião Salgado",
    category: "Fotografi",
    year: "1990",
    price: "Rp 200.000.000",
    image: "https://images.unsplash.com/photo-1600002415506-dd06090d3480",
    description: "Potret kehidupan suku Dayak di pedalaman Kalimantan."
  },
  {
    id: "photo-5",
    title: "Gunung Bromo",
    artist: "Rio Wibowo",
    category: "Fotografi",
    year: "2015",
    price: "Rp 75.000.000",
    image: "https://images.unsplash.com/photo-1578301978018-7c91f926f2c1",
    description: "Pemandangan spektakuler Gunung Bromo saat matahari terbit."
  }
];

const categories = [
  { id: "all", name: "Semua Karya" },
  { id: "Lukisan", name: "Lukisan" },
  { id: "Digital Art", name: "Digital Art" },
  { id: "Fotografi", name: "Fotografi" }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter karya seni berdasarkan kategori yang dipilih
  const filteredArtworks = allArtworks.filter((artwork) => 
    selectedCategory === "all" ? true : artwork.category === selectedCategory
  );

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri Seni</h1>
          <p className="text-lg text-amber-200">
            Koleksi lengkap karya seni dari berbagai kategori
          </p>
        </div>
      </div>

      {/* Category Filter dengan fungsi onClick */}
      <div className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex gap-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? "bg-amber-800 text-amber-50"
                    : "text-amber-800 hover:bg-amber-100"
                } whitespace-nowrap`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid dengan filteredArtworks */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div 
              key={artwork.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-800/80 text-amber-50 px-3 py-1 rounded-full text-sm">
                    {artwork.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {artwork.title}
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-amber-700 font-medium">{artwork.artist}</p>
                  <p className="text-gray-600 text-sm">Tahun: {artwork.year}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {artwork.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-amber-800">
                    {artwork.price}
                  </p>
                  <Link
                    href={`/artwork/${artwork.id}`}
                    className="bg-amber-800 text-amber-50 px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-700 transition-colors"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredArtworks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Tidak ada karya seni dalam kategori ini.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 