import React from 'react';

import CollectionListItem from './CollectionListItem';

const CollectionList = ({ collections, onSelect, selected, loading }) => (
  <div className="list-group">
    {loading ? <div>Loading...</div> : collections.map((collection, index) => (
      <CollectionListItem key={index} isSelected={selected === index} index={index} onSelect={onSelect} collection={collection} />
    ))}
  </div>
);

export default CollectionList;
