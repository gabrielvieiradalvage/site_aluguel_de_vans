const vans = [
    { 
        nome: "Renault Master 01", 
        info: "Ideal para fretamento e grupos executivos.",
        img: "fotos/01 master.jpeg" 
    },
    { 
        nome: "Renault Master Branca", 
        info: "Conforto total com ar-condicionado e amplo espaço.",
        img: "fotos/master branca.jpeg" 
    },
    { 
        nome: "Renault Master 2024", 
        info: "Modelo novo, tecnologia e máxima segurança.",
        img: "fotos/master 2024.jpeg" 
    }
];

const container = document.getElementById('van-container');
const whatsappNumber = "5519992752441";

function renderVans() {
    container.innerHTML = vans.map(van => {
        const message = encodeURIComponent(`Olá MetroesteTur! Vi a ${van.nome} no site e gostaria de um orçamento.`);
        
        return `
            <article class="van-card">
                <img src="${van.img}" 
                     alt="${van.nome}" 
                     loading="lazy" 
                     decoding="async"
                     onerror="this.src='https://via.placeholder.com/400x225?text=MetroesteTur'">
                <div class="van-info">
                    <span class="status-badge">Disponível</span>
                    <h3>${van.nome}</h3>
                    <p>${van.info}</p>
                    <a href="https://wa.me/${whatsappNumber}?text=${message}" 
                       target="_blank" 
                       class="btn-whatsapp">
                        Consultar Valor
                    </a>
                </div>
            </article>
        `;
    }).join('');
}

renderVans();