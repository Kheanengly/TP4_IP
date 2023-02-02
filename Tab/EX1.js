var btt1 = document.getElementById("butt1");
var btt2 = document.getElementById("butt2");
var btt3 = document.getElementById("butt3");
var image = document.getElementById("img")

btt1.addEventListener("click", function(){
    document.getElementById("head1").innerHTML = "Angkor Wat";
    document.body.style.backgroundImage="url('Ankor_Wat_temple.jpg')"
    btt1.style.background="#ffffff";
    btt3.style.background="#dbe2ec";
    image.src="Ankor_Wat_temple.jpg";
    btt2.style.background="#dbe2ec";
    document.getElementById("para").innerText="Angkor Wat is an enormous Buddhist temple complex located in northern Cambodia. It was originally built in the first half of the 12th century as a Hindu temple. Spread across more than 400 acres, Angkor Wat is said to be the largest religious monument in the world. Its name, which translates to “temple city” in the Khmer";
});

btt2.addEventListener("click",function(){
    btt2.style.background="#ffffff";
    btt1.style.background="#dbe2ec";
    btt3.style.background="#dbe2ec";
    image.src = "R.jpg";
    document.body.style.backgroundImage="url('R.jpg')";
    document.getElementById("head1").innerHTML = "Borobudur";
    document.getElementById("para").innerText="The Borobudur Temple Compounds is one of the greatest Buddhist monuments in the world, and was built in the 8th and 9th centuries AD during the reign of the Syailendra Dynasty. The monument is located in the Kedu Valley, in the southern part of Central Java, at the centre of the island of Java, Indonesia.";
});

butt3.addEventListener("click",function(){
    btt3.style.background="#ffffff";
    btt1.style.background="#dbe2ec";
    btt2.style.background="#dbe2ec";
    document.body.style.backgroundImage="url('210301-Prambanan-Temple.jpg')";
    image.src = "210301-Prambanan-Temple.jpg";
    document.getElementById("head1").innerHTML = "Prambanan";
    document.getElementById("para").innerText="Prambanan, village in the daerah istimewa (special district) of Yogyakarta, Indonesia, known for a large, nearby complex of temples built in the 9th and 10th centuries. The best-known set of temples in the complex is that of Lara Jonggrang, also called Candi Prambanan (Prambanan Temple) because of its close proximity to the village.";
});
