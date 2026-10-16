import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px;
  }
`;

export const Section = styled.section`
  position: relative;
  padding: 112px 0;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 80px 0;
  }
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.accent2};
  margin-bottom: 16px;

  &::before {
    content: '';
    width: 24px;
    height: 1px;
    background: currentColor;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  margin-bottom: 16px;
`;

export const SectionText = styled.p`
  max-width: 620px;
  font-size: 17px;
  color: ${(props) => props.theme.colors.muted};
  margin-bottom: 48px;
`;

export const GradientText = styled.span`
  background: ${(props) => props.theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Card = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 20px;
  transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.borderHover};
    background: ${(props) => props.theme.colors.surfaceHover};
  }
`;

export const Tag = styled.li`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  color: ${(props) => props.theme.colors.text};
  background: rgba(139, 123, 255, 0.12);
  border: 1px solid rgba(139, 123, 255, 0.25);
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 48px;
  padding: 0 22px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease;

  ${(props) =>
    props.$variant === 'ghost'
      ? css`
          color: ${props.theme.colors.text};
          border: 1px solid ${props.theme.colors.border};
          background: ${props.theme.colors.surface};
          &:hover {
            border-color: ${props.theme.colors.borderHover};
            background: ${props.theme.colors.surfaceHover};
          }
        `
      : css`
          color: #0b0b12;
          background: ${props.theme.gradient};
          box-shadow: 0 8px 32px -8px rgba(139, 123, 255, 0.6);
          &:hover {
            box-shadow: 0 12px 40px -8px rgba(61, 214, 245, 0.7);
          }
        `}

  &:hover {
    transform: translateY(-2px);
  }

  svg {
    transition: transform 0.2s ease;
  }
  &:hover svg {
    transform: translateX(2px);
  }
`;
