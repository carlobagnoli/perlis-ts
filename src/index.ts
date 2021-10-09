export const mcomp = <A, B, C>(f: (b: B) => C, g: (a: A) => B): ((a: A) => C) => x => f(g(x));
export const ccomp = <A, B, C>(f: (b: B) => C) => (g: (a: A) => B): ((a: A) => C) => x => f(g(x));
export const comp = (...f: any[]) => f.reduce(mcomp);

export const mpipe = <A, B, C>(f: (a: A) => B, g: (b: B) => C): ((a: A) => C) => mcomp(g, f);
export const cpipe = <A, B, C>(f: (a: A) => B) => (g: (b: B) => C): ((a: A) => C) => mcomp(g, f);
export const pipe = (...x: any[]) => x.reduce(pipe);

export const id = <T>(x: T) => x;
export const constant = <T>(x: T) => () => x;
export const call = <T>(f: () => T) => f();

export const scomb = <A, B, C>(f: (a: A, b: B) => C, g: (a: A) => B, x: A): C => f(x, g(x));
export const cscomb = <A, B, C>(f: (a: A, b: B) => C) => (g: (a: A) => B) => (x: A): C => f(x, g(x));

export const first = <T>(x: T[]) => x[0];
export const last  = <T>(x: T[]) => x.slice(-1)[0];
export const rest  = <T>(x: T[]) => x.slice(1);
export const init  = <T>(x: T[]) => x.slice(0, -1);

export const foldl = <A, B>(x: A[], f: (a: A, b: B) => A, init: A) => Array.prototype.reduce.bind(x)(f, init);
export const foldl1 = <A, B>(x: A[], f: (a: A, b: B) => A) => Array.prototype.reduce.bind(x)(f);
export const cfoldl = <A, B>(x: A[]) => (f: (a: A, b: B) => A) => (init: A) => Array.prototype.reduce.bind(x)(f, init);
export const cfoldl1 = <A, B>(x: A[]) => (f: (a: A, b: B) => A) => Array.prototype.reduce.bind(x)(f);

export const foldr = <A, B>(x: A[], f: (a: A, b: B) => A, init: A) => Array.prototype.reduceRight.bind(x)(f, init);
export const foldr1 = <A, B>(x: A[], f: (a: A, b: B) => A) => Array.prototype.reduceRight.bind(x)(f);
export const cfoldr = <A, B>(x: A[]) => (f: (a: A, b: B) => A) => (init: A) => Array.prototype.reduceRight.bind(x)(f, init);
export const cfoldr1 = <A, B>(x: A[]) => (f: (a: A, b: B) => A) => Array.prototype.reduceRight.bind(x)(f);
