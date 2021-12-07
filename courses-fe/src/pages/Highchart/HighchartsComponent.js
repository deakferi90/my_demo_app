import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { options } from './options';

const HighCharts = () => {
    return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
)};

export default HighCharts;