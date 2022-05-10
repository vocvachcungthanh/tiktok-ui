import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    primary = false,
    outline = false,

    text = false,

    disabled = false,
    rounded = false,
    rightIcon,
    leftIcon,
    size,
    className,
    to,
    href,
    children,
    onClick,
    ...passProps
}) {
    let CompButton = 'button';
    const props = { onClick, ...passProps };

    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        CompButton = Link;
    } else if (href) {
        props.href = href;
        CompButton = 'a';
    }

    const classes = cx('tiktok-button', {
        [className]: className,
        [size]: size,

        primary,
        outline,

        text,

        disabled,
        rounded,
    });

    return (
        <CompButton className={classes} disabled={disabled} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </CompButton>
    );
}

export default Button;
