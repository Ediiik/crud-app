import React from 'react';
import PropTypes from 'prop-types';

/**
 * Panel used for displaying details of a collection
 * @param collection
 * @param onClose
 * @param onEdit
 * @param onDelete
 */
const CollectionDetail = ({ collection, onClose, onEdit, onDelete }) => (
  <div className="panel panel-primary" id="detail">
    <div className="panel-heading">Post Details</div>
    <div className="panel-body">
      <dl className="dl-horizontal">
        <dt>Post title</dt>
        <dd>{collection.post.title}</dd>
        <dt>Album title</dt>
        <dd>{collection.album.title}</dd>
      </dl>
      <dl className="dl-horizontal">
        <dt>Name</dt>
        <dd>{collection.user.name}</dd>
        <dt>Username</dt>
        <dd>{collection.user.username}</dd>
        <dt>Email</dt>
        <dd><a href={`mailto:${collection.user.email}`}>{collection.user.email}</a></dd>
        <dt>Phone</dt>
        <dd><a href={`tel:${collection.user.phone}`}>{collection.user.phone}</a></dd>
      </dl>
    </div>
    <div className="panel-footer clearfix">
      <button className="btn btn-sm btn-primary" type="button" onClick={onEdit}>Edit</button>&nbsp;
      <button className="btn btn-sm btn-default" type="button" onClick={onClose}>Close</button>
      <div className="pull-right">
        <button className="btn btn-sm btn-danger" onClick={onDelete}>Delete</button>
      </div>
    </div>
  </div>
);

CollectionDetail.propTypes = {
  collection: PropTypes.object,
  onClose: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default CollectionDetail;
