/*
|--------------------------------------------------------------------------
| Post Editor
|--------------------------------------------------------------------------
|
| Handles both creating and editing posts.
|
*/
import { api } from "../services/api";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Save, Send } from "lucide-react";


export default function PostEditor() {
  const navigate = useNavigate();
  const { id } = useParams();

  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    status: "Draft",
    imageUrl:"",
  });

  const [loading, setLoading] = useState(false);

  const [uploading, setUploading] = useState(false);

  const [errors, setErrors] = useState({});

  /* ------------------------------------------------------------------ */
  /* Load existing post when editing                                    */
  /* ------------------------------------------------------------------ */

useEffect(() => {
  if (!id) return;

  loadPost();
}, [id]);
 async function loadPost() {
  try {
    const { data } = await api.fetchPost(id);

    setFormData({
      title: data.title || "",
      excerpt: data.excerpt || "",
      content: data.content || "",
      status: data.status || "Draft",
    });
  } catch (error) {
    console.error(error);
  }
}

  /* ------------------------------------------------------------------ */
  /* Handle input changes                                                */
  /* ------------------------------------------------------------------ */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };


  /* ------------------------------------------------------------------ */
/* Upload Featured Image                                              */
/* ------------------------------------------------------------------ */

const handleImageUpload = async (event) => {
  const file = event.target.files[0];

  if (!file) return;

  try {
    setUploading(true);

    const imageData = new FormData();

    imageData.append("image", file);

    const { data } = await api.uploadImage(imageData);

    setFormData((previous) => ({
      ...previous,
      imageUrl: data.imageUrl,
    }));

    toast.success("Image uploaded successfully");
  } catch (error) {
    console.error(error);

    toast.error("Image upload failed");
  } finally {
    setUploading(false);
  }
};

  /* ------------------------------------------------------------------ */
  /* Form validation                                                    */
  /* ------------------------------------------------------------------ */

  const validate = () => {
    const validationErrors = {};

    if (!formData.title.trim()) {
      validationErrors.title = "Title is required.";
    }

    if (!formData.content.trim()) {
      validationErrors.content = "Content is required.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  /* ------------------------------------------------------------------ */
  /* Save Post                                                          */
  /* ------------------------------------------------------------------ */

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      if (isEditMode) {
  await api.updatePost(id, formData);

  toast.success("Post updated successfully");
} else {
  await api.createPost(formData);

  toast.success("Post published successfully");
}

      navigate("/posts");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl">

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

        <div className="mb-8">

          <h1 className="text-3xl font-bold text-white">

            {isEditMode ? "Edit Post" : "Create New Post"}

          </h1>

          <p className="mt-2 text-slate-400">

            Write and manage your content from one place.

          </p>

        </div>



        {/* Featured Image */}

<div className="mb-6">

  <label className="mb-2 block text-sm font-medium text-slate-300">
    Featured Image
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="block w-full text-slate-300"
  />

    {uploading && (
    <p className="mt-2 text-sm text-emerald-400">
      Uploading image...
    </p>
  )}

  {formData.imageUrl && (
    <img
      src={formData.imageUrl}
      alt="Preview"
      className="mt-4 h-56 w-full rounded-xl object-cover"
    />

  )}

</div>




        {/* Title */}

        

        <div className="mb-6">

          <label className="mb-2 block text-sm font-medium text-slate-300">
            Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter post title..."
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-950
              px-4
              py-3
              text-white
              outline-none
              transition
              focus:border-emerald-500
            "
          />

          {errors.title && (
            <p className="mt-2 text-sm text-red-400">
              {errors.title}
            </p>
          )}

        </div>

        {/* Excerpt */}

        <div className="mb-6">

          <label className="mb-2 block text-sm font-medium text-slate-300">
            Excerpt
          </label>

          <textarea
            rows={3}
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            placeholder="Short summary..."
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-950
              px-4
              py-3
              text-white
              outline-none
              transition
              focus:border-emerald-500
            "
          />

        </div>

        {/* Status */}

        <div className="mb-6">

          <label className="mb-2 block text-sm font-medium text-slate-300">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-950
              px-4
              py-3
              text-white
              outline-none
              transition
              focus:border-emerald-500
            "
          >
            <option>Draft</option>
            <option>Published</option>
          </select>

        </div>

        {/* Content */}

        <div className="mb-8">

          <label className="mb-2 block text-sm font-medium text-slate-300">
            Content
          </label>

          <textarea
            rows={14}
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your content here..."
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-950
              px-4
              py-3
              text-white
              outline-none
              transition
              focus:border-emerald-500
            "
          />

          {errors.content && (
            <p className="mt-2 text-sm text-red-400">
              {errors.content}
            </p>
          )}
        </div>
                  {/* Action Buttons */}

        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-end">

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="
              rounded-xl
              border
              border-slate-700
              px-6
              py-3
              text-white
              transition
              hover:border-slate-500
            "
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-emerald-500
              px-6
              py-3
              font-medium
              text-white
              transition
              hover:bg-emerald-600
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading ? (
              "Saving..."
            ) : isEditMode ? (
              <>
                <Save size={18} />
                Update Post
              </>
            ) : (
              <>
                <Send size={18} />
                Publish Post
              </>
            )}
          </button>

        </div>

      </div>

    </div>
  );
}