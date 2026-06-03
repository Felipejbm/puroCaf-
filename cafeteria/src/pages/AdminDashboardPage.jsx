import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Stack,
  Button,
  Divider,
  LinearProgress,
  TextField,
  Chip,
} from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PeopleIcon from "@mui/icons-material/People";

const METRICS = [
  { label: "Vendas mensais", value: "R$ 42.800", detail: "+18% desde o mês passado", icon: ShoppingBagIcon },
  { label: "Pedidos em aberto", value: "14", detail: "Tempo médio 18 min", icon: BarChartIcon },
  { label: "Produtos ativos", value: "82", detail: "Novos itens em destaque", icon: Inventory2Icon },
  { label: "Usuários ativos", value: "1.230", detail: "Crescimento diário +9%", icon: PeopleIcon },
];

const INITIAL_PRODUCTS = [
  { id: 1, name: "Café Reserva", price: 74.9, stock: 32 },
  { id: 2, name: "Café Vulcânico", price: 66.9, stock: 18 },
  { id: 3, name: "Café Orgânico", price: 58.9, stock: 24 },
];

const INITIAL_ORDERS = [
  { id: "#1058", client: "Gabriela", total: "R$ 249,90", status: "Pago" },
  { id: "#1057", client: "Lucas", total: "R$ 169,90", status: "Aguardando" },
  { id: "#1056", client: "Mariana", total: "R$ 349,90", status: "Concluído" },
  { id: "#1055", client: "Pedro", total: "R$ 98,90", status: "Cancelado" },
];

const INITIAL_USERS = [
  { id: 1, name: "Camila", role: "Cliente" },
  { id: 2, name: "Rafael", role: "Cliente" },
  { id: 3, name: "Fernanda", role: "Administrador" },
];

export default function AdminDashboardPage() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [orders] = useState(INITIAL_ORDERS);
  const [users] = useState(INITIAL_USERS);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", stock: "" });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock) return;
    setProducts((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: newProduct.name,
        price: Number(newProduct.price),
        stock: Number(newProduct.stock),
      },
    ]);
    setNewProduct({ name: "", price: "", stock: "" });
  };

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: { xs: 4, md: 6 } }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, bgcolor: "rgba(255,255,255,0.95)" }}>
            <Typography sx={{ fontWeight: 700, mb: 2 }}>Painel Administrativo</Typography>
            {[
              "Visão geral",
              "Gestão de produtos",
              "Gestão de pedidos",
              "Gestão de usuários",
            ].map((item) => (
              <Button
                key={item}
                fullWidth
                variant={item === "Visão geral" ? "contained" : "text"}
                sx={{
                  mb: 1,
                  justifyContent: "flex-start",
                  fontWeight: 700,
                }}
              >
                {item}
              </Button>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {METRICS.map((item) => {
              const Icon = item.icon;
              return (
                <Grid item xs={12} sm={6} md={3} key={item.label}>
                  <Paper sx={{ p: 3, bgcolor: "rgba(255,255,255,0.95)" }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          display: "grid",
                          placeItems: "center",
                          bgcolor: "rgba(196,146,42,0.12)",
                        }}
                      >
                        <Icon sx={{ color: "#8B4513" }} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: 12, color: "text.secondary" }}>{item.label}</Typography>
                        <Typography sx={{ fontWeight: 700, fontSize: 18 }}>{item.value}</Typography>
                      </Box>
                    </Stack>
                    <Typography sx={{ fontSize: 12, color: "text.secondary" }}>{item.detail}</Typography>
                  </Paper>
                </Grid>
              );
            })}

            <Grid item xs={12} md={7}>
              <Paper sx={{ p: 3, bgcolor: "rgba(255,255,255,0.95)" }}>
                <Typography sx={{ fontWeight: 700, mb: 2 }}>Gestão de produtos</Typography>
                <Stack spacing={2}>
                  {products.map((product) => (
                    <Box
                      key={product.id}
                      sx={{
                        p: 2,
                        border: "1px solid rgba(180,140,90,0.15)",
                        borderRadius: 1,
                      }}
                    >
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box>
                          <Typography sx={{ fontWeight: 700 }}>{product.name}</Typography>
                          <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
                            R$ {product.price.toFixed(2)} • Estoque {product.stock}
                          </Typography>
                        </Box>
                        <Stack direction="row" spacing={1}>
                          <Button size="small" variant="outlined">
                            Editar
                          </Button>
                          <Button size="small" variant="text">
                            Remover
                          </Button>
                        </Stack>
                      </Stack>
                    </Box>
                  ))}
                </Stack>

                <Divider sx={{ my: 3 }} />
                <Typography sx={{ fontWeight: 700, mb: 2 }}>Adicionar produto</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nome do produto"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      fullWidth
                      label="Preço"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      fullWidth
                      label="Estoque"
                      value={newProduct.stock}
                      onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    />
                  </Grid>
                </Grid>
                <Button
                  sx={{ mt: 2 }}
                  variant="contained"
                  onClick={handleAddProduct}
                >
                  Adicionar produto
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} md={5}>
              <Paper sx={{ p: 3, bgcolor: "rgba(255,255,255,0.95)" }}>
                <Typography sx={{ fontWeight: 700, mb: 2 }}>Pedidos recentes</Typography>
                <Stack spacing={2}>
                  {orders.map((order) => (
                    <Box key={order.id}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box>
                          <Typography sx={{ fontWeight: 700 }}>{order.id}</Typography>
                          <Typography sx={{ color: "text.secondary", fontSize: 12 }}>{order.client}</Typography>
                        </Box>
                        <Chip
                          label={order.status}
                          color={order.status === "Pago" ? "success" : order.status === "Aguardando" ? "warning" : "default"}
                          size="small"
                        />
                      </Stack>
                      <Typography sx={{ fontWeight: 700, mt: 1 }}>{order.total}</Typography>
                      <Divider sx={{ mt: 2 }} />
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={12} md={7}>
              <Paper sx={{ p: 3, bgcolor: "rgba(255,255,255,0.95)" }}>
                <Typography sx={{ fontWeight: 700, mb: 2 }}>Gestão de usuários</Typography>
                <Stack spacing={2}>
                  {users.map((user) => (
                    <Box
                      key={user.id}
                      sx={{
                        p: 2,
                        border: "1px solid rgba(180,140,90,0.15)",
                        borderRadius: 1,
                      }}
                    >
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box>
                          <Typography sx={{ fontWeight: 700 }}>{user.name}</Typography>
                          <Typography sx={{ color: "text.secondary", fontSize: 12 }}>{user.role}</Typography>
                        </Box>
                        <Button size="small" variant="outlined">
                          Ver perfil
                        </Button>
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={12} md={5}>
              <Paper sx={{ p: 3, bgcolor: "rgba(255,255,255,0.95)" }}>
                <Typography sx={{ fontWeight: 700, mb: 2 }}>KPI de produtos</Typography>
                <Stack spacing={2}>
                  {products.map((product) => (
                    <Box key={product.id}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography sx={{ fontWeight: 700 }}>{product.name}</Typography>
                        <Typography sx={{ color: "text.secondary", fontSize: 12 }}>Estoque {product.stock}</Typography>
                      </Stack>
                      <LinearProgress value={(product.stock / 50) * 100} sx={{ height: 10, borderRadius: 1, mt: 1 }} />
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
