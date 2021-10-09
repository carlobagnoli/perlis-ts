export const mcomp = <A, B, C>(f: (b: B) => C, g: (a: A) => B): ((a: A) => C) => x => f(g(x));
export const comp = (...f: any[]) => f.reduce(mcomp);

export const mpipe = <A, B, C>(f: (a: A) => B, g: (b: B) => C): ((a: A) => C) => mcomp(g, f);
export const pipe = (...x: any[]) => x.reduce(pipe);

export const id = <T>(x: T) => x;
export const constant = <T>(x: T) => () => x;
export const scomb = <A, B, C>(f: (a: A, b: B) => C, g: (a: A) => B, x: A): C => f(x, g(x));
