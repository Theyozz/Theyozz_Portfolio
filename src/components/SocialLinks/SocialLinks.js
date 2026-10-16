import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

import { socials } from '../../constants/constants';

const icons = { github: FaGithub, linkedin: FaLinkedinIn, x: FaXTwitter };

const List = styled.ul`
  display: flex;
  gap: 10px;
`;

const IconLink = styled.a`
  display: grid;
  place-items: center;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  border-radius: 12px;
  color: ${(props) => props.theme.colors.muted};
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.surface};
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.text};
    border-color: ${(props) => props.theme.colors.borderHover};
    transform: translateY(-2px);
  }
`;

const SocialLinks = ({ size = 44 }) => (
  <List>
    {socials.map(({ name, url, icon }) => {
      const Icon = icons[icon];
      return (
        <li key={name}>
          <IconLink href={url} target="_blank" rel="noopener noreferrer" aria-label={name} $size={size}>
            <Icon size={size * 0.42} />
          </IconLink>
        </li>
      );
    })}
  </List>
);

export default SocialLinks;
