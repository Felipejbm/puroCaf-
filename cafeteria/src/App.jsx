import { useState, useCallback } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme';
import { CartProvider, useCart } from './hooks/useCart';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import ProductPanel from './components/ProductPanel';
import Notification from './components/Notification';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CafesPage from './pages/CafesPage';
import AssinaturasPage from './pages/AssinaturasPage';
import CoursesPage from './pages/CoursesPage';
import BlogPage from './pages/BlogPage';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: '' });
  const { addToCart } = useCart();

  const handleNavigate = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenProduct = useCallback((product) => {
    setSelectedProduct(product);
    setPanelOpen(true);
  }, []);

  const handleClosePanel = useCallback(() => {
    setPanelOpen(false);
  }, []);

  const handleAddToCart = useCallback((product, qty) => {
    addToCart(product, qty);
    setNotification({ open: true, message: `${product.name} adicionado ao carrinho!` });
  }, [addToCart]);

  const pages = {
    home: <HomePage onNavigate={handleNavigate} onOpenProduct={handleOpenProduct} />,
    cafes: <CafesPage onOpenProduct={handleOpenProduct} />,
    assinaturas: <AssinaturasPage />,
    cursos: <CoursesPage onOpenProduct={handleOpenProduct} />,
    blog: <BlogPage />,
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <Box component="main" sx={{ flex: 1, pt: '60px' }}>
        {pages[currentPage] || pages.home}
      </Box>

      <Footer />

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
        onClose={() => setNotification(n => ({ ...n, open: false }))}
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
