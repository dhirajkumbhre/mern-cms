
import { useEffect, useState } from "react";
import { api } from "../services/api";
import Postcard from "../components/Postcard";


export default function Home() {
const [posts, setPosts] = useState([]);


useEffect(() => {
api.fetchPosts().then((res) => setPosts(res.data));
}, []);


return (
<div className="max-w-6xl mx-auto py-10 px-4">
<h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
Latest Articles
</h1>


{posts.length === 0 && (
<p className="text-center text-gray-600 dark:text-gray-300 text-lg">
No posts yet. Create your first one!
</p>
)}


<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
{posts.map((post) => (
<PostCard key={post._id} post={post} />
))}
</div>
</div>
);
}
