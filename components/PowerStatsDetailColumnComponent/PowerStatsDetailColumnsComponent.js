import React from 'react';
import {View} from 'react-native';
import {powerStatsDetailColumnsComponentStyles} from './PowerStatsDetailColumnsComponentStyle';
import PowerStat from '../PowerStatDetailComponent/PowerStatDetailComponent';

//PowerStatsDetailColumnsComponent - A styled component that renders two columns with PowerStat components.
//It's function is to display all the stats values of the hero in two columns in the Hero Details screen
//This component has one params:
//hero as the hero data

const PowerStatsDetailColumnsComponent = ({hero}) => (
  <View>
    <View style={powerStatsDetailColumnsComponentStyles.statsContainerSecond}>
      <PowerStat title="Combat" value={hero.powerstats.combat} />
      <PowerStat title="Durability" value={hero.powerstats.durability} />
    </View>
    <View style={powerStatsDetailColumnsComponentStyles.statsContainerSecond}>
      <PowerStat title="Intelligence" value={hero.powerstats.intelligence} />
      <PowerStat title="Power" value={hero.powerstats.power} />
    </View>
    <View style={powerStatsDetailColumnsComponentStyles.statsContainerSecond}>
      <PowerStat title="Speed" value={hero.powerstats.speed} />
      <PowerStat title="Strength" value={hero.powerstats.strength} />
    </View>
  </View>
);
export default PowerStatsDetailColumnsComponent;
