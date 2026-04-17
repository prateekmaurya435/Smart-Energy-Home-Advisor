# Smart Household Energy Advisor 🔌⚡

**Team Nextech | RR-41 | Problem Statement PS-AO7**  
**Innovathon 2026 – HACKLANCE**

---

## 📋 About
An AI-powered web app that analyzes household energy usage, predicts next month's bill, and gives actionable savings recommendations — from any phone or browser.

**Key Features:**
- Per-appliance cost breakdown
- ML-based bill prediction (Linear Regression, 6-month trend)
- AI-detected high-drain appliances (Top 3)
- Personalized ₹ savings recommendations
- State-wise tariff configuration
- Mobile-first PWA design

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Direct opening link on vercel

link = [https://smart-energy-home-advisor.vercel.app/]

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js / Next.js 14 |
| Charts | Recharts |
| Styling | Tailwind CSS |
| Design | PWA (Mobile-first) |
| Backend (planned) | Node.js + Express |
| Database (planned) | MongoDB / Firebase |
| ML (planned) | Python + Scikit-learn |

---

## 📁 Project Structure

```
src/
└── app/
    ├── page.js              # Entry point
    ├── layout.js            # Root layout
    ├── globals.css          # Global styles
    └── components/
        ├── Navbar.js        # Navigation bar
        ├── Dashboard.js     # Home/hero page
        ├── InputForm.js     # Appliance data entry
        ├── Results.js       # Analysis results + charts
        └── AboutSection.js  # Tech stack, feasibility, references
```

---

## 📊 Pages

1. **Home** – Stats, impact overview, top savings actions
2. **Analyze** – Enter appliances, bill, state, family size
3. **Results** – Charts, ML prediction, recommendations, breakdown table
4. **About** – Tech approach, feasibility, references (from presentation)

---

## 🔌 Implementation Flow

```
User Inputs → Calculates → ML Predicts → AI Detects → Recommends
(Appliances)   (Per cost)  (Next bill)   (Top 3 high) (₹ savings)
```

---

## 📚 References

- [IEA India Energy Outlook 2021](https://www.iea.org/reports/india-energy-outlook-2021)
- [Bureau of Energy Efficiency (BEE)](https://beeindia.gov.in/)
- [NITI Aayog – Energy Survey](https://www.niti.gov.in/)
- [Scikit-learn](https://scikit-learn.org/stable/)
- [React.js](https://react.dev/)
- [MongoDB](https://www.mongodb.com/docs/)

---

*@Innovathon 2026 Idea Submission – HACKLANCE*
