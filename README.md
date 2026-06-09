# Link do site na web: [Link do site](https://puro-caf.vercel.app/)

# ☕ Cafeteria Artesanal — React + MUI

Site completo de cafeteria artesanal, convertido de HTML/CSS puro para **React 18 + MUI v5**.

## 📁 Estrutura do Projeto

```
src/
├── App.jsx                  # Componente raiz + roteamento de páginas
├── main.jsx                 # Entry point ReactDOM
│
├── theme/
│   └── index.js             # MUI theme customizado (cores, tipografia, componentes)
│
├── data/
│   └── index.js             # Dados dos cafés e planos de assinatura
│
├── hooks/
│   └── useCart.js           # Context + hook do carrinho (CartProvider, useCart)
│
├── components/
│   ├── Navbar.jsx           # AppBar fixo com navegação e badge do carrinho
│   ├── ProductCard.jsx      # Card de produto reutilizável
│   ├── CartDrawer.jsx       # Drawer lateral do carrinho
│   ├── ProductPanel.jsx     # Drawer de detalhes do produto
│   ├── Notification.jsx     # Snackbar de confirmação
│   └── Footer.jsx           # Rodapé
│
└── pages/
    ├── HomePage.jsx         # Hero + Destaques + Serviços + Depoimentos
    ├── CafesPage.jsx        # Catálogo completo com filtros + Banner Kit
    └── AssinaturasPage.jsx  # Planos Bronze / Prata / Gold com toggle mensal/semestral
```

## 🚀 Como rodar

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

## 🛠️ Tecnologias

- **React 18** — Componentes funcionais, hooks, Context API
- **MUI v5** — Componentes, Grid, Drawer, AppBar, Switch, Snackbar...
- **Vite** — Build tool e dev server ultrarrápido
- **Google Fonts** — Playfair Display + Lato

## ✨ Funcionalidades

- Navegação entre páginas (Home, Cafés, Assinaturas)
- Carrinho com estado global via Context API
- Drawer de detalhes do produto com controle de quantidade
- Toggle mensal/semestral com 10% de desconto
- Notificação ao adicionar produtos
- Navbar com scroll trigger (muda opacidade ao rolar)
- Layout responsivo
