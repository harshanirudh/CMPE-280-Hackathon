import React from "react";
import { Chart } from "react-google-charts";


export const data = [
    ['Year', 'China', 'India', 'USA'],
    [1960.0, 0, 0, 0],
    [1961.0, 0, 0, 0],
    [1962.0, 0, 0, 0],
    [1963.0, 0, 0, 0],
    [1964.0, 0, 0, 0],
    [1965.0, 0, 0, 0],
    [1966.0, 0, 0, 0],
    [1967.0, 0, 0, 0],
    [1968.0, 0, 0, 0],
    [1969.0, 0, 0, 6490000000.0],
    [1970.0, 0, 0, 5620000000.0],
    [1971.0, 0, 0, 7330000000.0],
    [1972.0, 0, 0, 9340000000.0],
    [1973.0, 0, 0, 5160000000.0],
    [1974.0, 0, 0.0, 13730000000.0],
    [1975.0, 0, 0.0, 11320000000.0],
    [1976.0, 0, 0.0, 11280000000.0],
    [1977.0, 0, 0.0, 14370000000.0],
    [1978.0, 0, 0.0, 24720000000.0],
    [1979.0, 0, 4000000.0, 19040000000.0],
    [1980.0, 0, 2000000.0, 10110000000.0],
    [1981.0, 44000000.0, 1000000.0, 7774000000.0],
    [1982.0, 93000000.0, 5000000.0, 8770000000.0],
    [1983.0, 134000000.0, 4000000.0, 12820000000.0],
    [1984.0, 629000000.0, 3000000.0, 3680000000.0],
    [1985.0, 450000000.0, -1000000.0, 19524000000.0],
    [1986.0, 645000000.0, 5000000.0, 39797000000.0],
    [1987.0, 850000000.0, 11000000.0, 21701000000.0],
    [1988.0, 780000000.0, 10000000.0, 50980000000.0],
    [1989.0, 830000000.0, 6000000.0, 59940000000.0],
    [1990.0, 913000000.0, -11000000.0, 49270000000.0],
    [1991.0, 4000000000.0, 24000000.0, 58770000000.0],
    [1992.0, 4400000000.0, 350640.5619, 82800000000.0],
    [1993.0, 2000000000.0, 82583302.7, 89990000000.0],
    [1994.0, 2000000000.0, 117189079.2, 110060000000.0],
    [1995.0, 2114000000.0, 239324706.5, 103020000000.0],
    [1996.0, 3765000000.0, 112918990.4, 121380000000.0],
    [1997.0, 4527000000.0, 47593027.49, 174760000000.0],
    [1998.0, 4036000000.0, 79357457.32, 247485000000.0],
    [1999.0, 4612000000.0, 509532974.7, 186370000000.0],
    [2000.0, 9696000000.0, 1054132218.0, 146041000000.0],
    [2001.0, 6284049719.0, 1261071115.0, 178985000000.0],
    [2002.0, 8456083724.0, 1237846245.0, 195218000000.0],
    [2003.0, 7972601714.0, 1837062923.0, 374004000000.0],
    [2004.0, 13729566303.0, 2640754960.0, 52591000000.0],
    [2005.0, 23932198468.0, 14036833332.0, 283801000000.0],
    [2006.0, 17154799702.0, 17026111929.0, 523890000000.0],
    [2007.0, 56742276630.0, 19256527246.0, 343583000000.0],
    [2008.0, 43889985500.0, 16095583747.0, 312597000000.0],
    [2009.0, 57953599366.0, 15968099288.0, 349828000000.0],
    [2010.0, 48420641060.0, 12607994610.0, 436616000000.0],
    [2011.0, 64963386524.0, 8553237671.0, 377240000000.0],
    [2012.0, 72970879683.0, 1764948800.0, 392796000000.0],
    [2013.0, 123130000000.0, 11686480933.0, 387529000000.0],
    [2014.0, 174391000000.0, 7514275639.0, 302071000000.0],
    [2015.0, 216424000000.0, 5047292606.0, 299815000000.0],
    [2016.0, 138293000000.0, 11090150305.0, 409413000000.0],
    [2017.0, 143027000000.0, 11417789536.0, -130016000000.0],
    [2018.0, 136910000000.0, 13140702032.0, 122191000000.0],
    [2019.0, 109922000000.0, 11122667604.0, 311692000000.0],
    [2020.0, 0, 0, 0]

];

var chartData = []

export function CountryData(country = 'INDIA') {
    chartData = [['year', country.toUpperCase()]]
    if (country === 'INDIA') {
        for (let i = 1; i < data.length; i++) {
            chartData.push(data[i].slice(0, 2))
        }
    } else if (country === 'CHINA') {
        for (let i = 1; i < data.length; i++) {
            let interval = []
            interval.push(data[i][0])
            interval.push(data[i][2])
            chartData.push(interval)
        }
    } else if (country === 'USA') {
        for (let i = 1; i < data.length; i++) {
            let interval = []
            interval.push(data[i][0])
            interval.push(data[i][2])
            chartData.push(interval)
        }
    }
    else {
        chartData = data;
    }
}


export const options = {
    chart: {
        // title: "GDP data for 3 Countries",
        // subtitle: "Denoted in USD",
    },
};



export function FDIBoP(props) {

    console.log('FDIBoP: ', props.country);
    CountryData(props.country);
    return (
        <div style={{ marginBottom: "20px" }}>
            <Chart
                chartType="Line"
                width="100%"
                height="250px"
                data={chartData}
                options={options}
            />
        </div>

    );
}