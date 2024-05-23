export enum ScalarKind {
  Unknown = "unknown",
  F32 = "f32",
  F64 = "f64",
  F16 = "f16",
  I8 = "i8",
  B1 = "b1",
}

export enum MetricKind {
  Unknown = "unknown",
  Cos = "cos",
  IP = "ip",
  L2sq = "l2sq",
  Haversine = "haversine",
  Divergence = "divergence",
  Pearson = "pearson",
  Jaccard = "jaccard",
  Hamming = "hamming",
  Tanimoto = "tanimoto",
  Sorensen = "sorensen",
}

export class Matches {
  /**
   * Constructs a Matches object.
   *
   * @param {BigUint64Array} keys - The keys of the nearest neighbors found.
   * @param {Float32Array} distances - The distances of the nearest neighbors found.
   */
  constructor(public keys: BigUint64Array, public distances: Float32Array) { }
}

export class BatchMatches {
  /**
   * Constructs a BatchMatches object.
   *
   * @param {BigUint64Array} keys - The keys of the nearest neighbors found in the batch.
   * @param {Float32Array} distances - The distances of the nearest neighbors found in the batch.
   * @param {BigUint64Array} counts - The number of neighbors found for each query in the batch.
   * @param {number} k - The limit for search results per query in the batch.
   */
  constructor(
    public keys: BigUint64Array,
    public distances: Float32Array,
    public counts: BigUint64Array,
    public k: number
  ) { }

  /**
   * Retrieves a Matches object at the specified index in the batch.
   *
   * @param {number} i - The index at which to retrieve the Matches object.
   * @returns {Matches} - A Matches object representing the search results at the specified index in the batch.
   */
  get(i: number): Matches {
    const index = Number(i) * Number(this.k);
    const count = Number(this.counts[i]);
    const keysSlice = this.keys.slice(index, index + count);
    const distancesSlice = this.distances.slice(index, index + count);
    return new Matches(keysSlice, distancesSlice);
  }
}

export class Index {
  private type: string = 'Index';

  get name() {
    return this.type;
  }
}
