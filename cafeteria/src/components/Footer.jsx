import { Box, Grid, Typography, Button, Divider } from "@mui/material";

const NAV_COLS = [
  {
    title: "Navegação",
    links: [
      { label: "Home", page: "home" },
      { label: "Cafés", page: "cafes" },
      { label: "Assinaturas", page: "assinaturas" },
      { label: "Cursos", page: "cursos" },
      { label: "Blog", page: "blog" },
      { label: "Sobre", page: "sobre" },
      { label: "Comentários", page: "testimonios" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", page: 1 },
      { label: "Facebook", page: 1 },
      { label: "YouTube", page: 1 },
      { label: "Pinterest", page: 1 },
    ],
  },
];

function LogoSVG() {
  return (
    <svg width="30" height="30" viewBox="0 0 34 34" fill="none">
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

export default function Footer({ onNavigate }) {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#2C1A0E", px: { xs: 3, md: 10 }, pt: 6, pb: 3.5 }}
    >
      <Grid container spacing={5} sx={{ mb: 5 }}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              mb: 1.75,
              cursor: "pointer",
            }}
            onClick={() => onNavigate?.("home")}
          >
            <LogoSVG />
            <Typography
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 12,
                fontWeight: 600,
                color: "#F5EDD6",
                lineHeight: 1.25,
                textTransform: "uppercase",
              }}
            >
              Cafeteria
              <br />
              Artesanal
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#EDE0C4",
              fontSize: 12,
              lineHeight: 1.8,
              opacity: 0.6,
            }}
          >
            Cafés especiais selecionados, preparados com técnica, paixão e
            propósito. Do grão à xícara.
          </Typography>
        </Grid>
        {NAV_COLS.map((col) => (
          <Grid item xs={6} md={3} key={col.title}>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#C4922A",
                mb: 2,
              }}
            >
              {col.title}
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
              {col.links.map((link) => (
                <Box component="li" key={link.label} sx={{ mb: 1.1 }}>
                  <Button
                    onClick={() => link.page && onNavigate?.(link.page)}
                    disabled={!link.page}
                    sx={{
                      color: link.page
                        ? "rgba(245,237,214,0.6)"
                        : "rgba(245,237,214,0.3)",
                      fontSize: 12,
                      p: 0,
                      minWidth: 0,
                      letterSpacing: 0,
                      textTransform: "none",
                      cursor: link.page ? "pointer" : "default",
                      "&:hover": {
                        bgcolor: "transparent",
                        color: link.page ? "#F5EDD6" : "rgba(245,237,214,0.3)",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ borderColor: "rgba(245,237,214,0.1)", mb: 2.5 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Typography sx={{ fontSize: 11, color: "rgba(245,237,214,0.4)" }}>
          © 2025 Cafeteria Artesanal. Todos os direitos reservados.
        </Typography>
        <Typography sx={{ fontSize: 11, color: "rgba(245,237,214,0.4)" }}>
          Política de Privacidade · Termos de Uso
        </Typography>
      </Box>
    </Box>
  );
}
