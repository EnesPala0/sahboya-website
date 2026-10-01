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

      {/* BÖLÜM 3: Çok Satan Ürünler */}
      <section className="w-full bg-surface-container-lowest py-space-3xl shadow-sm border-y border-surface-container-high">
        <div className="max-w-[1380px] mx-auto px-gutter">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md mb-space-2xl">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold block mb-space-xs">Kurumsal Ürün Gamı</span>
              <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight font-bold">Öne Çıkan Ürünlerimiz</h2>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="font-label-md text-label-md text-on-surface-variant">Toptan ve perakende doğrudan fabrikadan hızlı fiyat teklifi alın</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            
            <div className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between p-space-md group border border-transparent hover:border-primary/20">
              <div className="relative bg-surface-container-low rounded-lg p-space-md flex items-center justify-center h-52 group-hover:bg-surface-container-high transition-colors">
                <span className="absolute top-2 left-2 bg-primary text-on-primary px-2 py-0.5 rounded font-label-sm text-label-sm font-bold shadow-sm">İç Cephe</span>
                <img alt="Silikonlu İpek Mat 15L" className="h-44 w-auto object-contain group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIj_LLmNuwKyskeyXhtjR3yHjmtHeFMgxzZkN9rpA14sx6ejX_OREk1hiTVamQc7cfWUNcH_r5HgWd3YCHnp0H0LtVqGixfE-bmBLB29wmVtkSi-FXYtIa3lZMbnABNYZMNOuHOAPEGXxMSX8TzApmg46urpa0dehpquUk72MgmelMNOq-x-Z1pm2aR9w-L4PCTM7WGOIb0jJBET2J9fK5UGoGePr5FvOWUIVPxzLSYEkYjTkviYBW" />
              </div>
              <div className="pt-space-md flex flex-col flex-1">
                <span className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">Silikonlu İpek Mat 15L</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Kapatıcılık: ~110-130 m² / İki Kat Tam Örtücülük</span>
                <div className="mt-space-md p-space-xs bg-surface-container-low rounded font-body-sm text-body-sm text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                  <span>Leke Tutmaz & Silinebilir</span>
                </div>
                <Link className="mt-space-lg w-full bg-surface-container-lowest hover:bg-primary text-primary hover:text-on-primary border border-primary/30 hover:border-primary py-2.5 rounded-lg font-label-lg text-label-lg transition-all duration-200 flex items-center justify-center gap-space-xs shadow-sm" href="/urunler/1">
                  <span>Ürünü İncele</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between p-space-md group border border-transparent hover:border-primary/20">
              <div className="relative bg-surface-container-low rounded-lg p-space-md flex items-center justify-center h-52 group-hover:bg-surface-container-high transition-colors">
                <span className="absolute top-2 left-2 bg-primary text-on-primary px-2 py-0.5 rounded font-label-sm text-label-sm font-bold shadow-sm">Tavan Serisi</span>
                <img alt="Süper Tavan Boyası 17.5kg" className="h-44 w-auto object-contain group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIj_LLmNuwKyskeyXhtjR3yHjmtHeFMgxzZkN9rpA14sx6ejX_OREk1hiTVamQc7cfWUNcH_r5HgWd3YCHnp0H0LtVqGixfE-bmBLB29wmVtkSi-FXYtIa3lZMbnABNYZMNOuHOAPEGXxMSX8TzApmg46urpa0dehpquUk72MgmelMNOq-x-Z1pm2aR9w-L4PCTM7WGOIb0jJBET2J9fK5UGoGePr5FvOWUIVPxzLSYEkYjTkviYBW" />
              </div>
              <div className="pt-space-md flex flex-col flex-1">
                <span className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">Süper Tavan Boyası 17.5kg</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Ekstra Beyazlık: ~85 m² / İki Kat Yüksek Matlık</span>
                <div className="mt-space-md p-space-xs bg-surface-container-low rounded font-body-sm text-body-sm text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                  <span>Damlama Yapmaz & Nefes Alır</span>
                </div>
                <Link className="mt-space-lg w-full bg-surface-container-lowest hover:bg-primary text-primary hover:text-on-primary border border-primary/30 hover:border-primary py-2.5 rounded-lg font-label-lg text-label-lg transition-all duration-200 flex items-center justify-center gap-space-xs shadow-sm" href="/urunler/2">
                  <span>Ürünü İncele</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between p-space-md group border border-transparent hover:border-primary/20">
              <div className="relative bg-surface-container-low rounded-lg p-space-md flex items-center justify-center h-52 group-hover:bg-surface-container-high transition-colors">
                <span className="absolute top-2 left-2 bg-primary text-on-primary px-2 py-0.5 rounded font-label-sm text-label-sm font-bold shadow-sm">Dış Cephe</span>
                <img alt="Dış Cephe Koruma Boyası 15L" className="h-44 w-auto object-contain group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIj_LLmNuwKyskeyXhtjR3yHjmtHeFMgxzZkN9rpA14sx6ejX_OREk1hiTVamQc7cfWUNcH_r5HgWd3YCHnp0H0LtVqGixfE-bmBLB29wmVtkSi-FXYtIa3lZMbnABNYZMNOuHOAPEGXxMSX8TzApmg46urpa0dehpquUk72MgmelMNOq-x-Z1pm2aR9w-L4PCTM7WGOIb0jJBET2J9fK5UGoGePr5FvOWUIVPxzLSYEkYjTkviYBW" />
              </div>
              <div className="pt-space-md flex flex-col flex-1">
                <span className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">Dış Cephe Koruma Boyası 15L</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Silikonlu Akrilik: ~90-110 m² / İklim Koruması</span>
                <div className="mt-space-md p-space-xs bg-surface-container-low rounded font-body-sm text-body-sm text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                  <span>UV ve Nem Kalkanı Teknolojisi</span>
                </div>
                <Link className="mt-space-lg w-full bg-surface-container-lowest hover:bg-primary text-primary hover:text-on-primary border border-primary/30 hover:border-primary py-2.5 rounded-lg font-label-lg text-label-lg transition-all duration-200 flex items-center justify-center gap-space-xs shadow-sm" href="/urunler/3">
                  <span>Ürünü İncele</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between p-space-md group border border-transparent hover:border-primary/20">
              <div className="relative bg-surface-container-low rounded-lg p-space-md flex items-center justify-center h-52 group-hover:bg-surface-container-high transition-colors">
                <span className="absolute top-2 left-2 bg-surface-container-highest text-primary px-2 py-0.5 rounded font-label-sm text-label-sm font-bold shadow-sm">Uygulama Seti</span>
                <img alt="Profesyonel Uygulama Seti" className="h-40 w-auto object-contain group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9_Aqrt-eKi2h2eKwMP_pXCasX3NW6vKUiwu7Ua8SKA0dGYpEB4p7U_zcXohFZYZ5uv7qQBhaLvSWjxV5zb7QcoIr9pwIubMHg7LaQr_QKmGU8fHFoMeB-lpSpmdaNmWQnhp99GduSmsh0W-7l6qymCyLqKXszzmyMxo23uMUiVTsHUSn4rnghE5gIAaLTi78WX3YE17D1PEOX7DrRYpHX9eZBBiv9v-jueVDA_uh1ca_-BVeUuBms" />
              </div>
              <div className="pt-space-md flex flex-col flex-1">
                <span className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">Profesyonel Uygulama Seti</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">20cm Rulo + Tava + Kestirme Fırçası + Koruma Bandı</span>
                <div className="mt-space-md p-space-xs bg-surface-container-low rounded font-body-sm text-body-sm text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                  <span>Damlama Yapmayan Mikrofiber</span>
                </div>
                <Link className="mt-space-lg w-full bg-surface-container-lowest hover:bg-primary text-primary hover:text-on-primary border border-primary/30 hover:border-primary py-2.5 rounded-lg font-label-lg text-label-lg transition-all duration-200 flex items-center justify-center gap-space-xs shadow-sm" href="/urunler/4">
                  <span>Ürünü İncele</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>

          </div>
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

      {/* BÖLÜM 6: Renk Kartelası ve İlham */}
      <section className="w-full py-space-3xl max-w-[1380px] mx-auto px-gutter" id="renk-kartelasi">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold block mb-space-xs">Renk Stüdyosu</span>
            <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">Doğadan İlham Alan Renkler</h2>
          </div>
          <Link className="inline-flex items-center gap-space-sm text-primary font-label-lg text-label-lg hover:text-secondary transition-colors" href="/renk-kartelasi">
            <span>Tüm Renk Kartelasını İncele</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-8 bg-surface-container-low rounded-2xl overflow-hidden relative min-h-[400px] group">
            <img alt="Modern iç mekan tasarımı ve sahte boya renkleri" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1598928506311-c55dd580e2cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-space-xl">
              <span className="bg-primary/90 text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm backdrop-blur-sm mb-space-sm inline-block">2026 Trendi</span>
              <h3 className="font-headline-md text-headline-md text-white mb-2">Kuzeyin Sisli Sabahları: Antrasit & Gri</h3>
              <p className="font-body-md text-body-md text-white/80 max-w-md">Modern mekanlar için tasarlanmış soğuk alt tonlu gri koleksiyonumuz ile tanışın.</p>
            </div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-gutter">
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm border border-surface-container-high flex-1 flex flex-col justify-center">
              <h4 className="font-headline-sm text-headline-sm text-primary mb-space-md">Popüler Tonlar</h4>
              <div className="grid grid-cols-2 gap-space-sm">
                <div className="flex items-center gap-space-sm"><div className="w-10 h-10 rounded-full bg-[#E5E0D8] shadow-inner border border-black/5"></div><span className="font-label-md text-label-md text-on-surface">Kum Beji</span></div>
                <div className="flex items-center gap-space-sm"><div className="w-10 h-10 rounded-full bg-[#8C9295] shadow-inner border border-black/5"></div><span className="font-label-md text-label-md text-on-surface">Sisli Gri</span></div>
                <div className="flex items-center gap-space-sm"><div className="w-10 h-10 rounded-full bg-[#D4C3B3] shadow-inner border border-black/5"></div><span className="font-label-md text-label-md text-on-surface">Pudra</span></div>
                <div className="flex items-center gap-space-sm"><div className="w-10 h-10 rounded-full bg-[#4A5D6B] shadow-inner border border-black/5"></div><span className="font-label-md text-label-md text-on-surface">Okyanus</span></div>
              </div>
            </div>
            
            <div className="bg-primary rounded-2xl p-space-lg text-on-primary flex-1 flex flex-col justify-between group overflow-hidden relative shadow-lg">
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-150 transition-transform duration-700"><span className="material-symbols-outlined text-[120px]">palette</span></div>
              <h4 className="font-headline-sm text-headline-sm relative z-10">Kendi Rengini Yarat</h4>
              <p className="font-body-sm text-body-sm text-on-primary/80 mt-2 mb-4 relative z-10">Makinelerimizde binlerce farklı renk seçeneği ile hayalinizdeki tonu anında hazırlıyoruz.</p>
              <a className="font-label-md text-label-md inline-flex items-center gap-1 hover:gap-2 transition-all relative z-10" href="https://wa.me/905335028026">
                <span>Renk Uzmanına Danış</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
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
