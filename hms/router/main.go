package router

import (
	"hms/controller"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Router() *gin.Engine {
	router := gin.Default()

	config := cors.DefaultConfig()
    config.AllowOrigins = []string{"http://localhost:4200"} // Adjust as needed
    router.Use(cors.New(config))

	router.Static("/static", "./")
	router.GET("/getalldata", controller.GetAllCustomers)
	router.GET("/getbyid",controller.GetById)
	router.GET("/viewappointment",controller.ViewAppointment)
	router.GET("/viewallfeedback",controller.ViewFeedback)
	router.POST("/create", controller.CreateProfile)
	router.POST("/appoitnment", controller.Appointment)
	router.POST("/login", controller.Login)
	router.POST("/feedback", controller.Feedback)
	router.POST("/createadmin", controller.Createadmin)
	router.POST("/adminlogin", controller.Adminlogin)
	router.DELETE("/deletebyid",controller.Deletebyid)


	return router
}
