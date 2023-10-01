import { HOSTNAME, PORT } from '@/constants';
import { app } from './server';

//Bootstrap
app.listen(PORT, () => {
  console.log(`Server started on http://${HOSTNAME}:${PORT}`);
});
