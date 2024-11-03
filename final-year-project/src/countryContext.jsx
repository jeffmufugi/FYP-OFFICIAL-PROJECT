import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { fadeInFromLeft, countries, homepageInfo,getTopCourses} from "./CoursesPage/csextdata";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

export const CountryDropdown = () => {

    
  const [isOpen, setIsOpen] = useState(false); // Dropdown open/close state
  const [selectedCountry, setSelectedCountry] = useState("🇺🇸"); // State to store selected country
  const inputRef = useRef(null); // For handling the click event
  const [selectedSalaryData, setSelectedSalaryData] = useState(null);
  useEffect(() => {
    if (selectedSalaryData) {
      const courses = getTopCourses(selectedSalaryData); // Pass the selected country's salary data
      setTopCourses(courses);
    }
  }, [selectedSalaryData]);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // Function to handle country selection
  const handleSelect = (country) => {
  
    setSelectedSalaryData(country.file); // Update the salary data for the selected country
    setSelectedCountry(country.flag); // Update the selected country flag
    setIsOpen(false); // Close the dropdown
    
};

  return (
    <>
      <div className="course-country">
        <motion.p {...fadeInFromLeft.left3}>
          {/* Display selected country or placeholder */}
          <div
            className={`custom-select1 ${isOpen ? "open" : ""}`}
            ref={inputRef}
            onClick={toggleDropdown}
          >
            <span className="selected-value">
              {selectedCountry || "Select Country"}
            </span>
            {/* Dropdown arrow icon */}
            {isOpen ? (
              <AiOutlineCaretUp className="country-dd-icon" />
            ) : (
              <AiOutlineCaretDown className="country-dd-icon" color={homepageInfo[1].fontColor} />
            )}
          </div>

          {/* Custom dropdown menu */}
          {isOpen && (
            <motion.ul
              className="dropdown-menu"
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -20 }
              }}
            >
              {countries.map((country, index) => (
                <li
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleSelect(country)}
                >
                  {country.flag}
                </li>
              ))}
            </motion.ul>
          )}
        </motion.p>
      </div>
    </>
  );
};