import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-gifted-charts';

type LineChartType = React.ComponentProps<typeof LineChart>;

const lineData: LineChartType['data'] = [
  {
    value: 3,
    label: '15 APRIL',
    labelComponent: () => customLabel('15 APRIL', 20),
    textShiftX: -100,
  },
  {value: 10, label: '15 APRIL', labelComponent: () => null},
  {value: 8, label: '15 APRIL', labelComponent: () => null},
  {value: 58, label: '15 APRIL', labelComponent: () => null},
  {value: 56, label: '15 APRIL', labelComponent: () => null},
  {value: 78, label: '15 APRIL', labelComponent: () => null},
  {value: 74, label: '15 APRIL', labelComponent: () => null},
  {
    value: 98,
    label: '15 APRIL',
    labelComponent: () => customLabel('21 APRIL', -40),
  },
];
const lineData2: LineChartType['data2'] = [
  {value: 0, label: '15 APRIL', labelComponent: () => null},
  {value: 20, label: '15 APRIL', labelComponent: () => null},
  {value: 18, label: '15 APRIL', labelComponent: () => null},
  {value: 40, label: '15 APRIL', labelComponent: () => null},
  {value: 36, label: '15 APRIL', labelComponent: () => null},
  {value: 60, label: '15 APRIL', labelComponent: () => null},
  {value: 54, label: '15 APRIL', labelComponent: () => null},
  {
    value: 85,
    label: '15 APRIL',
    labelComponent: () => <Text>21 APRIL</Text>,
    textShiftX: 100,
  },
];

const customLabel = (val: string, marginLeft: number) => {
  return (
    <View style={{width: 70, marginLeft}}>
      <Text style={{color: 'gray'}}>{val}</Text>
    </View>
  );
};

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{height: 1100, gap: 50}}>
        <LineChart
          areaChart
          curved
          data={lineData}
          data2={lineData2}
          height={250}
          hideRules
          noOfSections={2}
          xAxisColor="transparent"
          yAxisColor="transparent"
          hideDataPoints
          spacing={50}
          disableScroll
          yAxisTextStyle={{color: 'gray'}}
          initialSpacing={0}
          color1="skyblue"
          color2="orange"
          textColor1="green"
          dataPointsColor1="skyblue"
          dataPointsColor2="red"
          startFillColor1="skyblue"
          startFillColor2="orange"
          startOpacity={1}
        />
        <LineChart
          areaChart
          curved
          data={lineData}
          data2={lineData2}
          height={250}
          hideRules
          noOfSections={2}
          xAxisColor="transparent"
          yAxisColor="transparent"
          hideDataPoints
          spacing={50}
          disableScroll
          yAxisTextStyle={{color: 'gray'}}
          initialSpacing={0}
          color1="blue"
          color2="red"
          textColor1="green"
          dataPointsColor1="blue"
          dataPointsColor2="red"
          startFillColor1="blue"
          startFillColor2="red"
          endFillColor1="blue"
          endFillColor2="red"
          startOpacity={1}
          endOpacity={1}
        />
        <LineChart
          areaChart
          data={lineData}
          data2={lineData2}
          height={250}
          hideRules
          noOfSections={2}
          xAxisColor="transparent"
          yAxisColor="transparent"
          hideDataPoints
          spacing={50}
          disableScroll
          yAxisTextStyle={{color: 'gray'}}
          initialSpacing={0}
          color1="blue"
          color2="red"
          textColor1="green"
          dataPointsColor1="blue"
          dataPointsColor2="red"
          startFillColor1="blue"
          startFillColor2="red"
          endFillColor1="blue"
          endFillColor2="red"
          startOpacity={1}
          endOpacity={1}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
