'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, FileText, ShoppingCart, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
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
            <FileText className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat dan Ketentuan
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
                Selamat datang di CV NOVIZOP. Syarat dan Ketentuan ini mengatur penggunaan layanan kami, 
                pembelian produk, dan hubungan bisnis antara CV NOVIZOP dan pelanggan. Dengan menggunakan 
                layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
            </CardContent>
          </Card>

          {/* Company Information */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Informasi Perusahaan</h2>
              <div className="bg-green-50 p-4 rounded-lg text-gray-600">
                <p className="font-semibold mb-2">CV NOVIZOP</p>
                <p><strong>Alamat:</strong> JLN. SILIWANGI NO. 29, Desa/Kelurahan Pakuwon, Kec. Garut Kota, Kab. Garut, Provinsi Jawa Barat</p>
                <p><strong>Kode Pos:</strong> 44117</p>
                <p><strong>Telepon:</strong> 082382466248</p>
                <p><strong>Email:</strong> info@novizop.com</p>
                <p><strong>Bidang Usaha:</strong> Perdagangan Eceran Peternakan</p>
              </div>
            </CardContent>
          </Card>

          {/* Products and Services */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <ShoppingCart className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-green-600">Produk dan Layanan</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Produk yang Kami Tawarkan:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pakan ternak berkualitas tinggi</li>
                    <li>Vitamin dan suplemen ternak</li>
                    <li>Obat-obatan ternak terpercaya</li>
                    <li>Peralatan dan aksesoris peternakan</li>
                    <li>Kandang dan perlengkapan ternak</li>
                    <li>Produk kesehatan dan kebersihan ternak</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Kualitas Produk:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Semua produk yang dijual telah melalui quality control</li>
                    <li>Produk kami memenuhi standar kesehatan dan keamanan</li>
                    <li>Kami memberikan jaminan keaslian produk</li>
                    <li>Informasi produk lengkap dan transparan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ordering and Payment */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Pemesanan dan Pembayaran</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Proses Pemesanan:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pemesanan dapat dilakukan melalui telepon, WhatsApp, atau email</li>
                    <li>Konfirmasi stok produk sebelum pembayaran</li>
                    <li>Pemesanan minimal 1 hari sebelum pengiriman</li>
                    <li>Pembayaran harus dilakukan sebelum produk dikirim</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Metode Pembayaran:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Transfer bank (BCA, BRI, Mandiri)</li>
                    <li>Tunai (untuk pembelian langsung)</li>
                    <li>E-wallet (OVO, GoPay, Dana)</li>
                    <li>Pembayaran tempo (untuk pelanggan terdaftar dengan syarat)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery and Shipping */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Pengiriman dan Pengantaran</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Layanan Pengiriman:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pengiriman lokal (area Garut dan sekitarnya)</li>
                    <li>Pengiriman ekspedisi untuk luar kota</li>
                    <li>Pengambilan langsung di toko/kantor kami</li>
                    <li>Pengiriman same day untuk pesanan sebelum pukul 10:00</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Biaya Pengiriman:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Gratis ongkir untuk pembelian minimal Rp 500.000 (area Garut)</li>
                    <li>Biaya pengiriman disesuaikan dengan jarak dan berat</li>
                    <li>Kami menggunakan jasa ekspedisi terpercaya untuk luar kota</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Returns and Refunds */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Pengembalian dan Pengembalian Dana</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Kebijakan Pengembalian:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pengembalian dapat dilakukan dalam waktu 3 hari sejak pembelian</li>
                    <li>Produk harus dalam kondisi utuh dan tidak terpakai</li>
                    <li>Harus melampirkan bukti pembelian yang sah</li>
                    <li>Pengembalian karena kesalahan kami (produk rusak/expired) akan diganti 100%</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Produk yang Tidak Dapat Dikembalikan:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pakan yang sudah dibuka atau digunakan</li>
                    <li>Obat-obatan dan vitamin</li>
                    <li>Produk dengan diskon khusus</li>
                    <li>Produk yang sudah melewati batas waktu pengembalian</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warranty */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-green-600">Garansi Produk</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Kami memberikan garansi untuk produk tertentu dengan syarat dan ketentuan berlaku:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Garansi keaslian produk</li>
                  <li>Garansi kondisi produk saat diterima</li>
                  <li>Garansi expired date minimal 6 bulan (kecuali produk khusus)</li>
                  <li>Garansi untuk peralatan peternakan (sesuai ketentuan produsen)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-green-600">Batasan Tanggung Jawab</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  CV NOVIZOP tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Kerugian yang disebabkan oleh penggunaan produk yang tidak sesuai anjuran</li>
                  <li>Keterlambatan pengiriman yang disebabkan oleh pihak ketiga (ekspedisi)</li>
                  <li>Ketersediaan stok produk yang berubah sewaktu-waktu</li>
                  <li>Harga yang dapat berubah tanpa pemberitahuan terlebih dahulu</li>
                  <li>Kerusakan produk setelah diterima pelanggan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Hak Kekayaan Intelektual</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Semua konten di website dan materi promosi CV NOVIZOP dilindungi oleh hak cipta:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nama "CV NOVIZOP" adalah merek dagang terdaftar</li>
                  <li>Logo dan desain grafis adalah hak milik CV NOVIZOP</li>
                  <li>Foto produk dan deskripsi tidak boleh disalin tanpa izin</li>
                  <li>Website dan semua isinya dilindungi undang-undang hak cipta</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Privasi Data</h2>
              <p className="text-gray-600 mb-4">
                Kami berkomitmen untuk melindungi privasi data pelanggan. Penggunaan data pribadi Anda 
                diatur dalam Kebijakan Privasi kami yang dapat diakses melalui link di website.
              </p>
              <p className="text-gray-600">
                Dengan menggunakan layanan kami, Anda setuju dengan pengumpulan dan penggunaan data 
                sesuai dengan Kebijakan Privasi yang berlaku.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Hukum yang Berlaku</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                  Setiap sengketa yang timbul dari atau berhubungan dengan Syarat dan Ketentuan ini akan 
                  diselesaikan melalui musyawarah terlebih dahulu.
                </p>
                <p>
                  Jika musyawarah tidak mencapai kesepakatan, sengketa akan diselesaikan melalui 
                  pengadilan negeri di Garut, Jawa Barat.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-600">
                CV NOVIZOP berhak mengubah Syarat dan Ketentuan ini sewaktu-waktu. Perubahan akan 
                diberitahukan melalui website atau komunikasi langsung kepada pelanggan. Penggunaan 
                layanan setelah perubahan berarti Anda menyetujui syarat dan ketentuan yang baru.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-green-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Hubungi Kami</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold">CV NOVIZOP</p>
                  <p>JLN. SILIWANGI NO. 29, Pakuwon, Garut Kota</p>
                  <p>Kab. Garut, Jawa Barat 44117</p>
                  <p>Telepon: 082382466248</p>
                  <p>Email: info@novizop.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}