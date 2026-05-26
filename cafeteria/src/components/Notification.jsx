import { Snackbar, Box, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Notification({ open, message, onClose }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2800}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Box
        sx={{
          display: 'flex', alignItems: 'center', gap: 1.5,
          bgcolor: '#2C1A0E', color: '#F5EDD6',
          px: 3, py: 1.75,
          borderLeft: '3px solid #C4922A',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        }}
      >
        <CheckCircleOutlineIcon sx={{ color: '#C4922A', fontSize: 18 }} />
        <Typography sx={{ fontSize: 13, fontWeight: 600 }}>{message}</Typography>
      </Box>
    </Snackbar>
  );
}
