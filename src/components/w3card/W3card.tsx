import React from 'react';
import './W3card.scss';

export interface IW3Card {
  nickname: string;
  date: string;
  race: string;
  fog: string;
  id: number;
  imagePreviewUrl: string;
}

const W3Card = (props: IW3Card): JSX.Element => {
  return (
    <div
      className="w3card"
      data-testid="test-w3card"
      style={{ backgroundImage: `url('../../images/w3card/${props.race}.png')` }}
    >
      <div className="w3card__header">
        <div
          className="w3card__picture"
          style={{ backgroundImage: `url(${props.imagePreviewUrl})` }}
        ></div>
        <div className="w3card__nickname">{props.nickname}</div>
      </div>
      <hr className="w3card__divider" />
      <div>
        <span>☑ </span>
        {props.race}
      </div>
      <div>
        <span>☑ </span>
        {props.date}
      </div>
      <div>{props.fog === '1' ? `☑ Fog of war: ON` : '☐ Fog of war: OFF'}</div>
    </div>
  );
};

export default W3Card;
