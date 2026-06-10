## 🔐 Authentication

- JWT-based authentication using Supabase  
- Each user sees only their own data  

---

## 🧪 Testing

- Postman collection used for API testing  

### Verified:
- CRUD operations  
- Pagination  
- Filtering  
- Authentication  
- Frontend integration  

---

## 📊 Item Usage Tracking

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

## 📊 Dashboard Analytics

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

## 🧪 Data Models

### User
- id
- username
- email
- password
- created_at

---

### FoodItem
- id
- user
- name
- quantity
- category
- purchase_date
- expiry_date
- status
- created_at

---
