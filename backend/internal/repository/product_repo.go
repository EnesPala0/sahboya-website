package repository

import (
	"sahboya-backend/internal/models"

	"gorm.io/gorm"
)

// ProductRepository, veritabanı işlemlerini (SQL sorgularını) yönetecek yapımızdır.
type ProductRepository struct {
	db *gorm.DB
}

// NewProductRepository, yeni bir repository oluşturup veritabanı bağlantısını içine enjekte eder.
func NewProductRepository(db *gorm.DB) *ProductRepository {
	return &ProductRepository{db: db}
}

// CreateProduct: Veritabanına yeni bir ürün kaydeder (INSERT INTO products...)
func (r *ProductRepository) CreateProduct(product *models.Product) error {
	// GORM'un büyüsü: sadece Create diyoruz, o geri kalan SQL'i hallediyor.
	return r.db.Create(product).Error
}

// GetAllProducts: Veritabanındaki tüm ürünleri getirir (SELECT * FROM products)
func (r *ProductRepository) GetAllProducts() ([]models.Product, error) {
	var products []models.Product
	err := r.db.Find(&products).Error
	return products, err
}

// GetProductByID: Sadece 1 adet ürünü ID'sine göre getirir (SELECT * FROM products WHERE id = ?)
func (r *ProductRepository) GetProductByID(id uint) (*models.Product, error) {
	var product models.Product
	// First fonksiyonu, kritere uyan ilk kaydı bulur. Bulamazsa 'Kayıt Bulunamadı' hatası döner.
	err := r.db.First(&product, id).Error
	if err != nil {
		return nil, err
	}
	return &product, nil
}
