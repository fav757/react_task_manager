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

  const style = (tag) => ({
    background: props.systemTag === tag ? 'lavender' : '',
  });

  return (
    <div className={styles.section}>
      <div style={style('notes')} onClick={handleClick} data-tag='notes'>
        <TagedItem title='notes' icon={noteIcon} />
      </div>
      <div style={style('archived')} onClick={handleClick} data-tag='archived'>
        <TagedItem title='archived' icon={archiveIcon} />
      </div>
      <div style={style('deleted')} onClick={handleClick} data-tag='deleted'>
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

  const style = (tag) => ({
    background: props.userTag === tag ? 'lavender' : '',
  });

  const handleClick = (event) => {
    props.setUserTag(event.currentTarget.dataset.tag);
  };

  return (
    <div className={styles.section}>
      <div style={style('all')} data-tag={'all'} onClick={handleClick}>
        <TagedItem title={'all'} />
      </div>
      {Array.from(tags).map((tag) => (
        <div style={style(tag)} key={tag} data-tag={tag} onClick={handleClick}>
          <TagedItem title={tag} />
        </div>
      ))}
    </div>
  );
}

function Sidemenu(props) {
  props.renderMenu
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = '');

  return (
    <aside
      style={{ display: props.renderMenu ? '' : 'none' }}
      className={styles.wrap}
    >
      <SystemTags
        setSystemTag={props.setSystemTag}
        systemTag={props.systemTag}
      />
      <UserTags
        userTag={props.userTag}
        database={props.database}
        setUserTag={props.setUserTag}
      />
    </aside>
  );
}

const mapStateToProps = (state) => ({
  renderMenu: state.headerReducer.menuIsOpen,
  database: state.workspaceReducer,
  systemTag: state.sideMenuReducer.systemTag,
  userTag: state.sideMenuReducer.userTag,
});

const mapDispatchToProps = (dispatch) => ({
  setSystemTag: (value) => dispatch(setSystemTag(value)),
  setUserTag: (value) => dispatch(setUserTag(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu);
