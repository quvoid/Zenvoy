# Real-World API Integration Plan for Zenvoy

## Executive Summary

To transform Zenvoy from a demo application into a production-ready travel platform, you'll need to integrate several external APIs. This document outlines all required APIs, their costs, implementation complexity, and recommended approach.

---

## 💰 Total Estimated Monthly Costs

| Tier | Monthly Cost (INR) | Features |
|------|-------------------|----------|
| **MVP/Bootstrap** | ₹0 - ₹5,000 | Free tiers, limited API calls |
| **Growth** | ₹15,000 - ₹40,000 | Production APIs, moderate traffic |
| **Scale** | ₹1,00,000+ | High traffic, premium features |

---

## 🚂 1. Train Data APIs (Indian Railways)

### Option A: IRCTC Official API (Recommended)
- **Provider:** Indian Railway Catering and Tourism Corporation
- **What it provides:** Real-time train schedules, availability, PNR status, fare enquiry
- **Cost:** 
  - Registration: ₹5,000 (one-time)
  - API Calls: ₹0.50 - ₹2 per request (varies by endpoint)
  - Monthly minimum: ~₹10,000 for commercial use
- **Pros:** Official data, reliable, booking capability
- **Cons:** Complex approval process (2-4 weeks), requires business registration
- **Apply:** https://www.irctc.co.in/nget/train-search

### Option B: RapidAPI - Indian Railways
- **Provider:** Third-party aggregators on RapidAPI
- **What it provides:** Train search, schedules, PNR status
- **Cost:**
  - Free tier: 100 requests/month
  - Basic: $10/month (~₹830) for 1,000 requests
  - Pro: $50/month (~₹4,150) for 10,000 requests
- **Pros:** Easy integration, quick setup
- **Cons:** Third-party data, may be delayed
- **Link:** https://rapidapi.com/collection/indian-railways-api

### Option C: ConfirmTkt API
- **Provider:** ConfirmTkt (backed by Railofy)
- **What it provides:** Train search, live status, seat availability
- **Cost:** Contact for pricing (typically ₹5,000-15,000/month)
- **Pros:** Well-documented, train prediction features
- **Link:** https://www.confirmtkt.com/developers

### 🎯 Recommendation for Trains
Start with **RapidAPI** for development/testing (free tier), then migrate to **IRCTC Official** for production.

---

## ✈️ 2. Flight Data APIs

### Option A: Amadeus API (Recommended)
- **Provider:** Amadeus (Global GDS)
- **What it provides:** Flight search, pricing, booking, seat maps
- **Cost:**
  - Self-Service (Test): FREE (limited to 2,000 calls/month)
  - Production: Pay-per-use starting at $0.001/request
  - Estimated: ₹2,000 - ₹10,000/month for moderate usage
- **Pros:** Global coverage, includes Indian carriers, booking capability
- **Cons:** Requires approval for production
- **Link:** https://developers.amadeus.com/

### Option B: Skyscanner API
- **Provider:** Skyscanner (via RapidAPI)
- **What it provides:** Flight search and comparison
- **Cost:**
  - Free: 50 requests/month
  - Basic: $10/month for 500 requests
- **Pros:** Good for meta-search
- **Cons:** Cannot book directly
- **Link:** https://rapidapi.com/skyscanner/api/skyscanner-flight-search

### Option C: Duffel API
- **Provider:** Duffel
- **What it provides:** Full booking capability
- **Cost:** Commission-based (1-3% per booking)
- **Pros:** Modern API, includes Indian LCCs
- **Link:** https://duffel.com/

### 🎯 Recommendation for Flights
Use **Amadeus Self-Service** for development (FREE), then move to Amadeus Production or **Duffel** for bookings.

---

## 🏨 3. Hotel/Accommodation APIs

### Option A: Booking.com Affiliate API (Recommended)
- **Provider:** Booking.com
- **What it provides:** Hotel search, availability, pricing, images
- **Cost:** FREE (commission-based, ~10-15% if you enable booking)
- **Pros:** Massive inventory, includes India, trusted brand
- **Cons:** Affiliate approval required (1-2 weeks)
- **Link:** https://www.booking.com/affiliate-program/v2/index.html

### Option B: Agoda API
- **Provider:** Agoda (strong in Asia)
- **What it provides:** Hotel search, best for Asia-Pacific
- **Cost:** Commission-based (similar to Booking.com)
- **Link:** https://partners.agoda.com/

### Option C: Google Hotels API
- **Provider:** Google
- **What it provides:** Hotel search, pricing comparison
- **Cost:** Part of Google Maps Platform pricing
- **Note:** Requires partner agreement

### Option D: TripAdvisor Content API
- **Provider:** TripAdvisor
- **What it provides:** Hotel info, reviews, ratings
- **Cost:** FREE for content, paid for booking links
- **Link:** https://developer-tripadvisor.com/

### 🎯 Recommendation for Hotels
Use **Booking.com Affiliate API** - it's FREE and has the best Indian hotel coverage.

---

## 🗺️ 4. Maps & Location APIs

### Option A: MapmyIndia / Mappls (Already Integrated)
- **Provider:** MapmyIndia (now Mappls)
- **What it provides:** India-specific maps, geocoding, routing
- **Cost:**
  - Developer: FREE (5,000 map loads/month)
  - Startup: ₹2,999/month (50,000 loads)
  - Business: Custom pricing
- **Status:** ✅ Already have API key
- **Link:** https://www.mapmyindia.com/api/

### Option B: Google Maps API
- **Provider:** Google
- **What it provides:** Global maps, Street View, Places API
- **Cost:**
  - Free tier: $200/month credit (~₹16,600)
  - Maps Static: $2 per 1,000 requests
  - Directions: $5 per 1,000 requests
- **Pros:** Best global coverage
- **Cons:** Expensive at scale
- **Link:** https://developers.google.com/maps

### 🎯 Recommendation for Maps
Continue with **Mappls** for India-specific features; add **Google Maps** only for international expansion.

---

## 🤖 5. AI/Content Generation APIs

### Option A: Google Gemini (Current)
- **Provider:** Google
- **What it provides:** Itinerary generation, descriptions
- **Cost:**
  - Free tier: 60 requests/minute
  - Paid: $0.0025 per 1K characters
- **Status:** ✅ Already integrated
- **Issue:** Free tier has rate limits

### Option B: OpenAI GPT-4
- **Provider:** OpenAI
- **What it provides:** Superior text generation
- **Cost:**
  - GPT-4o: $2.50 per 1M input tokens
  - GPT-4o-mini: $0.15 per 1M input tokens
- **Estimated:** ₹500-2,000/month for moderate usage

### 🎯 Recommendation for AI
Keep **Gemini** for now; switch to **GPT-4o-mini** if you need more reliability.

---

## 🌤️ 6. Weather API (Bonus Feature)

### Option A: OpenWeatherMap
- **Provider:** OpenWeatherMap
- **What it provides:** Current weather, forecasts
- **Cost:**
  - Free: 1,000 calls/day
  - Paid: $40/month for 100,000 calls
- **Link:** https://openweathermap.org/api

### Option B: WeatherAPI
- **Provider:** WeatherAPI.com
- **What it provides:** Weather + astronomy data
- **Cost:**
  - Free: 1,000,000 calls/month
- **Link:** https://www.weatherapi.com/

### 🎯 Recommendation
Use **WeatherAPI** free tier - 1 million calls/month is very generous!

---

## 📊 Implementation Priority & Timeline

### Phase 1: MVP (Week 1-2) - Cost: ₹0
| API | Action | Priority |
|-----|--------|----------|
| Mappls | ✅ Already working | Done |
| Gemini AI | ✅ Already working (with fallback) | Done |
| Transport/Hotel | Use smart simulation (current) | Done |
| WeatherAPI | Add free weather widget | Optional |

### Phase 2: Real Data (Week 3-4) - Cost: ₹5,000-10,000/month
| API | Action | Priority |
|-----|--------|----------|
| RapidAPI Trains | Replace mock with real train data | High |
| Booking.com Hotels | Apply for affiliate, integrate | High |
| Amadeus Flights | Create dev account, test flights | Medium |

### Phase 3: Production Ready (Month 2) - Cost: ₹20,000-40,000/month
| API | Action | Priority |
|-----|--------|----------|
| IRCTC Official | Apply for commercial access | High |
| Amadeus Production | Enable real booking capability | High |
| Google Maps | Add for international routes | Medium |

---

## 📋 API Integration Checklist

```
[ ] Phase 1 - Foundation (FREE)
    [x] Mappls Maps - Working
    [x] Gemini AI - Working with fallback
    [ ] WeatherAPI - Easy add

[ ] Phase 2 - Real Data (₹5-10K/month)
    [ ] Apply for Booking.com Affiliate (1-2 weeks)
    [ ] Set up RapidAPI Indian Railways
    [ ] Create Amadeus Developer Account
    [ ] Add hotel images via Unsplash API (FREE)

[ ] Phase 3 - Commercial (₹20-40K/month)
    [ ] IRCTC Commercial License
    [ ] Amadeus Production Access
    [ ] Payment Gateway (Razorpay - 2% per txn)
```

---

## 💡 Money-Saving Tips

1. **Use Free Tiers Strategically**
   - Amadeus: 2,000 free calls/month
   - Gemini: 60 req/min free
   - WeatherAPI: 1M calls/month free
   - Mappls: 5,000 loads/month free

2. **Cache Aggressively**
   - Train schedules don't change often → Cache for 24 hours
   - Hotel prices → Cache for 1 hour
   - Weather → Cache for 30 minutes

3. **Lazy Loading**
   - Don't fetch all data upfront
   - Only fetch when user scrolls to section

4. **Fallback Strategy**
   - If API fails, show cached/estimated data (already implemented!)
