import { useState, useCallback } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./theme";
import { CartProvider, useCart } from "./hooks/useCart";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import ProductPanel from "./components/ProductPanel";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CafesPage from "./pages/CafesPage";
import AssinaturasPage from "./pages/AssinaturasPage";
import CoursesPage from "./pages/CoursesPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import BlogPostPage from "./pages/BlogPostPage";
import TestimonialsPage from "./pages/TestimonialsPage";

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
    home: (
      <HomePage onNavigate={handleNavigate} onOpenProduct={handleOpenProduct} />
    ),
    cafes: (
      <CafesPage
        onNavigate={handleNavigate}
        onOpenProduct={handleOpenProduct}
      />
    ),
    assinaturas: <AssinaturasPage onNavigate={handleNavigate} />,
    cursos: (
      <CoursesPage
        onNavigate={handleNavigate}
        onOpenProduct={handleOpenProduct}
      />
    ),
    blog: (
      <BlogPage onNavigate={handleNavigate} onOpenPost={handleOpenBlogPost} />
    ),
    blogPost: selectedBlogPost ? (
      <BlogPostPage post={selectedBlogPost} onNavigate={handleNavigate} />
    ) : (
      <BlogPage onNavigate={handleNavigate} onOpenPost={handleOpenBlogPost} />
    ),
    sobre: <AboutPage onNavigate={handleNavigate} />,
    testimonios: <TestimonialsPage onNavigate={handleNavigate} />,
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

      <CartDrawer />
      <ProductPanel
        product={selectedProduct}
        open={panelOpen}
        onClose={handleClosePanel}
        onAddToCart={handleAddToCart}
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
