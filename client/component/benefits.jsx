import React from 'react';

const Benefits = (props) => {
  const benefitList = props.benefits.map((item) => {
    return <div className = 'benefitType'>{item}</div>;
  })
  return (
    <div>
      {benefitList}
    </div>
  )
}

export default Benefits;