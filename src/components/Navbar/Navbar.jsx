import PropTypes from "prop-types";
import { Keyboardarrowdown } from "../../icons/Keyboardarrowdown";
import "./Navbar.css";

export const Navbar = ({
  type,
  className,
  movieOpen = "https://c.animaapp.com/4gYTn61Z/img/movie-open-3.svg",
}) => {
  const goToPage = (path) => {
    window.location.href = path;
  };
  return (
    <div className={`navbar ${type} ${className}`}>
      <div className="frame">
        {type === "web" && (
          <div className="logo-2">
            <img className="movie-open" alt="Movie open" src={movieOpen} />

            <div className="text-wrapper-2">CHILL</div>
          </div>
        )}

        {type === "mobile" && (
          <img
            className="img"
            alt="Logo"
            src="https://c.animaapp.com/4gYTn61Z/img/logo.svg"
          />
        )}

        <div className="text-wrapper-3">Series</div>

        <div className="text-wrapper-4">Film</div>

        <div className="text-wrapper-5">Daftar Saya</div>

        <div className="text-wrapper-5" onClick={() => goToPage('/listview')} style={{ cursor: 'pointer' }}>List View</div>
      </div>

      <div className="avatar">
        <img
          className="ellipse"
          alt="Ellipse"
          src={
            type === "mobile"
              ? "https://c.animaapp.com/4gYTn61Z/img/ellipse-395-1@2x.png"
              : "https://c.animaapp.com/4gYTn61Z/img/ellipse-395-2@2x.png"
          }
        />

        <Keyboardarrowdown
          className={`${type === "mobile" ? "class-5" : "class-6"}`}
          color="white"
        />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  type: PropTypes.oneOf(["web", "mobile"]),
  className: PropTypes.string,
  movieOpen: PropTypes.string,
};
