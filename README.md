# FreshNest - Smart Food & Medicine Inventory Assistant

## Overview

FreshNest is a smart inventory management system that helps users organize food and medicine items, track expiry dates, reduce waste, and generate AI-powered recipe suggestions using available ingredients.

The platform encourages better food management by helping users consume items before they expire and monitor waste patterns through analytics.

---

## Problem Statement

Many households forget about food and medicine stored in refrigerators, freezers, pantries, or cabinets. This leads to expired products, unnecessary waste, and financial loss.

FreshNest solves this by providing a smart system to track inventory, expiry dates, and usage behavior while enabling AI-based suggestions for better consumption.

---

## Target Users

- Families
- Students living in hostels
- Working professionals
- Shared accommodations
- Small restaurants
- Elderly individuals managing medicines

---

##  Project Status

- ✔ Feature 1: Completed (Inventory Management API + Frontend Integration)
- ✔ Feature 2: Completed (CRUD API + Pagination + Filtering + Authentication Integration)
- ⏳ Feature 3: In Progress (AI Recipe Suggestions + Analytics + Automation)

---

##  Feature 1: Inventory Management (Completed)

Users can:
- Add items
- Update items
- Delete items
- View all items

Categories:
- Pantry
- Fridge
- Freezer
- Medicine

---

##  Feature 2: API Development (Completed)

### Backend Features

- Food Item CRUD API (Create, Read, Update, Delete)
- User-specific inventory (each user sees only their data)
- Pagination using PageNumberPagination
- Filtering by:
  - Category (Pantry, Fridge, Freezer, Medicine)
  - Status (Active, Consumed, Wasted)
- Expiry status calculation:
  - Fresh
  - Expiring Soon
  - Expired
- JWT Authentication using Supabase

---

## 🔐 Authentication

- JWT-based authentication using Supabase  
- Each user sees only their own data  

---

##  Testing

- Postman collection used for API testing  

### Verified:
- CRUD operations  
- Pagination  
- Filtering  
- Authentication  
- Frontend integration  

---

##  Item Usage Tracking

Users can mark items as:

- Active  
- Consumed  
- Wasted  

This helps analyze food waste patterns.

---

## 🤖 AI Recipe Suggestions (Planned)

- Generate recipes using available ingredients  
- Prioritize items nearing expiry  
- Reduce food waste through smart recommendations  

---

##  Dashboard Analytics

- Total items  
- Active items  
- Consumed items  
- Wasted items  
- Expiry-based insights  

---

## 🛠 Tech Stack

### Backend
- Django  
- Django REST Framework  
- django-filter  

---

### Database
- Supabase PostgreSQL  

---

### Authentication
- JWT Authentication (Supabase)  

---

### Frontend
- React.js  

---

### AI (Planned)
- OpenAI GPT-4o / Claude  

---

### Deployment
- Railway (planned)  

---

### Testing & Docs
- Postman  
- Pytest (planned)  
- Swagger (drf-spectacular)  

---

##  Data Models

### User

```
id
username
email
password
created_at
```

---

### FoodItem

```
id
user
name
quantity
category
purchase_date
expiry_date
status
created_at
```

---

##  API Endpoints

### Authentication APIs

```
POST /api/users/register/   → Register new user
POST /api/users/login/      → Login user (returns JWT token)
```

### Food Inventory APIs

```
POST   /api/foods/          → Create food item
GET    /api/foods/          → List items (paginated)
PATCH  /api/foods/{id}/     → Update item (status / details)
DELETE /api/foods/{id}/     → Delete item
```

---

###  Filtering APIs

```
GET /api/foods/?status=ACTIVE        → Filter by status
GET /api/foods/?category=FRIDGE      → Filter by category
GET /api/foods/?category=FRIDGE&status=ACTIVE → Combined filter
```

---

## 📊 Future Enhancements

- Email expiry reminders  
- Medicine refill reminders  
- Barcode scanning  
- OCR receipt scanning  
- Nutrition analysis  
- Food waste reports  
- AI-based recipe generation  
- Mobile app  
