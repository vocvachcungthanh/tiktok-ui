import React from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Images.module.scss';
const Images = React.forwardRef(({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallback] = React.useState('');

    const handleError = () => {
        setFallback(customFallBack);
    };
    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallBack || src}
            {...props}
            alt={alt}
            onError={handleError}
        />
    );
});

export default Images;
