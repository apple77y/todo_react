import React, {memo} from 'react';

const AddLi = memo((props) => {
    let textInput = null;
    const onClickAddButton = () => {
        props.handleAddedData(textInput.value);
        textInput.value = '';
        textInput.focus();
    };
    console.log('render');
    return (
        <div className="input-group input-group-lg">
            <input type="text" className="form-control" placeholder="할 일을 입력해주세요"
                   ref={(ref) => {textInput = ref;}}
            />
            <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={onClickAddButton}>등록</button>
                </span>
        </div>
    );
});

export default AddLi;
