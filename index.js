
var mittFirma = {
    firmaNavn: "Astr0 Showroom",
    antallAnsatte: 40, 
    bilListe: "Ferrari, Mercedes, Lamborghini, Tesla", 
    betaltSkatt: 38, 
    nettside:"www.google.com", 
    status: true,
    info: function () {
       return "Jeg er best";
    }
}
console.log(mittFirma.bilListe);
console.log(mittFirma.firmaNavn);
mittFirma.firmaNavn = "Astr0 Showroom®";
console.log(mittFirma.firmaNavn);

mittFirma.bilListe = "Rolls Royce";
console.log(mittFirma.bilListe);