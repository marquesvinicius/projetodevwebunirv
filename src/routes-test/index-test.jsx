import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { Contact } from "./Contact";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <nav className="bg-white shadow-lg border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-800">
              Logo
            </div>
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-blue-500 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-green-500 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-green-50"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 hover:text-purple-500 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-purple-50"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;