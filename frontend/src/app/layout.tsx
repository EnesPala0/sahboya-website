import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Şah Boya | Mimari Yüzey Çözümleri",
  description: "Kaliteli Boya ve Renk Çözümlerinde Doğrudan Üretici Güvencesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${outfit.variable} ${jakarta.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased">
        <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="bg-primary text-on-primary py-space-xs px-gutter-sm text-center font-label-md text-label-md">
            <div className="max-w-[1380px] mx-auto flex items-center justify-between gap-space-md flex-wrap px-gutter">
              <div className="flex items-center gap-space-lg flex-wrap">
                <a className="flex items-center gap-space-xs hover:text-secondary-fixed transition-colors" href="tel:08503000000">
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  <span>Hızlı Sipariş & Destek: <strong>0850 300 00 00</strong></span>
                </a>
                <span className="opacity-40 hidden md:inline">|</span>
                <a className="flex items-center gap-space-xs hover:text-secondary-fixed transition-colors" href="https://wa.me/908503000000" target="_blank" rel="noreferrer">
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>WhatsApp Hızlı Fiyat & Bilgi</span>
                </a>
              </div>
              <div className="flex items-center gap-space-md font-body-sm text-body-sm opacity-90">
                <span className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span>Hafta İçi 08:30 - 18:30</span>
                </span>
                <span className="opacity-40 hidden sm:inline">|</span>
                <span className="hidden sm:inline">Doğrudan Fabrika Satış & Sevkiyat</span>
              </div>
            </div>
          </div>
          
          <div className="h-20 max-w-[1380px] mx-auto px-gutter flex items-center justify-between gap-space-lg">
            <div className="flex items-center gap-space-md">
              <Link className="flex flex-col" href="/">
                <span className="font-headline-md text-headline-md text-primary tracking-tight font-bold">ŞAH BOYA</span>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Mimari Yüzey Çözümleri</span>
              </Link>
            </div>
            <div className="hidden md:flex flex-1 max-w-lg mx-space-md">
              <div className="relative w-full flex items-center">
                <input className="w-full h-11 pl-11 pr-space-md bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all" placeholder="Ürün adı, renk kodu veya yüzey tipi arayın..." type="text" />
                <span className="material-symbols-outlined absolute left-space-md text-on-surface-variant text-[20px]">search</span>
              </div>
            </div>
            <div className="flex items-center gap-space-md">
              <a className="hidden lg:flex items-center gap-space-xs text-primary hover:text-secondary font-label-lg text-label-lg px-space-md py-2.5 rounded-lg border border-surface-container-high transition-colors" href="tel:08503000000">
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>Bizi Arayın</span>
              </a>
              <a className="flex items-center gap-space-sm bg-primary text-on-primary px-space-lg py-2.5 rounded-lg hover:bg-primary-container transition-all shadow-sm font-label-lg text-label-lg" href="https://wa.me/908503000000" target="_blank" rel="noreferrer">
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>WhatsApp'tan Fiyat Al</span>
              </a>
            </div>
          </div>
          
          <nav className="bg-surface-container-low border-t border-surface-container-high hidden lg:block">
            <div className="max-w-[1380px] mx-auto px-gutter flex items-center justify-between">
              <div className="flex items-center space-x-2 py-1">
                <Link className="px-space-md py-2 text-primary font-bold font-label-lg text-label-lg hover:bg-surface-container-high rounded-lg transition-colors" href="/">Ana Sayfa</Link>
                <div className="relative group">
                  <button className="px-space-md py-2 text-on-surface-variant group-hover:text-primary group-hover:bg-surface-container-high font-label-lg text-label-lg rounded-lg transition-colors flex items-center gap-1">
                    <span>Ürünlerimiz</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:rotate-180 transition-transform">expand_more</span>
                  </button>
                  <div className="absolute top-full left-0 w-80 bg-surface-container-lowest rounded-xl shadow-xl border border-surface-container-high p-space-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <Link className="flex items-center gap-space-sm p-space-sm hover:bg-surface-container-low rounded-lg transition-colors" href="#katalog">
                      <span className="material-symbols-outlined text-primary text-[20px]">format_paint</span>
                      <div>
                        <div className="font-label-md text-label-md text-primary font-bold">İç Cephe Boyaları</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">İpek mat, mat, antibakteriyel</div>
                      </div>
                    </Link>
                  </div>
                </div>
                <Link className="px-space-md py-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-lg text-label-lg rounded-lg transition-colors" href="#renk-kartelasi">Renk Kartelası</Link>
                <Link className="px-space-md py-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-lg text-label-lg rounded-lg transition-colors" href="#boya-hesaplayici">Boya Hesaplayıcı</Link>
              </div>
            </div>
          </nav>
        </header>

        {children}

        <footer className="w-full bg-surface-container-lowest text-on-surface border-t border-surface-container-high mt-space-3xl">
          {/* CTA Pre-footer */}
          <div className="bg-surface-container-low py-space-xl border-b border-surface-container-high" id="iletisim">
            <div className="max-w-[1380px] mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-space-lg">
              <div>
                <span className="font-headline-sm text-headline-sm text-primary block font-bold mb-1">Doğrudan Üretici İle İletişime Geçin</span>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Şantiye, kurumsal proje veya perakende ihtiyaçlarınız için danışmanlarımızla hemen görüşün. Toptan fiyat teklifi alın.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-space-sm w-full md:w-auto">
                <a className="bg-[#25D366] hover:bg-[#128C7E] text-white px-space-xl py-3 rounded-xl font-label-lg text-label-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-space-xs font-bold" href="https://wa.me/905335028026" rel="noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>WhatsApp'tan Yazın</span>
                </a>
                <a className="bg-primary hover:bg-primary-container text-on-primary px-space-xl py-3 rounded-xl font-label-lg text-label-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-space-xs font-bold" href="tel:+905335028026">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  <span>Hemen Arayın</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Main Footer Content */}
          <div className="max-w-[1380px] mx-auto px-gutter py-space-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-2xl">
              {/* Brand Info */}
              <div>
                <div className="flex items-center gap-2 mb-space-lg">
                  <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold text-xl leading-none shadow-sm">Ş</div>
                  <span className="font-headline-md text-headline-md text-primary font-bold tracking-tight">Şah Boya</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg leading-relaxed">
                  Türkiye'nin yenilikçi boya ve yüzey koruma sistemleri üreticisi. Doğa dostu formüller, üstün kapatıcılık ve uzun ömürlü renkler.
                </p>
                <div className="flex items-center gap-space-sm text-on-surface-variant">
                  <a className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all hover:scale-110" href="#" title="Instagram">
                    <span className="material-symbols-outlined">photo_camera</span>
                  </a>
                  <a className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all hover:scale-110" href="#" title="Facebook">
                    <span className="material-symbols-outlined">thumb_up</span>
                  </a>
                  <a className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all hover:scale-110" href="#" title="LinkedIn">
                    <span className="material-symbols-outlined">work</span>
                  </a>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="font-label-lg text-label-lg text-primary font-bold mb-space-lg">Ürün Grupları</h4>
                <ul className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant">
                  <li><Link className="hover:text-primary hover:underline transition-colors flex items-center gap-1 group" href="#"><span className="material-symbols-outlined text-[16px] text-transparent group-hover:text-secondary transition-colors">chevron_right</span>İç Cephe Boyaları</Link></li>
                  <li><Link className="hover:text-primary hover:underline transition-colors flex items-center gap-1 group" href="#"><span className="material-symbols-outlined text-[16px] text-transparent group-hover:text-secondary transition-colors">chevron_right</span>Dış Cephe Kaplamaları</Link></li>
                  <li><Link className="hover:text-primary hover:underline transition-colors flex items-center gap-1 group" href="#"><span className="material-symbols-outlined text-[16px] text-transparent group-hover:text-secondary transition-colors">chevron_right</span>Tavan & Astar Serisi</Link></li>
                  <li><Link className="hover:text-primary hover:underline transition-colors flex items-center gap-1 group" href="#"><span className="material-symbols-outlined text-[16px] text-transparent group-hover:text-secondary transition-colors">chevron_right</span>Ahşap & Metal Koruyucular</Link></li>
                  <li><Link className="hover:text-primary hover:underline transition-colors flex items-center gap-1 group" href="#"><span className="material-symbols-outlined text-[16px] text-transparent group-hover:text-secondary transition-colors">chevron_right</span>İzolasyon Malzemeleri</Link></li>
                </ul>
              </div>
              
              {/* Support */}
              <div>
                <h4 className="font-label-lg text-label-lg text-primary font-bold mb-space-lg">Kurumsal</h4>
                <ul className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant">
                  <li><Link className="hover:text-primary hover:underline transition-colors flex items-center gap-1 group" href="#"><span className="material-symbols-outlined text-[16px] text-transparent group-hover:text-secondary transition-colors">chevron_right</span>Hakkımızda</Link></li>
                  <li><Link className="hover:text-primary hover:underline transition-colors flex items-center gap-1 group" href="#"><span className="material-symbols-outlined text-[16px] text-transparent group-hover:text-secondary transition-colors">chevron_right</span>Kalite Belgelerimiz</Link></li>
                  <li><Link className="hover:text-primary hover:underline transition-colors flex items-center gap-1 group" href="#"><span className="material-symbols-outlined text-[16px] text-transparent group-hover:text-secondary transition-colors">chevron_right</span>Sürdürülebilirlik</Link></li>
                  <li><Link className="hover:text-primary hover:underline transition-colors flex items-center gap-1 group" href="#boya-hesaplayici"><span className="material-symbols-outlined text-[16px] text-transparent group-hover:text-secondary transition-colors">chevron_right</span>Boya Hesaplayıcı</Link></li>
                  <li><Link className="hover:text-primary hover:underline transition-colors flex items-center gap-1 group" href="#iletisim"><span className="material-symbols-outlined text-[16px] text-transparent group-hover:text-secondary transition-colors">chevron_right</span>İletişim</Link></li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <h4 className="font-label-lg text-label-lg text-primary font-bold mb-space-lg">İletişim Bilgileri</h4>
                <ul className="flex flex-col gap-space-md font-body-sm text-body-sm text-on-surface-variant">
                  <li className="flex gap-space-sm items-start">
                    <span className="material-symbols-outlined text-[20px] text-secondary shrink-0 mt-0.5">location_on</span>
                    <span>Atatürk Organize Sanayi Bölgesi<br />Fabrika Cd. No:42, İzmir</span>
                  </li>
                  <li className="flex gap-space-sm items-center">
                    <span className="material-symbols-outlined text-[20px] text-secondary shrink-0">mail</span>
                    <a className="hover:text-primary hover:underline transition-colors" href="mailto:info@sahboya.com">info@sahboya.com</a>
                  </li>
                  <li className="flex gap-space-sm items-center">
                    <span className="material-symbols-outlined text-[20px] text-secondary shrink-0">schedule</span>
                    <span>Pzt - Cmt: 08:30 - 18:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-surface-container-high py-space-md bg-surface-container-lowest">
            <div className="max-w-[1380px] mx-auto px-gutter flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
              <span>© {new Date().getFullYear()} Şah Boya Kimya San. Tic. A.Ş. Tüm hakları saklıdır.</span>
              <div className="flex items-center gap-space-md">
                <Link className="hover:text-primary hover:underline transition-colors" href="#">Gizlilik Politikası</Link>
                <Link className="hover:text-primary hover:underline transition-colors" href="#">Kullanım Koşulları</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
