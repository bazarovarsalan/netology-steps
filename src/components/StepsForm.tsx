
import {StepsFormProps, ISteps} from "../types/Types"

const StepsForm = (props:StepsFormProps) => {
  const { steps, onChange, onSave } = props;
  
  const handleSubmit = (event: React.MouseEvent): void => {
    event.preventDefault();
    const training:ISteps = {date: steps.date, distance: steps.distance};
    onSave(training);
  };

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.name, event.target.value);
  };

  return (
    <form >
      <div className="steps-form">
        <div className="steps-form__item">
          <label className="steps-form__label">Дата (ДД.ММ.ГГГГ)</label>
          <input
            className="steps-form__input"
            type="text"
            name="date"
            value={steps.date}
            onChange={handleChange}
          />
        </div>
        <div className="steps-form__item">
          <label className="steps-form__label">Пройдено км</label>
          <input
            className="steps-form__input"
            type="text"
            name="distance"
            value={steps.distance}
            onChange={handleChange}
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