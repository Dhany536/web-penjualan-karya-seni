import Image from "next/image";
import Link from "next/link";

const digitalArts = [
  {
    id: 1,
    title: "Garuda Wisnu Digital",
    artist: "Agan Harahap",
    year: "2021",
    price: "Rp 95.000.000",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42",
    description: "Interpretasi digital modern dari Garuda Wisnu Kencana. Agan Harahap dikenal dengan karya-karya yang menggabungkan elemen tradisional dengan teknologi digital modern."
  },
  {
    id: 2,
    title: "Metaverse Wayang",
    artist: "Muklay",
    year: "2022",
    price: "Rp 180.000.000",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    description: "Karya seni digital yang mentransformasikan wayang kulit ke dalam dunia metaverse. Muklay mengeksplorasi perpaduan budaya tradisional dengan teknologi Web3."
  },
  {
    id: 3,
    title: "Jakarta 2099",
    artist: "Ardneks",
    year: "2023",
    price: "Rp 150.000.000",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
    description: "Visualisasi futuristik kota Jakarta tahun 2099. Ardneks menciptakan pemandangan cyberpunk yang mencerminkan perpaduan budaya lokal dengan teknologi masa depan."
  },
  {
    id: 4,
    title: "NFT Batik Evolution",
    artist: "Melissa Sunjaya",
    year: "2022",
    price: "Rp 225.000.000",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642",
    description: "Koleksi NFT yang menampilkan evolusi motif batik dalam bentuk digital. Melissa mengintegrasikan seni tradisional dengan blockchain technology."
  },
  {
    id: 5,
    title: "Virtual Reality Borobudur",
    artist: "Reza Arap",
    year: "2023",
    price: "Rp 275.000.000",
    image: "https://images.unsplash.com/photo-1600002415506-dd06090d3480",
    description: "Rekonstruksi digital Candi Borobudur dalam format VR. Reza menciptakan pengalaman immersive yang memungkinkan eksplorasi candi secara virtual."
  },
  {
    id: 6,
    title: "Cyber Gamelan",
    artist: "Darbotz",
    year: "2022",
    price: "Rp 165.000.000",
    image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73",
    description: "Visualisasi digital yang menggabungkan unsur gamelan dengan estetika cyberpunk. Darbotz terkenal dengan karyanya yang memadukan street art dengan seni digital."
  },
  {
    id: 7,
    title: "Digital Batik AI",
    artist: "Kathrin Honesta",
    year: "2023",
    price: "Rp 195.000.000",
    image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee",
    description: "Karya seni yang menggunakan AI untuk menciptakan motif batik kontemporer. Kathrin mengeksplorasi perpaduan kecerdasan buatan dengan seni tradisional."
  },
  {
    id: 8,
    title: "Holographic Reog",
    artist: "Vina Candrawati",
    year: "2023",
    price: "Rp 185.000.000",
    image: "https://images.unsplash.com/photo-1589308454676-02527bb05d76",
    description: "Proyeksi holografik tari Reog Ponorogo. Vina menghadirkan seni pertunjukan tradisional dalam format digital yang inovatif."
  },
  {
    id: 9,
    title: "Crypto Wayang",
    artist: "Reinhard Debot",
    year: "2022",
    price: "Rp 210.000.000",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5",
    description: "Seri NFT yang menggabungkan karakter wayang dengan simbolisme cryptocurrency. Reinhard mengeksplorasi pertemuan budaya tradisional dengan ekonomi digital."
  },
  {
    id: 10,
    title: "Augmented Reality Tari",
    artist: "Ykha Amelz",
    year: "2023",
    price: "Rp 245.000.000",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42",
    description: "Instalasi AR yang mentransformasi tarian tradisional Indonesia. Ykha menciptakan pengalaman interaktif yang memadukan gerakan tari dengan teknologi AR."
  }
];

export default function DigitalArtGallery() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri Digital Art</h1>
          <p className="text-lg text-amber-200">
            Koleksi karya seni digital terbaik dari seniman digital Indonesia
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalArts.map((art) => (
            <div 
              key={art.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {art.title}
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-amber-700 font-medium">{art.artist}</p>
                  <p className="text-gray-600 text-sm">Tahun: {art.year}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {art.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-amber-800">
                    {art.price}
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