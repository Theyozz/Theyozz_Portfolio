import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';

import { Button, Container } from '../../styles/GlobalComponents';
import { profile } from '../../constants/constants';

const links = [
  { href: '#about', label: 'À propos' },
  { href: '#experience', label: 'Expérience' },
  { href: '#projects', label: 'Projets' },
  { href: '#skills', label: 'Stack' },
  { href: '#journey', label: 'Formation' },
  { href: '#contact', label: 'Contact' },
];

const Bar = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
  border-bottom: 1px solid ${(props) => (props.$scrolled ? props.theme.colors.border : 'transparent')};
  background: ${(props) => (props.$scrolled ? 'rgba(8, 9, 13, 0.72)' : 'transparent')};
  backdrop-filter: ${(props) => (props.$scrolled ? 'blur(14px) saturate(160%)' : 'none')};
  -webkit-backdrop-filter: ${(props) => (props.$scrolled ? 'blur(14px) saturate(160%)' : 'none')};
`;

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 700;
  font-size: 18px;

  span:first-child {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: ${(props) => props.theme.gradient};
    color: #0b0b12;
    font-size: 15px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  ul {
    display: flex;
    gap: 28px;
  }
  ul a {
    font-size: 15px;
    color: ${(props) => props.theme.colors.muted};
    transition: color 0.2s ease;
  }
  ul a:hover {
    color: ${(props) => props.theme.colors.text};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    position: fixed;
    inset: 72px 0 auto 0;
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
    padding: 24px 24px 32px;
    background: ${(props) => props.theme.colors.background};
    backdrop-filter: blur(14px);
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    transform: translateY(${(props) => (props.$open ? '0' : '-8px')});
    opacity: ${(props) => (props.$open ? 1 : 0)};
    pointer-events: ${(props) => (props.$open ? 'auto' : 'none')};
    transition: opacity 0.25s ease, transform 0.25s ease;

    ul {
      flex-direction: column;
      gap: 4px;
    }
    ul a {
      display: block;
      padding: 12px 0;
      font-size: 18px;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

const SmallButton = styled(Button)`
  height: 40px;
  padding: 0 18px;
  font-size: 14px;
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
  color: ${(props) => props.theme.colors.text};
  width: 40px;
  height: 40px;
  place-items: center;
  cursor: pointer;

  @media ${(props) => props.theme.breakpoints.md} {
    display: grid;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <Bar $scrolled={scrolled || open}>
      <Inner>
        <Logo href="#top" onClick={close}>
          <span>TV</span>
          <span>Théo VM</span>
        </Logo>
        <Nav $open={open} aria-label="Navigation principale">
          <ul>
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={close}>{label}</a>
              </li>
            ))}
          </ul>
          <SmallButton href={profile.cv} target="_blank" rel="noopener noreferrer">
            <FiDownload /> CV
          </SmallButton>
        </Nav>
        <MenuToggle
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </MenuToggle>
      </Inner>
    </Bar>
  );
};

export default Header;
