import config from './config';
export function validateBootstrap(){
  if(!config.port) throw new Error('PORT missing');
  return true;
}
