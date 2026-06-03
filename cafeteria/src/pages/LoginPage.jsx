import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Link,
  Card,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

export default function LoginPage({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #F4EEE2 0%, #fff5f0 100%)",
        py: 6,
        animation: `fadeIn 0.6s ease both`,
        "@keyframes fadeIn": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            boxShadow: "0 10px 40px rgba(44, 26, 14, 0.1)",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              bgcolor: "#2C1A0E",
              color: "white",
              py: 5,
              px: 4,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                mb: 1,
              }}
            >
              PuroCafé
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.9,
                fontSize: 14,
              }}
            >
              Acesse sua conta para continuar
            </Typography>
          </Box>

          {/* Form */}
          <Box
            sx={{
              p: { xs: 3, md: 4 },
            }}
          >
            {/* Email Field */}
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  mb: 1,
                  fontWeight: 600,
                  color: "#2C1A0E",
                }}
              >
                Email
              </Typography>
              <TextField
                fullWidth
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "#C4922A", mr: 1 }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    border: "2px solid #E8D4C0",
                    "&:hover": {
                      borderColor: "#C4922A",
                    },
                    "&.Mui-focused": {
                      borderColor: "#C4922A",
                      "& fieldset": {
                        border: "2px solid #C4922A",
                      },
                    },
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    color: "#B8A899",
                    opacity: 1,
                  },
                }}
              />
            </Box>

            {/* Password Field */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  mb: 1,
                  fontWeight: 600,
                  color: "#2C1A0E",
                }}
              >
                Senha
              </Typography>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Sua senha"
                value={formData.password}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: "#C4922A", mr: 1 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ color: "#C4922A" }} />
                        ) : (
                          <Visibility sx={{ color: "#C4922A" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    border: "2px solid #E8D4C0",
                    "&:hover": {
                      borderColor: "#C4922A",
                    },
                    "&.Mui-focused": {
                      borderColor: "#C4922A",
                      "& fieldset": {
                        border: "2px solid #C4922A",
                      },
                    },
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    color: "#B8A899",
                    opacity: 1,
                  },
                }}
              />
            </Box>

            {/* Forgot Password Link */}
            <Box sx={{ mb: 3, textAlign: "right" }}>
              <Link
                component="button"
                variant="body2"
                onClick={(e) => {
                  e.preventDefault();
                  // Visual only - no navigation
                }}
                sx={{
                  color: "#C4922A",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Esqueci minha senha
              </Link>
            </Box>

            {/* Login Button */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#C4922A",
                color: "white",
                py: 1.5,
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
                mb: 2,
                transition: "all 0.3s",
                "&:hover": {
                  bgcolor: "#A87A1F",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(196, 146, 42, 0.3)",
                },
              }}
              onClick={() => {
                // Visual only - no actual login logic
              }}
            >
              Entrar
            </Button>

            {/* Signup Link */}
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                Não tem uma conta?{" "}
                <Link
                  component="button"
                  variant="body2"
                  onClick={(e) => {
                    e.preventDefault();
                    // Visual only
                  }}
                  sx={{
                    color: "#C4922A",
                    textDecoration: "none",
                    fontWeight: 600,
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Cadastre-se aqui
                </Link>
              </Typography>
            </Box>
          </Box>

          {/* Footer */}
          <Box
            sx={{
              bgcolor: "#F9F7F4",
              px: 4,
              py: 3,
              textAlign: "center",
              borderTop: "1px solid #E8D4C0",
            }}
          >
            <Typography variant="caption" sx={{ color: "#999" }}>
              © 2024 PuroCafé. Todos os direitos reservados.
            </Typography>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
