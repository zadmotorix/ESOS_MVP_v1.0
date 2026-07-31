export function validateEnv(){
  const required=["DATABASE_URL"];
  return required.filter(k=>!process.env[k]);
}
