

var drawChart = function(data){
  var height = 200;
  var width = 400;
  var barWidth = width/data.length
  var svg = d3.select("svg")
            .attr("width", width)
            .attr("height", height);

  svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function(d,i){
              return i * barWidth;
            })
            .attr("y", function(d){
              return height - d.num*10;
            })
            .attr("height", function(d){
              return d.num * 10;
            })
            .attr("width", function(d){
              return barWidth;
            })
            .attr("fill", function(d){
              return d.color;
            });
    svg.selectAll(".number text")
    .data(data)
    .enter()
    .append("text")
    .text(function(d){
      return d.num;
    })
    .attr("x", function(d, i){
      return i * barWidth + 25;
    })
    .attr("y", function(d){
      return height - d.num*10 + 8;
    })
    .attr("font-size", "9px")
    .attr("fill", "white");



}



          var dataP = d3.json("colors.json");

          dataP.then(function(data){

            console.log("data", data)
            drawChart(data);

          },
          function(err){
            console.log(err);
          }
          );
