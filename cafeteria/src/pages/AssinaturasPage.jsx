import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Switch,
  FormControlLabel,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { plans } from "../data";

function formatPrice(v) {
  return "R$ " + v.toFixed(2).replace(".", ",");
}

function PlanCard({ plan, isSemestral }) {
  const price = isSemestral ? plan.price * 0.9 : plan.price;

  return (
    <Box
      sx={{
        bgcolor: plan.featured ? "#2C1A0E" : "#FFFFFF",
        border: plan.featured
          ? "2px solid #2C1A0E"
          : "1px solid rgba(180,140,90,0.2)",
        p: 4,
        textAlign: "center",
        position: "relative",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: plan.featured
            ? "0 16px 48px rgba(44,26,14,0.4)"
            : "0 12px 40px rgba(90,40,10,0.13)",
        },
      }}
    >
      {plan.featured && (
        <Chip
          label="MAIS POPULAR"
          size="small"
          sx={{
            position: "absolute",
            top: -12,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "#C4922A",
            color: "#fff",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: 1,
            borderRadius: 0,
            height: 22,
          }}
        />
      )}

      <Typography
        sx={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          mb: 0.75,
          color: plan.featured ? "#C4922A" : "#8B4513",
        }}
      >
        PLANO
      </Typography>
      <Typography
        sx={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 26,
          fontWeight: 700,
          mb: 1,
          color: plan.featured ? "#F5EDD6" : "#1A0F07",
        }}
      >
        {plan.name}
      </Typography>
      <Typography sx={{ fontSize: 28, mb: 2.5 }}>{plan.icon}</Typography>

      <Box
        component="ul"
        sx={{ listStyle: "none", p: 0, mb: 3.5, textAlign: "left" }}
      >
        {plan.features.map((feat) => (
          <Box
            key={feat}
            component="li"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              py: 0.6,
              fontSize: 12,
              color: plan.featured ? "rgba(245,237,214,0.85)" : "#4A2C10",
            }}
          >
            <CheckIcon sx={{ fontSize: 13, color: "#C4922A", flexShrink: 0 }} />
            {feat}
          </Box>
        ))}
      </Box>

      <Typography
        sx={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 28,
          fontWeight: 700,
          mb: 0.5,
          color: plan.featured ? "#F5EDD6" : "#5C3317",
        }}
      >
        {formatPrice(price)}
      </Typography>
      <Typography
        sx={{
          fontSize: 11,
          mb: 2.75,
          color: plan.featured ? "rgba(245,237,214,0.6)" : "#7A5C3A",
        }}
      >
        /mês
      </Typography>

      <Button
        fullWidth
        variant={plan.featured ? "contained" : "outlined"}
        sx={{
          py: 1.5,
          ...(plan.featured
            ? { bgcolor: "#8B4513", "&:hover": { bgcolor: "#7A3B10" } }
            : {
                borderColor: "#8B4513",
                color: "#8B4513",
                "&:hover": { bgcolor: "#8B4513", color: "#fff" },
              }),
        }}
      >
        ASSINAR
      </Button>
    </Box>
  );
}

const FOOTER_ITEMS = [
  { icon: "⏸️", label: "Pause quando quiser" },
  { icon: "🚚", label: "Frete grátis sempre" },
  { icon: "☕", label: "Cafés exclusivos" },
  { icon: "✕", label: "Cancelamento fácil" },
];

export default function AssinaturasPage({ onNavigate }) {
  const [isSemestral, setIsSemestral] = useState(false);

  return (
    <Box>
      <Box sx={{ bgcolor: "#F0EBE1", px: { xs: 3, md: 10 }, py: 8 }}>
        <Typography
          variant="h2"
          sx={{ fontSize: 36, textAlign: "center", mb: 1.25 }}
        >
          Clube de Assinatura
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
            fontSize: 14,
            mb: 4,
          }}
        >
          Cafés incríveis todo mês, com benefícios exclusivos.
        </Typography>

        {/* Toggle */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1.5}
          sx={{ mb: 4.5 }}
        >
          <Typography
            sx={{ fontSize: 13, fontWeight: 700, color: "text.secondary" }}
          >
            Mensal
          </Typography>
          <Switch
            checked={isSemestral}
            onChange={(e) => setIsSemestral(e.target.checked)}
            sx={{
              "& .MuiSwitch-thumb": { bgcolor: "#fff" },
              "& .MuiSwitch-track": {
                bgcolor: "#8B4513 !important",
                opacity: "1 !important",
              },
            }}
          />
          <Typography
            sx={{ fontSize: 13, fontWeight: 700, color: "text.secondary" }}
          >
            Semestral
          </Typography>
          {isSemestral && (
            <Chip
              label="10% OFF"
              size="small"
              sx={{
                bgcolor: "#C4922A",
                color: "#fff",
                fontSize: 10,
                fontWeight: 700,
                borderRadius: 0,
                height: 22,
              }}
            />
          )}
        </Stack>

        <Grid container spacing={2.5} alignItems="stretch">
          {plans.map((plan, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={plan.id}
              sx={{
                animation: `fadeUp 0.5s ease both`,
                animationDelay: `${index * 0.15}s`,
                "@keyframes fadeUp": {
                  from: {
                    opacity: 0,
                    transform: "translateY(20px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              <PlanCard plan={plan} isSemestral={isSemestral} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer strip */}
      <Box sx={{ bgcolor: "#EDE0C4", px: { xs: 3, md: 10 }, py: 2.5 }}>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={7}
          flexWrap="wrap"
          useFlexGap
        >
          {FOOTER_ITEMS.map(({ icon, label }) => (
            <Box
              key={label}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <Typography sx={{ fontSize: 16 }}>{icon}</Typography>
              <Typography
                sx={{ fontSize: 12, fontWeight: 600, color: "#4A2C10" }}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
