import React from 'react';
import styles from './SideMenu.module.css';
import noteIcon from './note_icon.svg';
import archiveIcon from './archive_icon.svg';
import deletedIcon from './deleted_icon.svg';
import TagedItem from '../TagedItem/TagedItem';
import { connect } from 'react-redux';
import { setSystemTag, setUserTag } from './sideMenuActions';

function SystemTags(props) {
  const handleClick = (event) => {
    props.setSystemTag(event.currentTarget.dataset.tag);
  };

  return (
    <div className={styles.section}>
      <div onClick={handleClick} data-tag='notes'>
        <TagedItem title='notes' icon={noteIcon} />
      </div>
      <div onClick={handleClick} data-tag='archived'>
        <TagedItem title='archived' icon={archiveIcon} />
      </div>
      <div onClick={handleClick} data-tag='deleted'>
        <TagedItem title='deleted' icon={deletedIcon} />
      </div>
    </div>
  );
}

function UserTags(props) {
  const tags = new Set();
  props.database.forEach((note) => {
    note.tags.forEach((tag) => tags.add(tag));
  });

  return (
    <div className={styles.section}>
      <div>
        {Array.from(tags).map((tag) => (
          <TagedItem key={tag} title={tag} />
        ))}
      </div>
    </div>
  );
}

function Sidemenu(props) {;
  return (
    <aside
      style={{ display: props.renderMenu ? 'none' : '' }}
      className={styles.wrap}
    >
      <SystemTags setSystemTag={props.setSystemTag} />
      <UserTags database={props.database} />
    </aside>
  );
}

const mapStateToProps = (state) => ({
  renderMenu: state.headerReducer.menuIsOpen,
  database: state.workspaceReducer,
});

const mapDispatchToProps = (dispatch) => ({
  setSystemTag: (value) => dispatch(setSystemTag(value)),
  setUserTag: (value) => dispatch(setUserTag(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu);
