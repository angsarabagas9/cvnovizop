'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Menu, X, Phone, Mail, MapPin, Package, Users, Award, ChevronRight, ArrowUp } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Terima kasih! Pesan Anda telah dikirim.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src="/logo.svg" alt="CV NOVIZOP Logo" className="w-10 h-10" />
                <span className="ml-3 text-xl font-bold text-gray-900">CV NOVIZOP</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-600 transition-colors">Beranda</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 transition-colors">Tentang</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-green-600 transition-colors">Produk</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 transition-colors">Kontak</button>
              <a href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-green-600 transition-colors">Terms</a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600">Beranda</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600">Tentang</button>
              <button onClick={() => scrollToSection('products')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600">Produk</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600">Kontak</button>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-green-600">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-green-600">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                CV NOVIZOP
              </h1>
              <h2 className="text-2xl text-green-600 font-semibold mb-4">
                Perdagangan Eceran Peternakan Terpercaya
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Mitra terpercaya untuk kebutuhan peternakan Anda. Menyediakan produk berkualitas tinggi untuk mendukung kesuksesan bisnis peternakan Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={() => scrollToSection('contact')}>
                  Hubungi Kami
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" onClick={() => scrollToSection('products')}>
                  Lihat Produk
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-400 to-amber-400 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <img src="/logo.svg" alt="CV NOVIZOP Logo" className="w-24 h-24" />
                  </div>
                  <p className="text-2xl font-bold">CV NOVIZOP</p>
                  <p className="text-lg">Quality Products For Better Farming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Package className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Produk Berkualitas</h3>
                <p className="text-gray-600">Menyediakan produk peternakan dengan kualitas terbaik dan terjamin</p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pelayanan Terbaik</h3>
                <p className="text-gray-600">Tim profesional siap membantu kebutuhan peternakan Anda</p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Terpercaya</h3>
                <p className="text-gray-600">Reputasi terpercaya dalam industri perdagangan peternakan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tentang CV NOVIZOP</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami adalah perusahaan perdagangan eceran peternakan yang berkomitmen untuk menyediakan produk berkualitas tinggi dan layanan terbaik untuk para peternak.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Visi Kami</h3>
              <p className="text-gray-600 mb-6">
                Menjadi mitra terpercaya dan utama dalam mendukung industri peternakan Indonesia dengan menyediakan produk berkualitas dan layanan prima.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Misi Kami</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Menyediakan produk peternakan berkualitas tinggi</li>
                <li>• Memberikan pelayanan terbaik untuk pelanggan</li>
                <li>• Mendukung pengembangan industri peternakan lokal</li>
                <li>• Menjaga kepercayaan dan kepuasan pelanggan</li>
              </ul>
            </div>
            
            <Card className="p-8 bg-white">
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-green-600">Alamat</h4>
                  <p className="text-gray-600">
                    JLN. SILIWANGI NO. 29, Desa/Kelurahan Pakuwon, Kec. Garut Kota, Kab. Garut, Provinsi Jawa Barat
                  </p>
                  <p className="text-gray-600">Kode Pos: 44117</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-green-600">Kontak</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-green-600" />
                      082382466248
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-green-600" />
                      info@novizop.com
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Produk Kami</h2>
            <p className="text-lg text-gray-600">
              Berbagai produk peternakan berkualitas untuk kebutuhan Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Pakan Ternak", desc: "Pakan ternak berkualitas dengan nutrisi seimbang", icon: "🌾" },
              { name: "Vitamin & Suplemen", desc: "Produk kesehatan dan nutrisi ternak", icon: "💊" },
              { name: "Peralatan Peternakan", desc: "Peralatan modern untuk kemudahan beternak", icon: "🔧" },
              { name: "Obat-obatan", desc: "Obat-obatan terpercaya untuk kesehatan ternak", icon: "🏥" },
              { name: "Kandang & Aksesoris", desc: "Kandang dan perlengkapan peternakan", icon: "🏠" },
              { name: "Produk Unggulan", desc: "Produk-produk pilihan dengan kualitas terbaik", icon: "⭐" }
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-green-100">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-lg text-gray-600">
              Siap membantu kebutuhan peternakan Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Informasi Kontak</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-green-600 mt-1" />
                      <div>
                        <p className="font-medium">Alamat</p>
                        <p className="text-gray-600">
                          JLN. SILIWANGI NO. 29, Desa/Kelurahan Pakuwon, Kec. Garut Kota, Kab. Garut, Provinsi Jawa Barat
                        </p>
                        <p className="text-gray-600">Kode Pos: 44117</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-green-600" />
                      <div>
                        <p className="font-medium">Telepon</p>
                        <p className="text-gray-600">082382466248</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-green-600" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">info@novizop.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4 text-green-600">Kirim Pesan</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Nama Anda"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      rows={4}
                      placeholder="Pesan Anda..."
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.svg" alt="CV NOVIZOP Logo" className="w-10 h-10 mr-3" />
                <span className="text-xl font-bold">CV NOVIZOP</span>
              </div>
              <p className="text-green-100">
                Perdagangan eceran peternakan terpercaya di Garut, Jawa Barat.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-green-100">
                <li>Pakan Ternak</li>
                <li>Vitamin & Suplemen</li>
                <li>Peralatan Peternakan</li>
                <li>Obat-obatan</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-green-100">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white">Tentang Kami</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-white">Produk</button></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-green-100">
                <p>JLN. SILIWANGI NO. 29</p>
                <p>Pakuwon, Garut Kota</p>
                <p>Jawa Barat 44117</p>
                <p>082382466248</p>
                <p>info@novizop.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
            <p>&copy; 2024 CV NOVIZOP. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}