import { Box, TextField, Typography, Button } from '@mui/material';
import styles from './auth.module.css';

export function Auth() {
  return (
    <section className={styles.login}>
      <div className={styles.opacity}>
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
            <Typography variant="h3" component="h1">
              Sign in
            </Typography>
            <form>
              <TextField margin="normal" fullWidth label="Email" id="email" sx={{ color: '#606060', backgroundColor: '#333' }} />
              <TextField
                margin="normal"
                fullWidth
                label="Password"
                id="pass"
                sx={{ color: '#606060', backgroundColor: '#333' }}
                InputLabelProps={{
                  style: { color: '#606060' },
                }}
              />
              <Button variant="contained" fullWidth size="large" sx={{ textTransform: 'capitalize', marginTop: '3.125rem' }}>
                Sign in
              </Button>
            </form>
          </Box>
        </Box>
      </div>
    </section>
  );
}
