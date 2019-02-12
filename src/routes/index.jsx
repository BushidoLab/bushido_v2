import Bushido from "views/Bushido/Bushido.jsx";
import BlogPage from "views/Blog/BlogPage.jsx";

var indexRoutes = [
	{ path: "/blog", name: "Blog", component: BlogPage },
	{ path: "/", name: "Bushido", component: Bushido }
];

export default indexRoutes;
