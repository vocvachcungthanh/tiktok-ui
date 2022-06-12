import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,

    size: PropTypes.string,
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,

    children: PropTypes.node.isRequired,
    rightIcon: PropTypes.node,
    leftIcon: PropTypes.node,

    onClick: PropTypes.func,
};

export default Button;
