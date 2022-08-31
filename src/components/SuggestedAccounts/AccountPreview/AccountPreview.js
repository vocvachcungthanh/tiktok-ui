import React from 'react';
import classNames from 'classnames/bind';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662134400&x-signature=cbJ46L086wxh%2FhXHbXy%2Brf%2FpM%2Fs%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong>Quocnguyenphu</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('name')}>Theanh28 Entertainment</p>

                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <strong className={cx('label')}>Followers</strong>
                    <strong className={cx('value')}>8.2M</strong>
                    <strong className={cx('label')}>Followers</strong>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
