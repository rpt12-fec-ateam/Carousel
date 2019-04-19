import React from 'react';
import styled from 'styled-components';
import Icon from '../images/index.jsx'

const Container = styled.div`
  float: left;
  text-align: center;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-weight: 1.17;
  margin-right: 20px;
  maring-bottom: 18px;

`
const P1 = styled.p`
  font-family: sans-serif;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.59;
  letter-spacing: .3px;
  text-align: left;
`
const P2 = styled.p`
  float: left;
  text-align: center;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-weight: 1.17;
  padding-top: 10px;

`


const Benefits = (props) => {
  const benefitList = props.benefits.map((item, index) => {
    return (
      // <div>
      <Container>
        <div className='icon' style={{ height: '34px' }}>
          <Icon name={item} />
        </div>
        <P2>
          <p key={index} className='benefitType'>{item}</p>
        </P2>
      </Container>
      // </div>
    )
  })
  return (
    <div className="benefits">
      <P1>
        <p>Benefits</p>
      </P1>
      {benefitList}
    </div>
  )
}

export default Benefits;