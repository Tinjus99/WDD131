const character = {
    name: "Snortleblat",
    class: "Swamp Beat Diplomat",
    level: 5,
    health: 100,
    image: 'https://andejuli.github.io/img/snortleblat.png',
    attacked() {
    if (this.health >= 20) {
        this.level -= 1;
        this.health -= 20;
    } else {
        alert('Character Died');
    }
    },
    levelUp() {
    this.level += 1;
    this.health += 20;
    }
};


function Update(){
    document.querySelector("#level").textContent = character.level;
    document.querySelector("#health").textContent = character.health;
    if (character.health <= 0){
        document.querySelector(".attacked").disabled = true;
        document.querySelector(".levelup").disabled = true;
        alert('Character Died');
    }
}
document.querySelector(".name").textContent = character.name;
document.querySelector("#class").textContent = character.class;
let img = document.querySelector(".image");
img.src = character.image;

Update();

document.querySelector("#attacked").addEventListener("click", function()
{
    character.attacked();
    Update();
})
document.querySelector("#levelup").addEventListener("click", function()
{
    character.levelUp();
    Update();
})

