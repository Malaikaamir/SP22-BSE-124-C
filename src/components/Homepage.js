// components/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories, selectCategories } from '../slices/categoriesSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {categories.map((category) => (
        <Link key={category.id} to={`/details/${category.id}`}>
          <div>
            <h3>{category.name}</h3>
            <p>Numeric Value: {category.numericValue}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
