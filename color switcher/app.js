const colors = ["green", "red", "blue", "yellow", "purple", "black", "white", "orange"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber]
    color.innerHTML = colors[randomNumber];
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}