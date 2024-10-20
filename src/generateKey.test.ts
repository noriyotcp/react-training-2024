import { describe, it, expect } from 'vitest';
import { randomId } from './generateKey';

describe('randomId', () => {
  it('should generate a string of the default length 6', () => {
    const id = randomId();
    expect(id).toHaveLength(6);
  });

  it('should generate a string of the specified length', () => {
    const length = 10;
    const id = randomId(length);
    expect(id).toHaveLength(length);
  });

  it('should generate different ids on subsequent calls', () => {
    const id1 = randomId();
    const id2 = randomId();
    expect(id1).not.toBe(id2);
  });

  it('should generate a string containing only alphanumeric characters', () => {
    const id = randomId();
    expect(id).toMatch(/^[a-z0-9]+$/i);
  });
});
