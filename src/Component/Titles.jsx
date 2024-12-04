import { memo } from "react";
const Titles = ({count}) => {
    // Memo na korle je button e click kori na kno, 2ber log show korbe. Because button ta 2ber call korci. akber increase er jonno then onno ber Decrease er jonno.
    // console.log('Count Title');
    return (
        <div>
            <p>The value of counter is {count}</p>
        </div>
    );
};

export default memo(Titles);