import { useEffect, useState } from "react";
import { api } from "../services/api";
import { useParams } from "react-router-dom";

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.fetchPost(id).then((res) => setPost(res.data));
  }, []);

  if (!post) return <div className="pt-40 text-center text-gray-500">Loading...</div>;

  return (
    <div className="pt-28 max-w-3xl mx-auto px-5 fade-enter">

      <h1 className="text-4xl font-bold gradient-text">{post.title}</h1>

      <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        {post.content}
      </p>

    </div>
  );
}
