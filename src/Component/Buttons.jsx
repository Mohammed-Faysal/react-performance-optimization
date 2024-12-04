import { memo } from 'react';
const Buttons = ({handler, name}) => {
    console.log('Clicked Button');
    
    return (
        <div>
            <button onClick={handler}>{name}</button> 
        </div>
    );
};

export default memo(Buttons);