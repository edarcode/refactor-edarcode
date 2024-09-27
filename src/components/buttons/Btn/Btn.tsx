import css from "./css.module.css";
import Err from "./Err/Err";
import Spinner from "./Spinner/Spinner";
import { joinClass } from "./utils/joinClass";
import { Props } from "./types";
import { BTN_KIND } from "./kinds";

export default function Btn(props: Props) {
	const {
		isVisible = true,
		kind,
		className,
		loading,
		err,
		children,
		...extraProps
	} = props;

	const finalClass = joinClass([
		className,
		css.btn,
		err && css.btn__err,
		BTN_KIND[kind ?? "primary"]
	]);

	if (!isVisible) return null;
	return (
		<button {...extraProps} className={finalClass}>
			{!loading && children}
			<Spinner loading={loading} />
			<Err err={err} />
		</button>
	);
}
