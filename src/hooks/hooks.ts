import { useRef } from 'react';

export const usePersistFn = function <T extends Function>(fn: T): T {
    const fnRef = useRef<T>(fn);
    fnRef.current = fn;
    const persistFn = useRef<T>();
    if (!persistFn.current) {
        persistFn.current = function (...args: T[]) {
            return fnRef.current.apply(this, args);
        } as unknown as T;
    }
    return persistFn.current;
};