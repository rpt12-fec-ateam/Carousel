import React from 'react';

const Benefits = (props) => {
  const benefitList = props.benefits.map((item, index) => {
    return <div key = {index} className = 'benefitType'>{item}</div>;
  })
  return (
    <div>
      {benefitList}
    </div>
  )
}

export default Benefits;