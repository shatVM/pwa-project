if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('../service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, err => {
          console.log('ServiceWorker registration failed: ', err);
        });
    });
  }

console.log('Script connected');

const arrayOfLoveWishes = [
    "Нехай твоє серце завжди буде наповнене теплом і ніжністю!",
    "Кохання нехай буде міцним, як сталь, і ніжним, як вітерець!",
    "Бажаю, щоб кожен день був сповнений обіймами та щасливими моментами!",
    "Нехай твоє серце ніколи не знає самотності!",
    "Хай кохання буде взаємним, щирим і безмежним!",
    "Нехай кожен ранок починається з усмішки коханої людини!",
    "Бажаю, щоб ваше кохання ставало міцнішим з кожним днем!",
    "Хай у твоєму житті завжди буде місце для романтики та сюрпризів!",
    "Нехай почуття будуть щирими, а серце завжди зігрітим!",
    "Бажаю безмежного щастя та найтепліших обіймів!",
    "Хай ваше кохання буде джерелом радості та натхнення!",
    "Бажаю знайти ту людину, яка зробить твоє життя справжньою казкою!",
    "Нехай любов наповнює твоє життя сенсом і гармонією!",
    "Хай завжди поруч буде людина, яка розуміє без слів!",
    "Бажаю взаєморозуміння, ніжності та приємних несподіванок!",
    "Хай кожна мить, проведена разом із коханою людиною, буде безцінною!",
    "Нехай ваше кохання перемагає всі труднощі і стає тільки сильнішим!",
    "Бажаю, щоб у вашому житті було більше романтичних моментів!",
    "Хай кожен день буде сповнений любов’ю та ніжністю!",
    "Нехай кохання буде безмежним, як небо, і яскравим, як зорі!"
]

let countOfHearts = 5;
document.getElementById ('count-of-hearts').innerText = '🧡'.repeat(countOfHearts)

document.getElementById('btn_love_wishes').addEventListener('click', () => {
    
    console.log('Button clicked');    
    
    let index = Math.floor(Math.random() * arrayOfLoveWishes.length)

    console.log('Номер елементу масиву - ', index);

    document.getElementById ('p_love-wishes').innerText = arrayOfLoveWishes[index];  
    //При кожному кліку на кнопку зменшуємо лічильник на 1 і відображаємо у форматі 🧡🧡🤍🤍🤍
    countOfHearts--;
    document.getElementById ('count-of-hearts').innerText = '🧡'.repeat(countOfHearts) + '🤍'.repeat(5 - countOfHearts);
    if (countOfHearts === 0) {
      //Якщо лічильник доходить до 0, то кнопку ховаємо
      document.getElementById('btn_love_wishes').disabled = true;
      document.getElementById('btn_love_wishes').style.backgroundColor = "lightgrey";
      document.getElementById('btn_love_wishes').style.color = "grey";
      document.getElementById ('btn_love_wishes').innerText = 'Придбайте 🧡';

      //  document.getElementById('btn_love_wishes').style.display = none;
    }  
    
   
})

let byeHearts = document.getElementById('byeHearts');
byeHearts.addEventListener('click', () => {
  countOfHearts = 5;
  document.getElementById ('count-of-hearts').innerText = '🧡'.repeat(countOfHearts);
  document.getElementById('btn_love_wishes').disabled = false;
  document.getElementById('btn_love_wishes').style.backgroundColor = " #ff5a26";
  document.getElementById('btn_love_wishes').style.color = "#ffc5b3";
  document.getElementById ('btn_love_wishes').innerText = 'Отримати побажання';
  document.getElementById ('p_love-wishes').innerText = '';
})


