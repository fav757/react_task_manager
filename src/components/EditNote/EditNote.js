import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './EditNote.module.css';
import TagedItem from '../TagedItem/TagedItem';
import Icon from '../Icon/Icon';
import backIcon from './back_icon.svg';
import paletteIcon from './palette_icon.svg';
import tagIcon from './tag_icon.svg';
import archiveIcon from './archive_icon.svg';
import deleteIcon from './deleted_icon.svg';
import pictureIcon from './picture_icon.svg';
import tasksIcon from './tasks_icon.svg';
import pinIcon from './pin_icon.svg';
import { editNote } from '../Workspace/workspaceActions';

function Inputs(props) {
  const handleChange = (event) => {
    props.editNote({
      id: props.id,
      property: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <React.Fragment>
      <input
        onChange={handleChange}
        value={props.title}
        className={styles.input}
        name='title'
      />
      <textarea
        onChange={handleChange}
        defaultValue={props.text}
        className={styles.input}
        name='text'
      />
    </React.Fragment>
  );
}

function CloseModalIcon(props) {
  useEffect(() => {
    const closeModal = (event) => {
      if (event.target.classList.contains(styles.wrap)) {
        props.close();
      }
    };

    document.addEventListener('click', closeModal);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('click', closeModal);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div onClick={props.close}>
      <Icon title='back' icon={backIcon} />
    </div>
  );
}

function PaletteModal(props) {
  const handleClick = (event) => {
    props.editNote({
      id: props.id,
      property: 'color',
      value: event.target.dataset.color,
    });
  };

  return (
    <div className={styles.paletteModal}>
      <div onClick={handleClick} data-color={'lightpink'}></div>
      <div onClick={handleClick} data-color={'tomato'}></div>
      <div onClick={handleClick} data-color={'lightskyblue'}></div>
      <div onClick={handleClick} data-color={'lightgreen'}></div>
      <div onClick={handleClick} data-color={'lightsalmon'}></div>
      <div onClick={handleClick} data-color={'white'}></div>
    </div>
  );
}

function PaletteIcon(props) {
  const [renderPaletteModal, setRenderpalette] = useState(false);
  const handleClick = () => setRenderpalette((state) => !state);

  return (
    <div onClick={handleClick}>
      <Icon title='palette' icon={paletteIcon} />
      {renderPaletteModal && (
        <PaletteModal id={props.id} editNote={props.editNote} />
      )}
    </div>
  );
}

function Controlls(props) {
  return (
    <div className={styles.controlls}>
      <CloseModalIcon close={props.close} />
      <div>
        <Icon title='tag' icon={tagIcon} />
      </div>
      <PaletteIcon id={props.id} editNote={props.editNote} />
      <div>
        <Icon title='picture' icon={pictureIcon} />
      </div>
      <div>
        <Icon title='tasks' icon={tasksIcon} />
      </div>
      <div>
        <Icon title='archive' icon={archiveIcon} />
      </div>
      <div>
        <Icon title='delete' icon={deleteIcon} />
      </div>
      <div>
        <Icon title='pin' icon={pinIcon} />
      </div>
    </div>
  );
}

function ImagesSector(props) {
  const handleClick = (event) => {
    const newImgSet = props.images.filter(
      (item) => item !== event.currentTarget.dataset.connectedImage
    );
    props.editNote({
      id: props.id,
      property: 'images',
      value: newImgSet,
    });
  };

  return (
    <div className={styles.imagesSector}>
      {props.images.map((image) => (
        <div key={image + Math.random()}>
          <div
            data-connected-image={image}
            onClick={handleClick}
            className={styles.deleteImgIcon}
          >
            <Icon title='delete' icon={deleteIcon} />
          </div>
          <img src={image} alt='note image' />
        </div>
      ))}
    </div>
  );
}

function EditNote(props) {
  const { images, title, text, tags, color } = props.data[props.id];

  return (
    <div className={styles.wrap}>
      <div style={{ background: color }} className={styles.form}>
        <Controlls
          id={props.id}
          data={props.data[props.id]}
          editNote={props.editNote}
          close={props.close}
        />
        <div className={styles.formMainSector}>
          <ImagesSector
            images={images}
            editNote={props.editNote}
            id={props.id}
          />
          <Inputs
            id={props.id}
            title={title}
            text={text}
            editNote={props.editNote}
          />
        </div>
        <div className={styles.tagList}>
          {tags.map((tag) => (
            <TagedItem key={tag} title={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.workspaceReducer,
});

const mapDispatchToProps = (dispatch) => ({
  editNote: (value) => dispatch(editNote(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);
