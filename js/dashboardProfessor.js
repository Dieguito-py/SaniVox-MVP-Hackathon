const ctx1 = document.getElementById('activitiesByClass').getContext('2d');
const activitiesByClassChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Turma A', 'Turma B', 'Turma C', 'Turma D', 'Turma E', 'Turma F'],
        datasets: [{
            label: 'Número de Atividades',
            data: [30, 25, 20, 15, 10, 40],
            backgroundColor: '#F15A24',
            borderColor: '#D84B10',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.raw + ' atividades';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('totalCostOverTime').getContext('2d');
const totalCostOverTimeChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['01/12/2024', '02/12/2024', '03/12/2024', '04/12/2024'],
        datasets: [{
            label: 'Custo Total ($)',
            data: [225, 240, 240, 250],
            borderColor: '#F15A24',
            backgroundColor: 'rgba(241, 90, 36, 0.2)',
            fill: true,
            tension: 0.4,
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Data'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Custo Total ($)'
                },
                beginAtZero: true
            }
        }
    }
});

const ctx3 = document.getElementById('costByClass').getContext('2d');
const costByClassChart = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Turma A', 'Turma B', 'Turma C', 'Turma D', 'Turma E', 'Turma F'],
        datasets: [{
            data: [250, 240, 240, 225, 350, 350],
            backgroundColor: ['#F15A24', '#D84B10', '#FFB24C', '#FFD58A', '#FF6347', '#F8A17A'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 20,
                    padding: 15
                }
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return 'Custo: $' + tooltipItem.raw;
                    }
                }
            }
        }
    }
});

window.onload = function () {
    modal.style.display = "none";
};

const openModalBtn = document.getElementById("openActivityModal");
const modal = document.getElementById("activityModal");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.onclick = function () {
    modal.style.display = "flex";
};

closeModalBtn.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};



document.getElementById('activityForm').onsubmit = function (event) {
    event.preventDefault();
    alert('Atividade criada com sucesso!');
    modal.style.display = 'none';
}
