import original from '../data/Article.json';
import '../assets/CSS/Article.css';

function Articles() {
  const userArticles = JSON.parse(localStorage.getItem('userArticles')) || [];
  const allArticles = [...userArticles.reverse(), ...original];

  return (
    <section className="articles">
      <h2 className="glow-text">Latest Nebulix Articles</h2>
      <div className="article-list">
        {allArticles.map((article, index) => (
          <div key={index} className="article-card">
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;
