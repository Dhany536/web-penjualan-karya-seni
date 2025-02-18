import Image from "next/image";
import Link from "next/link";

export default function HarmoniAlamDetail() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Harmoni Alam</h1>
          <p className="text-lg text-amber-200">
            Karya Masterpiece oleh Sarah Wijaya
          </p>
        </div>
      </div>

      {/* Artwork Detail */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          {/* Image Section */}
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9"
              alt="Harmoni Alam"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Artist Info */}
            <div className="flex items-center mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                  alt="Sarah Wijaya"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-amber-900">Sarah Wijaya</h2>
                <p className="text-amber-700">Seniman Kontemporer Indonesia</p>
              </div>
            </div>

            {/* Artwork Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-amber-900 mb-4">Detail Karya</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Tahun:</span> 2023</p>
                  <p><span className="font-medium">Teknik:</span> Cat Minyak di Atas Kanvas</p>
                  <p><span className="font-medium">Ukuran:</span> 150 x 200 cm</p>
                  <p><span className="font-medium">Kondisi:</span> Sangat Baik</p>
                  <p className="text-2xl font-bold text-amber-800 mt-4">Rp 175.000.000</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-amber-900 mb-4">Sertifikasi & Keaslian</h3>
                <div className="space-y-2 text-gray-600">
                  <p>✓ Sertifikat Keaslian</p>
                  <p>✓ Dokumentasi Proses Pembuatan</p>
                  <p>✓ Riwayat Pameran</p>
                  <p>✓ Garansi Originalitas</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">Tentang Karya</h3>
              <div className="prose text-gray-600">
                <p className="mb-4">
                 &quot;Harmoni Alam&quot; adalah masterpiece yang diciptakan oleh Sarah Wijaya pada tahun 2023, 
                  menggambarkan keselarasan antara manusia dan alam dalam perspektif kontemporer Indonesia. 
                  Lukisan ini menggunakan teknik cat minyak yang rumit dengan lapisan-lapisan warna yang 
                  menciptakan kedalaman visual yang menakjubkan.
                </p>
                <p className="mb-4">
                  Karya ini terinspirasi dari keindahan alam Indonesia, khususnya lanskap pedesaan Jawa 
                  yang masih menjaga kearifan lokalnya. Sarah menghabiskan waktu enam bulan untuk menyelesaikan 
                  karya ini, dengan proses riset mendalam di berbagai desa di Jawa Tengah.
                </p>
                <p className="mb-4">
                  Lukisan ini telah dipamerkan di berbagai galeri prestisius, termasuk:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Galeri Nasional Indonesia (2023)</li>
                  <li>Art Jakarta (2023)</li>
                  <li>Singapore Art Museum (2023)</li>
                </ul>
                <p>
                  Karya ini mendapat pengakuan dari kritikus seni internasional dan memenangkan 
                  penghargaan &quot;Best Contemporary Artwork&quot; di Asian Art Biennale 2023.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button className="bg-amber-800 text-amber-50 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg">
                Hubungi untuk Pembelian
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 