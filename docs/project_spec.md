# Food Expiry Tracker + AI Recipe Suggestions

## Problem Statement

Many households waste food because they forget expiry dates or don't know how to use ingredients before they expire. This results in unnecessary food waste and financial loss.

The Food Expiry Tracker helps users manage food inventory, track expiry dates, and receive AI-generated recipe suggestions using available ingredients.

---

## Target Users

* Families
* Students living in hostels
* Working professionals
* Small restaurants
* Shared accommodations

---

## MVP Features

### Feature 1: Food Inventory Management

Users can:

* Add food items
* Update food items
* Delete food items
* View all food items

### Feature 2: Expiry Tracking

System automatically identifies:

* Fresh items
* Expiring soon items
* Expired items

### Feature 3: AI Recipe Suggestions

Users can generate recipes using available ingredients before they expire.

### Feature 4: Authentication

Users can:

* Register
* Login
* Access only their own food inventory

---

## Tech Stack

Backend:

* Django
* Django REST Framework

Database:

* Supabase PostgreSQL

Authentication:

* JWT Authentication

AI:

* OpenAI GPT-4o or Claude

Deployment:

* Railway

Documentation:

* Swagger (drf-spectacular)
* Postman

Testing:

* Pytest

---

## Data Model

### User

Fields:

* id
* email
* password
* created_at

### FoodItem

Fields:

* id
* user
* name
* quantity
* category
* purchase_date
* expiry_date
* created_at

### RecipeSuggestion

Fields:

* id
* user
* ingredients_used
* recipe_response
* created_at

---

## Relationships

User
│
├── FoodItem (One-to-Many)
│
└── RecipeSuggestion (One-to-Many)
