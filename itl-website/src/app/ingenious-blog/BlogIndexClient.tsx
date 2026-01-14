'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IconArrowRight } from '@/components/UXUIDC';

gsap.registerPlugin(ScrollTrigger);

interface BlogPostMeta {
  slug: string;
  title: string;
  category: string;
  date?: string;
}

interface BlogIndexClientProps {
  blogPosts: BlogPostMeta[];
}

const categories = [
  'All',
  'Technical Guide',
  'Educational',
  'Selection Guide',
  'Protocol',
  'Research Spotlight',
  'Company News',
  'Industry Insights',
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Technical Guide': '#008080',
    Educational: '#2384da',
    'Selection Guide': '#6b46c1',
    Protocol: '#d97706',
    'Research Spotlight': '#059669',
    'Company News': '#dc2626',
    'Industry Insights': '#7c3aed',
  };
  return colors[category] || '#666';
};

export default function BlogIndexClient({ blogPosts }: BlogIndexClientProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.blog-card');
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: i * 0.03,
            ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 90%' },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [selectedCategory, searchQuery]);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.slug.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Filter & Search Section */}
      <section
        style={{ backgroundColor: '#f7f7f7', padding: '30px 20px', borderBottom: '1px solid #e0e0e0' }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Search */}
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '400px',
                padding: '12px 16px',
                fontSize: '.95rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                outline: 'none',
              }}
            />
          </div>
          {/* Category Filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '8px 16px',
                  fontSize: '.85rem',
                  fontWeight: 500,
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: selectedCategory === category ? '#0a253c' : 'white',
                  color: selectedCategory === category ? 'white' : '#666',
                  boxShadow: selectedCategory === category ? 'none' : '0 1px 3px rgba(0,0,0,0.1)',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section style={{ backgroundColor: 'white', padding: '50px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p
            style={{
              color: '#666',
              fontSize: '.9rem',
              marginBottom: '25px',
            }}
          >
            Showing {filteredPosts.length} of {blogPosts.length} posts
            {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>

          <div
            ref={gridRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px',
            }}
          >
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/ingenious-blog/${post.slug}`}
                className="blog-card"
                style={{
                  display: 'block',
                  backgroundColor: '#fafafa',
                  padding: '20px',
                  border: '1px solid #e8e8e8',
                  borderTop: `3px solid ${getCategoryColor(post.category)}`,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '.7rem',
                    fontWeight: 600,
                    color: getCategoryColor(post.category),
                    backgroundColor: `${getCategoryColor(post.category)}15`,
                    padding: '3px 10px',
                    borderRadius: '10px',
                    marginBottom: '10px',
                  }}
                >
                  {post.category}
                </span>
                <h3
                  style={{
                    color: '#333',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    marginBottom: '12px',
                  }}
                >
                  {post.title}
                </h3>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    color: '#008080',
                    fontSize: '.8rem',
                    fontWeight: 500,
                  }}
                >
                  Read Article <IconArrowRight size={12} color="#008080" />
                </span>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <p style={{ color: '#666', fontSize: '1rem' }}>
                No posts found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                style={{
                  marginTop: '15px',
                  padding: '10px 20px',
                  backgroundColor: '#008080',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '.9rem',
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
