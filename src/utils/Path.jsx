export default function getNavLinkClass(path) {
	return props.location.pathname === path ? "active" : " ";
}
