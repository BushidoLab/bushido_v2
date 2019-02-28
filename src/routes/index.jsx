import Bushido from "views/Bushido/Bushido.jsx";
import BlogPage from "views/Blog/BlogPage.jsx";
import BlogPost from "views/Blog/Sections/BlogPost.jsx";
import MediaPage from "views/Media/MediaPage.jsx"
var indexRoutes = [
	{ path: "/media", name: "Media", component: MediaPage },
	{ path: "/blogpost/:slug", name: "Blog2", component: BlogPost },
	{ path: "/blog", name: "Blog", component: BlogPage },
	{ path: "/", name: "Bushido", component: Bushido }
];

export default indexRoutes;
