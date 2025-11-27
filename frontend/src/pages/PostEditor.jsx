import { useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

export default function PostEditor(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(()=> {
    if(id) api.fetchPost(id).then(r => {
      const d = r.data;
      setTitle(d.title); setContent(d.content);
    }).catch(()=>{});
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if(!title.trim() || !content.trim()){ alert("Title and content are required"); return; }
    setSaving(true);
    try{
      if(id) await api.updatePost(id, { title, content });
      else await api.createPost({ title, content });
      navigate("/dashboard");
    }catch(err){ console.error(err); alert("Failed to save"); }
    finally{ setSaving(false); }
  };

  return (
    <div className="page-enter container-max pt-28 pb-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{id ? "Edit Post" : "Create New Post"}</h1>
        <form onSubmit={onSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
          <input className="w-full p-3 border rounded-lg input-focus" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
          <textarea className="w-full p-3 border rounded-lg input-focus h-52" placeholder="Write your post..." value={content} onChange={e=>setContent(e.target.value)} />
          <div className="flex items-center gap-3">
            <button disabled={saving} className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
              {saving ? "Saving..." : (id ? "Update Post" : "Publish Post")}
            </button>
            <button type="button" className="px-4 py-3 bg-gray-100 rounded-lg" onClick={()=>navigate(-1)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
