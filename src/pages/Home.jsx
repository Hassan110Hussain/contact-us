import styles from './Pages.module.css';

const Home = () => {
  const blogs = [
    {
      id: 1,
      title: 'The Importance of Effective Communication in Business',
      excerpt: 'Learn how clear communication can transform your business relationships and improve customer satisfaction.',
      content: 'Effective communication is the cornerstone of any successful business. Whether you\'re managing a team, dealing with clients, or building partnerships, the ability to convey your message clearly and concisely can make all the difference. In today\'s fast-paced digital world, communication has become more important than ever. Companies that prioritize clear communication see higher employee engagement, better customer retention, and improved overall performance.',
      date: 'March 10, 2026',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Why Customer Support Matters More Than Ever',
      excerpt: 'Discover how exceptional customer support can set your business apart from competitors.',
      content: 'In an era where customers have countless options, exceptional support is what keeps them coming back. A single positive interaction can turn a customer into a brand advocate, while poor support can drive them away permanently. Modern customers expect quick responses, personalized solutions, and genuine care. Investing in your customer support team isn\'t just about solving problems—it\'s about building lasting relationships that drive business growth.',
      date: 'March 8, 2026',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Digital Transformation: Connecting with Your Audience',
      excerpt: 'Explore how digital channels are revolutionizing customer engagement strategies.',
      content: 'The digital landscape has fundamentally changed how businesses connect with their audiences. From social media to email marketing, the channels available today offer unprecedented opportunities to reach and engage customers. However, success requires a strategic approach. Understanding your audience, choosing the right channels, and maintaining consistent communication are key to building a strong digital presence that resonates with your target market.',
      date: 'March 5, 2026',
      readTime: '7 min read'
    }
  ];

  return (
    <div className={styles.page_container}>
      <section className={styles.hero_section}>
        <h1>Welcome to Our Contact Hub</h1>
        <p className={styles.hero_subtitle}>Your gateway to seamless communication and exceptional service</p>
      </section>

      <section className={styles.features_section}>
        <h2>Why Choose Us?</h2>
        <div className={styles.features_grid}>
          <div className={styles.feature_card}>
            <h3>24/7 Support</h3>
            <p>We're always here to help you with any questions or concerns.</p>
          </div>
          <div className={styles.feature_card}>
            <h3>Fast Response</h3>
            <p>Get quick answers to your inquiries through multiple channels.</p>
          </div>
          <div className={styles.feature_card}>
            <h3>Expert Team</h3>
            <p>Our experienced professionals are ready to assist you.</p>
          </div>
        </div>
      </section>

      <section className={styles.blog_section}>
        <h2>Latest Insights & Articles</h2>
        <p className={styles.section_subtitle}>Stay informed with our expert tips and industry insights</p>
        <div className={styles.blog_grid}>
          {blogs.map(blog => (
            <article key={blog.id} className={styles.blog_card}>
              <div className={styles.blog_header}>
                <h3>{blog.title}</h3>
                <div className={styles.blog_meta}>
                  <span className={styles.date}>{blog.date}</span>
                  <span className={styles.read_time}>{blog.readTime}</span>
                </div>
              </div>
              <p className={styles.blog_excerpt}>{blog.excerpt}</p>
              <p className={styles.blog_content}>{blog.content}</p>
              <a href="#" className={styles.read_more}>Read More →</a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta_section}>
        <h2>Ready to Get in Touch?</h2>
        <p>Have a question or want to learn more? We'd love to hear from you.</p>
        <a href="/contact" className={styles.cta_button}>Contact Us Today</a>
      </section>
    </div>
  );
};

export default Home;
