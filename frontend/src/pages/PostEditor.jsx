export default function PostEditor() {
  ...
  return (
    <div className="max-w-4xl mx-auto pt-28 px-6 page-enter">

      <h1 className="text-4xl font-bold mb-8 gradient-text">
        {id ? "Edit Your Post" : "Create a New Post"}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl hover-glow space-y-6"
      >
        {/* Title */}
        <input
          type="text"
          placeholder="Post title"
          className="w-full p-4 border rounded-xl focus:border-indigo-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Content */}
        <textarea
          className="w-full p-4 border rounded-xl h-60 focus:border-indigo-500"
          placeholder="Write your content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-md"
        >
          {id ? "Update Post" : "Create Post"}
        </button>
      </form>
    </div>
  );
}
