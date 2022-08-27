import { useEffect, useMemo, useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default ({ onEnter = "", onLeave = "" } = {}) => {
	const [leaving, setLeaving] = useState(null);
	useEffect(() => {
		Inertia.on("start", () => setLeaving(true));
		Inertia.on("finish", () => setLeaving(false));
	}, []);
	return useMemo(() => (leaving ? onLeave : onEnter), [leaving]);
};
