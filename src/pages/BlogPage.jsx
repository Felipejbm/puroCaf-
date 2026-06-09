import { useState } from "react";
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
const FILTER_CATEGORIES = ["Todos", ...CATEGORIES];

export default function BlogPage({ onOpenPost, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);
  const filteredPosts =
    selectedCategory === "Todos"
      ? recentPosts
      : recentPosts.filter((post) => post.category === selectedCategory);

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
        <Card
          sx={{
            p: { xs: 2.5, md: 3 },
            bgcolor: "#FEF7EB",
            borderRadius: 2,
            border: "1px solid rgba(196,146,42,0.18)",
            boxShadow: "0 16px 44px rgba(196,146,42,0.08)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 13,
                  color: "text.secondary",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  mb: 0.75,
                }}
              >
                Filtrar por categoria
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
                Escolha um tema para destacar os artigos mais relevantes.
              </Typography>
            </Box>
            <Typography sx={{ color: "#7A6B58", fontSize: 13, fontWeight: 600 }}>
              {filteredPosts.length} artigo{filteredPosts.length === 1 ? "" : "s"}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
            {FILTER_CATEGORIES.map((cat, index) => {
              const isActive = cat === selectedCategory;
              const color = cat === "Todos" ? "#7A6B58" : categoryColors[cat];

              return (
                <Button
                  key={cat}
                  variant={isActive ? "contained" : "outlined"}
                  onClick={() => setSelectedCategory(cat)}
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    borderColor: color,
                    color: isActive ? "#fff" : color,
                    bgcolor: isActive ? color : "rgba(255,255,255,0.95)",
                    fontSize: 12,
                    fontWeight: 700,
                    px: 2.5,
                    py: 1,
                    minWidth: 90,
                    boxShadow: isActive ? "0 10px 24px rgba(0,0,0,0.08)" : "none",
                    animation: `slideInDown 0.45s ease both`,
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
                      bgcolor: color,
                      color: "#fff",
                    },
                  }}
                >
                  {cat}
                </Button>
              );
            })}
          </Stack>
        </Card>
      </Box>

      {/* Recent Posts Grid */}
      <Box sx={{ px: { xs: 3, md: 10 }, pb: 6 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4, flexWrap: "wrap" }}>
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
          <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
            {filteredPosts.length} artigo{filteredPosts.length === 1 ? "" : "s"}
          </Typography>
        </Box>

        {filteredPosts.length > 0 ? (
          <Grid container spacing={4}>
            {filteredPosts.map((post) => (
              <Grid item xs={12} md={6} key={post.id}>
                <BlogCard post={post} onClick={() => onOpenPost?.(post)} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              bgcolor: "#F7F2E8",
              borderRadius: 3,
              p: 4,
              textAlign: "center",
              border: "1px solid rgba(196,146,42,0.2)",
            }}
          >
            <Typography
              sx={{ fontSize: 16, color: "#4C4C4C", mb: 1 }}
            >
              Nenhum artigo encontrado nessa categoria.
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
              Experimente selecionar outra categoria ou ver todos os artigos.
            </Typography>
          </Box>
        )}
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
