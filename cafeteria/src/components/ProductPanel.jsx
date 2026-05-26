import { useState, useEffect } from 'react';
import {
  Drawer, Box, Typography, IconButton,
  Button, Stack, Rating
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCart } from '../hooks/useCart';

function formatPrice(v) {
  return 'R$ ' + v.toFixed(2).replace('.', ',');
}

export default function ProductPanel({ product, open, onClose }) {
  const [qty, setQty] = useState(1);
  const { addToCart, setCartOpen } = useCart();

  useEffect(() => {
    if (open) setQty(1);
  }, [open, product]);

  const handleAdd = () => {
    if (!product) return;
    addToCart(product, qty);
    onClose();
    setCartOpen(true);
  };

  if (!product) return null;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 340,
          top: '60px',
          height: 'calc(100vh - 60px)',
          overflow: 'auto',
          p: 3.5,
          borderRadius: 0,
        },
      }}
    >
      {/* Close */}
      <IconButton
        size="small" onClick={onClose}
        sx={{ position: 'absolute', top: 20, right: 20, color: 'text.secondary' }}
      >
        <CloseIcon />
      </IconButton>

      {/* Breadcrumb */}
      <Typography sx={{ fontSize: 11, color: 'text.secondary', mb: 2.5, letterSpacing: 0.5 }}>
        HOME › CAFÉS › {product.name.toUpperCase()}
      </Typography>

      {/* Image */}
      <Box
        sx={{
          height: 200,
          bgcolor: 'linear-gradient(135deg, #F5EDD6 60%, #EDE0C4)',
          background: 'linear-gradient(135deg, #F5EDD6 60%, #EDE0C4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5, overflow: 'hidden',
        }}
      >
        <Box
          component="img" src={product.img} alt={product.name}
          sx={{ width: 140, height: 180, objectFit: 'cover' }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </Box>

      {/* Rating */}
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
        <Rating value={4.5} precision={0.5} readOnly size="small" sx={{ color: '#C4922A' }} />
        <Typography sx={{ fontSize: 11, color: 'text.secondary' }}>(128 avaliações)</Typography>
      </Stack>

      {/* Name */}
      <Typography variant="h4" sx={{ fontSize: 24, mb: 0.75 }}>{product.name}</Typography>

      {/* Meta */}
      <Typography sx={{ fontSize: 12, color: 'text.secondary', lineHeight: 1.8, mb: 0.5 }}>
        Notas: {product.notes}<br />
        Região: {product.region}<br />
        Processo: {product.process}
      </Typography>
      <Typography sx={{ fontSize: 12, color: 'text.secondary', mb: 2 }}>
        Pontuação: {product.score} pontos
      </Typography>

      {/* Price */}
      <Typography
        sx={{ fontFamily: '"Playfair Display", serif', fontSize: 28, fontWeight: 700, color: '#5C3317', mb: 2.5 }}
      >
        {formatPrice(product.price)}
      </Typography>

      {/* Qty + Add */}
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <Stack direction="row" alignItems="center" spacing={0.75}>
          <IconButton
            size="small" onClick={() => setQty(q => Math.max(1, q - 1))}
            sx={{ width: 28, height: 28, borderRadius: 0, bgcolor: '#F5EDD6', border: '1px solid #EDE0C4' }}
          >
            <RemoveIcon sx={{ fontSize: 14 }} />
          </IconButton>
          <Typography sx={{ fontSize: 14, fontWeight: 700, minWidth: 20, textAlign: 'center' }}>{qty}</Typography>
          <IconButton
            size="small" onClick={() => setQty(q => q + 1)}
            sx={{ width: 28, height: 28, borderRadius: 0, bgcolor: '#F5EDD6', border: '1px solid #EDE0C4' }}
          >
            <AddIcon sx={{ fontSize: 14 }} />
          </IconButton>
        </Stack>
        <Button
          variant="contained" onClick={handleAdd} sx={{ flex: 1, py: 1.3, bgcolor: '#2C1A0E', '&:hover': { bgcolor: '#8B4513' } }}
        >
          Adicionar ao Carrinho
        </Button>
      </Stack>
    </Drawer>
  );
}
