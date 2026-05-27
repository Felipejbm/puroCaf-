import { Box, Typography, Button, Container, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { coffees } from "../data";
import GraosSelecionadosImg from "../img/escolhido.png";
import TorraArtesanalImg from "../img/artesanal.png";
import EntregaRapidaImg from "../img/entrega.png";
import SatisfacaoImg from "../img/seguro.png";
import CursosImg from "../img/curso.png";
import AssinaturasImg from "../img/assinatura.png";
import KitImg from "../img/kit.png";

const HERO_BADGES = [
  {
    icon: GraosSelecionadosImg,
    title: "Grãos Selecionados",
    sub: "De diversas partes do mundo",
  },
  { 
    icon: TorraArtesanalImg, 
    title: "Torra Artesanal", 
    sub: "Feita em pequenos lotes" 
  },
  { 
    icon: EntregaRapidaImg, 
    title: "Entrega Rápida", 
    sub: "Para todo o Brasil" 
  },
  {
    icon: SatisfacaoImg,
    title: "Satisfação Garantida",
    sub: "Ou seu dinheiro de volta",
  },
];

const SERVICES = [
  {
    icon: CursosImg,
    title: "Cursos e Workshops",
    sub: "Aprenda com quem vive café",
    cta: "VER CURSOS →",
    page: "cursos",
  },
  {
    icon: AssinaturasImg,
    title: "Clube de Assinatura",
    sub: "Cafés exclusivos todo mês",
    cta: "CONHECER PLANOS →",
    page: "assinaturas",
  },
  {
    icon: KitImg,
    title: "Monte seu Kit",
    sub: "Personalize do seu jeito",
    cta: "MONTAR KIT →",
    page: "cafes",
  },
];

export default function HomePage({ onNavigate, onOpenProduct }) {
  return (
    <Box>
      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          height: 500,
          background: `linear-gradient(to right, rgba(30,12,2,0.97) 35%, rgba(20,8,2,0.7) 65%, rgba(10,4,1,0.3) 100%),
                       url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1400&q=80') center/cover no-repeat`,
          display: "flex",
          alignItems: "center",
          px: { xs: 3, md: 10 },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            maxWidth: 520,
            animation: "fadeUp 0.8s ease both",
            "@keyframes fadeUp": {
              from: { opacity: 0, transform: "translateY(30px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 36, md: 48 },
              color: "#F5EDD6",
              lineHeight: 1.15,
              mb: 2.25,
              letterSpacing: "-0.5px",
            }}
          >
            Descubra sabores únicos em cada grão.
          </Typography>
          <Typography
            sx={{
              color: "#EDE0C4",
              fontSize: 15,
              lineHeight: 1.7,
              mb: 4.25,
              opacity: 0.85,
            }}
          >
            Cafés especiais selecionados, preparados
            <br />
            com técnica, paixão e propósito.
          </Typography>
          <Box sx={{ display: "flex", gap: 1.75, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              onClick={() => onNavigate("cafes")}
              sx={{
                bgcolor: "#8B4513",
                px: 3.25,
                py: 1.6,
                "&:hover": { bgcolor: "#7A3B10" },
              }}
            >
              EXPLORAR CAFÉS
            </Button>
            <Button
              variant="outlined"
              onClick={() => onNavigate("assinaturas")}
              sx={{
                color: "#F5EDD6",
                borderColor: "rgba(245,237,214,0.4)",
                px: 3.25,
                py: 1.6,
                "&:hover": {
                  borderColor: "#F5EDD6",
                  bgcolor: "rgba(245,237,214,0.08)",
                },
              }}
            >
              ASSINAR CLUBE
            </Button>
          </Box>
        </Box>

        {/* Badges strip */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "rgba(20,8,2,0.88)",
            display: "flex",
            px: { xs: 3, md: 10 },
            py: 2.25,
            gap: { xs: 3, md: 6 },
            flexWrap: "wrap",
          }}
        >
          {HERO_BADGES.map(({ icon, title, sub }) => (
            <Box
              key={title}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                flex: 1,
                minWidth: 220,
              }}
            >
              <Box
                component="img"
                src={icon}
                alt={title}
                sx={{
                  width: 36,
                  height: 36,
                  border: "1px solid rgba(196,146,42,0.4)",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography
                  sx={{
                    color: "#F5EDD6",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 0.5,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  sx={{ color: "#EDE0C4", fontSize: 11, opacity: 0.65 }}
                >
                  {sub}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* FEATURED PRODUCTS */}
      <Box sx={{ bgcolor: "#FAF6EE", px: { xs: 3, md: 10 }, py: 8 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 4.5,
          }}
        >
          <Typography variant="h2" sx={{ fontSize: 28 }}>
            Nossos cafés em destaque
          </Typography>
          <Button
            onClick={() => onNavigate("cafes")}
            sx={{
              color: "#8B4513",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1,
              textDecoration: "none",
              "&:hover": { bgcolor: "transparent", color: "#5C3317" },
            }}
          >
            VER TODOS →
          </Button>
        </Box>
        <Grid container spacing={2.5}>
          {coffees.slice(0, 4).map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard product={product} onOpen={onOpenProduct} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* SERVICES DARK */}
      <Box sx={{ bgcolor: "#2C1A0E", px: { xs: 3, md: 10 }, py: 6 }}>
        <Grid container spacing={4}>
          {SERVICES.map(({ icon, title, sub, cta, page }) => (
            <Grid item xs={12} md={4} key={title}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <Box
                  component="img"
                  src={icon}
                  alt={title}
                  sx={{
                    width: 44,
                    height: 44,
                    border: "1px solid rgba(245,237,214,0.2)",
                    objectFit: "cover",
                    flexShrink: 0,
                    backgroundColor: "rgba(196,146,42,0.1)",
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      color: "#F5EDD6",
                      fontWeight: 700,
                      fontSize: 14,
                      mb: 0.5,
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#EDE0C4",
                      fontSize: 12,
                      opacity: 0.65,
                      mb: 1,
                    }}
                  >
                    {sub}
                  </Typography>
                  <Button
                    onClick={() => onNavigate(page)}
                    sx={{
                      color: "#C4922A",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: 1,
                      p: 0,
                      "&:hover": { bgcolor: "transparent", color: "#F5EDD6" },
                    }}
                  >
                    {cta}
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* TESTIMONIALS */}
      <Box sx={{ bgcolor: "#FAF6EE", px: { xs: 3, md: 10 }, py: 8 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 3.5,
              }}
            >
              <Typography variant="h2" sx={{ fontSize: 28 }}>
                O que nossos clientes dizem
              </Typography>
              <Button
                sx={{
                  color: "#8B4513",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1,
                  "&:hover": { bgcolor: "transparent", color: "#5C3317" },
                }}
              >
                VER TODOS →
              </Button>
            </Box>
            <Typography
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 20,
                fontStyle: "italic",
                color: "#1A0F07",
                mb: 2,
                lineHeight: 1.5,
              }}
            >
              "Os melhores cafés que já provei!"
            </Typography>
            <Typography
              sx={{
                fontSize: 13,
                color: "text.secondary",
                lineHeight: 1.7,
                mb: 2.5,
              }}
            >
              A qualidade dos grãos é incrível e o atendimento é impecável.
              Virei cliente fiel do clube!
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "#5C3317",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#F5EDD6",
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                J
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: 13 }}>
                  Juliana Martins
                </Typography>
                <Typography sx={{ color: "#C4922A", fontSize: 13 }}>
                  ★★★★★
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 300,
                background:
                  "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&q=80') center/cover",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
