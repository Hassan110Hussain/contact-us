import styles from './Pages.module.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Customer Success Manager',
      bio: 'With 8+ years of experience in customer relations, Sarah ensures every client receives exceptional support.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Support Specialist',
      bio: 'Michael brings technical expertise and a passion for solving complex customer challenges.'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Communication Strategist',
      bio: 'Emma specializes in crafting clear, effective communication strategies that resonate with audiences.'
    }
  ];

  const values = [
    {
      title: 'Customer First',
      description: 'We prioritize your needs and work tirelessly to exceed your expectations.'
    },
    {
      title: 'Transparency',
      description: 'We believe in honest, open communication in all our interactions.'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.'
    },
    {
      title: 'Innovation',
      description: 'We continuously improve our services to better serve you.'
    }
  ];

  return (
    <div className={styles.page_container}>
      <section className={styles.about_hero}>
        <h1>About Our Company</h1>
        <p className={styles.hero_subtitle}>Dedicated to connecting businesses with their customers</p>
      </section>

      <section className={styles.mission_section}>
        <div className={styles.mission_content}>
          <h2>Our Mission</h2>
          <p>
            We believe that great communication is the foundation of successful business relationships. Our mission is to provide businesses with the tools and support they need to connect meaningfully with their customers. We&apos;re committed to making communication easier, faster, and more effective for everyone.
          </p>
          <p>
            Since our founding, we&apos;ve helped thousands of businesses improve their customer engagement and build lasting relationships. We&apos;re not just a service provider&mdash;we&apos;re your partner in success.
          </p>
        </div>
      </section>

      <section className={styles.values_section}>
        <h2>Our Core Values</h2>
        <div className={styles.values_grid}>
          {values.map((value, index) => (
            <div key={index} className={styles.value_card}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.team_section}>
        <h2>Meet Our Team</h2>
        <p className={styles.section_subtitle}>Experienced professionals dedicated to your success</p>
        <div className={styles.team_grid}>
          {teamMembers.map(member => (
            <div key={member.id} className={styles.team_card}>
              <div className={styles.team_avatar}></div>
              <h3>{member.name}</h3>
              <p className={styles.team_role}>{member.role}</p>
              <p className={styles.team_bio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.story_section}>
        <h2>Our Story</h2>
        <div className={styles.story_content}>
          <p>
            What started as a small initiative to improve customer communication has grown into a comprehensive platform serving businesses across various industries. We&apos;ve learned that every business is unique, with its own challenges and opportunities.
          </p>
          <p>
            Our team is passionate about understanding these unique needs and providing tailored solutions. We invest heavily in training, technology, and innovation to ensure we&apos;re always at the forefront of customer communication excellence.
          </p>
          <p>
            Today, we&apos;re proud to serve a diverse clientele and continue our mission of making meaningful connections between businesses and their customers. We&apos;re excited about the future and the opportunity to help more businesses succeed.
          </p>
        </div>
      </section>

      <section className={styles.stats_section}>
        <div className={styles.stat_card}>
          <h3>5000+</h3>
          <p>Happy Customers</p>
        </div>
        <div className={styles.stat_card}>
          <h3>99.9%</h3>
          <p>Uptime Guarantee</p>
        </div>
        <div className={styles.stat_card}>
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>
        <div className={styles.stat_card}>
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>
      </section>
    </div>
  );
};

export default About;
