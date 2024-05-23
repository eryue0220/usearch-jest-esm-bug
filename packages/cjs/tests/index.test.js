const usearch = require('usearch-jest-app');

describe('usearch app cjs test', () => {
  it('API', () => {
    expect(typeof usearch.Matches).toBe('function');
    expect(typeof usearch.BatchMatches).toBe('function');
    expect(typeof usearch.Index).toBe('function');
    expect(typeof usearch.ScalarKind).not.toBeUndefined();
    expect(usearch.ScalarKind.Unknown).toEqual('unknown');
    expect(usearch.MetricKind.Unknown).toEqual('unknown');
  });
});
