import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function useInertiaSimplePageTransition({
	onEnter = "",
	onLeave = "",
} = {}) {
	const [transitioning, setTransitioning] = useState(null);

	const handle = useCallback((e) => () => setTransitioning(e === "start"), []);

	useEffect(() => {
		Inertia.on("finish", handle("finish"));
		Inertia.on("start", handle("start"));
	}, []);

	return useMemo(() => (transitioning ? onLeave : onEnter), [transitioning]);
}
