package main

import (
	"fmt"
	"log"
	"os"

	"sahboya-backend/internal/db"     // db paketini import ediyoruz
	"sahboya-backend/internal/models" // modelleri import ediyoruz
	"sahboya-backend/internal/routes" // rotaları import ediyoruz

	"github.com/joho/godotenv"
)

func main() {
	// 1. .env dosyasını yükle
	err := godotenv.Load()
	if err != nil {
		log.Println("Uyarı: .env dosyası bulunamadı, sistem ortam değişkenleri kullanılacak.")
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // Eğer port yoksa varsayılan olarak 8080 ata
	}
	dbDSN := os.Getenv("DB_DSN")

	fmt.Printf("Şah Boya API Başlatılıyor... (Port: %s)\n", port)

	// 2. Veritabanına bağlan (GORM)
	dbConn, err := db.Connect(dbDSN)
	if err != nil {
		log.Fatal("Veritabanı bağlantı hatası:", err)
	}

	// GORM'un altındaki ham SQL bağlantısını alarak kapanışta temizlemesini sağlıyoruz
	sqlDB, err := dbConn.DB()
	if err == nil {
		defer sqlDB.Close()
	}

	// 2.1 Veritabanı Tablolarını Otomatik Oluştur (AutoMigrate)
	// GORM, modellerimizi (struct'ları) okuyup tabloları otomatik oluşturur veya günceller
	fmt.Println("Veritabanı tabloları eşitleniyor (Migration)...")
	err = dbConn.AutoMigrate(
		&models.Product{},
		&models.ProductBadge{},
	)
	if err != nil {
		log.Fatal("Tablo oluşturma hatası:", err)
	}
	fmt.Println("Tablolar başarıyla eşitlendi!")

	// 3. Yönlendiriciyi (Router) routes paketi üzerinden kur
	router := routes.SetupRouter(dbConn)

	// 4. Sunucuyu Başlat
	fmt.Printf("Sunucu http://localhost:%s adresinde dinleniyor...\n", port)
	if err := router.Run(":" + port); err != nil {
		log.Fatal("Sunucu başlatılamadı:", err)
	}
}
