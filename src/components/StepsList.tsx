
import {StepsListProps} from "../types/Types"

const StepsList = (props: StepsListProps) => {
  const { trainings, onDelete} = props;
  const handleDelete = (event: React.MouseEvent, date:string): void => {
    event.preventDefault();
    onDelete(date);
  };


  return (
    <div className="steps-list">
      <div className="header">
        <div className="header__date">Дата (ДД.ММ.ГГГГ)</div>
        <div className="header__distance">Пройдено км</div>
        <div className="header__actions">Действия</div>
      </div>
      <div className="list">
        {trainings.map((item) => (
          <div className="steps" key={item.date}>
            <div className="steps__date">{item.date}</div>
            <div className="steps__distance">{item.distance}</div>
            <div className="steps__actions">
              <a href="#/">
                <span className="material-icons">edit</span>
              </a>
              <a href="#/" onClick={(event) => handleDelete(event, item.date)}>
                ✘
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default StepsList;