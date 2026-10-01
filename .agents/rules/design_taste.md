---
name: Taste and Awesome Design
description: Enforces premium aesthetics, modern typography, and buttery-smooth animations for a high-end web experience.
trigger: always_on
---

# 🎨 Taste & Awesome Design Guidelines

Bu proje sıradan bir web sitesi değildir. Frontend kodlaması yapılırken aşağıdaki "Premium Tasarım (Taste)" ve "Harika Dizayn (Awesome Design)" kurallarına KESİNLİKLE uyulacaktır:

## 1. Premium Aesthetics (Zevkli Tasarım)
- **Asla** jenerik, çiğ ve standart HTML renkleri kullanılmayacaktır (Örn: saf kırmızı, düz mavi).
- Renk paletleri her zaman HSL formatında, birbirine uyumlu, yumuşak geçişli ve modern olacaktır.
- Tailwind'in özel renk paletlerinden (Slate, Zinc, Rose, Emerald vb.) faydalanarak derinlik hissi yaratılacaktır.
- "Glassmorphism" (buzlu cam) efektleri ve çok hafif/yumuşak gölgeler (soft box-shadows) tercih edilecektir.

## 2. Dynamic UI & Micro-Animations (Harika Dizayn)
- Hiçbir etkileşimli eleman (buton, kart, link) statik kalamaz.
- **Framer Motion** ve **Tailwind Transitions** kullanılarak; üzerine gelindiğinde (hover) yavaşça büyüme, renk değiştirme veya aşağıdan yukarıya pürüzsüz yüklenme (fade-in-up) efektleri KESİNLİKLE eklenecektir.
- Kullanıcı sitede gezinirken sayfanın "canlı" olduğunu hissetmelidir.

## 3. Typography & Whitespace (Tipografi ve Boşluklar)
- Dar, sıkışık tasarımlar YASAKTIR. Elementler arası boşluklar (margin/padding) cömertçe (Apple tarzı nefes alan tasarımlar) kullanılacaktır.
- Modern fontlar (Inter, Roboto veya projedeki özel font) kullanılacak, `tracking-tight` veya `leading-relaxed` gibi Tailwind sınıflarıyla okunabilirlik en üst düzeye çıkarılacaktır.

## 4. Bileşen Kalitesi (Component Quality)
- Placeholder (yer tutucu) çirkin görseller kullanılmayacaktır. Gerçekçi UI tasarımları oluşturulacaktır.
- Gerekirse Aceternity UI gibi "wow" efekti yaratan modern kütüphanelerin mantığı koda entegre edilecektir.
