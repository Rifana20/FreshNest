# FreshNest - Smart Food & Medicine Inventory Assistant

## Overview

FreshNest is a smart inventory management system that helps users organize food and medicine items, track expiry dates, reduce waste, and generate AI-powered recipe suggestions using available ingredients.

The platform encourages better food management by helping users consume items before they expire and monitoring waste patterns.

---

## Problem

Many households forget about food and medicine stored in refrigerators, freezers, pantries, or cabinets. This often leads to expired products, unnecessary waste, and financial loss.

FreshNest helps users stay organized, track expiry dates, and make better use of available ingredients through AI-powered recommendations.

---

## Planned Features

### User Authentication

* Register
* Login
* Secure user-specific inventory

### Inventory Management

* Add items
* Edit items
* Delete items
* View inventory
* Categorize items as:

  * Pantry
  * Fridge
  * Freezer
  * Medicine

### Expiry Tracking

* Fresh items
* Expiring soon items
* Expired items
* Expiry notifications (future enhancement)

### Item Usage Tracking

Users can mark items as:

* Consumed / Used
* Wasted / Thrown Away

This helps monitor food waste and usage habits.

### AI Recipe Suggestions

* Generate recipes from available ingredients
* Prioritize ingredients nearing expiry
* Reduce food waste through smart recommendations

### Dashboard Analytics

* Total inventory items
* Expiring soon items
* Consumed items
* Wasted items
* Waste reduction insights

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

* OpenAI GPT-4o / Claude

### Deployment

* Railway

### Documentation

* Swagger (drf-spectacular)
* Postman

### Testing

* Pytest

---

## Status

✔ Feature 1: Completed  
✔ Feature 2: Completed (CRUD API + Pagination + Filtering + Auth Integration)  
⏳ Feature 3: In Progress 
