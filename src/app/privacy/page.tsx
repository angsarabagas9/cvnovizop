'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Database, Lock } from 'lucide-react';
import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/logo.svg" alt="CV NOVIZOP Logo" className="w-10 h-10" />
                <span className="ml-3 text-xl font-bold text-gray-900">CV NOVIZOP</span>
              </Link>
            </div>
            
            <div className="flex items-center">
              <Link 
                href="/" 
                className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Shield className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-lg text-gray-600">
            CV NOVIZOP - Perdagangan Eceran Peternakan
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Pendahuluan</h2>
              <p className="text-gray-600 leading-relaxed">
                Di CV NOVIZOP, kami sangat memprioritaskan privasi dan keamanan data pelanggan kami. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, 
                dan membagikan informasi pribadi Anda ketika Anda menggunakan layanan kami atau mengunjungi website kami.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-green-600">Pengumpulan Data</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Informasi yang Kami Kumpulkan:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, alamat pengiriman</li>
                    <li><strong>Informasi Bisnis:</strong> Nama perusahaan, jenis usaha peternakan, lokasi peternakan</li>
                    <li><strong>Informasi Transaksi:</strong> Riwayat pembelian, produk yang dipesan, metode pembayaran</li>
                    <li><strong>Informasi Teknis:</strong> Alamat IP, browser yang digunakan, waktu akses website</li>
                    <li><strong>Informasi Komunikasi:</strong> Isi pesan, permintaan dukungan, feedback</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cara Kami Mengumpulkan Data:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Formulir pendaftaran dan kontak di website</li>
                    <li>Interaksi langsung dengan tim kami</li>
                    <li>Transaksi pembelian produk</li>
                    <li>Cookies dan teknologi pelacakan lainnya</li>
                    <li>Komunikasi email dan telepon</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-green-600">Penggunaan Data</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Kami menggunakan informasi yang dikumpulkan untuk tujuan berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Memproses dan mengelola pesanan produk peternakan Anda</li>
                <li>Menyediakan layanan pelanggan dan dukungan teknis</li>
                <li>Menginformasikan produk baru dan penawaran khusus</li>
                <li>Memperbaiki kualitas produk dan layanan kami</li>
                <li>Memproses pembayaran dan transaksi keuangan</li>
                <li>Mengirimkan informasi penting terkait pesanan Anda</li>
                <li>Mematuhi kewajiban hukum dan peraturan yang berlaku</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-green-600">Perlindungan Data</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Kami menerapkan berbagai langkah keamanan untuk melindungi informasi pribadi Anda:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Enkripsi data saat transmisi dan penyimpanan</li>
                  <li>Akses terbatas hanya untuk authorized personnel</li>
                  <li>Firewall dan sistem keamanan yang terupdate</li>
                  <li>Backup data yang aman dan teratur</li>
                  <li>Monitoring keamanan 24/7</li>
                  <li>Training rutin untuk staf tentang keamanan data</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Pembagian Data</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga 
                  tanpa persetujuan Anda, kecuali dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Penyedia Layanan:</strong> Pihak ketiga yang membantu operasional bisnis kami (payment gateway, jasa pengiriman)</li>
                  <li><strong>Kewajiban Hukum:</strong> Jika diwajibkan oleh hukum atau perintah resmi dari pemerintah</li>
                  <li><strong>Transfer Bisnis:</strong> Dalam kasus merger, akuisisi, atau penjualan aset perusahaan</li>
                  <li><strong>Perlindungan Hak:</strong> Untuk melindungi hak, properti, atau keselamatan CV NOVIZOP dan pelanggan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Hak Anda Sebagai Pengguna</h2>
              <div className="space-y-4 text-gray-600">
                <p>Sebagai pengguna, Anda memiliki hak untuk:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mengakses dan melihat informasi pribadi yang kami simpan tentang Anda</li>
                  <li>Memperbaiki informasi yang tidak akurat atau tidak lengkap</li>
                  <li>Menghapus informasi pribadi Anda (dengan batasan tertentu)</li>
                  <li>Menolak pemasaran langsung dari kami</li>
                  <li>Meminta salinan data pribadi Anda</li>
                  <li>Menarik persetujuan untuk pemrosesan data</li>
                </ul>
                <p>
                  Untuk menjalankan hak-hak ini, silakan hubungi kami melalui email atau telepon yang tersedia.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Kebijakan Cookies</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Cookies Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                  <li><strong>Cookies Performa:</strong> Membantu kami memahami cara penggunaan website</li>
                  <li><strong>Cookies Fungsional:</strong> Mengingat preferensi dan pengaturan Anda</li>
                  <li><strong>Cookies Pemasaran:</strong> Digunakan untuk menampilkan iklan yang relevan</li>
                </ul>
                <p>
                  Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Hubungi Kami</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau cara kami menangani data Anda, 
                  silakan hubungi kami:
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold">CV NOVIZOP</p>
                  <p>JLN. SILIWANGI NO. 29, Pakuwon, Garut Kota</p>
                  <p>Kab. Garut, Jawa Barat 44117</p>
                  <p>Telepon: 082382466248</p>
                  <p>Email: privacy@novizop.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Pembaruan Kebijakan</h2>
              <p className="text-gray-600">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan 
                dalam praktik bisnis kami atau perubahan peraturan yang berlaku. Perubahan signifikan akan 
                diberitahukan melalui website atau email kepada pengguna terdaftar.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}