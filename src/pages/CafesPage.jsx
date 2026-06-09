import {
  Box,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
} from "@mui/material";
import ProductCard from "../components/ProductCard";
import { coffees } from "../data";

const SELECT_SX = {
  minWidth: 120,
  "& .MuiOutlinedInput-root": { borderRadius: 0 },
  "& .MuiSelect-select": { py: 1.1, fontSize: 12 },
};

export default function CafesPage({ onOpenProduct, onNavigate }) {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ textAlign: "center", px: { xs: 3, md: 10 }, pt: 7, pb: 4 }}>
        <Typography variant="h2" sx={{ fontSize: 36, mb: 1.5 }}>
          Nossos Cafés
        </Typography>
        <Typography
          sx={{ color: "text.secondary", fontSize: 14, lineHeight: 1.7 }}
        >
          Grãos selecionados de diferentes regiões do mundo,
          <br />
          com qualidade e rastreabilidade.
        </Typography>
      </Box>

      {/* Filters */}
      <Box sx={{ px: { xs: 3, md: 10 }, pb: 3.5 }}>
        <Stack
          direction="row"
          spacing={1.5}
          flexWrap="wrap"
          alignItems="center"
          useFlexGap
        >
          {["Tipo", "Região", "Torra", "Intensidade"].map((label) => (
            <FormControl key={label} sx={SELECT_SX} size="small">
              <Select defaultValue="" displayEmpty>
                <MenuItem value="">
                  <em>{label}</em>
                </MenuItem>
                <MenuItem value="op1">Opção 1</MenuItem>
                <MenuItem value="op2">Opção 2</MenuItem>
              </Select>
            </FormControl>
          ))}
          <Box
            sx={{
              ml: "auto !important",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
              Ordenar por
            </Typography>
            <FormControl sx={SELECT_SX} size="small">
              <Select defaultValue="mais">
                <MenuItem value="mais">Mais vendidos</MenuItem>
                <MenuItem value="menor">Menor preço</MenuItem>
                <MenuItem value="maior">Maior preço</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Box>

      {/* Products Grid */}
      <Box sx={{ px: { xs: 3, md: 10 }, pb: 6 }}>
        <Grid container spacing={2.5}>
          {coffees.map((product, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={product.id}
              sx={{
                animation: `fadeUp 0.5s ease both`,
                animationDelay: `${(index % 4) * 0.1}s`,
                "@keyframes fadeUp": {
                  from: {
                    opacity: 0,
                    transform: "translateY(20px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              <ProductCard product={product} onOpen={onOpenProduct} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Kit Banner */}
      <Box
        sx={{
          mx: { xs: 3, md: 10 },
          mb: 7,
          bgcolor: "#2C1A0E",
          px: 6,
          py: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 24,
              color: "#F5EDD6",
              mb: 1,
            }}
          >
            Monte seu kit personalizado
          </Typography>
          <Typography sx={{ color: "#EDE0C4", fontSize: 13, opacity: 0.7 }}>
            Escolha seus cafés favoritos e monte um kit do seu jeito!
          </Typography>
        </Box>
        <Box
          component="button"
          sx={{
            bgcolor: "transparent",
            border: "1.5px solid #C4922A",
            color: "#C4922A",
            px: 3,
            py: 1.5,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            cursor: "pointer",
            fontFamily: '"Lato", sans-serif',
            transition: "background 0.2s",
            "&:hover": { bgcolor: "rgba(196,146,42,0.15)" },
          }}
        >
          MONTAR KIT →
        </Box>
      </Box>
    </Box>
  );
}
