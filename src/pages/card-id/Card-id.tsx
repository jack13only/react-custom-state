import React, { useContext } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { PATHS } from '../../shared/constants/routes';
import { ContextApp } from '../../state/reducer';
import './Card-id.scss';

const CardId = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useContext(ContextApp);
  const { rimArray } = state;

  const data = rimArray.find((item) => item.id.toString() === id);
  if (!data) return <Navigate to={PATHS.main} />;

  return (
    <>
      <div className="card_modal">
        <div className="card_modal__header">
          <h3 className="card_modal__header-title">{data.name}</h3>
        </div>

        <div className="card_modal__pic-wrap">
          <img className="card_modal__pic" src={data.image} alt={data.name} />
        </div>

        <div className="card_modal__description">
          <div className="card_modal__status">
            <h5 className="card_modal__small-header">STATUS: </h5>
            <span>{data.status}</span>
          </div>
          <div className="card_modal__species">
            <h5 className="card_modal__small-header">SPECIES: </h5>
            <span>{data.species}</span>
          </div>
          <div className="card_modal__location">
            <h5 className="card_modal__small-header">ORIGIN: </h5>
            <span>{data.origin.name}</span>
          </div>
          <div className="card_modal__location">
            <h5 className="card_modal__small-header">LOCATION: </h5>
            <span>{data.location.name}</span>
          </div>
          <div className="card_modal__created">
            <h5 className="card_modal__small-header">CREATION DATE: </h5>
            <span>{data.created}</span>
          </div>
        </div>
        <div className="card_modal__button-back-wrap">
          <button className="card_modal__button-back" onClick={() => navigate(-1)}>
            Go back
          </button>
        </div>
      </div>
    </>
  );
};

export default CardId;
