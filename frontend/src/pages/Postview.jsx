import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../services/api';


export default function PostView() {
const { id } = useParams();
const [post, setPost] = React.useState(null);
const nav = useNavigate();


React.useEffect(() => {
api.fetchPost(id).then(r => setPost(r.data)).catch(() => setPost(null));
}, [id]);


if (!post) return <div>Loading...</div>;


return (
<article className="prose dark:prose-invert max-w-none">
<div className="mb-6 flex items-center justify-between">
<div>
<h1 className="text-4xl font-bold">{post.title}</h1>
<div className="text-sm text-slate-500">{new Date(post.createdAt).toLocaleString()}</div>
</div>
<div className="flex gap-2">
<button onClick={() => nav('/dashboard')} className="px-3 py-2 rounded border">Back</button>
</div>
</div>
<div dangerouslySetInnerHTML={{ __html: post.content }} />
</article>
);
}
