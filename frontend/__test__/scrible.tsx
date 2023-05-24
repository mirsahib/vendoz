import { useState } from "react";

interface IWithForm<T> {
	Component: React.ComponentType<T>;
}
function withForm<T, F extends Record<string, any>>({
	Component,
}: IWithForm<T>) {
	type Props = Omit<T, 'name'>;
	return (props: Props) => {
		const [name, setName] = useState(false);
		return <Component {...(props as T)} name={name} />;
	};
}
interface ICompA {
	name: string;
    timer:boolean
}


interface CompaFormInput {
	email: string;
}
function CompA({name,timer}:ICompA) {
	return <div>CompA</div>;
}

type CompAType = React.ComponentType<{}>

const CompAWithForm = withForm<ICompA, CompaFormInput>({ Component: CompA });


function demo(){
    return (
        <CompAWithForm timer={false}/>
    )
}


interface X{
    name:string
  }
  interface Y {
    name:string,
    time:boolean
  }
  
  type Props = Omit<X,keyof Y>
  
  const x:Props = {

  }