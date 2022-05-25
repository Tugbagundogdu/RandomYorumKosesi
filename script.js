var a = [{ Yorum : "İlk günden beri takip ediyorum, herkese tavsiye ederim" , İsim : "Tuğba Gündoğdu"},
{ Yorum : "Oldukça başarılı bir ürün , ilk günden kendini belli ediyor" , İsim : "Beyza Yılmaz"},
{ Yorum : "Kesinlikle bu ürünü herkese tavsiye edeceğim" , İsim : "Hatice Öte"},
{ Yorum : "Her yştan insanın gönül rahatlığıyla kullanabileceği bir ürün" , İsim : "Ceyda Kasap"},
{ Yorum : "Buna benzer bir şey daha önce denemiştim aa bu daha güzel geldi." , İsim : "Uğur Can"},
{ Yorum : "İnstagram da rastladım pek beklentim yoktu ama gerçekten iyi çıktı" , İsim : "Turgay Bayrak"},
{ Yorum : "Keşke daha önce tanışsaydım Bayıldım !!" , İsim : "Zehra Gül"},
{ Yorum : "İki tane aldım birini ablama vericeğim çok güzel :) " , İsim : "Büşra Türk"}


]

var random;

function sayiUret (){

random = Math.round(Math.random()*7);


}

setInterval(function(){

    sayiUret()

    document.getElementById("div2").innerHTML = a[random].Yorum;
    document.getElementById("div3").innerHTML = a[random].İsim;




},3000)