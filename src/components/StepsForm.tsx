import { useState } from "react";
import {StepsFormProps, ISteps} from "../types/Types"

const StepsForm = (props:StepsFormProps) => {
  const { steps, onChange, onSave } = props;

  const [errorDate, setErrorDate] = useState<boolean>(false);
  const [errorDistance, setErrorDistance] = useState<boolean>(false);

   
  const handleSubmit = (event: React.MouseEvent): void => {
    if(errorDate || errorDistance) return;
    event.preventDefault();
    const training:ISteps = {date: steps.date, distance: steps.distance.toString()};
    onSave(training)
  };

  const handleChangeDate = (event:React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.name, event.target.value);
    const re: RegExp = /^[0-9]{2}[.]{1}[0-9]{2}[.]{1}[0-9]{4}$/;
    if (!re.test(event.target.value)) {
      setErrorDate(true)
    } else {
      setErrorDate(false)
    }
  };

  const handleChangeDistance = (event:React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.name, event.target.value);
    const re: RegExp = /[0-9]/
    if (!re.test(event.target.value)) {
      setErrorDistance(true)
    } else {
      setErrorDistance(false)
    }
  };

  return (
    <form >
      <div className="steps-form">
        <div className="steps-form__item">
          <label className="steps-form__label">Дата (ДД.ММ.ГГГГ)</label>
          {(errorDate && <div style={{color:'red'}}>неверный формат ввода даты</div>)}
          <input
            className="steps-form__input"
            type="text"
            name="date"
            value={steps.date}
            onChange={handleChangeDate}
          />
        </div>
        <div className="steps-form__item">
          <label className="steps-form__label">Пройдено км</label>
          {(errorDistance && <div style={{color:'red'}}>Введите число</div>)}
          <input
            className="steps-form__input"
            type="text"
            name="distance"
            value={steps.distance}
            onChange={handleChangeDistance}
          />
        </div>
        <div className="steps-form__item">
          <button className="steps-form__button" type="submit" onClick={handleSubmit}>
            OK
          </button>
        </div>
      </div>
    </form>
  );
};


export default StepsForm;