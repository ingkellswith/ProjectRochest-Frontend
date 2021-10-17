import { Link } from "react-router-dom";

const HeaderPresenter = (props) => {
    return (
        <div className="header">
            <div className="left-container">
                <Link to="/" style={{ textDecoration: 'none' }}><div className="title eng">Rochest</div></Link>
            </div>
            <div className="right-container">
                 <Link to="/product" style={{ textDecoration: 'none' }}><div className="product kor">프로덕트</div></Link>
                 <Link to="/login" style={{ textDecoration: 'none' }}><div className="login kor">로그인</div></Link>
            </div>
        </div>
    )
  };
  
export default HeaderPresenter;
  