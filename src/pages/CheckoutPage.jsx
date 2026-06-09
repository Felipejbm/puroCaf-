import { useMemo, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Paper,
  Stack,
  Button,
  Divider,
  Chip,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import QrCodeIcon from "@mui/icons-material/QrCode";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { useCart } from "../hooks/useCart";

function formatPrice(v) {
  return `R$ ${v.toFixed(2).replace('.', ',')}`;
}

const PAYMENT_OPTIONS = [
  { value: "card", label: "Cartão de crédito", icon: CreditCardIcon },
  { value: "pix", label: "PIX", icon: QrCodeIcon },
  { value: "boleto", label: "Boleto", icon: ReceiptIcon },
];

export default function CheckoutPage({ onNavigate }) {
  const { cart, subtotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [address, setAddress] = useState({
    name: "",
    email: "",
    cep: "",
    street: "",
    number: "",
    district: "",
    city: "",
    state: "",
  });

  const total = useMemo(() => subtotal + 14.9, [subtotal]);

  const handleChange = (field) => (event) => {
    setAddress((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <Box sx={{ px: { xs: 3, md: 10 }, py: { xs: 4, md: 6 } }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 3, mb: 4 }}>
        <Box>
          <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 40 }, mb: 1.25 }}>
            Finalizar compra
          </Typography>
          <Typography sx={{ color: "text.secondary", maxWidth: 580 }}>
            Preencha o endereço, escolha o método de pagamento e visualize o
            resumo do pedido. Tudo preparado para uma experiência elegante.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3, bgcolor: "rgba(255,255,255,0.95)" }}>
            <Typography sx={{ fontWeight: 700, mb: 2 }}>Informações de entrega</Typography>
            <Grid container spacing={2}>
              {[
                { label: "Nome completo", field: "name" },
                { label: "Email", field: "email" },
                { label: "CEP", field: "cep" },
                { label: "Rua", field: "street" },
                { label: "Número", field: "number" },
                { label: "Bairro", field: "district" },
                { label: "Cidade", field: "city" },
                { label: "Estado", field: "state" },
              ].map((fieldConfig) => (
                <Grid item xs={12} sm={fieldConfig.field === "street" ? 8 : 6} key={fieldConfig.field}>
                  <TextField
                    fullWidth
                    label={fieldConfig.label}
                    value={address[fieldConfig.field]}
                    onChange={handleChange(fieldConfig.field)}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>

          <Paper sx={{ p: 3, mt: 4, bgcolor: "rgba(255,255,255,0.95)" }}>
            <Typography sx={{ fontWeight: 700, mb: 2 }}>Método de pagamento</Typography>
            <Stack direction="row" flexWrap="wrap" gap={2}>
              {PAYMENT_OPTIONS.map((option) => {
                const Icon = option.icon;
                const selected = paymentMethod === option.value;
                return (
                  <Chip
                    key={option.value}
                    label={option.label}
                    icon={<Icon />}
                    clickable
                    color={selected ? "secondary" : "default"}
                    onClick={() => setPaymentMethod(option.value)}
                    sx={{ px: 2, py: 1.25, fontWeight: 700 }}
                  />
                );
              })}
            </Stack>
            <Box sx={{ mt: 3 }}>
              <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
                Cartão de crédito, PIX e boleto apresentados apenas para visualização.
                Sem integração com nenhum gateway.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3, bgcolor: "rgba(255,255,255,0.95)" }}>
            <Typography sx={{ fontWeight: 700, mb: 2 }}>Resumo do pedido</Typography>
            <Stack spacing={2}>
              {cart.length === 0 ? (
                <Typography sx={{ color: "text.secondary" }}>
                  Nenhum item no carrinho. Adicione produtos para continuar.
                </Typography>
              ) : (
                cart.map((item) => (
                  <Box key={item.id}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography sx={{ fontWeight: 700 }}>{item.name}</Typography>
                      <Typography>{formatPrice(item.price * item.qty)}</Typography>
                    </Stack>
                    <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
                      {item.qty} x {formatPrice(item.price)}
                    </Typography>
                    <Divider sx={{ my: 1.5 }} />
                  </Box>
                ))
              )}
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Stack spacing={1}>
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
                <Typography>{formatPrice(total)}</Typography>
              </Stack>
            </Stack>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              onClick={() => {
                // Apenas visual
              }}
              disabled={cart.length === 0}
            >
              Finalizar Compra
            </Button>
            <Button fullWidth variant="text" sx={{ mt: 1 }} onClick={() => onNavigate("cart")}>Voltar ao carrinho</Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
