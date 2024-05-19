# INST377-Group27- Carbon Emission Project
## Contributors: Akash Mathur, Sabeen Farrukh, Thy Hoang, Jung(Veronica) Kim
### This is a final project for INST377. For this project, we created three pages using Climatiq API. 

### The target browser for this project is Google Chrome.



# Developers Manual 
## Installation
### Since this application is targeted for Chrome users, it is necessary to download the Google Chrome web browser on the local device. In addition, when running the application, the user must have an IDE of their choice installed on the local device. The developing team suggests the usage of Visual Studio Code (VS Code), due to its versatility in handling HTML, Cascading Style Sheets (CSS), and Javascript files.

## Running the Application: Home
### Insert Text here.

## Running the Application: Records
### This page takes in information from the user to calculate their total number of emissions based on the distance they drive every day over the course of one week. The page makes assumptions for car type, engine size, and fuel source, to calculate emissions based on distance alone. 
### This page utilizes a Supabase Database connection, an external API reference, and the Charting Javascript library (Chart JS). First, a Supabase Database must be used to take in user input: "distance" (in km). Second, an external API reference is necessary to connect to the Climatiq API, which calculates a basic estimate of CO2 emissions ('https://api.climatiq.io/data/v1/estimate'). The user input will be logged into the newly created database via POST method for the "distance" variable. Finally, Chart JS will be called to create a line graph, showing the emissions per day (in kg) over the course of 7 days (Monday-Sunday).
