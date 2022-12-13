




// Data retrieved from https://www.vikjavev.no/ver/snjomengd
Highcharts.setOptions({
    lang: {
        months: ['Jan', 'Fév', 'Mar', 'Abr', 'Mai', 'Jun',  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        weekdays: ['Dom', 'Seg', ']Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
       
        
    }
});
Highcharts.chart('container', {
  chart: {
    type: 'spline',
    
  },
  
  title: {
    text: 'Geração de energia Eólica por Usina (MWmed)'
  },
  subtitle: {
    text: 'Energia Eólica gerada a cada hora do dia - (30/03/22 & 31/03/22)'
  },
  xAxis: {
    credits: {
    enabled: 'false'
},
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
    credits: {
    enabled: 'false'
},
    
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
        symbol: 'circle',
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
          [Date.UTC(2022, 2, 30, 6), 32.69],[Date.UTC(2022, 2, 30, 7), 100.2, ],
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
        symbol: 'circle',
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
Highcharts.chart("container3", {
                chart: {
                    type: "spline",
                    
                },
  
  
  title: {
    text: 'Icaraí - Média, banda superior e picos'
  },
  subtitle: {
    text: 'Energia Eólica produzida em MWmed - referente ao mês de Março de 2022.'
  },
  xAxis: {     
    //crosshair: true,
    alternateGrid: 'true',
    styledMode: 'true',
    type: 'datetime',
    alternateGridColor: '#FBFDFF',
    
    dateTimeLabelFormats: { // don't display the year
      month: '%e. %b',
      year: '%b',
    },
    title: {
      text: ''
       
    }
  },
  yAxis: {
    
    
    title: {
      text: 'Geração(MWmed)',
       
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
      
      
      
      events: {
                //click: function () {
                    //alert('blablabla');
                //}
            },
         
          marker: {
         
          enabled: false,
          radius: 3.5,
          inside: true,
         
      }
      
    }
  },

  colors: ['#FD0202', '#007DFF', '#09FE00','#09FE00',],

  // Define the data points. All series have a year of 20222022/71 in order
  // to be compared on the same x axis. Note that in JavaScript, months start
  // at 0 for January, 1 for February etc.
  series: [
        
    {
        
            
        name: [("Icarai - Média")],
        
        type:"spline",
        color:'#EBDAF0',
      
        data: [15.236,10.756,9.637,8.585,8.8,9.456,11.889,9.743,8.401,16.278,22.7117,31.850,34.856,37.771,37.033,31.910,28.5,23.81,21.5,20.75,18.5,16.056,17.768,16.011,],
        pointStart: Date.UTC(2022, 2, 30),
        pointInterval: 3600 * 1000 // one hour
    },
    
    {           
        name: [("Icaraí - Banda superior")],
        
        type:"spline",
        color:'#E23D20',
        
      
        data: [49.052214,35.860593,30.875333,26.730744,23.521892,24.902830,33.076802,46.427456,28.438202,50.262425,63.507733,75.350926,80.142792,92.436686,97.049528,89.064622,84.937532,68.553161,57.789710,58.174423,51.177688,44.962705,54.220823,47.912453,],
        pointStart: Date.UTC(2022, 2, 30),
        pointInterval: 3600 * 1000 // one hour
    },
     
     {
       
              
            
        name: [("Icaraí - 30/03")],
        
        type:"spline",
        color: '#4291E7',


        data: [0.547,3.64,14.71,18.477,13.477,9.87,32.69,{ y:100.2,  marker: { fillColor: 'black', symbol: 'circle',enabled: true, radius: 5.5,}},{y:40.10,marker: { fillColor: 'black', symbol: 'circle',enabled: true, radius: 5.5,}},{y:59.16, marker: { fillColor: 'black', symbol: 'circle',enabled: true, radius: 5.5,}},25.9,9.949,14.44,12.98,0.6,
        7.14,22.79,45.66,43.81,42.12,18.38,20.57,15.96,22.5],
        pointStart: Date.UTC(2022, 2, 30),
        pointInterval: 3600 * 1000 // one hour
    }


]
});

 Highcharts.setOptions({
    lang: {
        months: ['Jan', 'Fév', 'Mar', 'Abr', 'Mai', 'Jun',  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    }
});
Highcharts.chart("container4", {
                chart: {
                    type: "spline",
                    
                },
  
  
  title: {
    text: 'Icaraí - Média, banda superior e picos'
  },
  subtitle: {
    text: 'Energia Eólica produzida em MWmed - referente ao mês de Março de 2022.'
  },
  xAxis: {     
    //crosshair: true,
    alternateGrid: 'true',
    styledMode: 'true',
    type: 'datetime',
    alternateGridColor: '#FBFDFF',
    
    dateTimeLabelFormats: { // don't display the year
      month: '%e. %b',
      year: '%b',
    },
    title: {
      text: ''
       
    }
  },
  yAxis: {
    
    
    title: {
      text: 'Geração(MWmed)',
       
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
      
      
      
      events: {
                //click: function () {
                    //alert('blablabla');
                //}
            },
         
          marker: {
         
          enabled: false,
          radius: 3.5,
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
        
        type:"spline",
        color:'#EBDAF0',
      
        data: [1.88,2.29,2.257,2.58,3.60,5.31,5.7,2.28,2.39,3.754,7.838,8.948,14.204,15.97,21.2,17.3,17.68,17.0,16.15,13.3,10.2,7.88,5.33,3.17,],
        pointStart: Date.UTC(2022, 2, 18),
        pointInterval: 3600 * 1000 // one hour
    },
  {     
        name: [("Praia Formosa - Banda superior")],
        
        type:"spline",
        color:'#E23D20',

        
      
        data: [10.15412746,10.43646437,8.99141859,8.72853392,11.93701331,20.868658746,16.33860352,7.90025144,11.95731551,13.99318513,25.75031539,28.56075934,42.78424116,45.37199412,57.9986187,50.166802,54.72367396,58.23002262,59.39385421,50.72588148,43.0789696,36.02633784,21.31908217,14.23465249,],
        pointStart: Date.UTC(2022, 2, 18),
        pointInterval: 3600 * 1000 // one hour
    },
     
     {
       
              
            
        name: [("Praia Formosa - 18/03")],
        
        type:"spline",
        color: '#4291E7',
        
        data: [1.148,3.777,3.303,1.907,3.528,10.365,13.529,4.655,4.298,10.729,8.816,25.538,11.711,16.915,47.274,33.114,36.493,57.417 ,57.773, {y:57.856, marker: { fillColor: 'black', symbol: 'circle',enabled: true, radius: 5.5,}}, {y:57.856, marker: { fillColor: 'black', symbol: 'circle',enabled: true, radius: 5.5,}}, {y:57.856, marker: { fillColor: 'black', symbol: 'circle',enabled: true, radius: 5.5,}},20.994,5.39,],
        pointStart: Date.UTC(2022, 2, 18),
        pointInterval: 3600 * 1000 // one hour
    }


]
});

Highcharts.setOptions({
    lang: {
        months: ['Jan', 'Fév', 'Mar', 'Abr', 'Mai', 'Jun',  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    }
});
Highcharts.chart("container5", {
                chart: {
                    type: "spline",
                    
                },
  
  
  title: {
    text: 'Icaraí - Média, banda superior e picos'
  },
  subtitle: {
    text: 'Energia Eólica produzida em MWmed - referente ao mês de Março de 2022.'
  },
  xAxis: {     
    //crosshair: true,
    alternateGrid: 'true',
    styledMode: 'true',
    type: 'datetime',
    alternateGridColor: '#FBFDFF',
    
    dateTimeLabelFormats: { // don't display the year
      month: '%e. %b',
      year: '%b',
    },
    title: {
      text: ''
       
    }
  },
  yAxis: {
    
    
    title: {
      text: 'Geração(MWmed)',
       
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
      
      
      
      events: {
                //click: function () {
                    //alert('blablabla');
                //}
            },
         
          marker: {
         
          enabled: false,
          radius: 3.5,
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
        
        type:"spline",
        color:'#EBDAF0',
      
        data: [0,0,0,0,0,0,0,10.14,33.15,46.62,53.36,56.88,57.00,54.04,42.18,37.39,30.58,13.9,1.08,0,0,0,0,0],
        pointStart: Date.UTC(2022, 2, 5),
        pointInterval: 3600 * 1000 // one hour
    },
  {     
        name: [("Dracena - Banda superior")],
        
        type:"spline",
        color:'#E23D20',
        
      
        data: [0,0,0,0,0,15,19.4,62,67.6,69.2,68.4,60,59,56.9,51,55,37,16.0,2,0,0,0,0],
        pointStart: Date.UTC(2022, 2, 5),
        pointInterval: 3600 * 1000 // one hour
    },
     
     {
       
              
            
        name: [("Dracena - 05/03")],
        
        type:"spline",
         color: '#4291E7',
        data: [0,0,0,0,0,0.423,19.426,52.366,63.896,68.26,{y:68.805, marker: { fillColor: 'black', symbol: 'circle',enabled: true, radius: 5.5,}},{y:68.82, marker: { fillColor: 'black', symbol: 'circle',enabled: true, radius: 5.5,}},{y:62.269, marker: { fillColor: 'black', symbol: 'circle',enabled: true, radius: 5.5,}},58.711,10.843,5.428,10.274,2.563,0,0,0,0,0],
        pointStart: Date.UTC(2022, 2, 5),
        pointInterval: 3600 * 1000 // one hour
    }


]
});


 Highcharts.setOptions({
    lang: {
        months: ['Jan', 'Fév', 'Mar', 'Abr', 'Mai', 'Jun',  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    }
});
Highcharts.chart("container6", {
                chart: {
                    type: "spline",
                    
                },
  
  
  title: {
    text: 'Icaraí - Média, banda superior e picos'
  },
  subtitle: {
    text: 'Energia Eólica produzida em MWmed - referente ao mês de Março de 2022.'
  },
  xAxis: {     
    //crosshair: true,
    alternateGrid: 'true',
    styledMode: 'true',
    type: 'datetime',
    alternateGridColor: '#FBFDFF',
    
    dateTimeLabelFormats: { // don't display the year
      month: '%e. %b',
      year: '%b',
    },
    title: {
      text: ''
       
    }
  },
  yAxis: {
    
    
    title: {
      text: 'Geração(MWmed)',
       
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
      
      
      
      events: {
                //click: function () {
                    //alert('blablabla');
                //}
            },
         
          marker: {
         
          enabled: false,
          radius: 3.5,
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
        
        type:"spline",
        color:'#EBDAF0',
      
        data: [0,0,0,0,0,0,19.8372,17.06,45.81,74.24,91.72,104.15,103.91,99.53,87.38,70.50,42.798,14.07,1.019,0,0,0,0,0],
        pointStart: Date.UTC(2022, 2, 21),
        pointInterval: 3600 * 1000 // one hour
    },
  {     
        name: [("Conj. Guaimbé - Banda superior")],
        
        type:"spline",
        color:'#E23D20',
        
      
        data: [0,0,0,0,0,0, 0.7999442, 7.7376054,17.698802,152.14449995,180.44048952,192.50604483,180.45127485,175.83689761,148.00033089,117.04096597,72.42073509,24.3596361,3.11666068,0,0,0,0,0],
        pointStart: Date.UTC(2022, 2, 21),
        pointInterval: 3600 * 1000 // one hour
    },
     
     {
       
              
            
        name: [("Conj. Guaimbé - 21/03")],
        
        type:"spline",
         color: '#4291E7',
        data: [0,0,0,0,0,0,0.806,{y:16.618, marker: { fillColor: 'black', symbol: 'circle',enabled: true, radius: 5.5}}, {y:68.299, marker: { fillColor: 'black', symbol: 'circle',enabled: true, radius: 5.5,}},102.485,126,138.946,142.171,137.563,121.752,82.037,49.104,14.846,1.166,0,0,0,0,0],
        pointStart: Date.UTC(2022, 2, 21),
        pointInterval: 3600 * 1000 // one hour
    }


]
});

console.log(
       'Current time in Brasília',
       chart.time.dateFormat('%Y-%m-%d %H:%M:%S', Date.now())
);
