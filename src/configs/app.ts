const NEST_APP_DB_USERNAME = process.env.NEST_APP_DB_USERNAME ?? 'bngoc';
const NEST_APP_DB_PASSWORD = process.env.NEST_APP_DB_PASSWORD ?? '191298';
const NEST_APP_DB_NAME = process.env.NEST_APP_DB_NAME ?? 'reddit';
const NEST_APP_DB_PORT = Number(process.env.NEST_APP_DB_PORT ?? 8083);

export const APP_CONFIGS = {
  NEST_APP_DB_USERNAME,
  NEST_APP_DB_PASSWORD,
  NEST_APP_DB_NAME,
  NEST_APP_DB_PORT,
};
