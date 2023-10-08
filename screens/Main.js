import React from 'react';
import { Dimensions, ScrollView, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function Main() {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                data: [20, 25, 22, 28, 24, 26, 23],
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // line color
                strokeWidth: 2, // line thickness
                pointRadius: 4, // dot size
                pointColor: '#ffffff', // dot color
                pointBackgroundColor: '#ff6600', // dot fill color
                pointBorderColor: '#ff6600', // dot border color
                pointBorderWidth: 2, // dot border thickness
                formatYLabel: (value) => `${value}°C`, // format y-axis label
            },
        ],
    };

    const chartConfig = {
        backgroundColor: '#ffffff',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        decimalPlaces: 1,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16,
        },
    };

    const screenWidth = Dimensions.get('window').width;

    return (
        <ScrollView horizontal={true}>
            <LineChart
                data={data}
                width={screenWidth + 100}
                height={220}
                chartConfig={chartConfig}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
                renderDotContent={({ x, y, index, indexData }) => (
                    <Text key={index} style={{ position: 'absolute', top: y - 25, left: x - 10 }}>
                        {`${indexData}°C`}
                    </Text>
                )}
            />
        </ScrollView>
    )
}