package models

import (
	"encoding/json"
	"time"
)

// Product ana ürün tablomuzdur. Tasarımdaki verilere göre şekillendirilmiştir.
type Product struct {
	ID          uint    `json:"id" db:"id"`
	Name        string  `json:"name" db:"name"`               // Örn: "Silikonlu İpek Mat İç Cephe Boyası"
	Slug        string  `json:"slug" db:"slug"`               // URL için: "silikonlu-ipek-mat"
	Category    string  `json:"category" db:"category"`       // Örn: "İç Cephe Duvar ve Tavan Çözümleri"
	Series      string  `json:"series" db:"series"`           // Örn: "Profesyonel Seri" veya "Lüks Silikonlu Seri"
	Description string  `json:"description" db:"description"` // Uzun açıklama metni
	Rating      float32 `json:"rating" db:"rating"`           // Örn: 4.9
	ReviewCount int     `json:"review_count" db:"review_count"`
	ImageURL    string  `json:"image_url" db:"image_url"`

	// --- Öne Çıkan Özellikler (Kart Üzerindeki 4 Ana Bilgi) ---
	Coverage   string `json:"coverage" db:"coverage"`       // Örtücülük: "110-130 m2"
	DryingTime string `json:"drying_time" db:"drying_time"` // Kuruma: "2-4 Saat"
	FinishType string `json:"finish_type" db:"finish_type"` // Bitiş: "İpek Mat"
	Durability string `json:"durability" db:"durability"`   // Dayanım: "Sınıf 1"

	// --- Esnek (Dinamik) Veriler ---
	// Tasarımdaki "Teknik Özellikler" veya "Uygulama" adımları her boyada farklı olabilir (astarda farklı, dış cephede farklı).
	// Bu yüzden bu alanları veritabanında JSONB (PostgreSQL özelliği) olarak tutmak çok mantıklıdır.
	TechnicalSpecs   json.RawMessage `json:"technical_specs" db:"technical_specs"`     // Teknik Özellikler & Spektler tabı
	ApplicationSteps json.RawMessage `json:"application_steps" db:"application_steps"` // Uygulama & Yüzey Hazırlığı tabı

	CreatedAt time.Time `json:"created_at" db:"created_at"`
	UpdatedAt time.Time `json:"updated_at" db:"updated_at"`
}

// ProductBadge ürünün sol alt köşesindeki veya ekolojik sekmelerindeki rozetleri temsil eder.
// Örn: "Düşük VOC", "TSE EN 13300", "%100 Fabrika Dolumu"
type ProductBadge struct {
	ID        uint   `json:"id" db:"id"`
	ProductID uint   `json:"product_id" db:"product_id"`
	Icon      string `json:"icon" db:"icon"`         // Frontend'deki ikon adı veya URL'si
	Title     string `json:"title" db:"title"`       // Örn: "Düşük VOC"
	Subtitle  string `json:"subtitle" db:"subtitle"` // Örn: "Kokusuz & Sağlıklı"
}
