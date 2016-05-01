/* js from alaan.xtgem.com */<!--var Digital=new Date()
var hours=Digital.getHours()

//Silahkan sesuaikan dengan pesan yang Anda inginkan
if (hours>=5&&hours<=11) //pesan pagi hari (05.00-19.00)
document.write('<b>Selamat Pagi! </b>')
else if (hours==12) //pesan siang  (12.00)
document.write('<b>Selamat Siang ! </b>')
else if (hours>=13&&hours<=17) //pesan sore hari(13.00-17.00)
document.write('<b>Selamat Sore! </b>')
else if (hours>=18&&hours<=20) //pesan petang hari (18.oo-20.00)
document.write('<b>Selamat Petang!</b>')
else if (hours>=21&&hours<=11) //pesan malam hari (21.00-23.00)
document.write('<b>Selamat Malam! </b>')
else //pesan malam mejelang pagi(00.00-04.00)
document.write('<b>Wow, Sudah Larut Malam Anda Masih Sempat Berkunjung, Terima Kasih!</b>')

//-->
