# Final Project - Excel Report Generator

## 📌 Description
This app lets a user register, log in, upload an Excel file, and create a PDF report with a bar chart that shows delivery delays or on-time deliveries.  
It also has a page to check the weather in Zurich using an external API.

## 🚀 Main Features
- **Register and log in** with JWT authentication.
- **Upload Excel file** with validation.
- **Read and process Excel file** to find delays.
- **Create bar chart** with delay days or on-time deliveries.
- **Export chart to PDF** (saved in the `reports` folder).
- **Check Zurich weather** using an API.
- **Simple and clean user interface** with CSS styles.

## 📂 Project Structure

FinalProject/
│── backend/ # Flask backend logic
│── frontend/ # React frontend interface
│── reports/ # Folder where PDF reports are saved
│── README.md # Project documentation


## 🛠 Technologies Used
- **Frontend:** React, CSS
- **Backend:** Flask, Python
- **Database:** SQLite
- **Main Python libraries:**
  - `pandas` → Read and process Excel
  - `matplotlib` → Create charts
  - `flask-jwt-extended` → Authentication
  - `requests` → Get data from external APIs

## 📄 How to Use
1. **Register and log in**
   - Create an account and log in.
2. **Upload Excel file**
   - Upload a `.xlsx` file with columns: `Estimated Date` and `Actual Date`.
3. **Generate PDF**
   - The app will process the file, create a chart, and save a PDF in the `reports` folder.
4. **Check Zurich weather**
   - Go to the weather page to see the current temperature.

## 📷 Example Chart

Bar chart showing:

On-time deliveries

Delay days for each order


## 👩‍💻 Author
- **Name:** Viviana Feijoo
- **GitHub:** [vivfeijoo](https://github.com/vivfeijoo)

