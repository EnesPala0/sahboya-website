"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };
  
  const scrollRight = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  const [alan, setAlan] = useState(45);
  const [kat, setKat] = useState(2);
  const [yuzeyKatsayisi, setYuzeyKatsayisi] = useState(1.0);
  const [tavanDahil, setTavanDahil] = useState(false);
  
  const [hesaplananLitre, setHesaplananLitre] = useState("9.0");
  const [onerilenKutu, setOnerilenKutu] = useState("1 Adet 10L Kutu (veya 15L Eko Boy)");
  const [tavanBilgi, setTavanBilgi] = useState("Tavan boyası hariç hesaplandı.");
  
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastData, setToastData] = useState({ baslik: "", mesaj: "" });
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let gerekenLitre = (alan * kat / 10) * yuzeyKatsayisi;

    if (tavanDahil) {
      const tavanAlan = alan * 0.4;
      const tavanLitre = (tavanAlan * 2 / 8);
      setTavanBilgi(`+ Yaklaşık ${tavanLitre.toFixed(1)}L Tavan Boyası dahil öneri.`);
    } else {
      setTavanBilgi('Tavan boyası hariç hesaplandı.');
    }

    const roundedLitre = gerekenLitre.toFixed(1);
    setHesaplananLitre(roundedLitre);

    let ambalaj = '';
    if (gerekenLitre <= 2.5) {
      ambalaj = '1 Adet 2.5L Kutu';
    } else if (gerekenLitre <= 7.5) {
      ambalaj = '1 Adet 7.5L Kutu';
    } else if (gerekenLitre <= 10) {
      ambalaj = '1 Adet 10L Kutu (veya 15L Eko Boy)';
    } else if (gerekenLitre <= 15) {
      ambalaj = '1 Adet 15L Büyük Boy Teneke';
    } else {
      const tenekeSayisi = Math.ceil(gerekenLitre / 15);
      ambalaj = `${tenekeSayisi} Adet 15L Boya Tenekesi`;
    }
    setOnerilenKutu(ambalaj);
  }, [alan, kat, yuzeyKatsayisi, tavanDahil]);

  const triggerToast = (baslik: string, mesaj: string) => {
    setToastData({ baslik, mesaj });
    setIsToastOpen(true);
    setTimeout(() => {
      setIsToastOpen(false);
    }, 3200);
  };

  return (
    <main className="w-full pt-36 bg-surface min-h-[calc(100vh-144px)]">
      
      {/* BÖLÜM 1: Karşılama ve Kampanyalar */}
      <section className="relative w-full overflow-hidden bg-surface-container-low py-space-xl lg:py-space-3xl">
        <div className="max-w-[1380px] mx-auto px-gutter relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
            <div className="lg:col-span-6 flex flex-col gap-space-lg">
              <div className="inline-flex items-center gap-space-xs bg-surface-container-highest px-space-md py-1.5 rounded-full w-fit">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Doğrudan Üretici Güvencesi & Mimari Çözümler</span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <h1 className="font-headline-xl text-headline-xl lg:font-display-lg lg:text-display-lg text-primary tracking-tight font-bold">Kaliteli Boya ve Renk Çözümlerinde Doğrudan Üretici Güvencesi</h1>
                <p className="font-body-xl text-body-xl text-on-surface-variant max-w-xl">Mimari projeler, ustalar ve yaşam alanları için doğrudan fabrikadan toptan ve perakende hızlı fiyat teklifi alın.</p>
              </div>
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <a className="bg-primary text-on-primary hover:bg-primary-container transition-all duration-200 px-space-xl py-3.5 rounded-lg font-headline-sm text-headline-sm flex items-center gap-space-xs shadow-md" href="https://wa.me/908503000000" target="_blank" rel="noreferrer">
                  <span className="material-symbols-outlined text-[22px]">chat</span>
                  <span>WhatsApp ile Fiyat Al</span>
                </a>
                <a className="bg-surface-container-lowest text-primary border border-surface-container-high hover:bg-surface-container-high transition-all duration-200 px-space-xl py-3.5 rounded-lg font-headline-sm text-headline-sm flex items-center gap-space-xs shadow-sm" href="#katalog">
                  <span className="material-symbols-outlined text-[20px]">menu_book</span>
                  <span>Ürün Kataloğunu İncele</span>
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-md">
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[28px]">factory</span>
                  <span className="font-label-md text-label-md text-primary font-bold">Doğrudan Satış</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Fabrikadan adrese teslim</span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[28px]">layers</span>
                  <span className="font-label-md text-label-md text-primary font-bold">Yüksek Örtücülük</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Tek sürümde net sonuç</span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[28px]">palette</span>
                  <span className="font-label-md text-label-md text-primary font-bold">Zengin Kartela</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">1.000+ özel mimari ton</span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[28px]">engineering</span>
                  <span className="font-label-md text-label-md text-primary font-bold">Usta Desteği</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Şantiye ve teknik rehberlik</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative mt-space-lg lg:mt-0">
              <div className="relative w-full rounded-xl overflow-hidden shadow-xl aspect-[16/10] bg-surface-container">
                <img alt="Şah Boya Uygulamalı Yaşam Alanı" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAADQutWEyZ4vgZATw___yCTy87dYEWEDo1EPGCzfXwPkkHlUpaj5AcrNu-Y4ikcrloF-SnXIlY4doBQx7Q84xPqsUpwr1b0dPr-6lFexa1nWoWm2xlrXINd1JEwTCZzsqLWLo4ZMpNOBQ9tP-xQRJ04ytDRt7kS77BTGnI1-KD9GxVkzn8nxwsUX7-ZJpNFD3qsCe5F2RP5AQL0ANbOtijMxzb5K0US3Qi5VGiKuTD0MpfSqFi-uEs" />
                <div className="absolute bottom-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-space-md py-space-sm rounded-lg shadow-md flex items-center gap-space-sm">
                  <span className="w-4 h-4 rounded-full bg-[#bf5a36]"></span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Uygulanan Renk:</span>
                    <span className="font-label-md text-label-md text-primary font-bold">Terracotta B416 & Soft Sage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BÖLÜM 2: Ürün Grupları (Kategoriler) */}
      <section className="w-full py-space-3xl max-w-[1380px] mx-auto px-gutter" id="kategoriler">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold block mb-space-xs">Koleksiyonlar</span>
            <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">Kapsamlı Yüzey & Boya Çözümleri</h2>
          </div>
          <div className="flex items-end gap-6">
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md hidden lg:block">
              Mekanın ihtiyacına göre formüle edilmiş, yüksek pigmentasyon ve kolay sürüm sunan ana kategoriler.
            </p>
            <div className="hidden md:flex gap-2 shrink-0">
              <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-surface-container-high bg-surface-container-lowest text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all shadow-sm">
                <span className="material-symbols-outlined text-[24px]">chevron_left</span>
              </button>
              <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-surface-container-high bg-surface-container-lowest text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all shadow-sm">
                <span className="material-symbols-outlined text-[24px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
        
        <div ref={sliderRef} className="flex overflow-x-auto gap-gutter pb-space-lg snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          
          <Link href="/kategoriler/ic-cephe" className="shrink-0 snap-start w-[85vw] sm:w-[380px] group relative rounded-xl overflow-hidden bg-surface-container-low shadow-sm hover:shadow-xl transition-all duration-300 p-space-lg flex flex-col justify-between h-72">
            <div className="flex items-center justify-between">
              <span className="p-space-sm bg-surface-container-lowest rounded-lg text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[28px]">format_paint</span>
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">Mimari Koleksiyon</span>
            </div>
            <div className="mt-auto">
              <span className="font-headline-md text-headline-md text-primary block group-hover:text-secondary transition-colors">İç Mekan Duvar Boyaları</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Silikonlu, antibakteriyel, leke dirençli ipek mat ve mat profesyonel formüller.</p>
              <div className="flex items-center gap-space-xs mt-space-md font-label-md text-label-md text-primary font-bold">
                <span>Ürünleri İncele</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </Link>

          <Link href="/kategoriler/dis-cephe" className="shrink-0 snap-start w-[85vw] sm:w-[380px] group relative rounded-xl overflow-hidden bg-surface-container-low shadow-sm hover:shadow-xl transition-all duration-300 p-space-lg flex flex-col justify-between h-72">
            <div className="flex items-center justify-between">
              <span className="p-space-sm bg-surface-container-lowest rounded-lg text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[28px]">house</span>
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">Yüksek Dayanım</span>
            </div>
            <div className="mt-auto">
              <span className="font-headline-md text-headline-md text-primary block group-hover:text-secondary transition-colors">Dış Mekan Cephe Boyaları</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">UV ışınlarına, dona ve sert hava koşullarına dayanıklı elastik dış cephe kaplamaları.</p>
              <div className="flex items-center gap-space-xs mt-space-md font-label-md text-label-md text-primary font-bold">
                <span>Ürünleri İncele</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </Link>

          <Link href="/kategoriler/tavan" className="shrink-0 snap-start w-[85vw] sm:w-[380px] group relative rounded-xl overflow-hidden bg-surface-container-low shadow-sm hover:shadow-xl transition-all duration-300 p-space-lg flex flex-col justify-between h-72">
            <div className="flex items-center justify-between">
              <span className="p-space-sm bg-surface-container-lowest rounded-lg text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[28px]">wb_twilight</span>
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">Ekstra Örtücülük</span>
            </div>
            <div className="mt-auto">
              <span className="font-headline-md text-headline-md text-primary block group-hover:text-secondary transition-colors">Tavan Boyası</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Ekstra mat, sıçratma yapmayan, yüksek nefes alma kabiliyetli saf beyaz formülasyon.</p>
              <div className="flex items-center gap-space-xs mt-space-md font-label-md text-label-md text-primary font-bold">
                <span>Ürünleri İncele</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </Link>

          <Link href="/kategoriler/metal-ahsap" className="shrink-0 snap-start w-[85vw] sm:w-[380px] group relative rounded-xl overflow-hidden bg-surface-container-low shadow-sm hover:shadow-xl transition-all duration-300 p-space-lg flex flex-col justify-between h-72">
            <div className="flex items-center justify-between">
              <span className="p-space-sm bg-surface-container-lowest rounded-lg text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[28px]">carpenter</span>
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">Metal & Ahşap</span>
            </div>
            <div className="mt-auto">
              <span className="font-headline-md text-headline-md text-primary block group-hover:text-secondary transition-colors">Ahşap ve Demir Boyaları</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Antipas özellikli sentetik ve su bazlı vernikler, ahşap emprenye koruyucuları.</p>
              <div className="flex items-center gap-space-xs mt-space-md font-label-md text-label-md text-primary font-bold">
                <span>Ürünleri İncele</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </Link>

          <Link href="/kategoriler/astar-yalitim" className="shrink-0 snap-start w-[85vw] sm:w-[380px] group relative rounded-xl overflow-hidden bg-surface-container-low shadow-sm hover:shadow-xl transition-all duration-300 p-space-lg flex flex-col justify-between h-72">
            <div className="flex items-center justify-between">
              <span className="p-space-sm bg-surface-container-lowest rounded-lg text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[28px]">shield</span>
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">Zemin Hazırlık</span>
            </div>
            <div className="mt-auto">
              <span className="font-headline-md text-headline-md text-primary block group-hover:text-secondary transition-colors">Astar ve Yalıtım Malzemeleri</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Dönüşüm astarları, su yalıtım membranları ve yüzey sabitleyici bağlayıcılar.</p>
              <div className="flex items-center gap-space-xs mt-space-md font-label-md text-label-md text-primary font-bold">
                <span>Ürünleri İncele</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </Link>

          <Link href="/kategoriler/ekipmanlar" className="shrink-0 snap-start w-[85vw] sm:w-[380px] group relative rounded-xl overflow-hidden bg-surface-container-low shadow-sm hover:shadow-xl transition-all duration-300 p-space-lg flex flex-col justify-between h-72">
            <div className="flex items-center justify-between">
              <span className="p-space-sm bg-surface-container-lowest rounded-lg text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[28px]">brush</span>
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">Usta Ekipmanı</span>
            </div>
            <div className="mt-auto">
              <span className="font-headline-md text-headline-md text-primary block group-hover:text-secondary transition-colors">Uygulama Gereçleri ve Rulolar</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Damlama yapmayan mikrofiber rulolar, koruyucu maskeleme ve şantiye ekipmanları.</p>
              <div className="flex items-center gap-space-xs mt-space-md font-label-md text-label-md text-primary font-bold">
                <span>Ürünleri İncele</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="mt-space-2xl flex flex-col items-center justify-center text-center gap-space-xs">
          <Link href="/urunler" className="inline-flex items-center gap-space-sm bg-primary hover:bg-primary-container text-on-primary px-space-xl py-3 rounded-xl font-headline-sm text-headline-sm shadow-md hover:shadow-lg transition-all duration-200 group">
            <span>Tüm Ürünlerimizi ve Kataloğu İncele</span>
            <span className="material-symbols-outlined text-[22px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
          <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-[16px] text-secondary">palette</span>
            30'dan fazla iç/dış cephe, tavan ve izolasyon boyası seçeneği
          </span>
        </div>
      </section>

      {/* BÖLÜM 5: Boya İhtiyaç Hesaplayıcı (Converted to React) */}
      <section className="w-full py-space-3xl max-w-[1380px] mx-auto px-gutter" id="boya-hesaplayici">
        <div className="bg-surface-container-lowest rounded-2xl shadow-lg p-space-lg lg:p-space-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
            
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold block mb-space-xs">Akıllı Araç</span>
                <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">Ne Kadar Boyaya İhtiyacınız Var?</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Odanızın net taban veya duvar alanını girin, kat sayısını seçin.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md text-primary font-bold">Boyanacak Alan (m²)</label>
                  <div className="relative flex items-center">
                    <input className="w-full h-11 px-space-md bg-surface-container-low rounded-lg text-primary font-headline-sm text-headline-sm focus:outline-none focus:ring-2 focus:ring-primary" type="number" value={alan} onChange={(e) => setAlan(Number(e.target.value))} />
                    <span className="absolute right-space-md text-on-surface-variant font-label-md text-label-md">m²</span>
                  </div>
                </div>

                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md text-primary font-bold">Uygulanacak Kat Sayısı</label>
                  <select className="w-full h-11 px-space-md bg-surface-container-low rounded-lg text-primary font-label-lg text-label-lg focus:outline-none focus:ring-2 focus:ring-primary" value={kat} onChange={(e) => setKat(Number(e.target.value))}>
                    <option value="1">1 Kat (Renk Tazeleme)</option>
                    <option value="2">2 Kat (Tavsiye Edilen Örtücülük)</option>
                    <option value="3">3 Kat (Koyudan Açığa Geçiş)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md text-primary font-bold">Yüzey Tipi</label>
                  <div className="flex items-center gap-space-sm">
                    <button className={`flex-1 py-2 px-space-sm rounded-lg font-label-md text-label-md transition-colors text-center ${yuzeyKatsayisi === 1.0 ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface'}`} onClick={() => setYuzeyKatsayisi(1.0)}>Pürüzsüz / Macunlu</button>
                    <button className={`flex-1 py-2 px-space-sm rounded-lg font-label-md text-label-md transition-colors text-center ${yuzeyKatsayisi === 1.15 ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface'}`} onClick={() => setYuzeyKatsayisi(1.15)}>Pürüzlü / Sıvalı</button>
                  </div>
                </div>

                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md text-primary font-bold">Tavan Dahil Edilsin mi?</label>
                  <div className="flex items-center gap-space-sm pt-1">
                    <label className="flex items-center gap-space-xs cursor-pointer">
                      <input className="w-5 h-5 accent-secondary rounded" type="checkbox" checked={tavanDahil} onChange={(e) => setTavanDahil(e.target.checked)} />
                      <span className="font-body-md text-body-md text-primary">Ekstra Tavan Boyası Ekle</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface-container-low rounded-xl p-space-xl flex flex-col justify-between shadow-inner">
              <div className="flex flex-col gap-space-md">
                <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Tahmini Miktar & Ambalaj İhtiyacı</span>
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-display-lg text-display-lg text-primary font-bold">{hesaplananLitre}</span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">Litre İhtiyaç</span>
                </div>
                <div className="p-space-md bg-surface-container-lowest rounded-lg shadow-sm flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">Tavsiye Edilen Ambalaj Yapısı</span>
                  <span className="font-headline-sm text-headline-sm text-secondary font-bold">{onerilenKutu}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{tavanBilgi}</span>
                </div>
              </div>
              <div className="pt-space-lg flex flex-col gap-space-sm">
                <a className="w-full bg-primary hover:bg-primary-container text-on-primary py-3.5 rounded-lg font-headline-sm text-headline-sm transition-all duration-200 shadow-md flex items-center justify-center gap-space-xs" href="https://wa.me/908503000000" target="_blank" rel="noreferrer">
                  <span className="material-symbols-outlined text-[22px]">chat</span>
                  <span>Bu Miktar İçin WhatsApp'tan Fiyat Al</span>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      <div className={`fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-space-lg py-space-md rounded-xl shadow-2xl flex items-center gap-space-md transform transition-transform duration-300 ${isToastOpen ? 'translate-y-0' : 'translate-y-32'}`}>
        <span className="material-symbols-outlined text-secondary text-[24px]">check_circle</span>
        <div className="flex flex-col">
          <span className="font-label-md text-label-md font-bold">{toastData.baslik}</span>
          <span className="font-body-sm text-body-sm opacity-90">{toastData.mesaj}</span>
        </div>
      </div>

    </main>
  );
}
