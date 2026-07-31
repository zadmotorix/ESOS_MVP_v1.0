import {startupDiagnostics} from './src/startupDiagnostics';
import app from './src/app';
const PORT = process.env.PORT || 3000;
console.log(startupDiagnostics());
app.listen(PORT,()=>console.log(`ESOS running on ${PORT}`));
