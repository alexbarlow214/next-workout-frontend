import { useTheme } from "@mui/material"
import { ResponsiveLine } from "@nivo/line"
import { tokens } from "../theme"

export default function LineChart(){
    const data: Any = [
        {
          "id": "japan",
          "color": "hsl(70, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 138
            },
            {
              "x": "helicopter",
              "y": 222
            },
            {
              "x": "boat",
              "y": 51
            },
            {
              "x": "train",
              "y": 283
            },
            {
              "x": "subway",
              "y": 266
            },
            {
              "x": "bus",
              "y": 144
            },
            {
              "x": "car",
              "y": 245
            },
            {
              "x": "moto",
              "y": 277
            },
            {
              "x": "bicycle",
              "y": 95
            },
            {
              "x": "horse",
              "y": 122
            },
            {
              "x": "skateboard",
              "y": 106
            },
            {
              "x": "others",
              "y": 41
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(192, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 114
            },
            {
              "x": "helicopter",
              "y": 28
            },
            {
              "x": "boat",
              "y": 213
            },
            {
              "x": "train",
              "y": 191
            },
            {
              "x": "subway",
              "y": 111
            },
            {
              "x": "bus",
              "y": 80
            },
            {
              "x": "car",
              "y": 43
            },
            {
              "x": "moto",
              "y": 177
            },
            {
              "x": "bicycle",
              "y": 197
            },
            {
              "x": "horse",
              "y": 110
            },
            {
              "x": "skateboard",
              "y": 118
            },
            {
              "x": "others",
              "y": 150
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(171, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 87
            },
            {
              "x": "helicopter",
              "y": 246
            },
            {
              "x": "boat",
              "y": 141
            },
            {
              "x": "train",
              "y": 65
            },
            {
              "x": "subway",
              "y": 298
            },
            {
              "x": "bus",
              "y": 204
            },
            {
              "x": "car",
              "y": 187
            },
            {
              "x": "moto",
              "y": 109
            },
            {
              "x": "bicycle",
              "y": 280
            },
            {
              "x": "horse",
              "y": 4
            },
            {
              "x": "skateboard",
              "y": 75
            },
            {
              "x": "others",
              "y": 246
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(183, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 108
            },
            {
              "x": "helicopter",
              "y": 151
            },
            {
              "x": "boat",
              "y": 121
            },
            {
              "x": "train",
              "y": 76
            },
            {
              "x": "subway",
              "y": 287
            },
            {
              "x": "bus",
              "y": 224
            },
            {
              "x": "car",
              "y": 189
            },
            {
              "x": "moto",
              "y": 65
            },
            {
              "x": "bicycle",
              "y": 33
            },
            {
              "x": "horse",
              "y": 293
            },
            {
              "x": "skateboard",
              "y": 83
            },
            {
              "x": "others",
              "y": 19
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(272, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 145
            },
            {
              "x": "helicopter",
              "y": 99
            },
            {
              "x": "boat",
              "y": 259
            },
            {
              "x": "train",
              "y": 73
            },
            {
              "x": "subway",
              "y": 275
            },
            {
              "x": "bus",
              "y": 191
            },
            {
              "x": "car",
              "y": 231
            },
            {
              "x": "moto",
              "y": 62
            },
            {
              "x": "bicycle",
              "y": 284
            },
            {
              "x": "horse",
              "y": 172
            },
            {
              "x": "skateboard",
              "y": 70
            },
            {
              "x": "others",
              "y": 236
            }
          ]
        }
      ]
    return (<ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat={' >-.2f'}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />)
}