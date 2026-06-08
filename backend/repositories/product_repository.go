package repositories

import (
	"gin-demo/internal/database"
	"gin-demo/models"

	"gorm.io/gorm"
)

type ProductRepository interface {
	GetAll() ([]models.Product, error)
}

type productRepository struct {
	db *gorm.DB
}

func NewProductRepository() ProductRepository {
	db := database.Connect()
	return &productRepository{db: db}
}

func (r *productRepository) GetAll() ([]models.Product, error) {
	var products []models.Product

	err := r.db.Find(&products).Error

	return products, err
}