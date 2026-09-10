// ISSUE #23: dev-only debug helper with no NODE_ENV guard — ships straight to prod
export default {
  trace: (message: string, data?: any) => {
    console.log(`[DEBUG] ${message}`, data);
  },
  info: (message: string) => {
    console.log(`[INFO] ${message}`);
  },
  error: (message: string, error?: any) => {
    console.error(`[ERROR] ${message}`, error);
  }
};
