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

function Controlls(props) {
  return (
    <div className={styles.controlls}>
      <CloseModalIcon close={props.close} />
      <div>
        <Icon title='tag' icon={tagIcon} />
      </div>
      <PaletteIcon id={props.id} editNote={props.editNote} />
      <AddPictureIcon
        id={props.id}
        images={props.data.images}
        editNote={props.editNote}
      />
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

export default Controlls;
