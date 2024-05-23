import { Index } from 'usearch';

describe('usearch ESM', () => {
  it('index api', () => {
    const index = new Index({ metric: 'cos', connectivity: 16, dimensions: 3 });
    expect(index.size() === 1).toBeTruthy;
  });
});
