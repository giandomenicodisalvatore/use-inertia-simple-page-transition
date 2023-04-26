import { useEffect, useMemo, useState } from "react";
import { router } from "@inertiajs/react";

export default ({ onEnter = "", onLeave = "" } = {}) => {
	const [leaving, setLeaving] = useState(null);
	useEffect(() => {
		router.on("start", () => setLeaving(true));
		router.on("finish", () => setLeaving(false));
	}, []);
	return useMemo(() => (leaving ? onLeave : onEnter), [leaving]);
};
