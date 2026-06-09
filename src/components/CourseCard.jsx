import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  IconButton,
  Chip,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../hooks/useCart";

function formatPrice(v) {
  return "R$ " + v.toFixed(2).replace(".", ",");
}

export default function CourseCard({ course, onOpen }) {
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(course);
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Iniciante":
        return "#4CAF50";
      case "Intermediário":
        return "#FFC107";
      case "Avançado":
        return "#FF6B6B";
      default:
        return "#C4922A";
    }
  };

  return (
    <Card
      onClick={() => onOpen(course)}
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
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={course.img}
          alt={course.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s",
            ".MuiCard-root:hover &": { transform: "scale(1.06)" },
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <Chip
          label={course.level}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            bgcolor: getLevelColor(course.level),
            color: "#fff",
            fontWeight: 600,
            fontSize: "11px",
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
          {course.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontSize: "11px", mb: 0.25 }}
        >
          Por {course.instructor}
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
          ⏱ {course.duration}
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
            {formatPrice(course.price)}
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
