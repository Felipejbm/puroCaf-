import { Card, CardContent, Box, Typography, Chip } from '@mui/material';

export default function BlogCard({ post }) {
  const getCategoryColor = (category) => {
    const colors = {
      'Origem': '#C4922A',
      'Técnica': '#FF6B6B',
      'Educação': '#4CAF50',
      'Receita': '#FFC107',
      'Saúde': '#2196F3',
    };
    return colors[category] || '#C4922A';
  };

  return (
    <Card
      sx={{
        cursor: 'pointer',
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
      {/* Image */}
      <Box
        sx={{
          height: 200,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          component="img"
          src={post.img}
          alt={post.title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s',
            '.MuiCard-root:hover &': { transform: 'scale(1.05)' },
          }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <Chip
          label={post.category}
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            bgcolor: getCategoryColor(post.category),
            color: '#fff',
            fontWeight: 600,
            fontSize: '11px',
          }}
        />
      </Box>

      {/* Content */}
      <CardContent sx={{ flex: 1, p: 2.5, '&:last-child': { pb: 2.5 } }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '16px',
            fontWeight: 600,
            mb: 1,
            lineHeight: 1.4,
            color: '#2C1A0E',
          }}
        >
          {post.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontSize: '12px',
            mb: 1.5,
            lineHeight: 1.6,
          }}
        >
          {post.excerpt}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '11px', color: 'text.secondary', fontStyle: 'italic' }}>
            {post.date}
          </Typography>
          <Typography sx={{ fontSize: '11px', color: '#C4922A', fontWeight: 600 }}>
            {post.author}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
