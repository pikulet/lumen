// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        <a
          className={styles['author__bio-github']}
          href={getContactHref('twitter', author.contacts.github)}
          rel="noopener noreferrer"
          target="_blank"
        >
          Find me on GitHub
        </a>
      </p>
    </div>
  );
};

export default Author;
