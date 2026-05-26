import {
  Box, Typography, Grid,
  Select, MenuItem, FormControl, Stack
} from '@mui/material';
import CourseCard from '../components/CourseCard';
import { courses } from '../data';

const SELECT_SX = {
  minWidth: 120,
  '& .MuiOutlinedInput-root': { borderRadius: 0 },
  '& .MuiSelect-select': { py: 1.1, fontSize: 12 },
};

export default function CoursesPage({ onOpenProduct }) {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ textAlign: 'center', px: { xs: 3, md: 10 }, pt: 7, pb: 4 }}>
        <Typography variant="h2" sx={{ fontSize: 36, mb: 1.5 }}>Nossos Cursos</Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: 14, lineHeight: 1.7 }}>
          Aprenda com os melhores especialistas em café e desenvolva suas habilidades<br />
          da degustação à gestão de negócios specialty.
        </Typography>
      </Box>

      {/* Filters */}
      <Box sx={{ px: { xs: 3, md: 10 }, pb: 3.5 }}>
        <Stack direction="row" spacing={1.5} flexWrap="wrap" alignItems="center" useFlexGap>
          {['Nível', 'Duração', 'Instrutor'].map(label => (
            <FormControl key={label} sx={SELECT_SX} size="small">
              <Select defaultValue="" displayEmpty>
                <MenuItem value=""><em>{label}</em></MenuItem>
                <MenuItem value="op1">Opção 1</MenuItem>
                <MenuItem value="op2">Opção 2</MenuItem>
              </Select>
            </FormControl>
          ))}
          <Box sx={{ ml: 'auto !important', display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Ordenar por</Typography>
            <FormControl sx={SELECT_SX} size="small">
              <Select defaultValue="recom">
                <MenuItem value="recom">Recomendado</MenuItem>
                <MenuItem value="menor">Menor preço</MenuItem>
                <MenuItem value="maior">Maior preço</MenuItem>
                <MenuItem value="duracao">Duração</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Box>

      {/* Courses Grid */}
      <Box sx={{ px: { xs: 3, md: 10 }, pb: 6 }}>
        <Grid container spacing={2.5}>
          {courses.map(course => (
            <Grid item xs={12} sm={6} md={3} key={course.id}>
              <CourseCard course={course} onOpen={onOpenProduct} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Banner */}
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
            Quer aprender mais?
          </Typography>
          <Typography sx={{ color: '#EDE0C4', fontSize: 13, opacity: 0.7 }}>
            Matricule-se em um curso e receba certificado oficial ao final!
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
          SABER MAIS →
        </Box>
      </Box>
    </Box>
  );
}
