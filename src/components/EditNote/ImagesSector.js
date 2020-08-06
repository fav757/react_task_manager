import React from 'react';
import styles from './EditNote.module.css';
import Icon from '../Icon/Icon';
import deleteIcon from './deleted_icon.svg';

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
          <img src={image} alt='looks like your URL consists mistake' />
        </div>
      ))}
    </div>
  );
}

export default ImagesSector;
