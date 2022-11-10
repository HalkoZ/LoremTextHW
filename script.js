var loremtext = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."

var elementi = loremtext.split("");
var reci = loremtext.split(" ");
var recenice = loremtext.split(".");
var filtriraniNiz = [];

for (i = 0; i <= elementi.length - 1; i++); {
    if (elementi[i] !== " " && elementi[i] !== "," && elementi[i] !== "."); {
        filtriraniNiz.push(elementi[i]);
    }
}

console.log("U datom textu se nalazi: ", elementi.length,"elemenata", filtriraniNiz.length,"slova" , reci.length,"reci", "i", recenice.length,"recenica")