import {
  Box,
  Typography,
  Grid,
  Chip,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from "@mui/material";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../data";

const categoryColors = {
  Origem: "#C4922A",
  Técnica: "#FF6B6B",
  Educação: "#4CAF50",
  Receita: "#FFC107",
  Saúde: "#2196F3",
};

const CATEGORIES = ["Origem", "Técnica", "Educação", "Receita", "Saúde"];

export default function BlogPage({ onOpenPost, onNavigate }) {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          px: { xs: 3, md: 10 },
          pt: 8,
          pb: 2,
          textAlign: "center",
          mb: 8,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: 36, md: 52 },
            mb: 2,
            color: "#2C1A0E",
          }}
        >
          Histórias do Café
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: 16,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Explore origem, técnicas de preparo, receitas e tudo que você precisa
          saber para apreciar o café da melhor forma.
        </Typography>
      </Box>

      {/* Featured Post */}
      {featuredPost && (
        <Box sx={{ px: { xs: 3, md: 10 }, mb: 10 }}>
          <Card
            onClick={() => onOpenPost?.(featuredPost)}
            sx={{
              cursor: "pointer",
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              borderRadius: 3,
              overflow: "hidden",
              transition: "transform 0.3s, box-shadow 0.3s",
              animation: "fadeUpScale 0.6s ease out",
              "@keyframes fadeUpScale": {
                from: {
                  opacity: 0,
                  transform: "translateY(20px) scale(0.98)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0) scale(1)",
                },
              },
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.16)",
              },
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                height: { md: 400 },
              }}
            >
              <CardMedia
                component="img"
                image={featuredPost.img}
                alt={featuredPost.title}
                sx={{ objectFit: "cover", height: { xs: 250, md: "100%" } }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  bgcolor: "#F4EEE2",
                  p: { xs: 3, md: 4 },
                }}
              >
                <Chip
                  label={`${featuredPost.category} · DESTAQUE`}
                  sx={{
                    bgcolor: categoryColors[featuredPost.category],
                    color: "#fff",
                    fontWeight: 700,
                    mb: 2,
                    width: "fit-content",
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: { xs: 24, md: 28 },
                    mb: 2,
                    color: "#2C1A0E",
                    lineHeight: 1.2,
                  }}
                >
                  {featuredPost.title}
                </Typography>
                <Typography
                  sx={{ color: "text.secondary", fontSize: 14, mb: 2 }}
                >
                  {featuredPost.excerpt}
                </Typography>
                <Typography
                  sx={{ color: "#C4922A", fontSize: 12, fontWeight: 600 }}
                >
                  Por {featuredPost.author} • {featuredPost.date}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Box>
      )}

      {/* Categories Filter */}
      <Box sx={{ px: { xs: 3, md: 10 }, mb: 6 }}>
        <Typography
          sx={{
            fontSize: 13,
            color: "text.secondary",
            mb: 2,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Filtrar por categoria
        </Typography>
        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          {CATEGORIES.map((cat, index) => (
            <Button
              key={cat}
              variant="outlined"
              sx={{
                borderRadius: 3,
                textTransform: "none",
                borderColor: categoryColors[cat],
                color: categoryColors[cat],
                fontSize: 12,
                fontWeight: 600,
                animation: `slideInDown 0.5s ease both`,
                animationDelay: `${index * 0.05}s`,
                "@keyframes slideInDown": {
                  from: {
                    opacity: 0,
                    transform: "translateY(-10px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
                "&:hover": {
                  bgcolor: categoryColors[cat],
                  color: "#fff",
                },
              }}
            >
              {cat}
            </Button>
          ))}
        </Stack>
      </Box>

      {/* Recent Posts Grid */}
      <Box sx={{ px: { xs: 3, md: 10 }, pb: 6 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 6 }}>
          <Box
            sx={{ width: 4, height: 32, bgcolor: "#C4922A", borderRadius: 2 }}
          />
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 28,
              color: "#2C1A0E",
            }}
          >
            Últimos Artigos
          </Typography>
        </Box>
        <Box sx={{ display: "grid", gap: 5 }}>
          {recentPosts.map((post, index) => (
            <Card
              key={post.id}
              onClick={() => onOpenPost?.(post)}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "0.5fr 1fr" },
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                borderRadius: 2,
                transition: "all 0.3s",
                cursor: "pointer",
                animation: `slideUp 0.5s ease both`,
                animationDelay: `${index * 0.15}s`,
                "@keyframes slideUp": {
                  from: {
                    opacity: 0,
                    transform: "translateY(30px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
                "&:hover": {
                  boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={post.img}
                alt={post.title}
                sx={{
                  height: { xs: 180, md: 280 },
                  objectFit: "cover",
                  order: index % 2 === 0 ? 1 : 2,
                }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: { xs: 3, md: 4 },
                  order: index % 2 === 0 ? 2 : 1,
                  bgcolor: index % 2 === 0 ? "#fff" : "#F9F6F0",
                }}
              >
                <Chip
                  label={post.category}
                  sx={{
                    bgcolor: categoryColors[post.category],
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "11px",
                    mb: 2,
                    width: "fit-content",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: { xs: 20, md: 24 },
                    mb: 1.5,
                    color: "#2C1A0E",
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: 14,
                    mb: 2.5,
                    lineHeight: 1.6,
                  }}
                >
                  {post.excerpt}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "text.secondary",
                      fontStyle: "italic",
                    }}
                  >
                    {post.date}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "12px", color: "#C4922A", fontWeight: 600 }}
                  >
                    {post.author}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Newsletter CTA */}
      <Box
        sx={{
          mx: { xs: 3, md: 10 },
          mb: 7,
          bgcolor: "#F4EEE2",
          p: { xs: 4, md: 6 },
          borderRadius: 3,
          textAlign: "center",
          border: "2px solid #C4922A",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 28,
            color: "#2C1A0E",
            mb: 1.5,
          }}
        >
          📬 Receba novos artigos
        </Typography>
        <Typography sx={{ color: "text.secondary", fontSize: 14, mb: 3 }}>
          Inscreva-se para ficar atualizado com as melhores histórias e dicas
          sobre café.
        </Typography>
        <Box
          component="button"
          sx={{
            bgcolor: "#C4922A",
            border: "none",
            color: "#fff",
            px: 4,
            py: 1.5,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
            cursor: "pointer",
            fontFamily: '"Lato", sans-serif',
            borderRadius: 2,
            transition: "all 0.3s",
            "&:hover": { bgcolor: "#B8791D", transform: "translateY(-2px)" },
          }}
        >
          Inscrever-se →
        </Box>
      </Box>
    </Box>
  );
}
