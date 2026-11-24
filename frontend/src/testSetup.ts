// Configure Vitest to use the jest-dom matchers,
// Vitest will execute this file before running any tests, so the matchers will be available in all test files
import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});
