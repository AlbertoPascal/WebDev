window.onload = function () {
    
var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true, 
    data: [{
        type: "doughnut",
        startAngle: 60,
        innerRadius: 65,
        indexLabel: "{x}",

        toolTipContent: "<b>{label}</b> {y} (#percent%)",
        dataPoints: [
            { y: 5000, label: "Cantidad faltante para cumplir meta: $"},
            { y: 250, label: "Cantidad por ahorrar este mes: $"},
            { y: 1500, label: "cantidad ahorrada: $"}
        ]
    }]
});
chart.render();

}