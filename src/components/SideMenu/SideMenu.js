import React from 'react';
import styles from './SideMenu.module.css';
import noteIcon from './note_icon.svg';
import archiveIcon from './archive_icon.svg';
import deletedIcon from './deleted_icon.svg';
import TagedItem from '../TagedItem/TagedItem';
import { connect } from 'react-redux';

function SystemTags() {
  return (
    <div className={styles.section}>
      <TagedItem title='Notes' icon={noteIcon} />
      <TagedItem title='Archive' icon={archiveIcon} />
      <TagedItem title='Deleted' icon={deletedIcon} />
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

function Sidemenu(props) {
  return (
    <aside
      style={{ display: props.renderMenu ? 'none' : '' }}
      className={styles.wrap}
    >
      <SystemTags />
      <UserTags database={props.database} />
    </aside>
  );
}

const mapStateToProps = (state) => ({
  renderMenu: state.headerReducer.menuIsOpen,
  database: state.workspaceReducer,
});

export default connect(mapStateToProps)(Sidemenu);
