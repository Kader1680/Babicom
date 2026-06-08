package main

import (
	"gin-demo/handler"
	"gin-demo/repositories"
	"gin-demo/services"

	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()

	repo := repositories.NewProductRepository()
	service := services.NewProductService(repo)
	handler := handlers.NewProductHandler(service)

	r.GET("/products", handler.GetProducts)

	r.Run(":8080")
}