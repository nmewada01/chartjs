var ctx, myChart
window.addEventListener("load", function () {
    ctx = document.getElementById("myChart");
    myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "July",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            datasets: [
                {
                    label: "Attendance",
                    data: [100, 80, 65, 75, 25, 35, 50, 45, 85, 75, 100, 20],
                    backgroundColor: createColor(255),
                    borderWidth: 1,
                },
                {
                    label: 'performance',
                    data: [70, 60, 75, 45, 45, 35, 50, 25, 95, 40, 30, 10],
                    backgroundColor: createColor(255),
                }
            ],
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        },
    });

})


function random(num) {
    return Math.floor(Math.random() * num)
}

function createColor(num) {
    return `rgba(${random(num)},${random(num)},${random(num)},${random(num)})`
}


document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault()
    var month = document.querySelector("#month").value
    var perform = document.querySelector("#perform").value
    var attend = document.querySelector("#attend").value
    let payload = {
        month, perform, attend
    }
    addData(myChart, payload)
})
document.querySelector("#remove").style.backgroundColor = createColor(111);
document.querySelector("#remove").addEventListener("click", () => removeData(myChart))

function addData(chart, { month, perform, attend }) {
    alert("data updated")
    chart.data.labels.push(month);
    chart.data.datasets[0].data.push(attend)
    chart.data.datasets[1].data.push(perform)
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}