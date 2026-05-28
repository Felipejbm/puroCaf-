import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const VALUES = [
  {
    icon: '☕',
    title: 'Qualidade',
    description: 'Selecionamos os melhores grãos de origem, com rastreabilidade completa e características únicas.',
  },
  {
    icon: '🌱',
    title: 'Sustentabilidade',
    description: 'Compromisso com produtores éticos e práticas ambientais responsáveis em toda cadeia.',
  },
  {
    icon: '📚',
    title: 'Educação',
    description: 'Compartilhamos conhecimento através de cursos, workshops e conteúdo que enriquece a experiência do café.',
  },
  {
    icon: '❤️',
    title: 'Paixão',
    description: 'Cada xícara preparada com dedicação e amor por essa bebida que une as pessoas.',
  },
];

export default function AboutPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#2C1A0E',
          color: '#F5EDD6',
          px: { xs: 3, md: 10 },
          py: 8,
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" sx={{ fontSize: 44, fontFamily: '"Playfair Display", serif', mb: 2 }}>
          Sobre Puro Ritual
        </Typography>
        <Typography sx={{ fontSize: 16, lineHeight: 1.8, maxWidth: 600, mx: 'auto' }}>
          Uma jornada apaixonada pelo café artesanal, da origem à sua xícara.
        </Typography>
      </Box>

      {/* Pedro's Story Section */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="Pedro Lima"
              sx={{
                width: '100%',
                borderRadius: 1,
                boxShadow: '0 10px 30px rgba(44,26,14,0.15)',
              }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 28,
                fontWeight: 600,
                mb: 2,
                color: '#2C1A0E',
              }}
            >
              Conhece Pedro Lima
            </Typography>
            <Typography sx={{ fontSize: 14, lineHeight: 1.8, mb: 2, color: 'text.primary' }}>
              Barista apaixonado desde os 18 anos, Pedro Lima começou sua jornada no universo do café trabalhando em cafeterias locais. 
              Sua curiosidade o levou a explorar origem dos grãos, técnicas de torrefação e métodos de preparo.
            </Typography>
            <Typography sx={{ fontSize: 14, lineHeight: 1.8, mb: 2, color: 'text.primary' }}>
              Após anos de dedicação, Pedro abriu sua própria cafeteria especializada em um bairro movimentado, 
              onde começou a oferecer não apenas café excepcional, mas também conhecimento através de workshops e degustações.
            </Typography>
            <Typography sx={{ fontSize: 14, lineHeight: 1.8, color: 'text.primary' }}>
              Agora, com Puro Ritual, Pedro leva sua paixão para o mundo online, permitindo que amantes de café 
              de qualquer lugar descubram grãos especiais, aprendam técnicas profissionais e façam parte de uma comunidade 
              que celebra a excelência em cada xícara.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Our Values Section */}
      <Box sx={{ bgcolor: '#F5EDD6', px: { xs: 3, md: 10 }, py: 8 }}>
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 32,
            fontWeight: 600,
            mb: 4,
            textAlign: 'center',
            color: '#2C1A0E',
          }}
        >
          Nossos Valores
        </Typography>
        <Grid container spacing={3}>
          {VALUES.map((value, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{ height: '100%', textAlign: 'center', bgcolor: '#fff' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography sx={{ fontSize: 40, mb: 1.5 }}>{value.icon}</Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: 18,
                      fontWeight: 600,
                      mb: 1,
                      color: '#2C1A0E',
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: 'text.secondary', lineHeight: 1.6 }}>
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Mission Section */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 28,
                fontWeight: 600,
                mb: 2,
                color: '#2C1A0E',
              }}
            >
              Nossa Missão
            </Typography>
            <Typography sx={{ fontSize: 14, lineHeight: 1.8, mb: 2, color: 'text.primary' }}>
              Criar uma comunidade global de apreciadores de café que reconhecem e valorizam a excelência, a origem e a história 
              por trás de cada grão.
            </Typography>
            <Typography sx={{ fontSize: 14, lineHeight: 1.8, mb: 2, color: 'text.primary' }}>
              Democratizar o acesso a cafés specialty, oferecendo educação contínua e ferramentas para que todos possam preparar 
              café excepcional em suas casas.
            </Typography>
            <Typography sx={{ fontSize: 14, lineHeight: 1.8, color: 'text.primary' }}>
              Apoiar produtores éticos e sustentáveis, garantindo que cada compra gere impacto positivo nas comunidades cafeeiras 
              do mundo.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1447933601403-0c6688726566?w=400&h=400&fit=crop"
              alt="Missão"
              sx={{
                width: '100%',
                borderRadius: 1,
                boxShadow: '0 10px 30px rgba(44,26,14,0.15)',
              }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ bgcolor: '#2C1A0E', color: '#F5EDD6', px: { xs: 3, md: 10 }, py: 8 }}>
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 32,
            fontWeight: 600,
            mb: 5,
            textAlign: 'center',
          }}
        >
          Por Que Escolher Puro Ritual?
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'Sourcing Responsável',
              desc: 'Relacionamento direto com produtores, garantindo origem transparente e práticas justas.',
            },
            {
              title: 'Expertise Comprovada',
              desc: 'Pedro e sua equipe são profissionais certificados com anos de experiência no setor.',
            },
            {
              title: 'Conteúdo Educacional',
              desc: 'Cursos, workshops e blog com conhecimento aprofundado para elevar sua experiência.',
            },
            {
              title: 'Comunidade Engajada',
              desc: 'Faça parte de uma comunidade que compartilha paixão por café e aprende constantemente.',
            },
            {
              title: 'Qualidade Garantida',
              desc: 'Cada lote é testado e selecionado conforme os mais altos critérios de specialty coffee.',
            },
            {
              title: 'Suporte Personalizado',
              desc: 'Estamos aqui para ajudar na escolha perfeita de café e métodos de preparo.',
            },
          ].map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: 18,
                    fontWeight: 600,
                    mb: 1,
                    color: '#C4922A',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: 13, lineHeight: 1.6, color: '#EDE0C4' }}>
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Join Us CTA */}
      <Box
        sx={{
          mx: { xs: 3, md: 10 },
          my: 7,
          bgcolor: '#F5EDD6',
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
            color: '#2C1A0E',
            mb: 2,
          }}
        >
          Faça Parte da Nossa Comunidade
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: 14, mb: 3, maxWidth: 500, mx: 'auto' }}>
          Descubra cafés exclusivos, aprenda novas técnicas e conecte-se com amantes de café do mundo todo.
        </Typography>
        <Box
          component="button"
          sx={{
            bgcolor: '#2C1A0E',
            color: '#F5EDD6',
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
            '&:hover': { bgcolor: 'rgba(44,26,14,0.85)' },
          }}
        >
          Comece Agora →
        </Box>
      </Box>
    </Box>
  );
}
