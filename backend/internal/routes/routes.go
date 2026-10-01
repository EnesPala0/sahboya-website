package routes

import (
	"sahboya-backend/internal/handlers"
	"sahboya-backend/internal/repository"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

// SetupRouter, projedeki tüm rotaları (endpoints) topladığımız yerdir.
// main.go dosyasını temiz tutmamızı sağlar.
func SetupRouter(dbConn *gorm.DB) *gin.Engine {
	// Gin motorunu başlat
	router := gin.Default()

	// CORS Ayarları (Frontend'in Backend'e bağlanabilmesi için hayati önem taşır)
	// Default ayarı, tüm domainlerden gelen isteklere izin verir.
	// İleride Canlıya (Production) alırken sadece kendi domainimize izin vereceğiz.
	router.Use(cors.Default())

	// --- 1. Bağımlılıkları (Katmanları) Başlat ---
	productRepo := repository.NewProductRepository(dbConn)
	productHandler := handlers.NewProductHandler(productRepo)

	// --- 2. Rotaları (Endpoints) Tanımla ---
	api := router.Group("/api")
	{
		// Sistem Sağlık Kontrolü
		api.GET("/health", func(c *gin.Context) {
			c.JSON(200, gin.H{
				"status":  "success",
				"message": "Şah Boya API tıkır tıkır çalışıyor!",
			})
		})

		// Ürün (Product) Rotaları
		api.POST("/products", productHandler.CreateProduct)
		api.GET("/products", productHandler.GetAllProducts)
		api.GET("/products/:id", productHandler.GetProduct)
	}

	return router
}
