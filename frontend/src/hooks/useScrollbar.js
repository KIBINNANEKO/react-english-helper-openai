import { useEffect } from 'react';
import {OverlayScrollbars} from 'overlayscrollbars';

const config = {
	scrollbars: {
		visibility: "auto",
		autoHide: "never",
		theme: 'os-theme-light',
	}
};

const useScrollbar = (root) => {
	useEffect(() => {
		let scrollbars;

		if (root.current) {
			scrollbars = OverlayScrollbars(root.current, config);
		}

		return () => {
			if (scrollbars) {
				scrollbars.destroy();
			}
		}
	}, [root]);
};

export { useScrollbar };