import Image from "next/image";
import Link from "next/link";

const artists = {
  "1": {
    id: 1,
    name: "Affandi",
    specialty: "Ekspresionisme & Lukisan",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "Affandi adalah salah satu pelukis Indonesia yang paling terkenal. Ia dikenal dengan gaya ekspresionismenya yang khas.",
    achievements: [
      "Penghargaan Seni dari Pemerintah RI (1969)",
      "Cultural Award dari Pemerintah India (1950)",
      "Bintang Jasa Utama (1978)"
    ],
    artworks: [
      {
        title: "Potret Diri dan Matahari",
        year: "1977",
        image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9"
      }
    ]
  },
  "2": {
    id: 2,
    name: "Raden Saleh",
    specialty: "Lukisan Romantisme",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Raden Saleh adalah pelopor seni lukis modern Indonesia. Ia dikenal dengan lukisan-lukisan romantismenya yang memukau.",
    achievements: [
      "Pelukis Istana Kerajaan Belanda",
      "Penghargaan dari Raja Louis Philippe",
      "Gelar Kehormatan dari berbagai kerajaan Eropa"
    ],
    artworks: [
      {
        title: "Penangkapan Pangeran Diponegoro",
        year: "1857",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5"
      }
    ]
  },
  "3": {
    id: 3,
    name: "Basuki Abdullah",
    specialty: "Lukisan Realisme",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Basuki Abdullah adalah maestro lukisan realis Indonesia. Karyanya banyak menampilkan potret dan pemandangan dengan detail yang mengagumkan.",
    achievements: [
      "Pelukis Istana Kepresidenan RI",
      "Grand Prize pada kompetisi lukis di Belanda (1933)",
      "Penghargaan Seni dari Pemerintah Thailand"
    ],
    artworks: [
      {
        title: "Gadis Bali dengan Bunga",
        year: "1952",
        image: "https://images.unsplash.com/photo-1549887534-1541e9326642"
      }
    ]
  },
  "4": {
    id: 4,
    name: "Hendra Gunawan",
    specialty: "Lukisan Kontemporer",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    bio: "Hendra Gunawan dikenal dengan lukisan-lukisannya yang menggambarkan kehidupan rakyat Indonesia dengan warna-warna yang berani.",
    achievements: [
      "Anugerah Seni dari Pemerintah RI",
      "Penghargaan dari Museum Nasional Indonesia",
      "Retrospective Exhibition di Singapura"
    ],
    artworks: [
      {
        title: "Pasar Ikan",
        year: "1980",
        image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee"
      }
    ]
  }
};

export default function ArtistDetail({ params }: { params: { id: string } }) {
  // Pastikan id valid
  if (!artists[params.id as keyof typeof artists]) {
    return (
      <div className="min-h-screen bg-amber-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h1 className="text-2xl font-bold text-amber-900 mb-4">
              Seniman tidak ditemukan
            </h1>
            <Link 
              href="/"
              className="text-amber-800 hover:underline"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const artist = artists[params.id as keyof typeof artists];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <div className="bg-amber-800 text-amber-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center text-amber-200 mb-8 hover:text-amber-100"
          >
            ← Kembali ke Beranda
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden">
              <Image
                src={artist.avatar}
                alt={artist.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{artist.name}</h1>
              <p className="text-amber-200">{artist.specialty}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          {/* Bio Section */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Biografi</h2>
            <p className="text-gray-600 mb-6">{artist.bio}</p>
            
            <h3 className="text-xl font-semibold text-amber-900 mb-3">Pencapaian</h3>
            <ul className="list-disc pl-5 text-gray-600 mb-8">
              {artist.achievements.map((achievement, index) => (
                <li key={index} className="mb-2">{achievement}</li>
              ))}
            </ul>
          </div>

          {/* Artworks Section */}
          <div className="border-t border-amber-100 p-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Karya Terkenal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {artist.artworks.map((artwork, index) => (
                <div key={index} className="bg-amber-50 rounded-lg overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-amber-900">{artwork.title}</h3>
                    <p className="text-gray-600 text-sm">Tahun: {artwork.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 