import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Badge,
  Button,
  useScrollTrigger,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCart } from "../hooks/useCart";

const NAV_LINKS = [
  { label: "HOME", page: "home" },
  { label: "CAFÉS", page: "cafes" },
  { label: "ASSINATURAS", page: "assinaturas" },
  { label: "CURSOS", page: "cursos" },
  { label: "BLOG", page: "blog" },
  { label: "SOBRE", page: "sobre" },
  { label: "COMENTÁRIOS", page: "testimonios" },
];

function LogoSVG() {
  return (
    <svg width="32" height="32" viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="16" stroke="#C4922A" strokeWidth="1" />
      <path
        d="M17 8c-3 0-7 3-7 8s4 9 7 9 7-4 7-9-4-8-7-8z"
        fill="none"
        stroke="#C4922A"
        strokeWidth="1.2"
      />
      <path
        d="M11 14 Q17 11 23 14"
        stroke="#C4922A"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M10 18 Q17 22 24 18"
        stroke="#C4922A"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

export default function Navbar({ currentPage, onNavigate }) {
  const { totalItems, setCartOpen } = useCart();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: scrolled ? "rgba(44,26,14,0.97)" : "#2C1A0E",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.3s",
        borderBottom: "1px solid rgba(245,237,214,0.05)",
      }}
    >
      <Toolbar
        sx={{ px: { xs: 2, md: 6 }, minHeight: "60px !important", gap: 0 }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            cursor: "pointer",
            mr: 5,
          }}
          onClick={() => onNavigate("home")}
        >
          <LogoSVG />
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "12px",
              fontWeight: 600,
              color: "#F5EDD6",
              lineHeight: 1.25,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            Puro
            <br />
            Ritual
          </Typography>
        </Box>

        {/* Nav links */}
        <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 3, flex: 1 }}>
          {NAV_LINKS.map(({ label, page }) => (
            <Button
              key={label}
              onClick={() => page && onNavigate(page)}
              disabled={!page}
              sx={{
                color:
                  currentPage === page ? "#C4922A" : "rgba(245,237,214,0.8)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                minWidth: 0,
                px: 0,
                py: 0,
                cursor: page ? "pointer" : "default",
                "&:hover": {
                  color: page ? "#F5EDD6" : "rgba(245,237,214,0.8)",
                  bgcolor: "transparent",
                },
                transition: "color 0.2s",
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Actions */}
        <Box sx={{ display: "flex", gap: 0.5, ml: "auto" }}>
          <IconButton
            sx={{
              color: "rgba(245,237,214,0.8)",
              "&:hover": { color: "#F5EDD6", bgcolor: "transparent" },
            }}
          >
         
          </IconButton>
          <IconButton
            onClick={() => onNavigate("login")}
            sx={{
              color: "rgba(245,237,214,0.8)",
              "&:hover": { color: "#F5EDD6", bgcolor: "transparent" },
            }}
          >
            <PersonOutlineIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => setCartOpen(true)}
            sx={{
              color: "rgba(245,237,214,0.8)",
              "&:hover": { color: "#F5EDD6", bgcolor: "transparent" },
            }}
          >
            <Badge
              badgeContent={totalItems}
              sx={{
                "& .MuiBadge-badge": {
                  bgcolor: "#C4922A",
                  color: "#fff",
                  fontSize: "9px",
                  minWidth: "16px",
                  height: "16px",
                  borderRadius: "8px",
                },
              }}
            >
              <ShoppingCartOutlinedIcon fontSize="small" />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
