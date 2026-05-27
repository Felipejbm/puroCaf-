import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { testimonials } from '../data';

export default function TestimonialsPage({ onNavigate }) {
  const getAvatarColor = (avatar) => {
    const colors = {
      'J': '#8B4513',
      'C': '#A0522D',
      'M': '#CD853F',
      'R': '#DEB887',
      'A': '#D2691E',
      'F': '#BC8F8F',
      'B': '#A52A2A',
      'L': '#8B6914',
    };
    return colors[avatar] || '#8B4513';
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ textAlign: 'center', px: { xs: 3, md: 10 }, pt: 7, pb: 6 }}>
        <Typography variant="h1" sx={{ fontSize: 40, fontFamily: '"Playfair Display", serif', mb: 2, color: '#2C1A0E' }}>
          O Que Nossos Clientes Dizem
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: 15, lineHeight: 1.7, maxWidth: 600, mx: 'auto' }}>
          Histórias reais de apaixonados por café que encontraram em Puro Ritual a qualidade e a experiência que procuravam.
        </Typography>
      </Box>

      {/* Testimonials Grid */}
      <Box sx={{ px: { xs: 3, md: 10 }, pb: 8 }}>
        <Grid container spacing={3}>
          {testimonials.map(({ id, name, rating, comment, avatar }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(196,146,42,0.15)',
                  },
                }}
              >
                <CardContent sx={{ flex: 1, p: 2.5, '&:last-child': { pb: 2.5 } }}>
                  {/* Rating */}
                  <Typography sx={{ color: '#C4922A', fontSize: 14, mb: 1.5, letterSpacing: 0.5 }}>
                    {'★'.repeat(rating)}
                  </Typography>

                  {/* Comment */}
                  <Typography
                    sx={{
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: '#1A0F07',
                      mb: 2,
                      fontStyle: 'italic',
                    }}
                  >
                    "{comment}"
                  </Typography>

                  {/* Author */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        bgcolor: getAvatarColor(avatar),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#F5EDD6',
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      {avatar}
                    </Box>
                    <Typography sx={{ fontWeight: 700, fontSize: 12, color: '#2C1A0E' }}>
                      {name}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          mx: { xs: 3, md: 10 },
          mb: 7,
          bgcolor: '#2C1A0E',
          px: 6,
          py: 5,
          textAlign: 'center',
          borderRadius: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 28,
            color: '#F5EDD6',
            mb: 2,
          }}
        >
          Junte-se a Milhares de Clientes Satisfeitos
        </Typography>
        <Typography sx={{ color: '#EDE0C4', fontSize: 14, mb: 3, maxWidth: 500, mx: 'auto' }}>
          Descubra a diferença que café de qualidade superior pode fazer na sua vida diária.
        </Typography>
        <Box
          component="button"
          onClick={() => onNavigate("assinaturas")}
          sx={{
            bgcolor: '#F5EDD6',
            color: '#2C1A0E',
            border: 'none',
            px: 4,
            py: 1.8,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: '"Lato", sans-serif',
            transition: 'background 0.2s',
            '&:hover': { bgcolor: '#EDE0C4' },
          }}
        >
          Explorar Cafés Agora →
        </Box>
      </Box>
    </Box>
  );
}
