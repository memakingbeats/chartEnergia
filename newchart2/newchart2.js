




// Data retrieved from https://www.vikjavev.no/ver/snjomengd
Highcharts.setOptions({
    lang: {
        months: ['Jan', 'Fév', 'Mar', 'Abr', 'Mai', 'Jun',  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    }
});
Highcharts.chart('container', {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Geração de energia Eólica por Usina (MWmed)'
  },
  subtitle: {
    text: 'Energia Eólica gerada a cada hora do dia - (30/03/22 & 31/03/22)'
  },
  xAxis: {
    alternateGrid: 'true',
    styledMode: 'true',
    type: 'datetime',
    alternateGridColor: '#FBFDFF',
    
   
    

    dateTimeLabelFormats: { // don't display the year
      month: '%e. %b',
      year: '%b',
      
    },
    title: {
      text: 'Data'
      
      
    }
  },
  yAxis: {
    
    title: {
      text: 'Geração (MWmed)',
      style: {
                color: 'grey'
            },  
    },
    
  },
  //tooltip: {
    //headerFormat: '<b>{series.name}</b><br>',
    //pointFormat: '{point.x:%e. %b}: {point.y:.2f} MWmed'  
  //},

  tooltip: {
    
        pointFormat: '{series.name}: <b>{point.y:.2f} MWmed</b><br/>',
        valueSuffix: ' MWmed',
        shared: true,
    },


  plotOptions: {
    series: {
      marker: {
        enabled: true,
        radius: 2.5,
         inside: true,
      }
    }
  },

  colors: ['#3772BA', '#FF6A4A', '#3772BA', '#FF6A4A', '#239B56','#FF6A4A', '#239B56', '#FF6A4A'],

  // Define the data points. All series have a year of 20222022/71 in order
  // to be compared on the same x axis. Note that in JavaScript, months start
  // at 0 for January, 1 for February etc.
  series: [
    {
      
      name: [("Icaraí - 30/03")],
      
      
      data: [
        [Date.UTC(2022, 2, 30, 00), 0.547],[Date.UTC(2022, 2, 30, 1), 3.64],[
          Date.UTC(2022, 2, 30, 2), 14.71],[Date.UTC(2022, 2, 30, 3), 18.477],
          [Date.UTC(2022, 2, 30, 4), 13.477],[Date.UTC(2022, 2, 30, 5), 9.87],
          [Date.UTC(2022, 2, 30, 6), 32.69],[Date.UTC(2022, 2, 30, 7), 100.2],
          [Date.UTC(2022, 2, 30, 8), 40.10],[Date.UTC(2022, 2, 30, 9), 59.16],
          [Date.UTC(2022, 2, 30, 10), 25.9],[Date.UTC(2022, 2, 30, 11), 9.949],
          [Date.UTC(2022, 2, 30, 12), 14.44],[Date.UTC(2022, 2, 30, 13), 12.98],
          [Date.UTC(2022, 2, 30, 14), 0.6],[Date.UTC(2022, 2, 30, 15), 7.14],
          [Date.UTC(2022, 2, 30, 16), 22.79],[Date.UTC(2022, 2, 30, 17), 45.66],
          [Date.UTC(2022, 2, 30, 18), 43.81],[Date.UTC(2022, 2, 30, 19), 42.12],
          [Date.UTC(2022, 2, 30, 20), 18.38],[Date.UTC(2022, 2, 30, 21), 20.57],
          [Date.UTC(2022, 2, 30, 22), 15.96],[Date.UTC(2022, 2, 30, 23), 22.5],
           ]
        
    },

    {
      name: [("Média Icaraí <br> 03/22")],
      showInLegend: true,
      
      data: [
        [Date.UTC(2022, 2, 30, 00),15.236],[Date.UTC(2022, 2, 30, 1), 10.756],
          [Date.UTC(2022, 2, 30, 2), 9.637],[Date.UTC(2022, 2, 30, 3), 8.585],
          [Date.UTC(2022, 2, 30, 4), 8.830],[Date.UTC(2022, 2, 30, 5), 9.456],
          [Date.UTC(2022, 2, 30, 6),11.889],[Date.UTC(2022, 2, 30, 7), 9.743],
          [Date.UTC(2022, 2, 30, 8), 8.401],[Date.UTC(2022, 2, 30, 9), 16.278],
          [Date.UTC(2022, 2, 30, 10), 22.7117],[Date.UTC(2022, 2, 30, 11), 31.850],
          [Date.UTC(2022, 2, 30, 12), 34.856],[Date.UTC(2022, 2, 30, 13), 37.771],
          [Date.UTC(2022, 2, 30, 14), 37.033],[Date.UTC(2022, 2, 30, 15), 31.910],
          [Date.UTC(2022, 2, 30, 16), 28.5],[Date.UTC(2022, 2, 30, 17), 23.81],
          [Date.UTC(2022, 2, 30, 18), 21.5],[Date.UTC(2022, 2, 30, 19), 20.75],
          [Date.UTC(2022, 2, 30, 20), 18.5],[Date.UTC(2022, 2, 30, 21), 16.056],
          [Date.UTC(2022, 2, 30, 22), 17.768],[Date.UTC(2022, 2, 30, 23), 16.011],
           ]
           
    },
    
    {
      name: [("Icaraí - 31/03")],
      data: [
        
        
           [Date.UTC(2022, 2, 31, 00), 44.521],[Date.UTC(2022, 2, 31, 01), 38.91],
           [Date.UTC(2022, 2, 31, 02), 43.17],[Date.UTC(2022, 2, 31, 03), 39.72],
           [Date.UTC(2022, 2, 31, 04), 18.94], [Date.UTC(2022, 2, 31, 05),16.00],
           [Date.UTC(2022, 2, 31, 06), 30.44],[Date.UTC(2022, 2, 31, 07), 10.11],
           [Date.UTC(2022, 2, 31, 08), 3.93],[Date.UTC(2022, 2, 31, 09), 11.37],
            [Date.UTC(2022, 2, 31, 10), 9.934],[Date.UTC(2022, 2, 31, 11), 52.35],
            [Date.UTC(2022, 2, 31, 12),0.56],[Date.UTC(2022, 2, 31, 13), 0.13],
            [Date.UTC(2022, 2, 31, 14), 0.74],[Date.UTC(2022, 2, 31, 15), 0.68],
            [Date.UTC(2022, 2, 31, 16), 0.68],[Date.UTC(2022, 2, 31, 17), 0.68],[
              Date.UTC(2022, 2, 31, 18), 0.68],[Date.UTC(2022, 2, 31, 19), 0.68],
              [Date.UTC(2022, 2, 31, 20), 0.68],[Date.UTC(2022, 2, 31, 21), 0.68],[
                Date.UTC(2022, 2, 31, 22), 0.68],[Date.UTC(2022, 2, 31, 23), 0.68],
        ]
    },


    {
   name: [("Média Icaraí <br> 03/22")],
   showInLegend: true,
      data: [
        [Date.UTC(2022, 2, 31, 00),15.236],[Date.UTC(2022, 2, 31, 1), 10.756],
          [Date.UTC(2022, 2, 31, 2), 9.637],[Date.UTC(2022, 2, 31, 3), 8.585],
          [Date.UTC(2022, 2, 31, 4), 8.831],[Date.UTC(2022, 2, 31, 5), 9.456],
          [Date.UTC(2022, 2, 31, 6),11.889],[Date.UTC(2022, 2, 31, 7), 9.743],
          [Date.UTC(2022, 2, 31, 8), 8.401],[Date.UTC(2022, 2, 31, 9), 16.278],
          [Date.UTC(2022, 2, 31, 10), 22.7117],[Date.UTC(2022, 2, 31, 11), 31.850],
          [Date.UTC(2022, 2, 31, 12), 34.856],[Date.UTC(2022, 2, 31, 13), 37.771],
          [Date.UTC(2022, 2, 31, 14), 37.033],[Date.UTC(2022, 2, 31, 15), 31.910],
          [Date.UTC(2022, 2, 31, 16), 28.5],[Date.UTC(2022, 2, 31, 17), 23.81],
          [Date.UTC(2022, 2, 31, 18), 21.5],[Date.UTC(2022, 2, 31, 19), 20.75],
          [Date.UTC(2022, 2, 31, 20), 18.5],[Date.UTC(2022, 2, 31, 21), 16.056],
          [Date.UTC(2022, 2, 31, 22), 17.768],[Date.UTC(2022, 2, 31, 23), 16.011],
           ]
    },

    
    {
      name: [("P. Formosa - 30/03")],
      data: [
        [Date.UTC(2022, 2, 30, 00), 0],[Date.UTC(2022, 2, 30, 1), 0],[
          Date.UTC(2022, 2, 30, 2), 0],[Date.UTC(2022, 2, 30, 3), 1,732],
          [Date.UTC(2022, 2, 30, 4), 1,411],[Date.UTC(2022, 2, 30, 5), 0.678],
          [Date.UTC(2022, 2, 30, 6), 0],[Date.UTC(2022, 2, 30, 7), 0],
          [Date.UTC(2022, 2, 30, 8), 0],[Date.UTC(2022, 2, 30, 9), 3,545],
          [Date.UTC(2022, 2, 30, 10), 7,865],[Date.UTC(2022, 2, 30, 11), 6,179],
          [Date.UTC(2022, 2, 30, 12), 3,272],[Date.UTC(2022, 2, 30, 13), 2,528],
          [Date.UTC(2022, 2, 30, 14), 0.718],[Date.UTC(2022, 2, 30, 15), 11,361],
          [Date.UTC(2022, 2, 30, 16), 26,966],[Date.UTC(2022, 2, 30, 17), 12.14],
          [Date.UTC(2022, 2, 30, 18), 19,589],[Date.UTC(2022, 2, 30, 19), 11,789],
          [Date.UTC(2022, 2, 30, 20), 7,029],[Date.UTC(2022, 2, 30, 21), 19,885],
          [Date.UTC(2022, 2, 30, 22), 20,081],[Date.UTC(2022, 2, 30, 23), 1,037],
           ]
        
    },


    {
      name: [("Média P. Form <br> 03/22")],
      data: [
        [Date.UTC(2022, 2, 30, 00),1.88],[Date.UTC(2022, 2, 30, 1), 2.29],
          [Date.UTC(2022, 2, 30, 2), 2.257],[Date.UTC(2022, 2, 30, 3), 2.58],
          [Date.UTC(2022, 2, 30, 4), 3.60],[Date.UTC(2022, 2, 30, 5), 5.31],
          [Date.UTC(2022, 2, 30, 6),5.7],[Date.UTC(2022, 2, 30, 7), 2.28],
          [Date.UTC(2022, 2, 30, 8), 2.39],[Date.UTC(2022, 2, 30, 9), 3.754],
          [Date.UTC(2022, 2, 30, 10), 7.838],[Date.UTC(2022, 2, 30, 11), 8.948],
          [Date.UTC(2022, 2, 30, 12), 14.204],[Date.UTC(2022, 2, 30, 13), 15.97],
          [Date.UTC(2022, 2, 30, 14), 21.2],[Date.UTC(2022, 2, 30, 15), 17.3],
          [Date.UTC(2022, 2, 30, 16), 17.68],[Date.UTC(2022, 2, 30, 17), 17.0],
          [Date.UTC(2022, 2, 30, 18), 16.15],[Date.UTC(2022, 2, 30, 19), 13.3],
          [Date.UTC(2022, 2, 30, 20), 10.2],[Date.UTC(2022, 2, 30, 21), 7.88],
          [Date.UTC(2022, 2, 30, 22), 5.33],[Date.UTC(2022, 2, 30, 23), 3.17],
           ]
           
    },
    {
      name: [("P. Formosa - 31/03")],
      data: [
        
        
           [Date.UTC(2022, 2, 31, 00), 0.014],[Date.UTC(2022, 2, 31, 01), 0],
           [Date.UTC(2022, 2, 31, 02), 0.286],[Date.UTC(2022, 2, 31, 03),1,019],
           [Date.UTC(2022, 2, 31, 04), 15,682],[Date.UTC(2022, 2, 31, 05), 3,137],
           [Date.UTC(2022, 2, 31, 06), 4,388],[Date.UTC(2022, 2, 31, 07), 4,3880.101],
           [Date.UTC(2022, 2, 31, 08), 0],[Date.UTC(2022, 2, 31, 09), 0],
            [Date.UTC(2022, 2, 31, 10), 0.634],[Date.UTC(2022, 2, 31, 11),3,925],
            [Date.UTC(2022, 2, 31, 12),25,703],[Date.UTC(2022, 2, 31, 13), 6,318],
            [Date.UTC(2022, 2, 31, 14), 0],[Date.UTC(2022, 2, 31, 15), 0],
            [Date.UTC(2022, 2, 31, 16), 0],[Date.UTC(2022, 2, 31, 17), 0],[
              Date.UTC(2022, 2, 31, 18), 0],[Date.UTC(2022, 2, 31, 19), 0],
              [Date.UTC(2022, 2, 31, 20), 0.578],[Date.UTC(2022, 2, 31, 21), 0],[
                Date.UTC(2022, 2, 31, 22), 0.302],[Date.UTC(2022, 2, 31, 23), 2,269],
        ]
    },    

    
    {
      name: [("Média P. Form <br> 03/22")],
      data: [
        [Date.UTC(2022, 2, 31, 00),1.88],[Date.UTC(2022, 2, 31, 1), 2.29],
          [Date.UTC(2022, 2, 31, 2), 2.257],[Date.UTC(2022, 2, 31, 3), 2.58],
          [Date.UTC(2022, 2, 31, 4), 3.60],[Date.UTC(2022, 2, 31, 5), 5.31],
          [Date.UTC(2022, 2, 31, 6),5.7],[Date.UTC(2022, 2, 31, 7), 2.28],
          [Date.UTC(2022, 2, 31, 8), 2.39],[Date.UTC(2022, 2, 31, 9), 3.754],
          [Date.UTC(2022, 2, 31, 10), 7.838],[Date.UTC(2022, 2, 31, 11), 8.948],
          [Date.UTC(2022, 2, 31, 12), 14.204],[Date.UTC(2022, 2, 31, 13), 15.97],
          [Date.UTC(2022, 2, 31, 14), 21.2],[Date.UTC(2022, 2, 31, 15), 17.3],
          [Date.UTC(2022, 2, 31, 16), 17.68],[Date.UTC(2022, 2, 31, 17), 17.0],
          [Date.UTC(2022, 2, 31, 18), 16.15],[Date.UTC(2022, 2, 31, 19), 13.3],
          [Date.UTC(2022, 2, 31, 20), 10.2],[Date.UTC(2022, 2, 31, 21), 7.88],
          [Date.UTC(2022, 2, 31, 22), 5.33],[Date.UTC(2022, 2, 31, 23), 3.17],
           ]
           
    },


    
        
  ]


  
});
Highcharts.setOptions({
    lang: {
        months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    }
});
Highcharts.chart('container2', {
  chart: {
    type: 'area'
  },
  title: {
    text: 'Geração de energia  Solar por Usina (MWmed)'
  },
  subtitle: {
    text: 'Energia Solar gerada a cada hora do dia - (30/03/22 & 31/03/22)'
  },
  xAxis: {
    
    styledMode: 'true',
    type: 'datetime',
    alternateGrid: 'true',
    alternateGridColor: '#FBFDFF',
   
    

    dateTimeLabelFormats: { // don't display the year
      month: '%e. %b',
      year: '%b',
      
    },
    title: {
      text: 'Data'
      
      
    }
  },
  yAxis: {
    title: {
      text: 'Geração (MWmed)',
      style: {
                color: 'grey'
            },  
            
    },
    
  },
  //tooltip: {
    //headerFormat: '<b>{series.name}</b><br>',
    //pointFormat: '{point.x:%e. %b}: {point.y:.2f} MWmed'  
  //},

  tooltip: {
    
        pointFormat: '{series.name}: <b>{point.y:.2f} MWmed</b><br/>',
        valueSuffix: ' MWmed',
        shared: true,
    },


  plotOptions: {
    series: {
      marker: {
        enabled: true,
        radius: 2.5,
         inside: true,
      }
    }
  },

  colors: ['#3772BA', '#FF6A4A', '#3772BA', '#FF6A4A', '#239B56','#FF6A4A', '#239B56', '#FF6A4A'],

  // Define the data points. All series have a year of 20222022/71 in order
  // to be compared on the same x axis. Note that in JavaScript, months start
  // at 0 for January, 1 for February etc.
  series: [
    {
      
      name: [("Dracena - 30/03")],
      
      
      data: [
        [Date.UTC(2022, 2, 30, 00), 0],[Date.UTC(2022, 2, 30, 1), 0],[
          Date.UTC(2022, 2, 30, 2), 0],[Date.UTC(2022, 2, 30, 3), 0],
          [Date.UTC(2022, 2, 30, 4), 0],[Date.UTC(2022, 2, 30, 5), 0],
          [Date.UTC(2022, 2, 30, 6), 0.23],[Date.UTC(2022, 2, 30, 7), 14.917],
          [Date.UTC(2022, 2, 30, 8), 51.21],[Date.UTC(2022, 2, 30, 9), 62.13],
          [Date.UTC(2022, 2, 30, 10), 64.12],[Date.UTC(2022, 2, 30, 11), 63.979],
          [Date.UTC(2022, 2, 30, 12),56.6],[Date.UTC(2022, 2, 30, 13), 46.31],
          [Date.UTC(2022, 2, 30, 14), 20.2],[Date.UTC(2022, 2, 30, 15), 10.8],
          [Date.UTC(2022, 2, 30, 16), 19.34],[Date.UTC(2022, 2, 30, 17), 7.10],
          [Date.UTC(2022, 2, 30, 18), 0.36],[Date.UTC(2022, 2, 30, 19), 0],
          [Date.UTC(2022, 2, 30, 20), 0],[Date.UTC(2022, 2, 30, 21), 0],
          [Date.UTC(2022, 2, 30, 22), 0],[Date.UTC(2022, 2, 30, 23), 0],
           ]
        
    },

    {
      name: [("Média Dracena <br> 03/22")],
      showInLegend: true,
      
      data: [
        [Date.UTC(2022, 2, 30, 00),0],[Date.UTC(2022, 2, 30, 1), 0],
          [Date.UTC(2022, 2, 30, 2), 0],[Date.UTC(2022, 2, 30, 3), 0],
          [Date.UTC(2022, 2, 30, 4), 0],[Date.UTC(2022, 2, 30, 5), 0],
          [Date.UTC(2022, 2, 30, 6),0],[Date.UTC(2022, 2, 30, 7), 10.14],
          [Date.UTC(2022, 2, 30, 8), 33.15],[Date.UTC(2022, 2, 30, 9), 46.62],
          [Date.UTC(2022, 2, 30, 10), 53.36],[Date.UTC(2022, 2, 30, 11), 56.88],
          [Date.UTC(2022, 2, 30, 12), 57.00],[Date.UTC(2022, 2, 30, 13), 54.04],
          [Date.UTC(2022, 2, 30, 14), 42.18],[Date.UTC(2022, 2, 30, 15), 37.39],
          [Date.UTC(2022, 2, 30, 16), 30.58],[Date.UTC(2022, 2, 30, 17), 13.9],
          [Date.UTC(2022, 2, 30, 18), 1.08],[Date.UTC(2022, 2, 30, 19), 0],
          [Date.UTC(2022, 2, 30, 20), 0],[Date.UTC(2022, 2, 30, 21), 0],
          [Date.UTC(2022, 2, 30, 22), 0],[Date.UTC(2022, 2, 30, 23), 0],
           ]
           
    },
    
    {
      name: [("Dracena - 31/03")],
      data: [
        
        
           [Date.UTC(2022, 2, 31, 00), 0],[Date.UTC(2022, 2, 31, 01), 0],
           [Date.UTC(2022, 2, 31, 02), 0],[Date.UTC(2022, 2, 31, 03), 0],
           [Date.UTC(2022, 2, 31, 04), 0], [Date.UTC(2022, 2, 31, 05),0],
           [Date.UTC(2022, 2, 31, 06), 0.114],[Date.UTC(2022, 2, 31, 07), 7.55],
           [Date.UTC(2022, 2, 31, 08), 49.80],[Date.UTC(2022, 2, 31, 09), 51.9],
            [Date.UTC(2022, 2, 31, 10), 53.77],[Date.UTC(2022, 2, 31, 11), 50.73],
            [Date.UTC(2022, 2, 31, 12),44.01],[Date.UTC(2022, 2, 31, 13), 44.92],
            [Date.UTC(2022, 2, 31, 14), 24.80],[Date.UTC(2022, 2, 31, 15), 42.15],
            [Date.UTC(2022, 2, 31, 16), 48.79],[Date.UTC(2022, 2, 31, 17), 16.06],[
              Date.UTC(2022, 2, 31, 18), 0.48],[Date.UTC(2022, 2, 31, 19), 0],
              [Date.UTC(2022, 2, 31, 20), 0],[Date.UTC(2022, 2, 31, 21), 0],[
                Date.UTC(2022, 2, 31, 22), 0],[Date.UTC(2022, 2, 31, 23), 0],
        ]
    },


    {
      name: [("Média Dracena <br> 03/22")],
      showInLegend: true,
      
      data: [
        [Date.UTC(2022, 2, 31, 00),0],[Date.UTC(2022, 2, 31, 1), 0],
          [Date.UTC(2022, 2, 31, 2), 0],[Date.UTC(2022, 2, 31, 3), 0],
          [Date.UTC(2022, 2, 31, 4), 0],[Date.UTC(2022, 2, 31, 5), 0],
          [Date.UTC(2022, 2, 31, 6),0],[Date.UTC(2022, 2, 31, 7), 10.14],
          [Date.UTC(2022, 2, 31, 8), 33.15],[Date.UTC(2022, 2, 31, 9), 46.62],
          [Date.UTC(2022, 2, 31, 10), 53.36],[Date.UTC(2022, 2, 31, 11), 56.88],
          [Date.UTC(2022, 2, 31, 12), 57.00],[Date.UTC(2022, 2, 31, 13), 54.04],
          [Date.UTC(2022, 2, 31, 14), 42.18],[Date.UTC(2022, 2, 31, 15), 37.39],
          [Date.UTC(2022, 2, 31, 16), 31.58],[Date.UTC(2022, 2, 31, 17), 13.9],
          [Date.UTC(2022, 2, 31, 18), 1.08],[Date.UTC(2022, 2, 31, 19), 0],
          [Date.UTC(2022, 2, 31, 20), 0],[Date.UTC(2022, 2, 31, 21), 0],
          [Date.UTC(2022, 2, 31, 22), 0],[Date.UTC(2022, 2, 31, 23), 0],
           ]
           
    },

    
    {
      name: [("Guaimbé - 30/03")],
      data: [
        [Date.UTC(2022, 2, 30, 00), 0],[Date.UTC(2022, 2, 30, 1), 0],[
          Date.UTC(2022, 2, 30, 2), 0],[Date.UTC(2022, 2, 30, 3), 0],
          [Date.UTC(2022, 2, 30, 4), 0],[Date.UTC(2022, 2, 30, 5), 0],
          [Date.UTC(2022, 2, 30, 6), 1.267],[Date.UTC(2022, 2, 30, 7), 23.458],
          [Date.UTC(2022, 2, 30, 8), 61.60],[Date.UTC(2022, 2, 30, 9), 94.36],
          [Date.UTC(2022, 2, 30, 10), 116.16],[Date.UTC(2022, 2, 30, 11), 114.23],
          [Date.UTC(2022, 2, 30, 12), 80.58],[Date.UTC(2022, 2, 30, 13), 89.13],
          [Date.UTC(2022, 2, 30, 14), 78.53],[Date.UTC(2022, 2, 30, 15), 60.72],
          [Date.UTC(2022, 2, 30, 16), 44.94],[Date.UTC(2022, 2, 30, 17), 12.39],
          [Date.UTC(2022, 2, 30, 18), 0.59],[Date.UTC(2022, 2, 30, 19), 0],
          [Date.UTC(2022, 2, 30, 20), 0],[Date.UTC(2022, 2, 30, 21), 0],
          [Date.UTC(2022, 2, 30, 22), 0],[Date.UTC(2022, 2, 30, 23), 0],
           ]
        
    },


    {
      name: [("Média Guaimbé <br> 03/22")],
      data: [
        [Date.UTC(2022, 2, 30, 00),0],[Date.UTC(2022, 2, 30, 1), 0],
          [Date.UTC(2022, 2, 30, 2), 0],[Date.UTC(2022, 2, 30, 3), 0],
          [Date.UTC(2022, 2, 30, 4), 0],[Date.UTC(2022, 2, 30, 5), 0],
          [Date.UTC(2022, 2, 30, 6),1.14],[Date.UTC(2022, 2, 30, 7), 17.06],
          [Date.UTC(2022, 2, 30, 8), 45.81],[Date.UTC(2022, 2, 30, 9), 74.24],
          [Date.UTC(2022, 2, 30, 10), 91.72],[Date.UTC(2022, 2, 30, 11), 104.15],
          [Date.UTC(2022, 2, 30, 12), 103.91],[Date.UTC(2022, 2, 30, 13), 99.53],
          [Date.UTC(2022, 2, 30, 14), 87.38],[Date.UTC(2022, 2, 30, 15), 70.50],
          [Date.UTC(2022, 2, 30, 16), 42.798],[Date.UTC(2022, 2, 30, 17), 14.07],
          [Date.UTC(2022, 2, 30, 18), 1.019],[Date.UTC(2022, 2, 30, 19), 0],
          [Date.UTC(2022, 2, 30, 20), 0],[Date.UTC(2022, 2, 30, 21), 0],
          [Date.UTC(2022, 2, 30, 22), 0],[Date.UTC(2022, 2, 30, 23), 0],
           ]
           
    },
    {
      name: [("Guaimbé - 31/03")],
      data: [
        
        
           [Date.UTC(2022, 2, 31, 00), 0],[Date.UTC(2022, 2, 31, 01), 0],
           [Date.UTC(2022, 2, 31, 02), 0],[Date.UTC(2022, 2, 31, 03),0],
           [Date.UTC(2022, 2, 31, 04), 0],[Date.UTC(2022, 2, 31, 05), 0],
           [Date.UTC(2022, 2, 31, 06), 1.339],[Date.UTC(2022, 2, 31, 07), 26.61],
           [Date.UTC(2022, 2, 31, 08), 59.21],[Date.UTC(2022, 2, 31, 09), 79.9],
            [Date.UTC(2022, 2, 31, 10), 92.56],[Date.UTC(2022, 2, 31, 11),126.07],
            [Date.UTC(2022, 2, 31, 12),53.25],[Date.UTC(2022, 2, 31, 13), 9.25],
            [Date.UTC(2022, 2, 31, 14), 4.98],[Date.UTC(2022, 2, 31, 15), 2.41],
            [Date.UTC(2022, 2, 31, 16), 2.33],[Date.UTC(2022, 2, 31, 17), 0.08],[
              Date.UTC(2022, 2, 31, 18), 0],[Date.UTC(2022, 2, 31, 19), 0],
              [Date.UTC(2022, 2, 31, 20), 0],[Date.UTC(2022, 2, 31, 21), 0],[
                Date.UTC(2022, 2, 31, 22), 0],[Date.UTC(2022, 2, 31, 23), 0],
        ]
    },    

    
    {
      name: [("Média Guaimbé <br> 03/22")],
      data: [
        [Date.UTC(2022, 2, 31, 00),0],[Date.UTC(2022, 2, 31, 1), 0],
          [Date.UTC(2022, 2, 31, 2), 0],[Date.UTC(2022, 2, 31, 3), 0],
          [Date.UTC(2022, 2, 31, 4), 0],[Date.UTC(2022, 2, 31, 5), 0],
          [Date.UTC(2022, 2, 31, 6),1.14],[Date.UTC(2022, 2, 31, 7), 17.06],
          [Date.UTC(2022, 2, 31, 8), 45.81],[Date.UTC(2022, 2, 31, 9), 74.24],
          [Date.UTC(2022, 2, 31, 10), 91.72],[Date.UTC(2022, 2, 31, 11), 104.15],
          [Date.UTC(2022, 2, 31, 12), 103.91],[Date.UTC(2022, 2, 31, 13), 99.53],
          [Date.UTC(2022, 2, 31, 14), 87.38],[Date.UTC(2022, 2, 31, 15), 70.50],
          [Date.UTC(2022, 2, 31, 16), 42.798],[Date.UTC(2022, 2, 31, 17), 14.07],
          [Date.UTC(2022, 2, 31, 18), 1.019],[Date.UTC(2022, 2, 31, 19), 0],
          [Date.UTC(2022, 2, 31, 20), 0],[Date.UTC(2022, 2, 31, 21), 0],
          [Date.UTC(2022, 2, 31, 22), 0],[Date.UTC(2022, 2, 31, 23), 0],
           ]
           
    },


    
        
  ]


  
});

Highcharts.setOptions({
    lang: {
        months: ['Jan', 'Fév', 'Mar', 'Abr', 'Mai', 'Jun',  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    }
});
Highcharts.chart('container3', {
  chart: {
    type: 'scatter',
    
  },
  title: {
    text: 'Icaraí - Média, máximas e picos'
  },
  subtitle: {
    text: 'Energia Eólica produzida em MWmed - referente ao mês de Março de 2022.'
  },
  xAxis: {
    alternateGrid: 'true',
    styledMode: 'true',
    type: 'datetime',
    alternateGridColor: '#FBFDFF',
    
   
    

    dateTimeLabelFormats: { // don't display the year
      month: '%e. %b',
      year: '%b',
      
    },
    title: {
      text: 'Data'
      
      
    }
  },
  yAxis: {
    
    title: {
      text: 'Geração(MWmed)',
      style: {
                color: 'grey'
            },  
    },
    
  },
  //tooltip: {
    //headerFormat: '<b>{series.name}</b><br>',
    //pointFormat: '{point.x:%e. %b}: {point.y:.2f} MWmed'  
  //},

  tooltip: {
    
        pointFormat: '{series.name}: <b>{point.y:.2f} MWmed</b><br/>',
        valueSuffix: ' MWmed',
        shared: true,
    },


  plotOptions: {
    series: {
      marker: {
        enabled: true,
        radius: 2.5,
         inside: true,
      }
    }
  },

  colors: ['#FF6A4A', '#3772BA', '#239B56', '#FF6A4A', '#239B56','#FF6A4A', '#239B56', '#FF6A4A'],

  // Define the data points. All series have a year of 20222022/71 in order
  // to be compared on the same x axis. Note that in JavaScript, months start
  // at 0 for January, 1 for February etc.
  series: [
    

    {
      name: [("Icarai - Média")],
      showInLegend: true,
      type:"line",
      
      
      data: [
        [Date.UTC(2022, 2, '', 00),15.236],[Date.UTC(2022, 2, '', 1), 10.756],
          [Date.UTC(2022, 2, '', 2), 9.637],[Date.UTC(2022, 2, '', 3), 8.585],
          [Date.UTC(2022, 2, '', 4), 8.8],[Date.UTC(2022, 2, '', 5), 9.456],
          [Date.UTC(2022, 2, '', 6),11.889],[Date.UTC(2022, 2, '', 7), 9.743],
          [Date.UTC(2022, 2, '', 8), 8.401],[Date.UTC(2022, 2, '', 9), 16.278],
          [Date.UTC(2022, 2, '', 10), 22.7117],[Date.UTC(2022, 2, '', 11), 31.850],
          [Date.UTC(2022, 2, '', 12), 34.856],[Date.UTC(2022, 2, '', 13), 37.771],
          [Date.UTC(2022, 2, '', 14), 37.033],[Date.UTC(2022, 2, '', 15), 31.910],
          [Date.UTC(2022, 2, '', 16), 28.5],[Date.UTC(2022, 2, '', 17), 23.81],
          [Date.UTC(2022, 2, '', 18), 21.5],[Date.UTC(2022, 2, '', 19), 20.75],
          [Date.UTC(2022, 2, '', 20), 18.5],[Date.UTC(2022, 2, '', 21), 16.056],
          [Date.UTC(2022, 2, '', 22), 17.768],[Date.UTC(2022, 2, '', 23), 16.011],
           ]
           
    },
    {
      
      name: [("Icaraí - Banda superior")],
      type:"line",
      
      
      data: [
        [Date.UTC(2022, 2, '', 00), 49.052214],[Date.UTC(2022, 2, '', 1), 35.860593],[
          Date.UTC(2022, 2, '', 2), 30.875333],[Date.UTC(2022, 2, '', 3), 26.730744],
          [Date.UTC(2022, 2, '', 4), 23.521892],[Date.UTC(2022, 2, '', 5),   24.902830],
          [Date.UTC(2022, 2, '', 6),  33.076802],[Date.UTC(2022, 2, '', 7),   46.427456],
          [Date.UTC(2022, 2, '', 8),  28.438202],[Date.UTC(2022, 2, '', 9),  50.262425],
          [Date.UTC(2022, 2, '', 10),63.507733],[Date.UTC(2022, 2, '', 11), 75.350926],
          [Date.UTC(2022, 2, '', 12), 80.142792],[Date.UTC(2022, 2, '', 13), 92.436686],
          [Date.UTC(2022, 2, '', 14), 97.049528],[Date.UTC(2022, 2, '', 15), 89.064622],
          [Date.UTC(2022, 2, '', 16), 84.937532],[Date.UTC(2022, 2, '', 17), 68.553161],
          [Date.UTC(2022, 2, '', 18), 57.789710],[Date.UTC(2022, 2, '', 19), 58.174423],
          [Date.UTC(2022, 2, '', 20), 51.177688],[Date.UTC(2022, 2, '', 21), 44.962705],
          [Date.UTC(2022, 2, '', 22), 54.220823],[Date.UTC(2022, 2, '', 23), 47.912453],
           ]
        
    },

    {
      
      name: [("Icaraí - 30/03")],
      type:"line",
      
      
      data: [
        [Date.UTC(2022, 2, '', 00), 0.547],[Date.UTC(2022, 2, '', 1), 3.64],[
          Date.UTC(2022, 2, '', 2), 14.71],[Date.UTC(2022, 2, '', 3), 18.477],
          [Date.UTC(2022, 2, '', 4), 13.477],[Date.UTC(2022, 2, '', 5), 9.87],
          [Date.UTC(2022, 2, '', 6), 32.69],[Date.UTC(2022, 2, '', 7), 100.2],
          [Date.UTC(2022, 2, '', 8), 40.10],[Date.UTC(2022, 2, '', 9), 59.16],
          [Date.UTC(2022, 2, '', 10), 25.9],[Date.UTC(2022, 2, '', 11), 9.949],
          [Date.UTC(2022, 2, '', 12), 14.44],[Date.UTC(2022, 2, '', 13), 12.98],
          [Date.UTC(2022, 2, '', 14), 0.6],[Date.UTC(2022, 2, '', 15), 7.14],
          [Date.UTC(2022, 2, '', 16), 22.79],[Date.UTC(2022, 2, '', 17), 45.66],
          [Date.UTC(2022, 2, '', 18), 43.81],[Date.UTC(2022, 2, '', 19), 42.12],
          [Date.UTC(2022, 2, '', 20), 18.38],[Date.UTC(2022, 2, '', 21), 20.57],
          [Date.UTC(2022, 2, '', 22), 15.96],[Date.UTC(2022, 2, '', 23), 22.5],
           ]
        
    },
    
         
  ]


  
});

Highcharts.setOptions({
    lang: {
        months: ['Jan', 'Fév', 'Mar', 'Abr', 'Mai', 'Jun',  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    }
});
Highcharts.chart('container4', {
  chart: {
    type: 'scatter',
    
  },
  title: {
    text: 'Praia Formosa - Média, máximas e picos'
  },
  subtitle: {
    text: 'Energia Eólica produzida em MWmed - referente ao mês de Março de 2022.'
  },
  xAxis: {
    alternateGrid: 'true',
    styledMode: 'true',
    type: 'datetime',
    alternateGridColor: '#FBFDFF',
    
   
    

    dateTimeLabelFormats: { // don't display the year
      month: '%e. %b',
      year: '%b',
      
    },
    title: {
      text: 'Data'
      
      
    }
  },
  yAxis: {
    
    title: {
      text: 'Geração(MWmed)',
      style: {
                color: 'grey'
            },  
    },
    
  },
  //tooltip: {
    //headerFormat: '<b>{series.name}</b><br>',
    //pointFormat: '{point.x:%e. %b}: {point.y:.2f} MWmed'  
  //},

  tooltip: {
    
        pointFormat: '{series.name}: <b>{point.y:.2f} MWmed</b><br/>',
        valueSuffix: ' MWmed',
        shared: true,
    },


  plotOptions: {
    series: {
      marker: {
        enabled: true,
        radius: 2.5,
         inside: true,
      }
    }
  },

  colors: ['#FF6A4A', '#3772BA', '#239B56', '#FF6A4A', '#239B56','#FF6A4A', '#239B56', '#FF6A4A'],

  // Define the data points. All series have a year of 20222022/71 in order
  // to be compared on the same x axis. Note that in JavaScript, months start
  // at 0 for January, 1 for February etc.
  series: [
    

    {
      name: [("Praia Formosa - Média")],
      showInLegend: true,
      type:"line",
      
      
      data: [
        [Date.UTC(2022, 2, '', 00),1.88],[Date.UTC(2022, 2, '', 1), 2.29],
          [Date.UTC(2022, 2, '', 2), 2.257],[Date.UTC(2022, 2, '', 3), 2.58],
          [Date.UTC(2022, 2, '', 4), 3.60],[Date.UTC(2022, 2, '', 5), 5.31],
          [Date.UTC(2022, 2, '', 6),5.7],[Date.UTC(2022, 2, '', 7), 2.28],
          [Date.UTC(2022, 2, '', 8), 2.39],[Date.UTC(2022, 2, '', 9), 3.754],
          [Date.UTC(2022, 2, '', 10), 7.838],[Date.UTC(2022, 2, '', 11), 8.948],
          [Date.UTC(2022, 2, '', 12), 14.204],[Date.UTC(2022, 2, '', 13), 15.97],
          [Date.UTC(2022, 2, '', 14), 21.2],[Date.UTC(2022, 2, '', 15), 17.3],
          [Date.UTC(2022, 2, '', 16), 17.68],[Date.UTC(2022, 2, '', 17), 17.0],
          [Date.UTC(2022, 2, '', 18), 16.15],[Date.UTC(2022, 2, '', 19), 13.3],
          [Date.UTC(2022, 2, '', 20), 10.2],[Date.UTC(2022, 2, '', 21), 7.88],
          [Date.UTC(2022, 2, '', 22), 5.33],[Date.UTC(2022, 2, '', 23), 3.17]
      ]
    },
    {
      
      name: [("Praia Formosa - Banda superior")],
      type:"line",
      
      
      data: [
        [Date.UTC(2022, 2, '', 00), 10.15412746],[Date.UTC(2022, 2, '', 1), 10.43646437],[
          Date.UTC(2022, 2, '', 2), 8.99141859],[Date.UTC(2022, 2, '', 3), 8.72853392],
          [Date.UTC(2022, 2, '', 4),11.93701331],[Date.UTC(2022, 2, '', 5),  20.868658746],
          [Date.UTC(2022, 2, '', 6),  16.33860352],[Date.UTC(2022, 2, '', 7),   7.90025144],
          [Date.UTC(2022, 2, '', 8),  11.95731551],[Date.UTC(2022, 2, '', 9),  13.99318513],
          [Date.UTC(2022, 2, '', 10),25.75031539],[Date.UTC(2022, 2, '', 11), 28.56075934],
          [Date.UTC(2022, 2, '', 12), 42.78424116],[Date.UTC(2022, 2, '', 13), 45.37199412],
          [Date.UTC(2022, 2, '', 14), 57.9986187],[Date.UTC(2022, 2, '', 15), 50.166802],
          [Date.UTC(2022, 2, '', 16), 54.72367396],[Date.UTC(2022, 2, '', 17), 58.23002262],
          [Date.UTC(2022, 2, '', 18), 59.39385421],[Date.UTC(2022, 2, '', 19), 50.72588148],
          [Date.UTC(2022, 2, '', 20), 43.0789696],[Date.UTC(2022, 2, '', 21),36.02633784],
          [Date.UTC(2022, 2, '', 22), 21.31908217],[Date.UTC(2022, 2, '', 23), 14.23465249],
           ]
        
    },

    {
      
      name: [("Praia Formosa - 18/03")],
      type:"line",
      
      
      data: [
        [Date.UTC(2022, 2, '', 00), 1.148],[Date.UTC(2022, 2, '', 1), 3.777],[
          Date.UTC(2022, 2, '', 2), 3.303],[Date.UTC(2022, 2, '', 3), 1.907],
          [Date.UTC(2022, 2, '', 4), 3.528],[Date.UTC(2022, 2, '', 5), 10.365],
          [Date.UTC(2022, 2, '', 6), 13.529],[Date.UTC(2022, 2, '', 7), 4.655],
          [Date.UTC(2022, 2, '', 8), 4.298],[Date.UTC(2022, 2, '', 9), 10.729],
          [Date.UTC(2022, 2, '', 10), 8.816],[Date.UTC(2022, 2, '', 11), 25.538],
          [Date.UTC(2022, 2, '', 12), 11.711],[Date.UTC(2022, 2, '', 13), 16.915],
          [Date.UTC(2022, 2, '', 14), 47.274],[Date.UTC(2022, 2, '', 15), 33.114],
          [Date.UTC(2022, 2, '', 16), 36.493],[Date.UTC(2022, 2, '', 17), 57.417],
          [Date.UTC(2022, 2, '', 18), 57.773],[Date.UTC(2022, 2, '', 19), 57.856],
          [Date.UTC(2022, 2, '', 20), 57.856],[Date.UTC(2022, 2, '', 21), 57.856],
          [Date.UTC(2022, 2, '', 22), 20.994],[Date.UTC(2022, 2, '', 23), 5.39],
           ]
        
    },
    
         
  ]


  
});

Highcharts.setOptions({
    lang: {
        months: ['Jan', 'Fév', 'Mar', 'Abr', 'Mai', 'Jun',  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    }
});
Highcharts.chart('container5', {
  chart: {
    type: 'scatter',
    
  },
  title: {
    text: 'Dracena - Média, máximas e picos'
  },
  subtitle: {
    text: 'Energia Solar produzida em MWmed - referente ao mês de Março de 2022.'
  },
  xAxis: {
    alternateGrid: 'true',
    styledMode: 'true',
    type: 'datetime',
    alternateGridColor: '#FBFDFF',
    
   
    

    dateTimeLabelFormats: { // don't display the year
      month: '%e. %b',
      year: '%b',
      
    },
    title: {
      text: 'Data'
      
      
    }
  },
  yAxis: {
    
    title: {
      text: 'Geração(MWmed)',
      style: {
                color: 'grey'
            },  
    },
    
  },
  //tooltip: {
    //headerFormat: '<b>{series.name}</b><br>',
    //pointFormat: '{point.x:%e. %b}: {point.y:.2f} MWmed'  
  //},

  tooltip: {
    
        pointFormat: '{series.name}: <b>{point.y:.2f} MWmed</b><br/>',
        valueSuffix: ' MWmed',
        shared: true,
    },


  plotOptions: {
    series: {
      marker: {
        enabled: true,
        radius: 2.5,
         inside: true,
      }
    }
  },

  colors: ['#FF6A4A', '#3772BA', '#239B56', '#FF6A4A', '#239B56','#FF6A4A', '#239B56', '#FF6A4A'],

  // Define the data points. All series have a year of 20222022/71 in order
  // to be compared on the same x axis. Note that in JavaScript, months start
  // at 0 for January, 1 for February etc.
  series: [
    

    {
      name: [("Dracena - Média")],
      showInLegend: true,
      type:"line",
      
      
      data: [
        [Date.UTC(2022, 2,'', 00),0],[Date.UTC(2022, 2,'', 1), 0],
          [Date.UTC(2022, 2,'', 2), 0],[Date.UTC(2022, 2,'', 3), 0],
          [Date.UTC(2022, 2,'', 4), 0],[Date.UTC(2022, 2,'', 5), 0],
          [Date.UTC(2022, 2,'', 6),0],[Date.UTC(2022, 2,'', 7), 10.14],
          [Date.UTC(2022, 2,'', 8), 33.15],[Date.UTC(2022, 2,'', 9), 46.62],
          [Date.UTC(2022, 2,'', 10), 53.36],[Date.UTC(2022, 2,'', 11), 56.88],
          [Date.UTC(2022, 2,'', 12), 57.00],[Date.UTC(2022, 2,'', 13), 54.04],
          [Date.UTC(2022, 2,'', 14), 42.18],[Date.UTC(2022, 2,'', 15), 37.39],
          [Date.UTC(2022, 2,'', 16),30.58],[Date.UTC(2022, 2,'', 17), 13.9],
          [Date.UTC(2022, 2,'', 18), 1.08],[Date.UTC(2022, 2,'', 19), 0],
          [Date.UTC(2022, 2,'', 20), 0],[Date.UTC(2022, 2,'', 21), 0],
          [Date.UTC(2022, 2,'', 22), 0],[Date.UTC(2022, 2,'', 23), 0],
           ]
           
    },
    {
      
      name: [("Dracena - Banda superior")],
      type:"line",
      
      
      data: [
        [Date.UTC(2022, 2, '', 00), 0.00000000],[Date.UTC(2022, 2, '', 1), 0.00000000],[
          Date.UTC(2022, 2, '', 2), 0.00000000],[Date.UTC(2022, 2, '', 3), 0.00000000],
          [Date.UTC(2022, 2, '', 4), 0.00000000],[Date.UTC(2022, 2, '', 5),   27.60341086],
          [Date.UTC(2022, 2, '', 6),  44.47622197],[Date.UTC(2022, 2, '', 7),   43.96111280],
          [Date.UTC(2022, 2, '', 8),  58.02475130],[Date.UTC(2022, 2, '', 9),  59.04329861],
          [Date.UTC(2022, 2, '', 10),68.91620332],[Date.UTC(2022, 2, '', 11), 68.38483736],
          [Date.UTC(2022, 2, '', 12), 58.43606280],[Date.UTC(2022, 2, '', 13), 58.51045276],
          [Date.UTC(2022, 2, '', 14), 49.21165719],[Date.UTC(2022, 2, '', 15), 48.51358415],
          [Date.UTC(2022, 2, '', 16), 47.63866686],[Date.UTC(2022, 2, '', 17), 34.84544109],
          [Date.UTC(2022, 2, '', 18), 31.07323366],[Date.UTC(2022, 2, '', 19), 1.88562310],
          [Date.UTC(2022, 2, '', 20), 0.00000000],[Date.UTC(2022, 2, '', 21), 0.00000000],
          [Date.UTC(2022, 2, '', 22), 0.00000000],[Date.UTC(2022, 2, '', 23), 0.00000000],
           ]
        
    },

    {
      
      name: [("Dracena - 05/03")],
      type:"line",
      
      
      data: [
        [Date.UTC(2022, 2, '', 00), 0],[Date.UTC(2022, 2, '', 1), 0],[
          Date.UTC(2022, 2, '', 2), 0],[Date.UTC(2022, 2, '', 3), 0],
          [Date.UTC(2022, 2, '', 4), 0],[Date.UTC(2022, 2, '', 5), 0],
          [Date.UTC(2022, 2, '', 6), 0.423],[Date.UTC(2022, 2, '', 7), 19.426],
          [Date.UTC(2022, 2, '', 8), 52.366],[Date.UTC(2022, 2, '', 9), 63.896],
          [Date.UTC(2022, 2, '', 10), 68.26],[Date.UTC(2022, 2, '', 11), 68.805],
          [Date.UTC(2022, 2, '', 12), 68.82],[Date.UTC(2022, 2, '', 13), 62.269],
          [Date.UTC(2022, 2, '', 14), 58.711],[Date.UTC(2022, 2, '', 15), 10.843],
          [Date.UTC(2022, 2, '', 16), 5.428],[Date.UTC(2022, 2, '', 17), 10.274],
          [Date.UTC(2022, 2, '', 18), 2.563],[Date.UTC(2022, 2, '', 19), 0],
          [Date.UTC(2022, 2, '', 20), 0],[Date.UTC(2022, 2, '', 21), 0],
          [Date.UTC(2022, 2, '', 22), 0],[Date.UTC(2022, 2, '', 23), 0],
           ]
        
    },
    
         
  ]


  
});

Highcharts.setOptions({
    lang: {
        months: ['Jan', 'Fév', 'Mar', 'Abr', 'Mai', 'Jun',  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    }
});
Highcharts.chart('container6', {
  chart: {
    type: 'scatter',
    
  },
  title: {
    text: 'Getulina - Conj. Guaimbé - Média, máximas e picos'
  },
  subtitle: {
    text: 'Energia Solar produzida em MWmed - referente ao mês de Março de 2022.'
  },
  xAxis: {
    alternateGrid: 'true',
    styledMode: 'true',
    type: 'datetime',
    alternateGridColor: '#FBFDFF',
    
   
    

    dateTimeLabelFormats: { // don't display the year
      month: '%e. %b',
      year: '%b',
      
    },
    title: {
      text: 'Data'
      
      
    }
  },
  yAxis: {
    
    title: {
      text: 'Geração (MWmed)',
      style: {
                color: 'grey'
            },  
    },
    
  },
  //tooltip: {
    //headerFormat: '<b>{series.name}</b><br>',
    //pointFormat: '{point.x:%e. %b}: {point.y:.2f} MWmed'  
  //},

  tooltip: {
    
        pointFormat: '{series.name}: <b>{point.y:.2f} MWmed</b><br/>',
        valueSuffix: ' MWmed',
        shared: true,
    },


  plotOptions: {
    series: {
      marker: {
        enabled: true,
        radius: 2.5,
         inside: true,
      }
    }
  },

  colors: ['#FF6A4A', '#3772BA', '#239B56', '#FF6A4A', '#239B56','#FF6A4A', '#239B56', '#FF6A4A'],

  // Define the data points. All series have a year of 20222022/71 in order
  // to be compared on the same x axis. Note that in JavaScript, months start
  // at 0 for January, 1 for February etc.
  series: [
    

    {
      name: [("Conj. Guaimbé - Média")],
      showInLegend: true,
      type:"line",
      
      
      data: [
        [Date.UTC(2022, 2, '', 00),0],[Date.UTC(2022, 2, '', 1), 0],
          [Date.UTC(2022, 2, '', 2), 0],[Date.UTC(2022, 2, '', 3), 0],
          [Date.UTC(2022, 2, '', 4), 0],[Date.UTC(2022, 2, '', 5), 0],
          [Date.UTC(2022, 2, '', 6),19.837232838709674],[Date.UTC(2022, 2, '', 7), 17.06],
          [Date.UTC(2022, 2, '', 8), 45.81],[Date.UTC(2022, 2, '', 9), 74.24],
          [Date.UTC(2022, 2, '', 10), 91.72],[Date.UTC(2022, 2, '', 11), 104.15],
          [Date.UTC(2022, 2, '', 12), 103.91],[Date.UTC(2022, 2, '', 13), 99.53],
          [Date.UTC(2022, 2, '', 14), 87.38],[Date.UTC(2022, 2, '', 15), 70.50],
          [Date.UTC(2022, 2, '', 16), 42.798],[Date.UTC(2022, 2, '', 17), 14.07],
          [Date.UTC(2022, 2, '', 18), 1.019],[Date.UTC(2022, 2, '', 19), 0],
          [Date.UTC(2022, 2, '', 20), 0],[Date.UTC(2022, 2, '', 21), 0],
          [Date.UTC(2022, 2, '', 22), 0],[Date.UTC(2022, 2, '', 23), 0],
           ]
           
    },
    {
      
      name: [("Conj. Guaimbé - Banda superior")],
      type:"line",
      
      
      data: [
        [Date.UTC(2022, 2, '', 00), 0],[Date.UTC(2022, 2, '', 1), 0],[
          Date.UTC(2022, 2, '', 2), 0],[Date.UTC(2022, 2, '', 3), 0],
          [Date.UTC(2022, 2, '', 4), 0],[Date.UTC(2022, 2, '', 5),   0],
          [Date.UTC(2022, 2, '', 6),  0.7999442],[Date.UTC(2022, 2, '', 7),   7.7376054],
          [Date.UTC(2022, 2, '', 8),  17.698802],[Date.UTC(2022, 2, '', 9),  152.14449995],
          [Date.UTC(2022, 2, '', 10),180.44048952],[Date.UTC(2022, 2, '', 11), 192.50604483],
          [Date.UTC(2022, 2, '', 12), 180.45127485],[Date.UTC(2022, 2, '', 13), 175.83689761],
          [Date.UTC(2022, 2, '', 14), 148.00033089],[Date.UTC(2022, 2, '', 15), 117.04096597],
          [Date.UTC(2022, 2, '', 16), 72.42073509],[Date.UTC(2022, 2, '', 17), 24.3596361],
          [Date.UTC(2022, 2, '', 18), 3.11666068],[Date.UTC(2022, 2, '', 19), 0],
          [Date.UTC(2022, 2, '', 20), 0],[Date.UTC(2022, 2, '', 21), 0],
          [Date.UTC(2022, 2, '', 22), 0],[Date.UTC(2022, 2, '', 23), 0],
           ]
        
    },

    {
      
      name: [("Conj. Guaimbé - 21/03")],
      type:"line",
      
      
      data: [
        [Date.UTC(2022, 2, '', 00), 0],[Date.UTC(2022, 2, '', 1), 0],[
          Date.UTC(2022, 2, '', 2), 0],[Date.UTC(2022, 2, '', 3), 0],
          [Date.UTC(2022, 2, '', 4), 0],[Date.UTC(2022, 2, '', 5), 0],
          [Date.UTC(2022, 2, '', 6), 0.806],[Date.UTC(2022, 2, '', 7), 16.618],
          [Date.UTC(2022, 2, '', 8), 68.299],[Date.UTC(2022, 2, '', 9), 102.485],
          [Date.UTC(2022, 2, '', 10), 126],[Date.UTC(2022, 2, '', 11), 138.946],
          [Date.UTC(2022, 2, '', 12), 142.171],[Date.UTC(2022, 2, '', 13), 137.563],
          [Date.UTC(2022, 2, '', 14), 121.752],[Date.UTC(2022, 2, '', 15), 82.037],
          [Date.UTC(2022, 2, '', 16), 49.104],[Date.UTC(2022, 2, '', 17), 14.846],
          [Date.UTC(2022, 2, '', 18), 1.166],[Date.UTC(2022, 2, '', 19), 0],
          [Date.UTC(2022, 2, '', 20), 0],[Date.UTC(2022, 2, '', 21), 0],
          [Date.UTC(2022, 2, '', 22), 0],[Date.UTC(2022, 2, '', 23), 0],
           ]
        
    },
    
         
  ]


  
});


console.log(
       'Current time in Brasília',
       chart.time.dateFormat('%Y-%m-%d %H:%M:%S', Date.now())
);
