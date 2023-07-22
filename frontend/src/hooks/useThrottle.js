import { useCallback, useEffect, useRef } from "react";

export default function useThrottle(callback, delay) {
	const timer = useRef();
	const isThrottled = useRef(false);

	const throttledCallback = useCallback((...args) => {
		if (!isThrottled.current) {
			isThrottled.current = true;
			callback(...args);
			timer.current = setTimeout(() => {
				isThrottled.current = false;
			}, delay);
		}
	}, [callback, delay]);

	useEffect(() => {
		return () => {
			if (timer.current) {
				clearTimeout(timer.current);
			}
		};
	}, []);

	return throttledCallback;
}