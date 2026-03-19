import React, { useState } from 'react';
import {
  Utensils,
  Clock,
  Leaf,
  Settings2,
  Star,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  ArrowRight
} from 'lucide-react';

const App = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const whatsappLink = "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20pesan%20kateringnya!";

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800 font-sans selection:bg-orange-200">

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 text-white p-2 rounded-lg">
                <Utensils size={24} />
              </div>
              <span className="font-bold text-2xl text-stone-800 tracking-tight">Dapur<span className="text-orange-500">Ibu</span></span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#solusi" className="text-stone-600 hover:text-orange-500 font-medium transition-colors">Solusi</a>
              <a href="#menu" className="text-stone-600 hover:text-orange-500 font-medium transition-colors">Menu</a>
              <a href="#testimoni" className="text-stone-600 hover:text-orange-500 font-medium transition-colors">Testimoni</a>
              <a href="#faq" className="text-stone-600 hover:text-orange-500 font-medium transition-colors">FAQ</a>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md flex items-center gap-2"
            >
              <Phone size={18} />
              <span className="hidden sm:inline">Pesan Sekarang</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-48 -left-24 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-orange-100 text-orange-700 font-semibold px-4 py-1.5 rounded-full mb-6 text-sm border border-orange-200">
              🌿 Katering Sehat & Higienis
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-stone-900 mb-6">
              Masakan Rumahan Enak, <span className="text-orange-500">Praktis Tanpa Ribet</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 mb-8 max-w-2xl mx-auto md:mx-0">
              Cocok untuk harian, kantor, dan acara keluarga. Nikmati sajian lezat bergizi setiap hari tanpa perlu repot memasak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Pesan Sekarang via WhatsApp
                <ArrowRight size={20} />
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4 text-sm text-stone-500 font-medium">
              <div className="flex items-center gap-1"><CheckCircle2 size={16} className="text-green-500" /> Halal 100%</div>
              <div className="flex items-center gap-1"><CheckCircle2 size={16} className="text-green-500" /> Gratis Ongkir*</div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-amber-50 rounded-full transform rotate-6 scale-105 -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Masakan Rumahan Lezat"
              className="rounded-3xl shadow-2xl border-4 border-white object-cover h-[400px] md:h-[500px] w-full"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <Star className="fill-current" size={24} />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-bold uppercase tracking-wider">Rating Pelanggan</p>
                <p className="text-xl font-extrabold text-stone-800">4.9/5.0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section id="solusi" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problem */}
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200">
              <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-800">Sering Mengalami Ini?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-stone-600">
                  <span className="text-red-400 font-bold">✕</span>
                  Sibuk bekerja sampai tidak sempat masak di rumah.
                </li>
                <li className="flex gap-3 text-stone-600">
                  <span className="text-red-400 font-bold">✕</span>
                  Sering jajan di luar tapi khawatir soal gizi dan kebersihan.
                </li>
                <li className="flex gap-3 text-stone-600">
                  <span className="text-red-400 font-bold">✕</span>
                  Pengeluaran makan membengkak karena sering pesan online.
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-green-50 p-8 rounded-3xl border border-green-200 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 text-green-100 opacity-50">
                <Leaf size={160} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-green-200 text-green-700 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-900">Solusi Tepat Untuk Anda</h3>
                <p className="text-green-800 mb-6 leading-relaxed">
                  Kami hadir memberikan layanan katering rumahan yang <strong>100% fresh, higienis, dan ramah di kantong</strong>. Seperti dimasakin Ibu setiap hari!
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-green-700 font-medium">
                    <CheckCircle2 size={18} /> Gizi seimbang & higienis
                  </li>
                  <li className="flex items-center gap-2 text-green-700 font-medium">
                    <CheckCircle2 size={18} /> Harga lebih hemat
                  </li>
                  <li className="flex items-center gap-2 text-green-700 font-medium">
                    <CheckCircle2 size={18} /> Diantar langsung ke lokasi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12 text-stone-800">Kenapa Memilih Katering Kami?</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                <Leaf size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-stone-800">Fresh Setiap Hari</h4>
              <p className="text-stone-600">Bahan baku pilihan yang dibeli dan dimasak di hari yang sama untuk menjaga kualitas & kesegaran.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                <Settings2 size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-stone-800">Tanpa Pengawet</h4>
              <p className="text-stone-600">100% aman untuk konsumsi harian keluarga Anda. Dimasak tanpa MSG berlebih dan bahan pengawet.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                <Utensils size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-stone-800">Bisa Custom Menu</h4>
              <p className="text-stone-600">Punya alergi atau sedang diet? Beritahu kami, dan menu akan disesuaikan dengan kebutuhan Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-800">Menu Andalan Kami</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Pilihan menu terfavorit yang selalu menjadi incaran pelanggan setia kami.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Menu 1 */}
            <div className="bg-stone-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="h-60 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1626804475297-4160baeae0c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Ayam Bakar Spesial"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  Best Seller
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">Ayam Bakar Spesial</h3>
                <p className="text-stone-600 mb-4 text-sm line-clamp-2">Nasi hangat, ayam bakar bumbu rujak meresap sempurna, tahu, tempe, lalapan segar, dan sambal terasi juara.</p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-stone-200">
                  <span className="font-bold text-orange-600">Mulai Rp 25.000</span>
                  <a href={whatsappLink} className="text-orange-500 font-semibold hover:text-orange-700 flex items-center gap-1 text-sm">
                    Pesan <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Menu 2 */}
            <div className="bg-stone-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="h-60 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1548943487-a2e4f43b485d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Paket Nasi Box"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">Paket Nasi Box</h3>
                <p className="text-stone-600 mb-4 text-sm line-clamp-2">Solusi praktis untuk meeting kantor, pengajian, atau acara keluarga. Menu lengkap dengan buah dan air mineral.</p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-stone-200">
                  <span className="font-bold text-orange-600">Mulai Rp 30.000</span>
                  <a href={whatsappLink} className="text-orange-500 font-semibold hover:text-orange-700 flex items-center gap-1 text-sm">
                    Pesan <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Menu 3 */}
            <div className="bg-stone-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="h-60 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Catering Harian"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  Terhemat
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">Katering Harian Rantang</h3>
                <p className="text-stone-600 mb-4 text-sm line-clamp-2">Berlangganan mingguan atau bulanan. Menu bervariasi setiap hari, dijamin keluarga tidak akan bosan.</p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-stone-200">
                  <span className="font-bold text-orange-600">Rp 65.000 / hari</span>
                  <a href={whatsappLink} className="text-orange-500 font-semibold hover:text-orange-700 flex items-center gap-1 text-sm">
                    Pesan <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href={whatsappLink} className="inline-block border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full font-bold transition-colors">
              Lihat Menu Lengkap Hari Ini
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimoni" className="py-20 bg-stone-900 text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Mereka?</h2>
            <p className="text-stone-400">Ratusan keluarga dan pekerja kantoran telah membuktikan kelezatannya.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-800 p-8 rounded-2xl border border-stone-700">
              <div className="flex gap-1 text-orange-400 mb-4">
                <Star className="fill-current" size={20} /><Star className="fill-current" size={20} /><Star className="fill-current" size={20} /><Star className="fill-current" size={20} /><Star className="fill-current" size={20} />
              </div>
              <p className="text-stone-300 mb-6 italic">"Sangat membantu buat saya yang ngekos dan kerja sampai malam. Makanannya enak banget berasa masakan ibu di rumah, porsinya juga ngenyangin!"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-orange-800 font-bold text-xl">B</div>
                <div>
                  <h5 className="font-bold">Budi Santoso</h5>
                  <p className="text-xs text-stone-400">Karyawan Swasta</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-800 p-8 rounded-2xl border border-stone-700">
              <div className="flex gap-1 text-orange-400 mb-4">
                <Star className="fill-current" size={20} /><Star className="fill-current" size={20} /><Star className="fill-current" size={20} /><Star className="fill-current" size={20} /><Star className="fill-current" size={20} />
              </div>
              <p className="text-stone-300 mb-6 italic">"Pesan untuk acara arisan keluarga, semua pada suka sama ayam bakar dan sambalnya. Praktis banget, diantar on-time dan harganya oke banget buat kualitas sebagus ini!"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-bold text-xl">S</div>
                <div>
                  <h5 className="font-bold">Siti Aminah</h5>
                  <p className="text-xs text-stone-400">Ibu Rumah Tangga</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-800 p-8 rounded-2xl border border-stone-700">
              <div className="flex gap-1 text-orange-400 mb-4">
                <Star className="fill-current" size={20} /><Star className="fill-current" size={20} /><Star className="fill-current" size={20} /><Star className="fill-current" size={20} /><Star className="fill-current" size={20} />
              </div>
              <p className="text-stone-300 mb-6 italic">"Udah langganan sebulan buat makan siang di kantor. Menunya variatif tiap hari jadi anak-anak kantor gak pada bosen. Higienis dan packingnya rapi."</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-xl">A</div>
                <div>
                  <h5 className="font-bold">Andi Pratama</h5>
                  <p className="text-xs text-stone-400">Manajer HRD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Pesan Hari Ini, Kirim Besok!</h2>
          <p className="text-orange-100 text-lg md:text-xl mb-10">
            Jangan biarkan kesibukan menghalangi Anda makan sehat. Amankan slot katering Anda sekarang. Kuota harian terbatas!
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-orange-600 hover:bg-stone-100 px-10 py-5 rounded-full font-extrabold text-xl shadow-xl transition-transform transform hover:scale-105 inline-flex items-center gap-3"
          >
            <Phone fill="currentColor" size={24} />
            Hubungi WhatsApp Kami
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-stone-800">Pertanyaan Seputar Katering</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Apakah bisa pesan untuk 1 porsi saja (tanpa langganan)?",
                a: "Bisa! Kami melayani pesanan satuan, namun untuk mendapatkan promo Gratis Ongkir, terdapat minimal order sebanyak 3 porsi atau berlangganan minimal 1 minggu."
              },
              {
                q: "Bagaimana sistem pembayarannya?",
                a: "Pembayaran sangat mudah. Kami menerima transfer Bank (BCA, Mandiri, BNI) serta E-Wallet (Gopay, OVO, ShopeePay). Pembayaran dilakukan di awal (H-1) sebelum pengiriman."
              },
              {
                q: "Apakah area pengiriman mencakup seluruh kota?",
                a: "Saat ini kami fokus melayani pengiriman untuk area pusat kota dan sekitarnya (radius maksimal 15km dari dapur kami). Silakan chat admin untuk mengecek jangkauan alamat Anda."
              },
              {
                q: "Jam berapa katering biasanya diantar?",
                a: "Untuk katering makan siang, pesanan akan tiba di lokasi antara pukul 10.30 - 11.45 WIB. Untuk makan malam, diantar antara pukul 16.00 - 17.30 WIB."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-stone-800 pr-4">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-orange-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-stone-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="text-stone-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-white">
              <Utensils size={24} className="text-orange-500" />
              <span className="font-bold text-2xl tracking-tight">Dapur<span className="text-orange-500">Ibu</span></span>
            </div>
            <p className="text-sm mb-6 max-w-xs">
              Menyajikan masakan rumahan berkualitas, lezat, dan bernutrisi tinggi untuk menunjang aktivitas harian Anda.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li><a href="#solusi" className="hover:text-orange-400 transition-colors">Solusi Kami</a></li>
              <li><a href="#menu" className="hover:text-orange-400 transition-colors">Daftar Menu</a></li>
              <li><a href="#testimoni" className="hover:text-orange-400 transition-colors">Testimoni Pelanggan</a></li>
              <li><a href="#faq" className="hover:text-orange-400 transition-colors">Pertanyaan Umum (FAQ)</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Jl. Masakan Nusantara No. 123, Jakarta Selatan, 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-orange-500 flex-shrink-0" />
                <span>0812-3456-7890 (WhatsApp Only)</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-orange-500 flex-shrink-0" />
                <span>Buka: Senin - Sabtu (06.00 - 18.00)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Dapur Ibu Katering. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;