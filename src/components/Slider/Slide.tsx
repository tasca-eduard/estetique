import React from "react";

interface Props {
  fontFamily: string,
  bgColor: string,
  textColor: string,
  title: string,
  index: number
}

export default function Slide({
  fontFamily,
  bgColor,
  textColor,
  title,
  index,
}: Props) {
  const SENTENCE = "The quick brown fox jumps over the lazy dog.";
  const ALPHABETH = "abcdefghijklmnopqrstuvwxyz";
  const DIGITS = 1234567890;
  const formattedIndex = index < 9 ? `0${index}` : index;
  const style = {
    "--background": bgColor,
    "--color": textColor,
    "--fontFamily": fontFamily,
    "--circleBg": textColor
  } as React.CSSProperties;

  return (
    <div
      className="slide"
      style={style}
    >
      <div className="container">
        <header>
          <div className="flex-row between">
            <small className="column">#UITIPS</small>
            <small className="column">{formattedIndex}</small>
          </div>
        </header>
        <div className="flex-row">
          <h2>{title}</h2>
        </div>
        <div className="flex-row">
          <h3>{SENTENCE}</h3>
        </div>
        <div className="flex-row">
          <h4>{ALPHABETH.toUpperCase()}</h4>
        </div>
        <div className="flex-row">
          <h4>{ALPHABETH.toLowerCase()}</h4>
        </div>
        <div className="flex-row">
          <h4>{DIGITS}</h4>
        </div>
        <div className="flex-row">
          <div className="circle"></div>
          <span>{textColor}</span>
        </div>
        <div
          className="flex-row"
          style={{
            "--circleBg": bgColor
          } as React.CSSProperties}
        >
          <div className="circle"></div>
          <span>{bgColor}</span>
        </div>
        <footer>
          <div className="flex-row between">
            <small className="column">LEFT / RIGHT ARROW</small>
            <small className="column">~ or ~</small>
            <small className="column">SHIFT + MOUSE WHEEL</small>
          </div>
        </footer>
      </div>
    </div>
  )
}