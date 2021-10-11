import { Box, TextField, Typography, Button, Link } from '@mui/material';
import styles from './auth.module.css';
import logo from '../../assets/icons/surface1.svg';

function Nav() {
  return <img src={logo} alt="logo" className={styles.logo} />;
}
export function Auth() {
  return (
    <section className={styles.login}>
      <div className={styles.opacity}>
        <Nav />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Box
            sx={{
              width: 450,
              height: 650,
              backgroundColor: 'rgba(0,0,0,.75)',
              p: '3.75rem',
              color: '#fff',
              borderRadius: '3px',
            }}
          >
            <Typography variant="h3" component="h1" sx={{ fontSize: 32 }}>
              Sign in
            </Typography>
            <form>
              <TextField
                margin="normal"
                fullWidth
                label="Email"
                id="email"
                sx={{ color: '#606060', backgroundColor: '#333', borderRadius: 1 }}
                InputLabelProps={{
                  style: { color: '#606060' },
                }}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Password"
                id="pass"
                sx={{ color: '#606060', backgroundColor: '#333', borderRadius: 1 }}
                InputLabelProps={{
                  style: { color: '#606060' },
                }}
              />
              <Button variant="contained" fullWidth size="large" sx={{ textTransform: 'capitalize', marginTop: '3.125rem', p: '.7rem 0', fontSize: 16 }}>
                Sign in
              </Button>
            </form>
            <Typography sx={{ marginTop: '2.5rem' }}>
              New to SofaTV ?
              <Link href="/" sx={{ marginLeft: '0.5rem' }} underline="hover">
                Sign up now
              </Link>
            </Typography>
          </Box>
        </Box>
      </div>
    </section>
  );
}
