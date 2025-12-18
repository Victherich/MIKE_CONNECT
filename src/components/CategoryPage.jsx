
// import React from "react";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";

// // Example blog data (replace with real data or API)
// export const blogs = [
//   {
//     id: 1,
//     title: "Global Vaccination Updates",
//     categoryId: 1,
//     author: "UN Health",
//     date: "July 17, 2025",
//     image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Over 14 million children remain unvaccinated globally. Here's what you need to know.",
//     slug: "global-vaccination-updates"
//   },
//   {
//     id: 2,
//     title: "Top Relationship Tips",
//     categoryId: 2,
//     author: "Emma Johanson",
//     date: "April 24, 2025",
//     image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Learn the essential relationship tips to build stronger connections with your loved ones.",
//     slug: "top-relationship-tips"
//   },
//   {
//     id: 3,
//     title: "How to Start a Business",
//     categoryId: 3,
//     author: "Adela Fransson",
//     date: "May 10, 2025",
//     image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Starting a business can be daunting. Here are the steps you need to take to succeed.",
//     slug: "how-to-start-a-business"
//   },
//   {
//     id: 4,
//     title: "Daily Motivation Tips",
//     categoryId: 4,
//     author: "Mike Connect",
//     date: "June 1, 2025",
//     image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Get motivated every day with these simple tips to boost your energy and focus.",
//     slug: "daily-motivation-tips"
//   },
//   {
//     id: 5,
//     title: "Learn React in 2025",
//     categoryId: 5,
//     author: "John Doe",
//     date: "April 15, 2025",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
//     excerpt: "React is still the top library for building modern web apps. Learn the latest tips and tricks.",
//     slug: "learn-react-in-2025"
//   },
//   {
//     id: 6,
//     title: "Education Reform News",
//     categoryId: 6,
//     author: "Jane Smith",
//     date: "March 20, 2025",
//     image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Education reforms are changing schools worldwide. Here's the latest update.",
//     slug: "education-reform-news"
//   },
//   {
//     id: 7,
//     title: "Family Bonding Tips",
//     categoryId: 7,
//     author: "Emma Johanson",
//     date: "May 5, 2025",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Simple and practical tips for spending more quality time with your family.",
//     slug: "family-bonding-tips"
//   },
//   {
//     id: 8,
//     title: "Quick Healthy Recipes",
//     categoryId: 8,
//     author: "Chef Alex",
//     date: "June 12, 2025",
//     image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Delicious and healthy recipes you can cook in under 30 minutes.",
//     slug: "quick-healthy-recipes"
//   },
//   {
//     id: 9,
//     title: "Life Issues & Solutions",
//     categoryId: 9,
//     author: "Mike Connect",
//     date: "July 1, 2025",
//     image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Facing life challenges? Here are actionable solutions to common issues.",
//     slug: "life-issues-solutions"
//   },
//   {
//     id: 10,
//     title: "Health Awareness 101",
//     categoryId: 10,
//     author: "Health Expert",
//     date: "April 18, 2025",
//     image: "https://images.unsplash.com/photo-1588776814546-9e85edffb1f0?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Learn about the latest health tips and awareness to keep you fit.",
//     slug: "health-awareness-101"
//   },
//   {
//     id: 11,
//     title: "Viral Gist Updates",
//     categoryId: 11,
//     author: "Online Media",
//     date: "March 30, 2025",
//     image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Catch up on the latest viral news making waves on social media.",
//     slug: "viral-gist-updates"
//   },
//   {
//     id: 12,
//     title: "Religion & Spirituality",
//     categoryId: 12,
//     author: "Pastor Mike",
//     date: "June 20, 2025",
//     image: "https://images.unsplash.com/photo-1517466787926-ffddbd184d98?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Explore the latest insights and teachings about religion and spirituality.",
//     slug: "religion-spirituality"
//   },
//   {
//     id: 13,
//     title: "Entertainment News",
//     categoryId: 13,
//     author: "Entertainment Weekly",
//     date: "May 25, 2025",
//     image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=600&q=80",
//     excerpt: "All the latest celebrity and entertainment news in one place.",
//     slug: "entertainment-news"
//   },
//   {
//     id: 14,
//     title: "Top Travel Destinations",
//     categoryId: 14,
//     author: "Travel Expert",
//     date: "April 5, 2025",
//     image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Discover the most amazing travel destinations to visit in 2025.",
//     slug: "top-travel-destinations"
//   },

//   {
//     id: 15,
//     title: "New Climate Policy Announced",
//     categoryId: 1,
//     author: "Global News Desk",
//     date: "July 20, 2025",
//     image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Governments worldwide are uniting to implement a new climate policy aimed at reducing emissions.",
//     slug: "new-climate-policy-announced"
//   },
//   {
//     id: 16,
//     title: "Economic Forecast 2025",
//     categoryId: 1,
//     author: "Finance Today",
//     date: "July 22, 2025",
//     image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Experts predict the global economy will face significant challenges in 2025 with mixed growth prospects.",
//     slug: "economic-forecast-2025"
//   },
//   {
//     id: 17,
//     title: "Tech Giants Merge",
//     categoryId: 1,
//     author: "Tech Insider",
//     date: "July 25, 2025",
//     image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Two of the world's largest tech companies have announced a historic merger to reshape the industry.",
//     slug: "tech-giants-merge"
//   },
//   {
//     id: 18,
//     title: "International Peace Talks",
//     categoryId: 1,
//     author: "World Affairs",
//     date: "July 28, 2025",
//     image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Leaders from multiple nations convene to discuss strategies for lasting peace in conflict regions.",
//     slug: "international-peace-talks"
//   },


// ];


// const categories = [
//   { id: 1, title: "News" },
//   { id: 2, title: "Relationship" },
//   { id: 3, title: "Entrepreneurship/Business" },
//   { id: 4, title: "Inspire/Motivate" },
//   { id: 5, title: "Digital Skills/Tech" },
//   { id: 6, title: "Education" },
//   { id: 7, title: "Family" },
//   { id: 8, title: "Food" },
//   { id: 9, title: "Life Issues" },
//   { id: 10, title: "Health" },
//   { id: 11, title: "Viral Gist" },
//   { id: 12, title: "Religion" },
//   { id: 13, title: "Entertainment" },
//   { id: 14, title: "Travel" },
// ];

// export default function CategoryPage() {
//   const { id } = useParams(); // category id from URL
//   const categoryId = parseInt(id);
//   const category = categories.find((c) => c.id === categoryId);

//   // Filter blogs based on category
//   const filteredBlogs = blogs.filter((blog) => blog.categoryId === categoryId);

//   return (
//     <PageWrapper>
//       <CategoryTitle>{category ? category.title : "Category Not Found"}</CategoryTitle>

//       <BlogsGrid>
//         {filteredBlogs.length > 0 ? (
//           filteredBlogs.map((blog) => (
//             <BlogCard key={blog.id}>
//               <BlogImage src={blog.image} alt={blog.title} />
//               <h3>{blog.title}</h3>
//               <p>{blog.excerpt}</p>
//               <BlogMeta>
//                 <span>By {blog.author}</span> | <span>{blog.date}</span>
//               </BlogMeta>
//             </BlogCard>
//           ))
//         ) : (
//           <NoBlogs>No blogs available in this category.</NoBlogs>
//         )}
//       </BlogsGrid>
//     </PageWrapper>
//   );
// }

// /* ================= STYLES ================= */
// const PageWrapper = styled.div`
//   max-width: 1000px;
//   margin: 50px auto;
//   padding: 0 20px;
//   font-family: "Poppins", sans-serif;
// `;

// const CategoryTitle = styled.h1`
//   font-size: 2.5rem;
//   margin-bottom: 30px;
//   color: #410b77ff;
//   text-align: center;
// `;

// const BlogsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 20px;
// `;

// const BlogCard = styled.div`
//   background: white;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 15px rgba(0,0,0,0.1);

//   h3 { font-size: 1.2rem; margin-bottom: 10px; }
//   p { font-size: 0.9rem; color: #555; }
// `;

// const NoBlogs = styled.p`
//   text-align: center;
//   font-size: 1.1rem;
//   color: #777;
// `;



// const BlogImage = styled.img`
//   width: 100%;
//   height: 180px;
//   object-fit: cover;
//   border-radius: 8px;
// `;

// const BlogMeta = styled.div`
//   font-size: 0.85rem;
//   color: #555;
// `;



import React, { useContext, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Context } from "./Context";

export default function CategoryPage() {
  const { categories = [] } = useContext(Context);
  const { id } = useParams();

  const categoryId = Number(id);
  const isValidCategoryId = Number.isInteger(categoryId);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(categoryId)

  const category = useMemo(() => {
    return categories.find(c => Number(c.id) === categoryId);
  }, [categories, categoryId]);

  useEffect(() => {
    if (!isValidCategoryId) return;

    setLoading(true);
    setError(null);

    fetch(
      `https://www.mikeconnect.com/mc_api/get_posts_by_category.php?category=${categoryId}`
    )
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setPosts(data.posts);
        } else {
          setPosts([]);
          setError(data.error || "Failed to load posts");
        }
      })
      .catch((error) => {
        setError("Network error");
        setPosts([]);
        console.error(error)
      })
      .finally(() => setLoading(false));
  }, [categoryId, isValidCategoryId]);

  return (
    <PageWrapper>
      <CategoryTitle>
        {category?.title || "Category"}
      </CategoryTitle>

      {loading && <Loading>Loading posts...</Loading>}

      {error && <NoBlogs>{error}</NoBlogs>}

      {!loading && !error && posts.length > 0 && (
        <BlogsGrid>
          {posts.map(post => (
            <BlogCard key={post.id}>
              <BlogImage
                src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
                alt={post.title}
              />

              <h3>{post.title}</h3>

              <Excerpt>
                {post.content
                  .replace(/<[^>]+>/g, "")
                  .slice(0, 120)}...
              </Excerpt>

              <BlogMeta>
                {new Date(post.created_at).toDateString()}
              </BlogMeta>
            </BlogCard>
          ))}
        </BlogsGrid>
      )}

      {!loading && !error && posts.length === 0 && (
        <NoBlogs>No posts available in this category.</NoBlogs>
      )}
    </PageWrapper>
  );
}



/* ================= STYLES ================= */

const PageWrapper = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  padding: 0 20px;
  font-family: "Poppins", sans-serif;
`;

const CategoryTitle = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 30px;
  color: #4f46e5;
  text-align: center;
`;

const BlogsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

const BlogCard = styled.div`
  background: white;
  padding: 18px;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  transition: transform .3s;

  &:hover {
    transform: translateY(-6px);
  }

  h3 {
    font-size: 1.15rem;
    margin: 12px 0 8px;
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

const BlogMeta = styled.div`
  font-size: 0.85rem;
  color: #666;
  margin-top: 8px;
`;

const Excerpt = styled.div`
  font-size: 0.9rem;
  color: #555;
`;

const Loading = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
`;

const NoBlogs = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #777;
`;
