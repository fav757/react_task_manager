import React, { useState, useEffect } from 'react';
import styles from './EditNote.module.css';
import Icon from '../Icon/Icon';
import backIcon from './back_icon.svg';
import paletteIcon from './palette_icon.svg';
import tagIcon from './tag_icon.svg';
import archiveIcon from './archive_icon.svg';
import pictureIcon from './picture_icon.svg';
import tasksIcon from './tasks_icon.svg';
import pinIcon from './pin_icon.svg';
import deleteIcon from './deleted_icon.svg';
import TagedItem from '../TagedItem/TagedItem';

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

function TagsModal(props) {
  const removeTag = (event) => {
    const newTags = props.tags.filter(
      (item) => item !== event.target.dataset.connectedTag
    );

    props.editNote({
      id: props.id,
      property: 'tags',
      value: newTags,
    });
  };

  const [newTag, setNewTag] = useState('');
  const handleChange = (event) => setNewTag(event.target.value);

  const addTag = () => {
    props.editNote({
      id: props.id,
      property: 'tags',
      value: [...props.tags, newTag],
    });
  };

  return (
    <div className={styles.tagsModal}>
      {props.tags.map((tag) => (
        <div key={tag}>
          <TagedItem title={tag} />
          <button onClick={removeTag} data-connected-tag={tag}>
            remove
          </button>
        </div>
      ))}
      <input value={newTag} onChange={handleChange} placeholder='your tag' />
      <button onClick={addTag}>Add</button>
    </div>
  );
}

function TagsIcon(props) {
  const [renderModal, setRenderModal] = useState(false);
  const handleClick = () => setRenderModal((state) => !state);

  return (
    <div>
      <div onClick={handleClick}>
        <Icon title='tag' icon={tagIcon} />
      </div>
      {renderModal && (
        <TagsModal id={props.id} editNote={props.editNote} tags={props.tags} />
      )}
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

function AddPictureModal(props) {
  const [link, setLink] = useState('');
  const handleChange = (event) => setLink(event.target.value);
  const handleClick = () => {
    props.editNote({
      id: props.id,
      property: 'images',
      value: [...props.images, link],
    });
    props.setRenderModal(false);
  };

  return (
    <div className={styles.addPictureModal}>
      <input
        value={link}
        onChange={handleChange}
        placeholder='link to picture'
      />
      <button onClick={handleClick}>Done</button>
    </div>
  );
}

function AddPictureIcon(props) {
  const [renderModal, setRenderModal] = useState(false);

  return (
    <div>
      <div onClick={() => setRenderModal(!renderModal)}>
        <Icon title='picture' icon={pictureIcon} />
      </div>
      {renderModal && (
        <AddPictureModal
          id={props.id}
          images={props.images}
          editNote={props.editNote}
          setRenderModal={setRenderModal}
        />
      )}
    </div>
  );
}

function AddToArchive(props) {
  const handleClick = () => {
    props.editNote({
      id: props.id,
      property: 'system',
      value: 'archived',
    });
    props.close();
  };

  return (
    <div onClick={handleClick}>
      <Icon title='archive' icon={archiveIcon} />
    </div>
  );
}

function AddToDeleted(props) {
  const handleClick = () => {
    props.editNote({
      id: props.id,
      property: 'system',
      value: 'deleted',
    });
    props.close();
  };

  return (
    <div onClick={handleClick}>
      <Icon title='delete' icon={deleteIcon} />
    </div>
  );
}

function PinNote(props) {
  const handleClick = () => {
    props.editNote({
      id: props.id,
      property: 'isPinned',
      value: !props.isPinned,
    });
  };

  return (
    <div onClick={handleClick}>
      <Icon title='pin' icon={pinIcon} />
    </div>
  );
}

function Controlls(props) {
  return (
    <div className={styles.controlls}>
      <CloseModalIcon close={props.close} />
      <TagsIcon
        id={props.id}
        editNote={props.editNote}
        tags={props.data.tags}
      />
      <PaletteIcon id={props.id} editNote={props.editNote} />
      <AddPictureIcon images={props.data.images} editNote={props.editNote} />
      <div>
        <Icon title='tasks' icon={tasksIcon} />
      </div>
      <AddToArchive
        id={props.id}
        editNote={props.editNote}
        close={props.close}
      />
      <AddToDeleted
        id={props.id}
        editNote={props.editNote}
        close={props.close}
      />
      <PinNote id={props.id} editNote={props.editNote} isPinned={props.data.isPinned} />
    </div>
  );
}

export default Controlls;
