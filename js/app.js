const dashboard_dropdown = document.querySelector(".dropdownMenu");
const dropdown_subMenu = document.querySelector(".sub_menu");


dashboard_dropdown.addEventListener("click", (() => {
    dropdown_subMenu.classList.toggle("showMenu");
}))

//sidebar toggler
const menuToggler = document.getElementById("menu-toggle");
const Wrapper = document.getElementById("wrapper");
menuToggler.addEventListener("click",(e)=> {
    e.preventDefault()
    Wrapper.classList.toggle("toggled");

})

//chart js grouped bar chart
const GroupedChartID = document.getElementById("GroupedChartID");

const myChart = new Chart(GroupedChartID, {
  type: "bar",
  data: {
    labels: ["sun", "mon", "tue", "wed", "thru", "fri", "sat"],
    datasets: [
      {
        label: "sales",
        backgroundColor: "#CDC9C3",
        data: [3, 8, 4, 8, 10, 5, 8],
        borderRadius: 5,
        barThickness: 20,
      },
      {
        label: "income",
        backgroundColor: "#06283D",
        data: [10, 5, 8, 6, 5, 9, 6],
        borderRadius: 5,
        barThickness: 20,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
  },
});


// geo chart
 google.charts.load("current", {
   packages: ["geochart"],
 });
 google.charts.setOnLoadCallback(drawRegionsMap);


 function drawRegionsMap() {
   var data = google.visualization.arrayToDataTable([
     ["Country", "Total Customer"],
     ["Russia", 200],
     ["United States", 300],
     ["India", 400],
     ["Canada", 500],
     ["France", 600],
     ["RU", 700],
   ]);

     var options = {
       colorAxis: { colors: ["#8D72E1"] },
       responsive: true,
     };

   var chart = new google.visualization.GeoChart(
     document.getElementById("regions_div")
   );

   chart.draw(data, options);
 }

 google.charts.load("current", { packages: ["corechart"] });
 google.charts.setOnLoadCallback(drawChart);
   function drawChart() {
     var data = google.visualization.arrayToDataTable([
       ["Website", "Hours per Day"],
       ["Website", 11],
       ["ECommerce", 2],
       ["Instagram", 2],
     ]);

       var options = {
         colors: ["#8D72E1", "#aaa2d8", "#e4d6f8"],
         pieHole: 0.8,
         responsive: true,
       };

     var chart = new google.visualization.PieChart(
       document.getElementById("donutchart")
     );
     chart.draw(data, options);
   }
