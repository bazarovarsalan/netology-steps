import { useState } from 'react';
import StepsForm from './StepsForm';
import StepsList from './StepsList';
import {ISteps} from "../types/Types"


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
  

    const handleChange = (event:string, value:string) => {
      setSteps((prev) => ({ ...prev, [event]: value }));
    };

    function handleSave (training:ISteps) : void {
      setStepsList((prevStepsList) => [...prevStepsList, training]);
      setSteps({
          date: '',
          distance: '',
        });
       };


       const handleDelete = (date:string) => {
        setStepsList((prev) =>
          prev.filter((item) => item.date !== date)
        );
      };
    
      const sorted = stepsList.sort((a:ISteps|any, b:ISteps|any) : number => {
        a = a.date.split('.').reverse().join('');
        b = b.date.split('.').reverse().join('');
        return a > b ? 1 : a < b ? -1 : 0;
      }

     // Здесь  sorted не смог типизировать, пришлось указать в качестве альтернативной типизации any. Как типизировать было лучше?
    
     );

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