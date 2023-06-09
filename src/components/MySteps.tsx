import { useState } from 'react';
import StepsForm from './StepsForm';
import StepsList from './StepsList';
import {ISteps, IError} from "../types/Types"


const MySteps = () => {

      const [steps, setSteps] = useState<ISteps>({
        date: '',
        distance: '',
      });
  
      const [stepsList, setStepsList] = useState<ISteps[]>([
        {date: '18.07.2019', distance: '3.4'},
        {date: '19.07.2019', distance: '14.2'},
        {date: '20.07.2019', distance: '5.7'},
        {date: '30.06.2019', distance: '15.7'}
      ])

    const [errorDate, setErrorDate] = useState(false);
  

    const handleChange = (event:string, value:string) => {
      setSteps((prev) => ({ ...prev, [event]: value }));
    };

    function handleSave (training:ISteps) : void {
      setStepsList((prevStepsList) => {
        const idx = prevStepsList.findIndex(steps => steps.date === training.date);
        if (idx < 0 ) {
          return [...prevStepsList, training];
        } else {
          const newDistance = Number(prevStepsList[idx].distance) + Number(training.distance);
          const newStepList = [...prevStepsList];
          newStepList[idx] = {date: training.date, distance: newDistance.toString()};
          return newStepList;
        }
      })
      setSteps({
          date: '',
          distance: '',
      });
    }

       const handleDelete = (date:string) => {
        setStepsList((prev) =>
          prev.filter((item) => item.date !== date)
        );
      };
    
      const sorted: ISteps[] = stepsList.sort((a:ISteps, b:ISteps) : number => {
       const  c = a.date.split('.').reverse().join('');
       const  d = b.date.split('.').reverse().join('');
        return c > d ? 1 : c < d ? -1 : 0;
      });



  return (
    <div className="MySteps">
      <StepsForm steps={steps} onChange={handleChange} onSave={handleSave} />
      <StepsList
        trainings={sorted}
        onDelete={handleDelete}
    
      />
    </div>
  );
};

export default MySteps; 