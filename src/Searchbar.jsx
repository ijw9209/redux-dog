import React, { useState, useEffect } from "react";
import { getSearchDogs } from "lib/api/sample";
import { Button } from "components";
import { connect } from "react-redux";
import { setDogs } from "redux/actions";

// 컴포넌트에서 action을 통해 store에 있는 state를 변경해주려면 connet를 사용해서 mapDispatchToProps와 Searchbar를 연결해주어야 한다. connect의 첫번째 인자는 아까 보았던 mapStateToProps인데 state를 변경만 시키는 것이기 때문에 null로 둔다.

// connect로 연결해준 뒤 props.setDogs로 dogData를 변경할 수 있다. 버튼을 클릭했을 때 서버에 data를 요청하고 reponse를 dogData에 넣어주었다.

const mapDispatchToProps = dispatch => {
    return {
        setDogs: dog => dispatch(setDogs(dog)),
    };
};

const Searchbar = ({ setDogs }) => {

    const searchHandler = async () => {
        if (currAirport) {
            const data = await getSearchDogs(currAirport);
            console.log(data);
            setDogs(data.data);
            if (location.pathname === "/") {
                history.push("/dogSearch");
            }
        }
    };

    return (
        <>
            <div className="button" onClick={() => searchHandler()}>
                <span className="text">검색</span>
                <SearchImg />
            </div>
        </>
    );
};

export default connect(null, mapDispatchToProps)(Searchbar);