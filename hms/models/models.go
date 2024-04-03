package models

type Customer struct {
	FName           string `json:"fname,omitempty"`
	LName           string `json:"lname,omitempty"`
	Email           string `json:"email,omitempty"`
	Password        string `json:"password,omitempty"`
	ConfirmPassword string `json:"confirmpassword,omitempty"`
	PatientID       string `json:"patientid,omitempty"`
}

type Appoitment struct {
	Name string `json:"name,omitempty"`
	PatientID string `json:"patientid,omitempty"`
	Phonenumber string `json:"phonenumber,omitempty"`
	Purpose     string `json:"purpose,omitempty"`
	Email       string `json:"email,omitempty"`
	Date        string `json:"date,omitempty"`
	Time        string `json:"time,omitempty"`
}

type Login struct {
	Email    string `json:"email,omitempty"`
	Password string `json:"password,omitempty"`
}

type Feedback struct {
	Name    string `json:"name,omitempty"`
	Email   string `json:"email,omitempty"`
	Subject string `json:"subject,omitempty"`
	Phone   string `json:"phone,omitempty"`
	Message string `json:"message,omitempty"`
}

type Adminlogin struct {
	AdminID  string `json:"adminid,omitempty"`
	Password string `json:"password,omitempty"`
}

type Createadmin struct {
	Name     string `json:"name,omitempty"`
	AdminID  string `json:"adminid,omitempty"`
	Password string `json:"password,omitempty"`
}

type Getbyid struct{
	PatientID       string `json:"patientid,omitempty"`
}

type Prediction struct{
	DiseaseName string `json:"diseasename",omitempty`
	Severity int `json:"severity",omitempty`
}