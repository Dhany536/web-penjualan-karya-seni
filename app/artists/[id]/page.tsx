import Image from "next/image";
import Link from "next/link";

const artists = {
  1: {
    name: "Affandi",
    specialty: "Ekspresionisme & Lukisan",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "Affandi (1907-1990) adalah salah satu pelukis Indonesia paling berpengaruh. Dikenal dengan gaya ekspresionismenya yang khas, ia melukis dengan cara langsung menggunakan cat dari tube dan jarinya. Karyanya mencerminkan emosi yang mendalam dan pandangan unik tentang kehidupan sehari-hari Indonesia.",
    masterpieces: [
      {
        title: "Self Portrait",
        year: "1975",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
        description: "Salah satu karya self-portrait paling terkenal yang menunjukkan gaya ekspresionisme khasnya."
      },
      {
        title: "Perahu dan Matahari",
        year: "1960",
        image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
        description: "Menggambarkan kehidupan nelayan dengan warna-warna yang berani dan goresan ekspresif."
      }
    ]
  },
  2: {
    name: "Raden Saleh",
    specialty: "Lukisan Romantisme",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Raden Saleh (1811-1880) adalah pionir seni lukis modern Indonesia. Ia adalah pelukis pertama yang mendapat pendidikan formal di Eropa dan dikenal dengan lukisan-lukisan romantismenya yang menggabungkan gaya Eropa dengan tema-tema lokal Indonesia.",
    masterpieces: [
      {
        title: "Penangkapan Pangeran Diponegoro",
        year: "1857",
        image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5",
        description: "Karya masterpiece yang menggambarkan momen bersejarah penangkapan Pangeran Diponegoro."
      },
      {
        title: "Berburu Banteng",
        year: "1855",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42",
        description: "Lukisan yang menampilkan adegan perburuan dramatis dengan teknik romantisme Eropa."
      }
    ]
  },
  3: {
    name: "Basuki Abdullah",
    specialty: "Lukisan Realisme",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Basuki Abdullah (1915-1993) adalah maestro lukisan realis Indonesia. Terkenal dengan lukisan potret dan pemandangan yang sangat detail dan realistis. Ia adalah pelukis istana yang melukis banyak tokoh penting, termasuk Presiden Soekarno.",
    masterpieces: [
      {
        title: "Potret Presiden Soekarno",
        year: "1960",
        image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
        description: "Salah satu potret paling terkenal dari Presiden Soekarno dengan detail yang mengagumkan."
      },
      {
        title: "Gadis Bali",
        year: "1952",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
        description: "Lukisan yang menampilkan keindahan wanita Bali dengan teknik realisme yang sempurna."
      }
    ]
  },
  4: {
    name: "Hendra Gunawan",
    specialty: "Lukisan Kontemporer",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    bio: "Hendra Gunawan (1918-1983) adalah seniman yang dikenal dengan gaya uniknya dalam menggambarkan kehidupan rakyat Indonesia. Karyanya penuh dengan warna-warna cerah dan figur-figur yang ekspresif, menggambarkan kehidupan sehari-hari masyarakat Indonesia.",
    masterpieces: [
      {
        title: "Penari Jaipongan",
        year: "1980",
        image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5",
        description: "Lukisan yang menampilkan dinamika dan keindahan tarian tradisional Sunda."
      },
      {
        title: "Pasar Ikan",
        year: "1975",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42",
        description: "Menggambarkan kehidupan pasar ikan tradisional dengan gaya khasnya yang penuh warna."
      }
    ]
  }
};

export default function ArtistDetail({ params }: { params: { id: string } }) {
  const artist = artists[params.id as keyof typeof artists];

  if (!artist) {
    return <div>Seniman tidak ditemukan</div>;
  }

  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      <Link 
        href="/"
        className="inline-flex items-center text-gray-600 mb-8 hover:text-gray-900"
      >
        ← Kembali ke Beranda
      </Link>

      {/* Artist Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          <Image
            src={artist.avatar}
            alt={artist.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{artist.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{artist.specialty}</p>
          <p className="text-gray-700 leading-relaxed max-w-2xl">
            {artist.bio}
          </p>
        </div>
      </div>

      {/* Masterpieces */}
      <h2 className="text-3xl font-bold mb-8">Karya Masterpiece</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {artist.masterpieces.map((artwork, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative aspect-[4/3]">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
              <p className="text-gray-500 mb-4">Tahun: {artwork.year}</p>
              <p className="text-gray-700">{artwork.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 