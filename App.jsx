import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Tractor, Droplets, Phone } from "lucide-react";

export default function App() {
  const [form, setForm] = useState({ name: "", message: "" });

  return (
    <div className="font-sans scroll-smooth">
      {/* Header */}
      <header className="bg-green-800 text-white py-4 px-8 flex justify-between items-center shadow-md fixed w-full z-10">
        <h1 className="text-2xl font-bold">🌾 BR FARM</h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#home" className="hover:text-yellow-300">Beranda</a>
          <a href="#about" className="hover:text-yellow-300">Tentang</a>
          <a href="#services" className="hover:text-yellow-300">Layanan</a>
          <a href="#products" className="hover:text-yellow-300">Produk</a>
          <a href="#contact" className="hover:text-yellow-300">Kontak</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4" style={{backgroundImage: "url('https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=1400&q=80')"}}>
        <div className="bg-black/50 p-8 rounded-2xl text-white max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Solusi Pertanian Modern untuk Petani Indonesia</h2>
          <p className="mb-6 text-lg">BR FARM menghadirkan teknologi drone dan pupuk berkualitas untuk hasil panen terbaik.</p>
          <a href="https://wa.me/6281236261961" target="_blank" rel="noopener noreferrer">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">Sewa Drone Sekarang</Button>
          </a>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="about" className="py-20 bg-green-50 text-center px-6">
        <h3 className="text-3xl font-bold text-green-800 mb-6">Tentang BR FARM</h3>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          BR FARM adalah kelompok tani yang berfokus pada inovasi pertanian modern. Kami menyediakan layanan drone, pupuk organik cair dan padat, serta pelatihan pertanian berteknologi tinggi untuk meningkatkan hasil panen petani Indonesia.
        </p>
      </section>

      {/* Layanan */}
      <section id="services" className="py-20 bg-white text-center px-6">
        <h3 className="text-3xl font-bold text-green-800 mb-10">Layanan Kami</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <Tractor className="mx-auto text-green-700 w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Sewa Drone Pertanian</h4>
              <p>Pelayanan penyemprotan otomatis dengan drone modern untuk efisiensi dan hasil optimal.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <Droplets className="mx-auto text-green-700 w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Pupuk Cair & Padat</h4>
              <p>Penyediaan pupuk organik cair dan padat berkualitas tinggi untuk segala jenis tanaman.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <Leaf className="mx-auto text-green-700 w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Pelatihan Pertanian</h4>
              <p>Kami memberikan edukasi dan pelatihan bagi petani dalam penggunaan teknologi pertanian modern.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Produk */}
      <section id="products" className="py-20 bg-green-50 text-center px-6">
        <h3 className="text-3xl font-bold text-green-800 mb-10">Produk Unggulan</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <img src="https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=80" alt="Pupuk Cair" className="rounded-lg mb-4" />
              <h4 className="text-xl font-semibold mb-2">Pupuk Cair Organik</h4>
              <p>Pupuk cair alami dengan nutrisi lengkap untuk pertumbuhan tanaman lebih cepat.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <img src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80" alt="Pupuk Padat" className="rounded-lg mb-4" />
              <h4 className="text-xl font-semibold mb-2">Pupuk Padat Kompos</h4>
              <p>Pupuk padat berkualitas tinggi untuk memperbaiki struktur tanah dan menjaga kesuburan jangka panjang.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Kontak */}
      <section id="contact" className="py-20 bg-white text-center px-6">
        <h3 className="text-3xl font-bold text-green-800 mb-6">Hubungi Kami</h3>
        <p className="text-gray-600 mb-6">Ingin bekerja sama atau memesan produk kami? Kirim pesan atau hubungi kami langsung di WhatsApp.</p>
        <div className="max-w-md mx-auto">
          <input type="text" placeholder="Nama Anda" className="border rounded-lg w-full mb-4 p-2" onChange={e => setForm({...form, name: e.target.value})} />
          <textarea placeholder="Pesan Anda" className="border rounded-lg w-full mb-4 p-2" rows="4" onChange={e => setForm({...form, message: e.target.value})}></textarea>
          <a href={`https://wa.me/6281236261961?text=Halo%20BR%20FARM,%20saya%20${form.name}%20ingin%20${form.message}`} target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-700 hover:bg-green-800 text-white font-semibold flex items-center mx-auto">
              <Phone className="mr-2 w-4 h-4" /> Kirim via WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white text-center py-6 mt-10">
        <p>© 2025 BR FARM. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}
