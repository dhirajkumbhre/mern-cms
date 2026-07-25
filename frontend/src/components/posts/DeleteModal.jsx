export default function DeleteModal({
  open,
  post,
  loading,
  onClose,
  onConfirm,
}) {
  if (!open || !post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
        <h2 className="text-xl font-bold text-white">
          Delete Post
        </h2>

        <p className="mt-4 text-slate-400">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-white">
            "{post.title}"
          </span>
          ?
        </p>

        <p className="mt-2 text-sm text-red-400">
          This action cannot be undone.
        </p>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border border-slate-700 px-5 py-2 text-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="rounded-xl bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}