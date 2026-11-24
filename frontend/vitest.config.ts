// tells vitest to run tests in a browser-like environment using jsdom
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
});
