const carsData = [
    {
        name: "BMW M4 Competition",
        subtitle: "Идеальный баланс скорости и стиля. BMW M4 Competition — 510 л.с. и драйв, созданный для покорения трасс и городских улиц.",
        imageClass: "./assets/images/1.jpg",
        brand: "BMW",
        id: 1,
        prices: [
            {
                period: "на 1 сутки",
                price: "1450 $"
            },
            {
                period: "на 1-3 суток",
                price: "1300 $ /сут"
            },
            {
                period: "на 3+ суток",
                price: "1100 $ /сут"
            }
        ]
    },


     {
        name: "BMW M5",
        subtitle: "Бизнес-класс с душой гонщика. BMW M5: 600 л.с., интеллектуальный полный привод и комфорт для самых требовательных.",
        imageClass: "./assets/images/2.jpg",
        brand: "BMW",
        id: 2,
        prices: [
            {
                period: "на 1 сутки",
                price: "1600 $"
            },
            {
                period: "на 1-3 суток",
                price: "1450 $"
            },
            {
                period: "на 3+ суток",
                price: "1250 $"
            }
        ]
    },
    {
        name: "Lamborghini Huracan Spyder Green",
        subtitle: "Воплощение скорости и страсти. Зеленый Lamborghini Huracan Spyder — мощь 640 л.с. и открытый верх для ярких приключений.",
        imageClass: "./assets/images/3.jpg",
        brand: "Lamborghini",
        id: 3,
        prices: [
            {
                period: "на 1 сутки",
                price: "3200 $"
            },
            {
                period: "на 1-3 суток",
                price: "2900 $"
            },
            {
                period: "на 3+ суток",
                price: "2600 $"
            }
        ]
    },
    {
        name: "Ferrari F8 Spider",
        subtitle: "Мечта на колесах. Ferrari F8 Spider: 720 л.с., аэродинамика F1 и открытая кабина для тех, кто живет на полной скорости.",
        imageClass: "./assets/images/4.jpg",
        brand: "Ferrari",
        id: 4,
        prices: [
            {
                period: "на 1 сутки",
                price: "3500 $"
            },
            {
                period: "на 1-3 суток",
                price: "3200 $"
            },
            {
                period: "на 3+ суток",
                price: "2900 $"
            }
        ]
    },
    {
        name: "Porsche 911 Targa 4S Yellow",
        subtitle: "Элегантная мощь в ярком цвете. Porsche 911 Targa 4S: полный привод, 450 л.с. и уникальный стиль Targa.",
        imageClass: "./assets/images/4.jpg",
        brand: "Porsche",
        id: 5,
        prices: [
            {
                period: "на 1 сутки",
                price: "1800 $"
            },
            {
                period: "на 1-3 суток",
                price: "1650 $"
            },
            {
                period: "на 3+ суток",
                price: "1450 $"
            }
        ]
    },
    {
        name: "Mercedes SL 55 AMG",
        subtitle: "Классика спортивного шика. Mercedes SL 55 AMG: роскошь, кабриолет и мощь 469 л.с. для незабываемых поездок.",
        imageClass: "./assets/images/5.jpg",
        brand: "Mercedes",
        id: 6,
        prices: [
            {
                period: "на 1 сутки",
                price: "1700 $"
            },
            {
                period: "на 1-3 суток",
                price: "1550 $"
            },
            {
                period: "на 3+ суток",
                price: "1350 $"
            }
        ]
    },
    {
        name: "Mercedes C180 Convertible",
        subtitle: "Идеальный выбор для солнечного дня. Mercedes C180 Convertible: кабриолет для легкого и комфортного вождения.",
        imageClass: "./assets/images/7.jpg",
        brand: "Mercedes",
        id: 7,
        prices: [
            {
                period: "на 1 сутки",
                price: "1000 $"
            },
            {
                period: "на 1-3 суток",
                price: "900 $"
            },
            {
                period: "на 3+ суток",
                price: "800 $"
            }
        ]
    },
    {
        name: "Chevrolet Corvette Orange",
        subtitle: "Яркий, мощный, незабываемый. Chevrolet Corvette в оранжевом цвете: 495 л.с. и стиль, который говорит сам за себя.",
        imageClass: "./assets/images/8.jpg",
        brand: "Chevrolet",
        id: 8,
        prices: [
            {
                period: "на 1 сутки",
                price: "1400 $"
            },
            {
                period: "на 1-3 суток",
                price: "1250 $"
            },
            {
                period: "на 3+ суток",
                price: "1100 $"
            }
        ]
    }
];


const container = document.getElementById('cars-container');




function renderCars (cars) {
container.innerHtml = '';
const carsHTML = cars.map(car =>  `
               <div class="cars__menu">                
                <img src="${car.imageClass}" alt="${car.name}" class="cars__img">                
                 <div class="cars__card">                     
                 <div class="cars__info">                         
                 <h3 class="cars__title">${car.name}</h3>                         
                 <p class="cars__subtitle">${car.subtitle}</p>                    
                  </div>                     
                  <div class="cars__story">                         
                  <ul class="cars__description">                            
                   ${car.prices.map(price => `
    <li class="cars__item">
        <p class="cars__time">${price.period}</p>
        <p class="cars__price">${price.price}</p>
    </li>
`).join('')}                
         </ul>                     
             <button class="btn btn--white cars__button" data-car-id="${car.id}">Забронировать</button>                   
               </div>                 
               </div>             
               </div>         
               `).join('');


container.innerHTML = carsHTML;
}


renderCars(carsData);


function filterCarsByBrand (brand) {
    if (brand === 'Все марки') {
        return carsData;
    } 
    return carsData.filter(car => car.brand === brand);
}


const navButtons = document.querySelector('.cars__link');


if(navButtons) {
    navButtons.addEventListener('click' , function(e){
        const button = e.target.closest(".btn--transparent");
        if (!button) {
            return;
        }
        e.preventDefault();
        document.querySelectorAll('.cars__link .btn--transparent').forEach(btn => {
            btn.classList.remove('active');
        })
        button.classList.add('active');
        const selectedBrand = button.textContent.trim();
        const filteredCars = filterCarsByBrand(selectedBrand);
        renderCars(filteredCars);
    })


}