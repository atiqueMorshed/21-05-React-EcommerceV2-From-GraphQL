import React from 'react';
import { useQuery } from '@apollo/client';

import Spinner from '../spinner/spinner.component';
import CollectionPreview from '../collection-preview/collection-preview.component';
import GET_COLLECTIONS from './collections-overview.queries';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
  const {loading, error, data} = useQuery(GET_COLLECTIONS);

  if(error) {
    return `<h3>Error: ${error.message}</h3>`;
  }

  if(loading) {
    return <Spinner />;
  }
  if(data) {
    return (
      <div className='collections-overview'>
        {data.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
};


export default CollectionsOverview;
