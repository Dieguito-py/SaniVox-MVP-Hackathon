const ctx1 = document.getElementById('activitiesByClassChart').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Turma A', 'Turma B', 'Turma C', 'Turma D'],
        datasets: [{
            label: 'Atividades',
            data: [10, 15, 8, 12],
            backgroundColor: '#F15A24'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

const ctx2 = document.getElementById('totalCostActivitiesChart').getContext('2d');
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr'],
        datasets: [{
            label: 'Custo Total ($)',
            data: [500, 700, 600, 800],
            borderColor: '#F15A24',
            backgroundColor: 'rgba(241, 90, 36, 0.2)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

const ctx3 = document.getElementById('costByClassChart').getContext('2d');
new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Turma A', 'Turma B', 'Turma C', 'Turma D'],
        datasets: [{
            data: [300, 400, 350, 250],
            backgroundColor: ['#F15A24', '#D84B10', '#FFB24C', '#FFD58A']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'right' }
        }
    }
});

const ctx4 = document.getElementById('costPerActivityChart').getContext('2d');
new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Atividade 1', 'Atividade 2', 'Atividade 3', 'Atividade 4'],
        datasets: [{
            label: 'Custo ($)',
            data: [120, 200, 180, 150],
            backgroundColor: '#F15A24'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

const ctx5 = document.getElementById('mostPerformedProceduresChart').getContext('2d');
new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Exame de Sangue', 'Ressonância', 'Check-Up', 'Raio-X'],
        datasets: [{
            label: 'Número de Realizações',
            data: [50, 30, 25, 40],
            backgroundColor: '#F15A24'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

const ctx6 = document.getElementById('mostUsedItemsChart').getContext('2d');
const mostUsedItemsChart = new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['Item A', 'Item B', 'Item C', 'Item D', 'Item E'],
        datasets: [{
            label: 'Quantidade Usada',
            data: [120, 100, 80, 60, 50],
            backgroundColor: ['#F15A24', '#D84B10', '#FFB24C', '#FFD58A', '#FF6347'],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.raw + ' usos';
                    }
                }
            }
        },
        scales: {
            x: {
                title: { display: true, text: 'Quantidade Usada' },
                beginAtZero: true
            },
            y: {
                title: { display: true, text: 'Itens' }
            }
        }
    }
});

window.onload = function () {
    inventoryModal.style.display = "none";
    addItemModal.style.display = "none";
    activitiesModal.style.display = "none";
    createActivityModal.style.display = "none";
};

const inventoryData = [
    { item: 'Item A', caixas: 10, preco: 50, unidades: 100, validade: '2025-01-01' },
    { item: 'Item B', caixas: 5, preco: 30, unidades: 50, validade: '2024-12-15' },
    { item: 'Item C', caixas: 20, preco: 70, unidades: 200, validade: '2026-05-10' },
    { item: 'Item D', caixas: 8, preco: 45, unidades: 90, validade: '2025-03-22' },
];

const openInventoryModal = document.getElementById('openInventoryModal');
const closeInventoryModal = document.getElementById('closeInventoryModal');
const inventoryModal = document.getElementById('inventoryModal');
const inventoryTableBody = document.getElementById('inventoryTableBody');
const addNewItemBtn = document.getElementById('addNewItemBtn');
const addItemModal  = document.getElementById('addItemModal');
const closeAddItemModal = document.getElementById('closeAddItemModal');
const cancelAddItemBtn = document.getElementById('cancelAddItem');
const addItemForm = document.getElementById('addItemForm');

openInventoryModal.addEventListener('click', async () => {
    inventoryModal.style.display = 'flex';
    populateInventoryTable();
});

closeInventoryModal.onclick = function() {
    inventoryModal.style.display = 'none';
};

addNewItemBtn.addEventListener('click', async () => {
    addItemModal.style.display = 'flex';
    inventoryModal.style.display = 'none';
});

closeAddItemModal.onclick = function() {
    addItemModal.style.display = 'none';
    inventoryModal.style.display = 'flex';
};

window.onclick = function(event) {
    if (event.target === inventoryModal) {
        inventoryModal.style.display = 'none';
    }

    if (event.target === addItemModal) {
        addItemModal.style.display = 'none';
        inventoryModal.style.display = 'flex';
    }
};

function populateInventoryTable() {
    inventoryTableBody.innerHTML = '';
    inventoryData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.item}</td>
            <td>${item.caixas}</td>
            <td>R$ ${item.preco.toFixed(2)}</td>
            <td>${item.unidades}</td>
            <td>${item.validade}</td>
        `;
        inventoryTableBody.appendChild(row);
    });
}

addItemForm.onsubmit = function(event) {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const itemCaixas = document.getElementById('itemCaixas').value;
    const itemPreco = document.getElementById('itemPreco').value;
    const itemUnidades = document.getElementById('itemUnidades').value;
    const itemValidade = document.getElementById('itemValidade').value;

    inventoryData.push({
        item: itemName,
        caixas: parseInt(itemCaixas),
        preco: parseFloat(itemPreco),
        unidades: parseInt(itemUnidades),
        validade: itemValidade
    });

    populateInventoryTable();

    addItemForm.reset();
    addItemModal.style.display = 'none';
    inventoryModal.style.display = 'flex';
};

const activitiesData = [
    { name: 'Atividade A', items: 'Item A - 2, Item B - 3' },
    { name: 'Atividade B', items: 'Item C - 5, Item D - 2' },
];

const openActivitiesModal = document.getElementById('openActivitiesModal');
const closeActivitiesModal = document.getElementById('closeActivitiesModal');
const activitiesModal = document.getElementById('activitiesModal');
const activitiesTableBody = document.getElementById('activitiesTableBody');
const createActivityBtn = document.getElementById('createActivityBtn');
const createActivityModal = document.getElementById('createActivityModal');
const closeCreateActivityModal = document.getElementById('closeCreateActivityModal');
const cancelCreateActivityBtn = document.getElementById('cancelCreateActivity');
const createActivityForm = document.getElementById('createActivityForm');

openActivitiesModal.addEventListener('click', async () => {
    activitiesModal.style.display = 'flex';
    populateActivitiesTable();
});

closeActivitiesModal.onclick = function() {
    activitiesModal.style.display = 'none';
};

createActivityBtn.addEventListener('click', async () => {
    createActivityModal.style.display = 'flex';
    activitiesModal.style.display = 'none';
});

closeCreateActivityModal.onclick = function() {
    createActivityModal.style.display = 'none';
    activitiesModal.style.display = 'flex';
};

window.onclick = function(event) {
    if (event.target === activitiesModal) {
        activitiesModal.style.display = 'none';
    }

    if (event.target === createActivityModal) {
        createActivityModal.style.display = 'none';
        activitiesModal.style.display = 'flex';
    }
};

function populateActivitiesTable() {
    activitiesTableBody.innerHTML = '';
    activitiesData.forEach(activity => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${activity.name}</td>
            <td>${activity.items}</td>
        `;
        activitiesTableBody.appendChild(row);
    });
}

createActivityForm.onsubmit = function(event) {
    event.preventDefault();

    const activityName = document.getElementById('activityName').value;
    const activityItems = document.getElementById('activityItems').value;

    activitiesData.push({
        name: activityName,
        items: activityItems
    });

    populateActivitiesTable();

    createActivityForm.reset();
    createActivityModal.style.display = 'none';
    activitiesModal.style.display = 'flex';
};
