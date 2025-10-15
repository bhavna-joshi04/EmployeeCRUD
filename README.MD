
# Employee CRUD Application

A full-stack CRUD application built with **ASP.NET Core Web API**, **Angular**, and **SQL Server**.

---

## 🧩 Features

- Add, Update, Delete, and View Employees
- RESTful API with Entity Framework Core
- Responsive Angular frontend
- SQL Server database integration

---

## 🛠️ Technologies Used

- **Backend:** ASP.NET Core Web API, Entity Framework Core  
- **Frontend:** Angular, TypeScript, Bootstrap  
- **Database:** SQL Server  
- **Version Control:** Git / GitHub

---

## 📂 Project Structure

EmployeeCRUD/               <-- root folder (Git repository)
 ├── Employee.Api/           --> .NET Core Web API project
 ├── EmployeeUI/employee-ui --> Angular frontend
 ├── EmployeeDb.sql         --> database creation script
 ├── Employee.Api.sln       --> Visual Studio solution
 ├── .gitignore
 └── README.md

---

## ⚙️ Setup Instructions

### 1️⃣ Backend (Web API)

1. Open **`EmployeeApi.sln`** in Visual Studio.
2. Update the connection string in `appsettings.json`:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=.;Database=EmployeeDB;Trusted_Connection=True;"
}

Run the Web API project (F5 or dotnet run).

2️⃣ Database

Open SQL Server Management Studio (SSMS).

Execute the EmployeeDB.sql script to create the database and tables.

(Optional) Insert sample data included in the script.

3️⃣ Frontend (Angular)

Open a terminal in the EmployeeUI folder:

cd EmployeeUI


Install dependencies:

npm install


Run the Angular project:

ng serve


Open your browser at http://localhost:4200

🔗 			API Endpoints

HTTP Method		 Endpoint	      			Description
GET			   	/api/employees	    		Get all employees
GET				/api/employees/{id}			Get employee by ID
POST			/api/employees				Add a new employee
PUT				/api/employees/{id}			Update an existing employee
DELETE			/api/employees/{id}			Delete an employee