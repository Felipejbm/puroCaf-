import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../hooks/useCart";

function formatPrice(v) {
  return "R$ " + v.toFixed(2).replace(".", ",");
}

function CartItem({ item }) {
  const { updateQty } = useCart();
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        py: 1.75,
        borderBottom: "1px solid #F0EBE1",
      }}
    >
      <Box
        sx={{
          width: 60,
          height: 70,
          bgcolor: "#F5EDD6",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={item.img}
          alt={item.name}
          sx={{ width: 48, height: 60, objectFit: "cover" }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 13, mb: 0.25 }}>
          {item.name}
        </Typography>
        <Typography sx={{ fontSize: 11, color: "text.secondary", mb: 1 }}>
          250g
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton
              size="small"
              onClick={() => updateQty(item.id, -1)}
              sx={{
                width: 24,
                height: 24,
                borderRadius: 0,
                bgcolor: "#F5EDD6",
                border: "1px solid #EDE0C4",
                "&:hover": { bgcolor: "#EDE0C4" },
              }}
            >
              <RemoveIcon sx={{ fontSize: 13 }} />
            </IconButton>
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 700,
                minWidth: 16,
                textAlign: "center",
              }}
            >
              {item.qty}
            </Typography>
            <IconButton
              size="small"
              onClick={() => updateQty(item.id, 1)}
              sx={{
                width: 24,
                height: 24,
                borderRadius: 0,
                bgcolor: "#F5EDD6",
                border: "1px solid #EDE0C4",
                "&:hover": { bgcolor: "#EDE0C4" },
              }}
            >
              <AddIcon sx={{ fontSize: 13 }} />
            </IconButton>
          </Stack>
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 14,
              fontWeight: 700,
              color: "#5C3317",
            }}
          >
            {formatPrice(item.price * item.qty)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default function CartDrawer({ onViewCart, onCheckout }) {
  const { cart, subtotal, cartOpen, setCartOpen } = useCart();

  return (
    <Drawer
      anchor="right"
      open={cartOpen}
      onClose={() => setCartOpen(false)}
      PaperProps={{
        sx: {
          width: 380,
          display: "flex",
          flexDirection: "column",
          borderRadius: 0,
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: 3,
          py: 2.5,
          borderBottom: "1px solid #EDE0C4",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontSize: 18 }}>
          Seu carrinho
        </Typography>
        <IconButton
          size="small"
          onClick={() => setCartOpen(false)}
          sx={{ color: "text.secondary" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Items */}
      <Box sx={{ flex: 1, overflowY: "auto", px: 3 }}>
        {cart.length === 0 ? (
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: 13,
              textAlign: "center",
              mt: 5,
            }}
          >
            Seu carrinho está vazio.
          </Typography>
        ) : (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </Box>

      {/* Footer */}
      <Box sx={{ px: 3, py: 2.5, borderTop: "1px solid #EDE0C4" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography sx={{ fontSize: 14 }}>Subtotal</Typography>
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 16,
              fontWeight: 700,
              color: "#5C3317",
            }}
          >
            {formatPrice(subtotal)}
          </Typography>
        </Box>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            mb: 1.25,
            py: 1.6,
            bgcolor: "#8B4513",
            "&:hover": { bgcolor: "#5C3317" },
          }}
          onClick={() => {
            setCartOpen(false);
            onCheckout?.();
          }}
        >
          Finalizar Compra
        </Button>
        <Button
          fullWidth
          variant="outlined"
          sx={{
            py: 1.4,
            borderColor: "#EDE0C4",
            color: "#7A5C3A",
            "&:hover": { borderColor: "#8B4513", color: "#8B4513" },
          }}
          onClick={() => {
            setCartOpen(false);
            onViewCart?.();
          }}
        >
          Ver meu carrinho completo
        </Button>
      </Box>
    </Drawer>
  );
}
