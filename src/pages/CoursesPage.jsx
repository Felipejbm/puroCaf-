import { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  Stack,
  Paper,
  Chip,
} from "@mui/material";
import CourseCard from "../components/CourseCard";
import { courses } from "../data";

const SELECT_SX = {
  minWidth: 140,
  "& .MuiOutlinedInput-root": {
    borderRadius: 1,
    fontSize: 12,
    fontWeight: 500,
  },
  "& .MuiSelect-select": { py: 0.9, px: 1.2 },
};

export default function CoursesPage({ onOpenProduct, onNavigate }) {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState("");
  const [sortBy, setSortBy] = useState("recom");

  // Extract unique values for filters
  const levels = [...new Set(courses.map((c) => c.level))];
  const durations = [...new Set(courses.map((c) => c.duration))];
  const instructors = [...new Set(courses.map((c) => c.instructor))];

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    let filtered = courses.filter((course) => {
      if (selectedLevel && course.level !== selectedLevel) return false;
      if (selectedDuration && course.duration !== selectedDuration) return false;
      if (selectedInstructor && course.instructor !== selectedInstructor)
        return false;
      return true;
    });

    // Sort
    if (sortBy === "menor") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "maior") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "duracao") {
      const durationOrder = { "4 semanas": 4, "5 semanas": 5, "6 semanas": 6, "8 semanas": 8, "10 semanas": 10, "12 semanas": 12 };
      filtered.sort(
        (a, b) =>
          (durationOrder[a.duration] || 0) - (durationOrder[b.duration] || 0)
      );
    }

    return filtered;
  }, [selectedLevel, selectedDuration, selectedInstructor, sortBy]);

  const activeFilters = [
    selectedLevel,
    selectedDuration,
    selectedInstructor,
  ].filter(Boolean).length;

  return (
    <Box>
      {/* Header */}
      <Box sx={{ textAlign: "center", px: { xs: 3, md: 10 }, pt: 7, pb: 5 }}>
        <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 36 }, mb: 1.5, fontWeight: 700 }}>
          Nossos Cursos
        </Typography>
        <Typography
          sx={{ color: "text.secondary", fontSize: 14, lineHeight: 1.8, maxWidth: 600, mx: "auto" }}
        >
          Aprenda com os melhores especialistas em café e desenvolva suas
          habilidades da degustação à gestão de negócios specialty.
        </Typography>
      </Box>

      {/* Filters Section */}
      <Box sx={{ px: { xs: 3, md: 10 }, pb: 4 }}>
        <Paper
          sx={{
            p: { xs: 2.5, md: 3 },
            bgcolor: "rgba(255,255,255,0.97)",
            border: "1px solid rgba(196,146,42,0.1)",
          }}
        >
          <Stack spacing={2.5}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography sx={{ fontWeight: 600, fontSize: 13 }}>
                Filtros{activeFilters > 0 && <Chip label={activeFilters} size="small" sx={{ ml: 1 }} />}
              </Typography>
              {activeFilters > 0 && (
                <Box
                  component="button"
                  onClick={() => {
                    setSelectedLevel("");
                    setSelectedDuration("");
                    setSelectedInstructor("");
                  }}
                  sx={{
                    bgcolor: "transparent",
                    border: "none",
                    color: "#C4922A",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    textDecoration: "underline",
                    p: 0,
                  }}
                >
                  Limpar filtros
                </Box>
              )}
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems={{ xs: "stretch", sm: "center" }}
              flexWrap="wrap"
              useFlexGap
            >
              <FormControl sx={SELECT_SX} size="small">
                <Select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="">Todos os níveis</MenuItem>
                  {levels.map((level) => (
                    <MenuItem key={level} value={level}>
                      {level}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={SELECT_SX} size="small">
                <Select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="">Todas as durações</MenuItem>
                  {durations.map((duration) => (
                    <MenuItem key={duration} value={duration}>
                      {duration}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={SELECT_SX} size="small">
                <Select
                  value={selectedInstructor}
                  onChange={(e) => setSelectedInstructor(e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="">Todos os instrutores</MenuItem>
                  {instructors.map((instructor) => (
                    <MenuItem key={instructor} value={instructor}>
                      {instructor}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Box sx={{ ml: "auto !important", display: "flex", alignItems: "center", gap: 1.5 }}>
                <Typography sx={{ fontSize: 12, color: "text.secondary", whiteSpace: "nowrap" }}>
                  Ordenar por
                </Typography>
                <FormControl sx={SELECT_SX} size="small">
                  <Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <MenuItem value="recom">Recomendado</MenuItem>
                    <MenuItem value="menor">Menor preço</MenuItem>
                    <MenuItem value="maior">Maior preço</MenuItem>
                    <MenuItem value="duracao">Duração</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>

            <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
              {filteredCourses.length} curso{filteredCourses.length !== 1 ? "s" : ""} encontrado{filteredCourses.length !== 1 ? "s" : ""}
            </Typography>
          </Stack>
        </Paper>
      </Box>

      {/* Courses Grid */}
      <Box sx={{ px: { xs: 3, md: 10 }, pb: 6 }}>
        {filteredCourses.length > 0 ? (
          <Grid container spacing={2.5}>
            {filteredCourses.map((course, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={course.id}
                sx={{
                  animation: `fadeUp 0.4s ease both`,
                  animationDelay: `${(index % 4) * 0.08}s`,
                  "@keyframes fadeUp": {
                    from: {
                      opacity: 0,
                      transform: "translateY(16px)",
                    },
                    to: {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },
                }}
              >
                <CourseCard course={course} onOpen={onOpenProduct} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography sx={{ color: "text.secondary", mb: 1 }}>
              Nenhum curso encontrado com esses filtros.
            </Typography>
            <Box
              component="button"
              onClick={() => {
                setSelectedLevel("");
                setSelectedDuration("");
                setSelectedInstructor("");
              }}
              sx={{
                bgcolor: "transparent",
                border: "none",
                color: "#C4922A",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "underline",
                mt: 2,
                p: 0,
              }}
            >
              Limpar filtros
            </Box>
          </Box>
        )}
      </Box>

      {/* CTA Banner */}
      <Box
        sx={{
          mx: { xs: 3, md: 10 },
          mb: 7,
          bgcolor: "#2C1A0E",
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 5 },
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: 20, md: 24 },
              color: "#F5EDD6",
              fontWeight: 600,
              mb: 1,
            }}
          >
            Quer aprender mais?
          </Typography>
          <Typography sx={{ color: "#EDE0C4", fontSize: 13, opacity: 0.75, lineHeight: 1.6 }}>
            Matricule-se em um curso e receba certificado oficial ao final!
          </Typography>
        </Box>
        <Box
          component="button"
          sx={{
            bgcolor: "transparent",
            border: "1.5px solid #C4922A",
            color: "#C4922A",
            px: 3,
            py: 1.5,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1.2,
            textTransform: "uppercase",
            cursor: "pointer",
            fontFamily: '"Lato", sans-serif',
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
            "&:hover": {
              bgcolor: "rgba(196,146,42,0.1)",
              transform: "translateY(-2px)",
            },
          }}
        >
          Saber Mais →
        </Box>
      </Box>
    </Box>
  );
}
