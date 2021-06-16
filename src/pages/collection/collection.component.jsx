import React from 'react';
import {useQuery} from '@apollo/client';

import CollectionItem from '../../components/collection-item/collection-item.component';
import Spinner from '../../components/spinner/spinner.component';
import GET_COLLECTION_BY_TITLE from './collection.query';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  const {loading, error, data} = useQuery(GET_COLLECTION_BY_TITLE, {variables: {title: match.params.collectionId}});
  if(error) {
    console.log(error);
    return `<h3>Error: ${error.message}</h3>`;
  }

  if(loading) {
    return <Spinner />;
  }
  
  if(data) {
    const {getCollectionsByTitle} = data;
    const { title, items } = getCollectionsByTitle;
  
    return (
      <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
};

export default CollectionPage;
