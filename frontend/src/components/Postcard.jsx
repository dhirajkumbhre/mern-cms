export default function PostCard({ post }) {
return (
<div className="p-6 rounded-xl shadow bg-white dark:bg-gray-800 hover:shadow-xl transition-all">
<h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h2>
<p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
{post.excerpt || post.content.substring(0, 120) + "..."}
</p>
<a
className="text-indigo-600 dark:text-indigo-400 hover:underline"
href={`/post/${post._id}`}
>
Read more →
</a>
</div>
);
}
