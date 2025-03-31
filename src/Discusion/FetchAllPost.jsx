import { useState, useEffect, useContext, useCallback } from "react";
import { AppContext } from "../ContextApi/FisrtContext";
import Posts_Cards from "./Posts_Cards";

const FetchAllPost = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cursor, setCursor] = useState(null);
    const [hasMore, setHasMore] = useState(true);

    const { AllGetReq } = useContext(AppContext);

    const fetchPosts = useCallback(async () => {
        if (loading) return;
        setLoading(true);

        const queryparams = { limit: 20 };
        if (cursor) queryparams.cursor = cursor; // ✅ Avoid sending `null` cursor

        try {
            const data = await AllGetReq("all-posts", queryparams) || {}; // Ensure data is at least an empty object
            console.log("Fetched data:", data);

            if (!data.success) {
                console.error("Failed to fetch posts:", data.message);
                return;
            }

            // Ensure posts is an array
            const newPosts = Array.isArray(data.posts) ? data.posts : [];
            setPosts((prev) => [...prev, ...newPosts]);

            if (data.nextCursor) {
                setCursor(data.nextCursor); // Update cursor if there are more posts
            } else {
                setHasMore(false); // Stop fetching if no more posts
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        }

        setLoading(false);
    }, [loading, cursor, AllGetReq]);

    useEffect(() => {
        fetchPosts(); // Fetch posts on initial mount
    }, []); // Empty dependency array to run only on mount

    return (
        <div className="p-4">
            {posts.length === 0 && !loading && <p>No posts found.</p>}

            {posts.map((post) => (
                <div key={post._id} className="mb-4">
                    <Posts_Cards posts={post} />
                </div>
            ))}

            {loading && <p>Loading...</p>}

            {!loading && hasMore && (
                <button
                    onClick={fetchPosts}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                    Load More
                </button>
            )}

            {!hasMore && <p className="mt-4 text-gray-500">No more posts to load</p>}
        </div>
    );
};

export default FetchAllPost;
