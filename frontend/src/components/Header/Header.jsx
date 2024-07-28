import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>A Culinary Journey Awaits</h2>
        <p>
          Explore a wide range of cuisines and dishes, handpicked to satisfy
          every palate. From traditional comfort food to exotic delicacies,
          NoshNow offers something for everyone. Dive into a culinary adventure
          and discover new flavors and experiences with every order.
        </p>
        <button>
          <a href="#explore-menu">View Menu</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
