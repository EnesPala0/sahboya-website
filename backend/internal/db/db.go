package db

import (
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// Connect sets up a connection to the PostgreSQL database using GORM.
func Connect(dsn string) (*gorm.DB, error) {
	// GORM ile PostgreSQL bağlantısını açıyoruz
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	fmt.Println("GORM ile PostgreSQL veritabanına başarıyla bağlanıldı!")
	return db, nil
}
