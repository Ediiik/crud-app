import React from 'react';

const CollectionListItem = ({ collection, index, onSelect, isSelected }) => (
  <a href="#detail" className={`list-group-item${isSelected ? ' active' : ''}`} onClick={() => onSelect(index)}>
    <strong>{collection.post.title}</strong><br />
    <small>{collection.album.title}</small><br />
    <em>- {collection.user.name}</em>
  </a>
);

export default CollectionListItem;
