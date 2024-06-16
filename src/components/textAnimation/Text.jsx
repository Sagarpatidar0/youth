// src/TextLoadingAnimation.js
import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import useIntersectionObserver from "./useIntersectionObserver";

const TextSpan = styled.span`
  display: inline-block;
  opacity: 0;
  transform: scale(0.8);
  animation: fadeIn 0.5s forwards;
  animation-delay: ${(props) => props.delay}s;
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const TextContainer = styled.div`
  white-space: pre-wrap;
`;

const WordContainer = styled.span`
  display: inline-block;
  opacity: 1;
  margin-right: 0.5em;
`;

const TextLoadingAnimation = ({ text }) => {
  const [words, setWords] = useState([]);
  const containerRef = useRef(null);
  const isVisible = useIntersectionObserver(containerRef, { threshold: 0.1 });

  useEffect(() => {
    setWords(text.split(" "));
  }, [text]);

  return (
    <TextContainer ref={containerRef}>
      {text}
      {/* {isVisible && words.map((word, wordIndex) => (
                <WordContainer key={wordIndex}>
                    {word.split('').map((char, charIndex) => (
                        <TextSpan key={charIndex} delay={(wordIndex * 0.2) + (charIndex * 0.02)}>
                            {char}
                        </TextSpan>
                    ))}
                </WordContainer>
            ))} */}
    </TextContainer>
  );
};

TextLoadingAnimation.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextLoadingAnimation;
