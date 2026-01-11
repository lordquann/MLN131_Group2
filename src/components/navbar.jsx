import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    // Nếu đang ở trang game, điều hướng về trang chính trước
    if (location.pathname !== "/") {
      navigate("/");
      // Đợi DOM render xong rồi mới scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        el && el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    } else {
      const el = document.getElementById(id);
      el && el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleGameClick = (e) => {
    e.preventDefault();
    navigate("/game");
  };

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span className="navbar-eyebrow">MLN131</span>

        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <h2 style={{ margin: 0 }}>CHỦ NGHĨA XÃ HỘI KHOA HỌC -</h2>
          <p style={{ margin: 0 }}>Chủ nghĩa xã hội và thời kỳ quá độ lên CNXH</p>
        </div>
      </div>


      <nav className="navbar-nav">
        <button
          type="button"
          className="nav-link"
          onClick={() => scrollToSection("overview")}
        >
          Lý thuyết
        </button>

        <button
          type="button"
          className="nav-link"
          onClick={() => navigate("/application")}
        >
          Vận dụng
        </button>

        <button type="button" className="nav-link" onClick={handleGameClick}>
          Triển lãm 3D
        </button>

        <button 
          type="button" 
          className={`nav-link ${location.pathname === "/appendix" ? "active" : ""}`}
          onClick={() => navigate("/appendix")}
        >
          Phụ lục
        </button>
      </nav>
    </header>
  );
}

