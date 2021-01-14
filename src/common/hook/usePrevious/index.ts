/**
 * 获取上一轮的 props 或 state
 */
import { useRef, useEffect } from 'react';

const usePrevious = <T>(state: T): T | undefined => {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = state;
    })
    return ref.current;
}

export default usePrevious;
