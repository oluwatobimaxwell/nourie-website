import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

// Map the external API blog post to our internal BlogPost structure
const mapApiPostToBlogPost = (apiPost) => {
  return {
    id: apiPost.id,
    title: apiPost.title,
    slug: apiPost.slug,
    author: apiPost.author?.name || "Nourie Team",
    author_image: apiPost.author?.image_url,
    author_bio: apiPost.author?.bio,
    publication_date: apiPost.date,
    featured_image: 
      apiPost.gallery_images && apiPost.gallery_images.length > 0 
        ? apiPost.gallery_images[0].image_url 
        : 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200',
    excerpt: apiPost.intro,
    content: apiPost.body_html, // We'll render this as HTML in BlogDetail
    read_time: apiPost.read_time || Math.ceil((apiPost.intro?.split(' ').length || 0) / 200),
  };
};

// Fetch blog posts from external API
const fetchBlogPosts = async ({ pageParam = 1, searchTerm = "" }) => {
  const url = new URL("https://blog.eatnourie.com/api/v2/blog/");
  url.searchParams.append("page", pageParam);
  
  if (searchTerm) {
    url.searchParams.append("search", searchTerm);
  }

  const response = await fetch(url.toString(), {
    headers: {
      'accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
  }

  const data = await response.json();
  
  return {
    posts: data.results.map(mapApiPostToBlogPost),
    nextPage: data.next ? pageParam + 1 : undefined,
    totalCount: data.count,
  };
};

// Fetch a single blog post by slug
const fetchBlogPost = async (slug) => {
  const response = await fetch(`https://blog.eatnourie.com/api/v2/posts/${slug}/`, {
    headers: {
      'accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blog post: ${response.statusText}`);
  }

  const data = await response.json();
  return mapApiPostToBlogPost(data);
};

// Custom hook to fetch blog posts with pagination and search
export function useBlogPosts(searchTerm = "") {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['external-blog-posts', searchTerm],
    queryFn: ({ pageParam = 1 }) => fetchBlogPosts({ pageParam, searchTerm }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
  });

  // Flatten all pages into a single array of posts
  const posts = data?.pages.flatMap(page => page.posts) || [];
  const totalCount = data?.pages[0]?.totalCount || 0;

  return {
    posts,
    totalCount,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}

// Custom hook to fetch a single blog post by slug
export function useBlogPost(slug) {
  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['external-blog-post', slug],
    queryFn: () => fetchBlogPost(slug),
    enabled: !!slug, // Only fetch if slug is provided
  });

  return {
    post,
    isLoading,
    isError,
    error,
  };
}