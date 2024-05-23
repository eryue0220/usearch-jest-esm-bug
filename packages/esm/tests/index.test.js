import { Matches, BatchMatches, Index, MetricKind, ScalarKind } from 'usearch-jest-app';

describe('usearch app esm test', () => {
  it('API', () => {
    expect(typeof BatchMatches).toBe('function');
    expect(typeof Matches).toBe('function');
    expect(typeof Index).toBe('function');
    expect(typeof ScalarKind).not.toBeUndefined();
    expect(ScalarKind.Unknown).toEqual('unknown');
    expect(MetricKind.Unknown).toEqual('unknown');
  });
});
