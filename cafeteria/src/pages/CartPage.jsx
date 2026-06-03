import {
  Box,
  Grid,
  Typography,
  IconButton,
  Button,
  Paper,
  Divider,
  Stack,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useCart } from "../hooks/useCart";

function formatPrice(v) {
  return `R$ ${v.toFixed(2).replace('.', ',')}`;
}

export default function CartPage({ onNavigate }) {
  const { cart, subtotal, updateQty, removeItem } = useCart();

  return (
    <Box sx={{ px: { xs: 3, md: 10 }, py: { xs: 4, md: 6 } }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 3, mb: 4 }}>
        <Box>
          <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 40 }, mb: 1.25 }}>
            Seu carrinho de compras
          </Typography>
          <Typography sx={{ color: "text.secondary", maxWidth: 560 }}>
            Confira os itens adicionados, ajuste quantidades e visualize o subtotal.
            Todo o fluxo é visual e pronto para demonstração.
          </Typography>
        </Box>
        <Button variant="contained" onClick={() => onNavigate("shop")}>Continuar comprando</Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, bgcolor: "rgba(255,255,255,0.95)" }}>
            <Typography sx={{ fontWeight: 700, mb: 2 }}>Itens no carrinho</Typography>
            {cart.length === 0 ? (
              <Box sx={{ py: 8, textAlign: "center" }}>
                <Typography sx={{ mb: 1.5 }}>Seu carrinho está vazio.</Typography>
                <Button variant="outlined" onClick={() => onNavigate("shop")}>Voltar à loja</Button>
              </Box>
            ) : (
              cart.map((item) => (
                <Box key={item.id} sx={{ mb: 3 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3} sm={2}>
                      <Box
                        component="img"
                        src={item.img}
                        alt={item.name}
                        sx={{ width: "100%", borderRadius: 1, objectFit: "cover", maxHeight: 110 }}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </Grid>
                    <Grid item xs={9} sm={10}>
                      <Typography sx={{ fontWeight: 700 }}>{item.name}</Typography>
                      <Typography sx={{ color: "text.secondary", fontSize: 13, mb: 1 }}>
                        {item.notes} • {item.roast}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                        <IconButton
                          size="small"
                          onClick={() => updateQty(item.id, -1)}
                          sx={{ width: 28, height: 28, border: "1px solid rgba(140,90,40,0.2)", bgcolor: "#F7EFE6" }}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>
                        <Typography sx={{ minWidth: 28, textAlign: "center", fontWeight: 700 }}>{item.qty}</Typography>
                        <IconButton
                          size="small"
                          onClick={() => updateQty(item.id, 1)}
                          sx={{ width: 28, height: 28, border: "1px solid rgba(140,90,40,0.2)", bgcolor: "#F7EFE6" }}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                        <Button
                          variant="text"
                          startIcon={<DeleteOutlineIcon />}
                          onClick={() => removeItem(item.id)}
                          sx={{ color: "#7A5C3A", textTransform: "none" }}
                        >
                          Remover
                        </Button>
                      </Stack>
                      <Typography sx={{ fontWeight: 700 }}>{formatPrice(item.price)} cada</Typography>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 3 }} />
                </Box>
              ))
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, bgcolor: "rgba(255,255,255,0.95)" }}>
            <Typography sx={{ fontWeight: 700, mb: 2 }}>Resumo do pedido</Typography>
            <Stack spacing={1.5} sx={{ mb: 2 }}>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Subtotal</Typography>
                <Typography>{formatPrice(subtotal)}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Frete estimado</Typography>
                <Typography>R$ 14,90</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between" sx={{ fontWeight: 700 }}>
                <Typography>Total</Typography>
                <Typography>{formatPrice(subtotal + 14.9)}</Typography>
              </Stack>
            </Stack>
            <Button
              fullWidth
              variant="contained"
              onClick={() => onNavigate("checkout")}
              disabled={cart.length === 0}
            >
              Ir para checkout
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
