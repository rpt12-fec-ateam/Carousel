import React from 'react';
import Anti_inflammatory from './anti-inflammatory.jsx';
import Beautifying from './beautifying.jsx';
import Cleansing from './cleansing.jsx';
import Digestive_support from './digestive-support.jsx';
import Energizing from './energizing.jsx';
import Immunity_boosting from './immunity-boosting.jsx';
import Stress_relief from './stress-relief.jsx';
import Workout_recovery from './workout-recovery.jsx';
// const type = ['Anti-inflammatory', 'Beautifying', 'Cleansing', 'Digestive Support',
//               'Energizing','Immunity Boosting', 'Stress Relief', 'Workout Recovery'];


const Icon = props => {
  switch(props.name) {
    case "Anti-inflammatory":
      return <Anti_inflammatory/>;

    case "Beautifying":
      return <Beautifying/>;

    case "Cleansing":
      return <Cleansing/>;

    case "Digestive Support":
      return <Digestive_support/>;

    case "Energizing":
      return <Energizing/>;

    case "Immunity Boosting":
      return <Immunity_boosting/>;

    case "Stress Relief":
      return <Stress_relief/>;

    case "Workout Recovery":
      return <Workout_recovery/>;

  }
}

export default Icon;