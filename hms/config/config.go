package config

import (
	"context"
	"hms/constants"

	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Customer_Collection *mongo.Collection
var Customer_ProfileCollection *mongo.Collection
var Customer_feedback *mongo.Collection
var Customer_Admin *mongo.Collection

func init() {
	clientoption := options.Client().ApplyURI(constants.ConnectionString)
	ctx, _ := context.WithTimeout(context.Background(), 100*time.Second)
	client, err := mongo.Connect(ctx, clientoption)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("MongoDb sucessfully connected-(patient)")
	Customer_ProfileCollection = client.Database(constants.DB_Name).Collection(constants.Customer_collection)

	fmt.Println("Collection Connected")
}

func init() {
	clientoption := options.Client().ApplyURI(constants.ConnectionString)
	ctx, _ := context.WithTimeout(context.Background(), 100*time.Second)
	client, err := mongo.Connect(ctx, clientoption)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("MongoDb sucessfully connected-(appoitnment)")
	Customer_Collection = client.Database(constants.DB_Name).Collection(constants.Customer_appoitment)

	fmt.Println("Collection Connected")
}

func init() {
	clientoption := options.Client().ApplyURI(constants.ConnectionString)
	ctx, _ := context.WithTimeout(context.Background(), 100*time.Second)
	client, err := mongo.Connect(ctx, clientoption)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("MongoDb sucessfully connected-(feedback)")
	Customer_feedback = client.Database(constants.DB_Name).Collection(constants.Customer_feedback)

	fmt.Println("Collection Connected")
}

func init() {
	clientoption := options.Client().ApplyURI(constants.ConnectionString)
	ctx, _ := context.WithTimeout(context.Background(), 100*time.Second)
	client, err := mongo.Connect(ctx, clientoption)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("MongoDb sucessfully connected-(patient)")
	Customer_Admin = client.Database(constants.DB_Name).Collection(constants.Customer_Admin)

	fmt.Println("Collection Connected")
}
