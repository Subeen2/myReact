import React,{memo} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';


const TodoInsert=({onInsert})=>{
    const [value, setValue] = React.useState('');

    const Change=(e)=>{
        setValue(e.target.value);
    }

    const submit=(e)=>{
        e.preventDefault();
        setValue('');
        onInsert(value);
    }

    return(
        <div>
            <form className="TodoInsert" onSubmit={submit}>
                <input type="text" placeholder="일정을 입력해주세요." onChange={Change} value={value}/>
                <button><MdAdd /></button>
            </form>
        </div>
    );
}

export default memo(TodoInsert);