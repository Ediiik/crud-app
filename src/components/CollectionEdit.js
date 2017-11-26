import React from 'react';

const CollectionEdit = ({ collection, onEditCancel, onSubmit }) => (
  <div className="panel panel-primary">
    <div className="panel-heading">Edit Post</div>
    <form onSubmit={(event) => {
      event.preventDefault();
      onSubmit({ title: this.title.value });
    }}>
      <div className="panel-body">
        <label htmlFor="title">Post title</label>
        <input ref={input => { this.title = input; }} className="form-control" id="title" type="text" defaultValue={collection.post.title} placeholder="Enter Post title" />
      </div>
      <div className="panel-footer">
        <button className="btn btn-sm btn-success" type="submit">Save Changes</button>&nbsp;
        <button className="btn btn-sm btn-default" type="button" onClick={onEditCancel}>Cancel</button>
      </div>
    </form>
  </div>
);

export default CollectionEdit;
