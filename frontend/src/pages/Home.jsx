import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <div className="hero">

  <div className="hero-left">

    <span className="hero-badge">
      🌱 Smart Food Management
    </span>

    <h1>
      Reduce Food Waste
      <span> Smarter</span>
    </h1>

    <p>
      Track expiry dates, organize food and medicine,
      and generate AI-powered recipes using ingredients
      already available at home.
    </p>

    <div className="hero-buttons">

      <button className="primary-btn">
        Get Started
      </button>

      <button className="secondary-btn">
        View Inventory
      </button>

    </div>

  </div>

  <div className="hero-right">

    <div className="floating-card egg">
      🥚 Eggs
      <span>2 days left</span>
    </div>

    <div className="floating-card milk">
      🥛 Milk
      <span>Expires Tomorrow</span>
    </div>

    <div className="floating-card bread">
      🍞 Bread
      <span>Fresh</span>
    </div>

  </div>


  
      </div>

      <section className="features">

        <h2>Why FreshNest?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>Inventory Management</h3>
            <p>
              Organize pantry, fridge,
              freezer and medicine items.
            </p>
          </div>

          <div className="feature-card">
            <h3>Expiry Tracking</h3>
            <p>
              Know what is fresh,
              expiring soon or expired.
            </p>
          </div>

          <div className="feature-card">
            <h3>AI Recipe Suggestions</h3>
            <p>
              Generate recipes from ingredients
              before they expire.
            </p>
          </div>

        </div>

      </section>

     <section className="home-stats">

  <div className="home-stat-card">
    <div className="stat-icon">📦</div>
    <h2>500+</h2>
    <p>Items Managed</p>
  </div>

  <div className="home-stat-card">
    <div className="stat-icon">🍳</div>
    <h2>120+</h2>
    <p>Recipes Generated</p>
  </div>

  <div className="home-stat-card">
    <div className="stat-icon">🌱</div>
    <h2>40%</h2>
    <p>Food Waste Reduced</p>
  </div>

</section>

      <Footer />
    </>
  );
}

export default Home;