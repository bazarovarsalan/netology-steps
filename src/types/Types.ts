 export interface ISteps {
    date: string,
    distance: string
  }


  export type StepsFormProps = {
    steps: ISteps,
    onChange: (arg1: string, arg2: string) => void,
    onSave: (arg: ISteps) => void,
  }
  

  export type StepsListProps = {
    trainings: ISteps[], 
    onDelete: (arg:string) => void
  }