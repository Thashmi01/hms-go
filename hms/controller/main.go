package controller

import (
	"fmt"
	"hms/models"
	"hms/service"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CreateProfile(c *gin.Context) {
	fmt.Println("Creating Profile")
	var profile models.Customer
	fmt.Println("Created")
	if err := c.BindJSON(&profile); err != nil {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON data"})
		return
	}
	fmt.Println("json binded")
	fmt.Println(profile)

	err := service.Insert(profile)
	fmt.Println(err)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "User with the same email already exists"})
		return
	}
	c.JSON(http.StatusOK, profile)
}

func Appointment(c *gin.Context) {
	fmt.Println("Creating Profile")
	var profile models.Appoitment
	fmt.Println("Created")
	if err := c.BindJSON(&profile); err != nil {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON data"})
		return
	}
	fmt.Println("json binded")
	fmt.Println(profile)
	service.Appoitment(profile)
	c.JSON(http.StatusOK, profile)
}

func Login(c *gin.Context) {
	fmt.Println("Checking Profile")
	var profile models.Login
	fmt.Println("Created")
	if err := c.BindJSON(&profile); err != nil {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON data"})
		return
	}
	fmt.Println("json binded")
	fmt.Println(profile)
	err := service.Login(profile)
	fmt.Println(err)
	if err != nil {
		c.JSON(http.StatusBadRequest, err)
	}
	c.JSON(http.StatusOK, profile)

}

func Feedback(c *gin.Context) {
	fmt.Println("Checking Profile")
	var profile models.Feedback
	fmt.Println("Created")
	if err := c.BindJSON(&profile); err != nil {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON data"})
		return
	}
	fmt.Println("json binded")
	fmt.Println(profile)
	service.Feedback(profile)
	fmt.Println("controller")

	c.JSON(http.StatusOK, profile)

}

func Createadmin(c *gin.Context) {
	fmt.Println("Creating Profile")
	var profile models.Createadmin
	fmt.Println("Created")
	if err := c.BindJSON(&profile); err != nil {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON data"})
		return
	}
	fmt.Println("json binded")
	fmt.Println(profile)
	service.Createadmin(profile)
	c.JSON(http.StatusOK, profile)
}

func Adminlogin(c *gin.Context) {
	fmt.Println("Checking Profile")
	var profile models.Adminlogin
	fmt.Println("Created")
	if err := c.BindJSON(&profile); err != nil {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON data"})
		return
	}

	fmt.Println("json binded")
	fmt.Println(profile.Password)
	fmt.Println(profile.AdminID)

	err := service.Adminlogin(profile)
	fmt.Println(err)
	if err != nil {
		c.JSON(http.StatusBadRequest, err)
	}
	c.JSON(http.StatusOK, profile)
}

//controllers

func GetAllCustomers(c *gin.Context) {
	customers, err := service.GetAllCustomers()
	fmt.Println(customers)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": customers})
}

func GetById(c *gin.Context) {
	// Get the adminId query parameter from the request
	adminId := c.DefaultQuery("id", "")
	fmt.Println(adminId)

	// Check if adminId is empty or not provided
	if adminId == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Admin ID is required"})
		return
	}

	// Call your service method to fetch data by adminId
	customer, err := service.GetById(adminId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Return the fetched data as JSON response
	c.JSON(http.StatusOK, gin.H{"message": customer})
}

func Deletebyid(c *gin.Context) {
	adminId := c.DefaultQuery("id", "")
	fmt.Println(adminId)

	// Check if adminId is empty or not provided
	if adminId == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Admin ID is required"})
		return
	}

	// Call your service method to delete data by adminId
	err := service.DeleteById(adminId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Return a success message
	c.JSON(http.StatusOK, gin.H{"message": "Data deleted successfully"})
}

func ViewAppointment(c *gin.Context) {
	// Get the adminId query parameter from the request
	adminId := c.DefaultQuery("patientid", "")
	fmt.Println(adminId)

	// Check if adminId is empty or not provided
	if adminId == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Admin ID is required"})
		return
	}

	// Call your service method to fetch appointment data by adminId
	appointments, err := service.ViewAppointment(adminId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	//    fmt.Println(appointments)
	// Return the fetched appointment data as JSON response
	c.JSON(http.StatusOK, gin.H{"message": appointments})
}
func ViewAllAppointments(c *gin.Context) {


	// Call your service method to fetch appointment data by adminId
	appointments, err := service.ViewAllAppointments()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	//    fmt.Println(appointments)
	// Return the fetched appointment data as JSON response
	c.JSON(http.StatusOK, gin.H{"message": appointments})
}

func ViewFeedback(c *gin.Context) {

	customers, err := service.ViewFeedback()
	fmt.Println(customers)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": customers})
}
