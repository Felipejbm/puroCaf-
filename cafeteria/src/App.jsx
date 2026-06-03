import { useState, useCallback } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./theme";
import { CartProvider, useCart } from "./hooks/useCart";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import ProductPanel from "./components/ProductPanel";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CafesPage from "./pages/CafesPage";
import AssinaturasPage from "./pages/AssinaturasPage";
import CoursesPage from "./pages/CoursesPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import BlogPostPage from "./pages/BlogPostPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

function AppContent() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });
  const { addToCart } = useCart();

  const handleNavigate = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleLogin = useCallback(() => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleOpenProduct = useCallback((product) => {
    setSelectedProduct(product);
    setPanelOpen(true);
  }, []);

  const handleClosePanel = useCallback(() => {
    setPanelOpen(false);
  }, []);

  const handleOpenBlogPost = useCallback((post) => {
    setSelectedBlogPost(post);
    setCurrentPage("blogPost");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleAddToCart = useCallback(
    (product, qty) => {
      addToCart(product, qty);
      setNotification({
        open: true,
        message: `${product.name} adicionado ao carrinho!`,
      });
    },
    [addToCart],
  );

  const pages = {
    login: <LoginPage onLogin={handleLogin} />,
    home: <HomePage onNavigate={handleNavigate} onOpenProduct={handleOpenProduct} />,
    cafes: <ShopPage onOpenProduct={handleOpenProduct} />,
    assinaturas: <AssinaturasPage onNavigate={handleNavigate} />,
    cursos: (
      <CoursesPage
        onNavigate={handleNavigate}
        onOpenProduct={handleOpenProduct}
      />
    ),
    blog: <BlogPage onNavigate={handleNavigate} onOpenPost={handleOpenBlogPost} />,
    blogPost: selectedBlogPost ? (
      <BlogPostPage post={selectedBlogPost} onNavigate={handleNavigate} />
    ) : (
      <BlogPage onNavigate={handleNavigate} onOpenPost={handleOpenBlogPost} />
    ),
    sobre: <AboutPage onNavigate={handleNavigate} />,
    testimonios: <TestimonialsPage onNavigate={handleNavigate} />,
    cart: <CartPage onNavigate={handleNavigate} />,
    checkout: <CheckoutPage onNavigate={handleNavigate} />,
    dashboard: <AdminDashboardPage />,
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <Box
        component="main"
        sx={{
          flex: 1,
          pt: "60px",
          animation: "pageEnter 0.5s ease-out",
          "@keyframes pageEnter": {
            from: {
              opacity: 0,
              transform: "translateY(12px)",
            },
            to: {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}
      >
        {pages[currentPage] || pages.home}
      </Box>

      <Footer onNavigate={handleNavigate} />

      <CartDrawer
        onViewCart={() => handleNavigate("cart")}
        onCheckout={() => handleNavigate("checkout")}
      />
      <ProductPanel
        product={selectedProduct}
        open={panelOpen}
        onClose={handleClosePanel}
      />
      <Notification
        open={notification.open}
        message={notification.message}
        onClose={() => setNotification((n) => ({ ...n, open: false }))}
      />
    </Box>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  );
}
