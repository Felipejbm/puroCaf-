import { useMemo, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Stack,
  Chip,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ProductCard from "../components/ProductCard";
import { coffees } from "../data";

const CATEGORY_OPTIONS = ["Torra clara", "Torra média", "Torra escura"];
const PRICE_OPTIONS = [
  { label: "Até R$ 55", min: 0, max: 55 },
  { label: "R$ 55 - 65", min: 55, max: 65 },
  { label: "Acima de R$ 65", min: 65, max: 999 },
];
const RATING_OPTIONS = [90, 88, 85, 82];

function formatCount(total) {
  return `${total} produtos encontrados`;
}

export default function ShopPage({ onOpenProduct }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(PRICE_OPTIONS[0].label);
  const [rating, setRating] = useState(82);

  const filteredProducts = useMemo(() => {
    return coffees.filter((product) => {
      const matchesSearch =
        search.trim().length === 0 ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.notes.toLowerCase().includes(search.toLowerCase()) ||
        product.region.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        !category || product.roast.toLowerCase().includes(category.toLowerCase());

      const currentPrice = Number(product.price);
      const selectedRange = PRICE_OPTIONS.find((option) => option.label === price);
      const matchesPrice =
        selectedRange &&
        currentPrice >= selectedRange.min &&
        currentPrice <= selectedRange.max;

      const matchesRating = product.score >= rating;

      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });
  }, [search, category, price, rating]);

  return (
    <Box sx={{ px: { xs: 3, md: 10 }, py: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 3,
          mb: 4,
        }}
      >
        <Box sx={{ maxWidth: 560 }}>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: 32, md: 40 }, mb: 1.25 }}
          >
            Loja virtual de cafés especiais
          </Typography>
          <Typography sx={{ color: "text.secondary", maxWidth: 520 }}>
            Navegue por uma seleção premium de blends, single origins e edições
            limitadas. Filtros visuais por categoria, preço e avaliação para achar
            o café ideal.
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "44%", md: "32%" },
            minWidth: 240,
          }}
        >
          <TextField
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar cafés, sabores ou regiões"
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ color: "#C4922A", mr: 1 }} />
              ),
            }}
          />
        </Box>
      </Box>

      <Card sx={{ mb: 4, p: 3, bgcolor: "rgba(255,255,255,0.95)" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat( auto-fit, minmax(220px, 1fr) )",
            gap: 2,
          }}
        >
          <Box>
            <Typography sx={{ mb: 1, fontWeight: 700 }}>Categoria</Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {CATEGORY_OPTIONS.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  clickable
                  color={category === option ? "secondary" : "default"}
                  onClick={() => setCategory(category === option ? "" : option)}
                />
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography sx={{ mb: 1, fontWeight: 700 }}>Faixa de preço</Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {PRICE_OPTIONS.map((option) => (
                <Chip
                  key={option.label}
                  label={option.label}
                  clickable
                  color={price === option.label ? "secondary" : "default"}
                  onClick={() => setPrice(option.label)}
                />
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography sx={{ mb: 1, fontWeight: 700 }}>Avaliação mínima</Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {RATING_OPTIONS.map((value) => (
                <Chip
                  key={value}
                  label={`${value}+`}
                  clickable
                  color={rating === value ? "secondary" : "default"}
                  onClick={() => setRating(value)}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Card>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          mb: 3,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <FilterListIcon sx={{ color: "#C4922A" }} />
          <Typography sx={{ fontWeight: 700 }}>{formatCount(filteredProducts.length)}</Typography>
        </Stack>
        <Button
          variant="text"
          onClick={() => {
            setSearch("");
            setCategory("");
            setPrice(PRICE_OPTIONS[0].label);
            setRating(82);
          }}
        >
          Limpar filtros
        </Button>
      </Box>

      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} onOpen={onOpenProduct} />
          </Grid>
        ))}
        {filteredProducts.length === 0 && (
          <Grid item xs={12}>
            <Box
              sx={{
                p: 5,
                bgcolor: "rgba(255,255,255,0.95)",
                textAlign: "center",
                border: "1px solid rgba(180,140,90,0.18)",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                Nenhum produto encontrado
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Ajuste os filtros ou a pesquisa para visualizar mais cafés.
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
