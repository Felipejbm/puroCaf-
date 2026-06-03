import {
  Box,
  Typography,
  Chip,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const categoryColors = {
  Origem: "#C4922A",
  Técnica: "#FF6B6B",
  Educação: "#4CAF50",
  Receita: "#FFC107",
  Saúde: "#2196F3",
};

export default function BlogPostPage({ post, onNavigate }) {
  if (!post) {
    return (
      <Box sx={{ px: { xs: 3, md: 10 }, py: 8 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Artigo não encontrado
        </Typography>
        <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
          Volte para a página do blog e escolha um post para ler.
        </Typography>
      </Box>
    );
  }

  const categoryColor = categoryColors[post.category] || "#C4922A";

  return (
    <Box sx={{ px: { xs: 3, md: 10 }, pt: 7, pb: 10 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => onNavigate?.("blog")}
        sx={{
          mb: 4,
          color: "#F5EDD6",
          borderColor: "#C4922A",
          borderRadius: 0,
          border: "1px solid rgba(245,237,214,0.3)",
          textTransform: "none",
        }}
        variant="outlined"
      >
        Voltar ao Blog
      </Button>

      <Box
        sx={{
          bgcolor: "#F4EEE2",
          borderRadius: 4,
          p: { xs: 3, md: 5 },
          mb: 4,
          boxShadow: "0 24px 60px rgba(0,0,0,0.06)",
        }}
      >
        <Chip
          label={post.category}
          sx={{
            bgcolor: categoryColor,
            color: "#fff",
            fontWeight: 700,
            mb: 3,
            letterSpacing: 0.5,
          }}
        />

        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: 32, md: 48 },
            mb: 2,
            color: "#2C1A0E",
            lineHeight: 1.05,
          }}
        >
          {post.title}
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: 14,
            mb: 3,
            textTransform: "uppercase",
            letterSpacing: 1.2,
          }}
        >
          {post.date} · {post.author}
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: 17, color: "#4A4034", lineHeight: 1.9 }}
        >
          {post.excerpt}
        </Typography>
      </Box>

      <Box
        component="img"
        src={post.img}
        alt={post.title}
        sx={{
          width: "100%",
          maxHeight: 520,
          objectFit: "cover",
          borderRadius: 4,
          boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
          mb: 5,
        }}
      />

      <Box sx={{ display: "grid", gap: 4 }}>
        {post.quote && (
          <Box
            sx={{
              bgcolor: "#FFF7E6",
              borderLeft: `4px solid ${categoryColor}`,
              p: { xs: 3, md: 4 },
              borderRadius: 3,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontStyle: "italic", color: "#5A4532" }}
            >
              “{post.quote}”
            </Typography>
          </Box>
        )}

        {post.sections?.map((section, index) => (
          <Box key={index} sx={{ display: "grid", gap: 1.5 }}>
            {section.title && (
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, color: "#2C1A0E" }}
              >
                {section.title}
              </Typography>
            )}
            <Typography
              sx={{ color: "#4A4034", fontSize: 15, lineHeight: 1.9 }}
            >
              {section.text}
            </Typography>
            {section.items?.length > 0 && (
              <List sx={{ pl: 2, color: "#4A4034" }}>
                {section.items.map((item, itemIndex) => (
                  <ListItem
                    key={itemIndex}
                    sx={{ display: "list-item", py: 0.5 }}
                  >
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: 14,
                        lineHeight: 1.8,
                        color: "#4A4034",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        ))}

        {post.tips?.length > 0 && (
          <Box sx={{ p: 4, bgcolor: "#FBF1E4", borderRadius: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 2, color: "#2C1A0E" }}
            >
              Dicas do barista
            </Typography>
            <List sx={{ pl: 2 }}>
              {post.tips.map((tip, tipIndex) => (
                <ListItem key={tipIndex} sx={{ display: "list-item", py: 0.5 }}>
                  <ListItemText
                    primary={tip}
                    primaryTypographyProps={{ fontSize: 14, lineHeight: 1.8 }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Box>

      <Divider sx={{ mt: 6, mb: 4, borderColor: "rgba(74,64,52,0.12)" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
          Continue explorando o universo do café com mais artigos e dicas
          especiais.
        </Typography>
        <Button
          variant="outlined"
          onClick={() => onNavigate?.("blog")}
          sx={{
            color: "#2C1A0E",
            borderColor: "rgba(44,26,14,0.16)",
            textTransform: "none",
            borderRadius: 0,
          }}
        >
          Ver todos os artigos
        </Button>
      </Box>
    </Box>
  );
}
