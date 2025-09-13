# 🛍️ Product Compare App (React + Material UI)

A responsive **Product Comparison App** built with **React** and **Material UI**.  
Users can browse a product list, search/filter, add up to 3 products to compare,  
and view a side-by-side comparison (table on desktop, cards on mobile).

---

## 🚀 Features
- 📱 **Responsive UI** – Table view on desktop, card view on mobile.  
- 🌗 **Light/Dark Mode Switcher** (persisted via MUI theme).  
- 🔍 **Search & Filter** – Search products by name or brand.  
- 📊 **Comparison View** – Highlight differences in brand, price, and features.  
- 🗑️ **Clear/Remove Options** – Remove individual products or clear all.  
- 💾 **LocalStorage Persistence** – Keeps compare list after reload.  
- ♿ **Keyboard Accessible** – Use <kbd>Enter</kbd> to add/remove items.  
- ⚡ **Optimized** with `React.memo`, `useMemo`, and `useCallback`.

## 📂 Project Structure

src/
├── components/
│ ├── Navbar.jsx # AppBar with theme switcher
│ ├── ProductList.jsx # Grid + Search + Product cards
│ ├── ProductCard.jsx # Individual product display
│ ├── CompareArea.jsx # Comparison table & mobile cards
│
├── data/
│ └── Products.js # Static product data
│
├── App.jsx # Root app with state management and local storage implementation.
├── index.js # React entry point

---

## 📦 Dependencies
Install required packages:
# Core React
npm install react react-dom
# Material UI + Icons
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled


▶️ Getting Started

Clone the repository:

git clone https://github.com/Rushi123-coder/product-compare-app.git
cd product-compare-app

Install dependencies:
npm install

Run the app:
npm run dev   # for Vite# product-compare-app
