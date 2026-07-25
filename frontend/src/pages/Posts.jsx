/* ==========================================================
   Posts Page
   ----------------------------------------------------------
   Displays all blog posts with:
   - Search
   - Status Filter
   - Pagination
   - Delete functionality
   - Toast notifications
========================================================== */

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import { api } from "../services/api";

import SearchBar from "../components/posts/SearchBar";
import PostsTable from "../components/posts/PostsTable";
import DeleteModal from "../components/posts/DeleteModal";
import Pagination from "../components/posts/Pagination";

export default function Posts() {
  /* ==========================================================
     State
  ========================================================== */

  // All posts fetched from the backend
  const [posts, setPosts] = useState([]);

  // Loading state while fetching posts
  const [loading, setLoading] = useState(true);

  // Search input
  const [searchTerm, setSearchTerm] = useState("");

  // Draft / Published filter
  const [statusFilter, setStatusFilter] = useState("all");

  // Selected post for delete confirmation
  const [selectedPost, setSelectedPost] = useState(null);

  // Loading state while deleting
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Current pagination page
  const [currentPage, setCurrentPage] = useState(1);

  const POSTS_PER_PAGE = 5;

  /* ==========================================================
     Load Posts
  ========================================================== */

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    try {
      setLoading(true);

      const { data } = await api.fetchPosts();

      setPosts(data);
    } catch (err) {
      console.error(err);

      toast.error("Failed to load posts");
    } finally {
      setLoading(false);
    }
  }

  /* ==========================================================
     Search + Filter
  ========================================================== */

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.excerpt || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        post.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [posts, searchTerm, statusFilter]);

  /* ==========================================================
     Pagination
  ========================================================== */

  const totalPages = Math.ceil(
    filteredPosts.length / POSTS_PER_PAGE
  );

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Reset to first page when search/filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  /* ==========================================================
     Delete Post
  ========================================================== */

  async function handleDelete() {
    if (!selectedPost) return;

    try {
      setDeleteLoading(true);

      // Delete post from backend
      await api.deletePost(selectedPost._id);

      // Remove deleted post from UI
      setPosts((prev) =>
        prev.filter((post) => post._id !== selectedPost._id)
      );

      // Close confirmation modal
      setSelectedPost(null);

      // Success notification
      toast.success("Post deleted successfully");
    } catch (err) {
      console.error(err);

      toast.error("Failed to delete post");
    } finally {
      setDeleteLoading(false);
    }
  }

  /* ==========================================================
     UI
  ========================================================== */

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Posts
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your blog posts.
        </p>
      </div>

      {/* Search + Filter */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {/* Posts Table */}
      <PostsTable
        posts={paginatedPosts}
        loading={loading}
        onDelete={setSelectedPost}
      />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Delete Confirmation */}
      <DeleteModal
        open={!!selectedPost}
        post={selectedPost}
        loading={deleteLoading}
        onClose={() => setSelectedPost(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
}