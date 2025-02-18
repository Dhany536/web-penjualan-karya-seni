import Image from "next/image";
import Link from "next/link";

export default function WayangKulitModernDetail() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Wayang Kulit Modern</h1>
          <p className="text-lg text-amber-200">
            Karya Masterpiece oleh Budi Santoso
          </p>
        </div>
      </div>

      {/* Artwork Detail */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          {/* Image Section */}
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="https://images.unsplash.com/photo-1600002415506-dd06090d3480"
              alt="Wayang Kulit Modern"
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
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="Budi Santoso"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-amber-900">Budi Santoso</h2>
                <p className="text-amber-700">Seniman Wayang Kontemporer</p>
              </div>
            </div>

            {/* Artwork Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-amber-900 mb-4">Detail Karya</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Tahun:</span> 2023</p>
                  <p><span className="font-medium">Teknik:</span> Kulit Sapi, Mixed Media</p>
                  <p><span className="font-medium">Ukuran:</span> 100 x 150 cm</p>
                  <p><span className="font-medium">Kondisi:</span> Sangat Baik</p>
                  <p className="text-2xl font-bold text-amber-800 mt-4">Rp 225.000.000</p>
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
                  "Wayang Kulit Modern" adalah perpaduan unik antara seni wayang kulit tradisional 
                  dengan interpretasi kontemporer. Budi Santoso menghabiskan dua tahun untuk 
                  mempelajari teknik tradisional pembuatan wayang kulit dari para maestro di Solo 
                  dan Yogyakarta sebelum menciptakan karya ini.
                </p>
                <p className="mb-4">
                  Karya ini menggabungkan motif klasik wayang dengan elemen modern, menggunakan 
                  teknik pewarnaan kontemporer dan material inovatif sambil tetap mempertahankan 
                  esensi spiritual wayang kulit tradisional.
                </p>
                <p className="mb-4">
                  Pameran dan Penghargaan:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Museum Wayang Indonesia (2023)</li>
                  <li>Biennale Jogja XVI (2023)</li>
                  <li>Contemporary Art Exhibition Tokyo (2023)</li>
                </ul>
                <p>
                  Karya ini telah mendapat pengakuan dari komunitas seni tradisional dan kontemporer, 
                  menjembatani kesenjangan antara warisan budaya dan inovasi modern.
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