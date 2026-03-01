import { describe, it, expect } from 'vitest';
import { textParser } from '../utils/textParsing';

describe('textParser', () => {
  it('parses semicolon-separated values correctly', () => {
    const input = 'ア;a\nイ;i\nウ;u';
    const result = textParser(input);
    
    expect(result).toEqual([
      { front: 'ア', back: 'a' },
      { front: 'イ', back: 'i' },
      { front: 'ウ', back: 'u' },
    ]);
  });

  it('handles empty input', () => {
    const input = '';
    const result = textParser(input);
    
    expect(result).toEqual([]);
  });

  it('handles lines without delimiter', () => {
    const input = 'ア;a\ninvalid';
    const result = textParser(input);
    
    expect(result).toEqual([
      { front: 'ア', back: 'a' },
      { front: 'invalid', back: '' },
    ]);
  });
});
