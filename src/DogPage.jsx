import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DogCardContainer } from 'components';
//redux
import { connect } from 'react-redux';
//store에 있는 state를 사용하려면 connect함수를 이용하여야함
//mapStateToProps와 DogPage를 연결해줘야함

const mapStateToProps = state => {
    return {
        dogData: state.dogData,
    }
}

const Styled = {
    Wrapper: styled.selection`
        .container {
            margin-top :3.6rem;
        }
    `
}
const DogPage = ({ dogData }) => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        //강아지 검색을 했을 때
        if (dogData.length !== 0) {
            setDogs(dogData);
        }
    }, [pageNum, dogData, selectedFilter])
    return (
        <Styled.Wrapper>
            <DogCardContainer dogs={dogs} />
        </Styled.Wrapper>
    );
};

export default connect(mapStateToProps)(DogPage);