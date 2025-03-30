import React, { useState, useEffect } from "react";
import TutorCard from "..tutors/TutorCard";

const TutorSearch = () => {
  const [filters, setFilters] = useState({
    subject: "",
    location: "",
    minPrice: "",
    maxPrice: "",
    minRating: "",
    availability: "",
  });

  const [tutors, setTutors] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);

  useEffect(() => {
    // Fetch tutors from API
    fetch("/api/tutors")
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
        setFilteredTutors(data);
      });
  }, []);

  useEffect(() => {
    let results = tutors.filter((tutor) => {
      return (
        (filters.subject ? tutor.subjects.includes(filters.subject) : true) &&
        (filters.location ? tutor.location.includes(filters.location) : true) &&
        (filters.minPrice ? tutor.price >= filters.minPrice : true) &&
        (filters.maxPrice ? tutor.price <= filters.maxPrice : true) &&
        (filters.minRating ? tutor.rating >= filters.minRating : true) &&
        (filters.availability ? tutor.availability.includes(filters.availability) : true)
      );
    });

    setFilteredTutors(results);
  }, [filters, tutors]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Find a Tutor</h1>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Subject" onChange={(e) => setFilters({ ...filters, subject: e.target.value })} />
        <input type="text" placeholder="Location" onChange={(e) => setFilters({ ...filters, location: e.target.value })} />
        <input type="number" placeholder="Min Price" onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })} />
        <input type="number" placeholder="Max Price" onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} />
        <input type="number" placeholder="Min Rating" onChange={(e) => setFilters({ ...filters, minRating: e.target.value })} />
        <input type="text" placeholder="Availability (e.g. Monday)" onChange={(e) => setFilters({ ...filters, availability: e.target.value })} />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        {filteredTutors.map((tutor) => (
          <TutorCard key={tutor._id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};

export default TutorSearch;
