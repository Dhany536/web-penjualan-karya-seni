import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1577720580479-7d839d829c73')] bg-fixed bg-cover">
      {/* Batik Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582124825395-3cb5c3c6d1a9')] opacity-10 bg-repeat mix-blend-multiply pointer-events-none" />
      
      {/* Content Container */}
      <div className="relative">
        {/* Hero Section with gradient overlay */}
        <section className="relative h-[80vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-amber-900/30 to-black/50">
            <Image
              src="https://images.unsplash.com/photo-1577720580479-7d839d829c73"
              alt="Art Gallery"
              fill
              className="object-cover mix-blend-overlay"
              priority
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-amber-100">
              Temukan Karya Seni Unik
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-50">
              Platform marketplace karya seni terpercaya di Indonesia
            </p>
            <Link
              href="/gallery"
              className="bg-amber-800 text-amber-50 px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Jelajahi Galeri
            </Link>
          </div>
        </section>

        {/* Featured Categories with semi-transparent background */}
        <section className="py-16 px-4 md:px-8 bg-amber-50/90 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">Kategori Karya Seni</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/gallery/${category.slug}`}
                className="group relative h-64 overflow-hidden rounded-lg"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Artwork */}
        <section className="py-16 px-4 md:px-8 bg-white/95 backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582124825395-3cb5c3c6d1a9')] opacity-5 bg-repeat mix-blend-multiply" />
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">Karya Seni Unggulan</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Karya Seni Pertama */}
            <Link
              href="/artwork/harmoni-alam"
              className="relative aspect-[16/9] rounded-xl overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9"
                alt="Harmoni Alam"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-2xl font-semibold mb-2">Harmoni Alam</h3>
                <p className="text-white/90">Karya: Sarah Wijaya</p>
              </div>
            </Link>

            {/* Karya Seni Kedua */}
            <Link
              href="/artwork/wayang-kulit-modern"
              className="relative aspect-[16/9] rounded-xl overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1600002415506-dd06090d3480"
                alt="Wayang Kulit Modern"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-2xl font-semibold mb-2">Wayang Kulit Modern</h3>
                <p className="text-white/90">Karya: Budi Santoso</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Featured Artists with warm background */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-amber-50/95 to-amber-100/95 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">Seniman Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {featuredArtists.map((artist) => (
              <Link
                key={artist.id}
                href={`/artists/${artist.id}`}
                className="group bg-white/80 p-4 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm hover:bg-white"
              >
                <div className="relative w-full aspect-square mb-4 rounded-full overflow-hidden ring-2 ring-amber-200 ring-offset-2">
                  <Image
                    src={artist.avatar}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center text-amber-900">{artist.name}</h3>
                <p className="text-amber-700 text-sm text-center">{artist.specialty}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

const categories = [
  {
    id: 1,
    name: "Lukisan",
    slug: "paintings",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5"
  },
  {
    id: 2,
    name: "Fotografi",
    slug: "photography",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5"
  },
  {
    id: 3,
    name: "Digital Art",
    slug: "digital-art",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42"
  }
];

const featuredArtists = [
  {
    id: 1,
    name: "Affandi",
    specialty: "Ekspresionisme & Lukisan",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    id: 2,
    name: "Raden Saleh",
    specialty: "Lukisan Romantisme",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    id: 3,
    name: "Basuki Abdullah",
    specialty: "Lukisan Realisme",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    id: 4,
    name: "Hendra Gunawan",
    specialty: "Lukisan Kontemporer",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce"
  }
];
