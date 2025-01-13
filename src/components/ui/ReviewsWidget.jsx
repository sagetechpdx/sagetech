import React from 'react';
import { ReactGoogleReviews } from 'react-google-reviews';
import 'react-google-reviews/dist/index.css';

const GoogleReviews = ({ featurableWidgetId }) => (
  <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
);

export default GoogleReviews;