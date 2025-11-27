import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link
      to={`/post/${post._id}`}
      className="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 scale-hover"
    >
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-600 line-clamp-3">{post.content}</p>

      <div className="mt-4 text-indigo-600 font-medium">
        Read more →
      </div>
    </Link>
  );
}
