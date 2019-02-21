import Bushido from "views/Bushido/Bushido.jsx";
import BlogPage from "views/Blog/BlogPage.jsx";
import BlogPost from "views/Blog/Sections/BlogPost.jsx";

var indexRoutes = [
	{ path: "/blogpost/:slug", name: "Blog2", component: BlogPost },
	{ path: "/blog", name: "Blog", component: BlogPage },
	{ path: "/", name: "Bushido", component: Bushido }
];

export default indexRoutes;
