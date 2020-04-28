import React, {useState} from 'react';

export default function(BaseComponent){
    return props => {
        const [toggle, setToggle] = useState(false);

        const handleToggle = () => {
            setToggle(!toggle);
        }

        let toggleObj = {
            value: toggle,
            toggleFn: handleToggle 
        }

        return <BaseComponent toggleObj={toggleObj} {...props}/>
    }
}