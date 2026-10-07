export const blogPosts = [
  {
    slug: 'secure-api-basics',
    date: '2025-11-12',
    category: 'Security',
    readMinutes: 6,
    titleKey: 'blog.posts.secureApi.title',
    excerptKey: 'blog.posts.secureApi.excerpt',
    bodyKey: 'blog.posts.secureApi.body',
  },
  {
    slug: 'go-concurrency-scanning',
    date: '2025-09-03',
    category: 'Engineering',
    readMinutes: 8,
    titleKey: 'blog.posts.goScan.title',
    excerptKey: 'blog.posts.goScan.excerpt',
    bodyKey: 'blog.posts.goScan.body',
  },
  {
    slug: 'react-native-field-apps',
    date: '2025-06-18',
    category: 'Product',
    readMinutes: 5,
    titleKey: 'blog.posts.rnField.title',
    excerptKey: 'blog.posts.rnField.excerpt',
    bodyKey: 'blog.posts.rnField.body',
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
