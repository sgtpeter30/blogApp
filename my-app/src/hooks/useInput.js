import React, {
    useState
} from 'react';

const useInput = () => {
    const [value, setValue] = useState('');
    return { 
        value, 
        input: <input type="text" value={value} onChange={(event) => setValue(event.target.value)}/>,
    }
};

export default useInput;