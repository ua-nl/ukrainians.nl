import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  MenuItem,
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';

export const TopMenu: React.FC<{
  pages: Array<{
    label: string;
    slug: string;
  }>;
  currentSlug?: string;
}> = ({ pages, currentSlug }) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {pages.map((page) => (
              <MenuItem key={page.slug} selected={page.slug === currentSlug}>
                <Typography textAlign="center">{page.label}</Typography>
              </MenuItem>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
