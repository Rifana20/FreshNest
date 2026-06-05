# FreshNest - Smart Food & Medicine Inventory Assistant

## Problem Statement

Many households waste food and medicines because they forget expiry dates or lose track of stored items. This results in unnecessary expenses, environmental impact, and poor inventory management.

FreshNest helps users manage food and medicine inventories, monitor expiry dates, track consumption and waste, and receive AI-generated recipe suggestions using available ingredients.

---

## Target Users

* Families
* Students living in hostels
* Working professionals
* Shared accommodations
* Small restaurants
* Elderly individuals managing medicines

---

## MVP Features

### Feature 1: Inventory Management

Users can:

* Add items
* Update items
* Delete items
* View all items

Categories:

* Pantry
* Fridge
* Freezer
* Medicine

---

### Feature 2: Expiry Tracking

System automatically classifies items as:

* Fresh
* Expiring Soon
* Expired

Based on expiry dates.

---

### Feature 3: Usage & Waste Tracking

Users can mark items as:

* Consumed / Used
* Wasted / Thrown Away

This helps analyze waste patterns.

---

### Feature 4: AI Recipe Suggestions

Generate recipes using available ingredients.

Priority is given to ingredients nearing expiry.

---

### Feature 5: Authentication

Users can:

* Register
* Login
* Access only their own inventory

---

## Tech Stack

### Backend

* Django
* Django REST Framework

### Database

* Supabase PostgreSQL

### Authentication

* JWT Authentication

### AI

* OpenAI GPT-4o or Claude

### Deployment

* Railway

### Documentation

* Swagger (drf-spectacular)
* Postman

### Testing

* Pytest

---

## Data Model

### User

Fields

* id
* username
* email
* password
* created_at

---

### FoodItem

Fields

* id
* user
* name
* quantity
* category
* purchase_date
* expiry_date
* status
* created_at

Category Choices:

* Pantry
* Fridge
* Freezer
* Medicine

Status Choices:

* Active
* Consumed
* Wasted

---

### RecipeSuggestion

Fields

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

---

## Future Enhancements

* Email expiry reminders
* Medicine refill reminders
* Barcode scanning
* OCR receipt scanning
* Nutrition analysis
* Food waste reports
* Mobile application
