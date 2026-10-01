package handlers

import (
	"net/http"
	"sahboya-backend/internal/models"
	"sahboya-backend/internal/repository"
	"strconv"

	"github.com/gin-gonic/gin"
)

// ProductHandler, web'den gelen istekleri (HTTP Requests) karşılayacak yapımızdır.
type ProductHandler struct {
	repo *repository.ProductRepository
}

// NewProductHandler, handler'ımızı repository ile birlikte ayağa kaldırır.
func NewProductHandler(repo *repository.ProductRepository) *ProductHandler {
	return &ProductHandler{repo: repo}
}

// CreateProduct: POST /api/products isteğini karşılar.
func (h *ProductHandler) CreateProduct(c *gin.Context) {
	var product models.Product

	// 1. Dışarıdan gelen JSON verisini okuyup bizim "product" struct'ına çevirmeye (Bind) çalışır
	if err := c.ShouldBindJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Geçersiz veri formatı. Eksik veya hatalı alanlar var."})
		return
	}

	// 2. Veriyi veritabanına kaydetmesi için Repository'ye gönder
	if err := h.repo.CreateProduct(&product); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Ürün veritabanına kaydedilemedi."})
		return
	}

	// 3. Başarılıysa kullanıcıya oluşturulan ürünü geri dön
	c.JSON(http.StatusCreated, gin.H{
		"message": "Ürün başarıyla eklendi!",
		"data":    product,
	})
}

// GetAllProducts: GET /api/products isteğini karşılar.
func (h *ProductHandler) GetAllProducts(c *gin.Context) {
	// 1. Repository'den tüm ürünleri iste
	products, err := h.repo.GetAllProducts()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Ürünler veritabanından çekilemedi."})
		return
	}

	// 2. Bulunan ürünleri doğrudan JSON olarak gönder
	c.JSON(http.StatusOK, products)
}

// GetProduct: GET /api/products/:id isteğini karşılar. (Ürün Detay Sayfası İçin)
func (h *ProductHandler) GetProduct(c *gin.Context) {
	// 1. URL'deki :id parametresini al (Örn: /api/products/5 -> "5")
	idParam := c.Param("id")

	// 2. Gelen ID'yi metinden(string) sayıya(int) çevir
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Geçersiz ürün ID'si. Lütfen bir sayı girin."})
		return
	}

	// 3. Repository'ye "Git bu ID'deki ürünü getir" de
	product, err := h.repo.GetProductByID(uint(id))
	if err != nil {
		// Ürün veritabanında yoksa 404 (Not Found) hatası döner
		c.JSON(http.StatusNotFound, gin.H{"error": "Ürün bulunamadı."})
		return
	}

	// 4. Ürünü JSON olarak gönder
	c.JSON(http.StatusOK, product)
}
