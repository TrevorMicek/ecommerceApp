import React from 'react';
import styles from '../../Styles/toolBarStyles/search.module.css';

const BackButton = (props) => (
    <div>
        <button>
            <img src='backButton.jpg' fire={props.fire} />
        </button>
    </div>
);
export default BackButton;