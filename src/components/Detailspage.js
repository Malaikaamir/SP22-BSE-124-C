// components/DetailsPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchDetails, selectDetails } from '../slices/detailsSlice';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { details, loading, error } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);

  const goBack = () => {
    history.goBack();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <button onClick={goBack}>&lt; Back</button>
      {/* Render detailed data here */}
    </div>
  );
};

export default DetailsPage;
