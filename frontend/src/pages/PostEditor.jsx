import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../services/api';


export default function PostEditor() {
const { id } = useParams();
const editMode = Boolean(id);
const [title, setTitle] = React.useState('');
const [content, setContent] = React.useState('');
const [saving, setSaving] = React.useState(false);
const nav = useNavigate();


React.useEffect(() => {
if (!editMode) return;
api.fetchPost(id).then(r => {
setTitle(r.data.title);
setContent(r.data.content);
}).catch(() => {});
}, [editMode, id]);


async function save() {
setSaving(true);
const payload = { title, content, excerpt: content.slice(0, 160) };
try {
if (editMode) await api.updatePost(id, payload);
else await api.createPost(payload);
nav('/dashboard');
} catch (err) {
alert('Save failed');
}
setSaving(false);
}


return (
<div className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-bold">{editMode ? 'Edit Post' : 'New Post'}</h2>
<div className="flex gap-2">
<button onClick={() => nav('/dashboard')} className="px-3 py-2 rounded border">Cancel</button>
<button onClick={save} disabled={saving} className="px-4 py-2 rounded bg-brand-500 text-white">{saving ? 'Saving...' : 'Publish'}</button>
</div>
</div>


<input value={title} onChange={e => setTitle(e.target.value)} placeholder="Post title" className="w-full p-3 rounded border bg-white/80" />


<textarea value={content} onChange={e => setContent(e.target.value)} rows={14} placeholder="Write your post (HTML allowed)" className="w-full p-3 rounded border bg-white/80 font-mono" />


<div className="text-sm text-slate-500">Tip: paste HTML or markdown-rendered HTML for rich content. For production, integrate a proper WYSIWYG editor.</div>
</div>
);
}
