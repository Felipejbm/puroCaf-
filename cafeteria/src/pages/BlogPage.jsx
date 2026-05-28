import {
  Box, Typography, Grid,
  Select, MenuItem, FormControl, Stack
} from '@mui/material';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data';

const SELECT_SX = {
  minWidth: 120,
  '& .MuiOutlinedInput-root': { borderRadius: 0 },
  '& .MuiSelect-select': { py: 1.1, fontSize: 12 },
};

const CATEGORIES = [
  'Origem',
  'Técnica',
  'Educação',
  'Receita',
  'Saúde',
];

export default function BlogPage() {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ textAlign: 'center', px: { xs: 3, md: 10 }, pt: 7, pb: 4 }}>
        <Typography variant="h2" sx={{ fontSize: 36, mb: 1.5 }}>Nosso Blog</Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: 14, lineHeight: 1.7 }}>
          Artigos, dicas e histórias sobre o fascinante universo do café.<br />
          Aprender mais sobre a bebida que você ama.
        </Typography>
      </Box>

      {/* Filters */}
      <Box sx={{ px: { xs: 3, md: 10 }, pb: 4 }}>
        <Stack direction="row" spacing={1.5} flexWrap="wrap" alignItems="center" useFlexGap>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Filtrar por</Typography>
            <FormControl sx={SELECT_SX} size="small">
              <Select defaultValue="">
                <MenuItem value=""><em>Todas as Categorias</em></MenuItem>
                {CATEGORIES.map(cat => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ ml: 'auto !important', display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Ordenar por</Typography>
            <FormControl sx={SELECT_SX} size="small">
              <Select defaultValue="recente">
                <MenuItem value="recente">Mais Recente</MenuItem>
                <MenuItem value="antigo">Mais Antigo</MenuItem>
                <MenuItem value="titulo">Título</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Box>

      {/* Blog Grid */}
      <Box sx={{ px: { xs: 3, md: 10 }, pb: 6 }}>
        <Grid container spacing={3}>
          {blogPosts.map(post => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <BlogCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Newsletter Banner */}
      <Box
        sx={{
          mx: { xs: 3, md: 10 },
          mb: 7,
          bgcolor: '#2C1A0E',
          px: 6, py: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
          flexWrap: 'wrap',
        }}
      >
        <Box>
          <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: 24, color: '#F5EDD6', mb: 1 }}>
            Fique Atualizado
          </Typography>
          <Typography sx={{ color: '#EDE0C4', fontSize: 13, opacity: 0.7 }}>
            Receba novos artigos e dicas exclusivas direto no seu email!
          </Typography>
        </Box>
        <Box
          component="button"
          sx={{
            bgcolor: 'transparent', border: '1.5px solid #C4922A', color: '#C4922A',
            px: 3, py: 1.5, fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
            textTransform: 'uppercase', cursor: 'pointer', fontFamily: '"Lato", sans-serif',
            transition: 'background 0.2s',
            '&:hover': { bgcolor: 'rgba(196,146,42,0.15)' },
          }}
        >
          INSCREVER →
        </Box>
      </Box>
    </Box>
  );
}
