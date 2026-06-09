import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../hooks/useCart";

function formatPrice(v) {
  return "R$ " + v.toFixed(2).replace(".", ",");
}

export default function ProductCard({ product, onOpen }) {
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card
      onClick={() => onOpen(product)}
      sx={{
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: 160,
          bgcolor: "linear-gradient(135deg, #F5EDD6 60%, #EDE0C4)",
          background: "linear-gradient(135deg, #F5EDD6 60%, #EDE0C4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(196,146,42,0.1)",
          transition: "box-shadow 0.3s",
          "&:hover": { boxShadow: "0 14px 32px rgba(196,146,42,0.15)" },
        }}
      >
        <Box
          component="img"
          src={product.img}
          alt={product.name}
          sx={{
            width: "90%",
            height: "90%",
            objectFit: "cover",
            transition: "transform 0.3s",
            ".MuiCard-root:hover &": { transform: "scale(1.06)" },
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </Box>

      <CardContent sx={{ flex: 1, p: 2, "&:last-child": { pb: 2 } }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "15px",
            fontWeight: 600,
            mb: 0.5,
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontSize: "11px", mb: 0.25 }}
        >
          Notas: {product.notes}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: "11px",
            fontStyle: "italic",
            mb: 1.5,
          }}
        >
          {product.roast}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "16px",
              fontWeight: 700,
              color: "primary.dark",
            }}
          >
            {formatPrice(product.price)}
          </Typography>
          <IconButton
            size="small"
            onClick={handleAdd}
            sx={{
              bgcolor: "#2C1A0E",
              color: "#F5EDD6",
              borderRadius: 0,
              width: 34,
              height: 34,
              "&:hover": { bgcolor: "#8B4513" },
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
