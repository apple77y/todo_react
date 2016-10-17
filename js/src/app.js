var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
    <div className="container">
        <div className="page-header">
            <h1>To do list</h1>
        </div>
        <div className="input-group input-group-lg">
            <input type="text" className="form-control" placeholder="할 일을 입력해주세요"/>
				<span className="input-group-btn">
                    <button className="btn btn-primary" type="button">등록</button>
		    	</span>
        </div>
        <hr/>
        <ul>
            <li>
                <span>이 것도 해야되고</span>
                <span className="btn-container"><a href="#">수정</a><a href="#">삭제</a></span>
            </li>
            <li>
                <span>저 것도 해야되고</span>
                <span className="btn-container"><a href="#">수정</a><a href="#">삭제</a></span>
            </li>
            <li>
                <span>그 것도 해야되고</span>
                <span className="btn-container"><a href="#">수정</a><a href="#">삭제</a></span>
            </li>
            <li>
                <span>언제 다하나</span>
                <span className="btn-container"><a href="#">수정</a><a href="#">삭제</a></span>
            </li>
            <li className="input-group input-group-lg">
                <input type="text" className="form-control" placeholder="수정 버튼 누르면 이렇게"/>
					<span className="input-group-btn">
                        <button className="btn btn-primary" type="button">수정완료</button>
			    	</span>
            </li>
        </ul>
    </div>,
    document.getElementById('app')
);
