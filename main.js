let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = [
  " Tetapi kamu ini, kuatkanlah hatimu, jangan lemah semangatmu, karena ada upah bagi usahamu(2 Tawarikh 15:7)",

  "Kata-Nya lagi kepada mereka:Berjaga-jagalah dan waspadalah terhadap segala ketamakan, sebab walaupun seorang berlimpah-limpah hartanya, hidupnya tidaklah tergantung dari pada kekayaannya itu (Lukas 12:15)",

  "Sebab Aku ini, Tuhan, Allahmu, memegang tangan kananmu dan berkata kepadamu: Janganlah takut, Akulah yang menolong engkau  (Yesaya 41:13)",

  " Berbahagialah orang yang bertahan dalam pencobaan, sebab apabila ia sudah tahan uji, ia akan menerima mahkota kehidupan yang dijanjikan Allah kepada barangsiapa yang mengasihi Dia. ( Yakobus 1: 12)",

  "Lakukanlah kepadaku suatu tanda kebaikan, supaya orang-orang yang membenci aku melihat dengan malu, bahwa Engkau, ya TUHAN, telah menolong dan menghiburkan aku (Mazmur 86:17)",

  " Jikalau kamu tinggal di dalam Aku dan firman-Ku tinggal di dalam kamu, mintalah apa saja yang kamu kehendaki, dan kamu akan menerimanya (Yohanes 15:7)",

  " Sebab Aku ini mengetahui rancangan-rancangan apa yang ada pada-Ku mengenai kamu, demikianlah firman TUHAN, yaitu rancangan damai sejahtera dan bukan rancangan kecelakaan, untuk memberikan kepadamu hari depan yang penuh harapan.(Yeremia 29:11)",

  "Janganlah membalas kejahatan dengan kejahatan;lakukanlah apa yang baik bagi semua orang! (Roma 12:17)",

  "Saudara-saudaraku yang kekasih, janganlah kamu sendiri menuntut pembalasan,tetapi berilah tempat kepada murka Allah, sebab ada tertulis: Pembalasan itu adalah hak-Ku. Akulah yang akan menuntut pembalasan, firman Tuhan.(Roma 12:19)",

  "Memang dahulu  kamu adalah kegelapan, tetapi sekarang kamu adalah terang di dalam Tuhan. Sebab itu hiduplah sebagai anak-anak terang ( Efesus 5: 8)",

  " dan pergunakanlah waktu k  yang ada, karena hari-hari ini adalah jahat.(Efesus 5:16)",

  "Dan engkau, hai manusia, engkau yang menghakimi mereka yang berbuat demikian, sedangkan engkau sendiri melakukannya juga, adakah engkau sangka, bahwa engkau akan luput dari hukuman Allah?(Roma 2:3)",

  "Sebab setiap orang yang memuliakan dirinya akan direndahkan, dan orang yang merendahkan dirinya akan dimuliakan (Lukas 14: 11)",

  " Maka Bapa-Ku yang di sorga akan berbuat demikian juga terhadap kamu, apabila kamu masing-masing tidak mengampuni saudaramu dengan segenap hatimu (Matius 18:35)",

  "  Dia memberi kekuatan kepada yang lelah dan menambah semangat kepada yang tiada berdaya    (Yesaya 40:29)",

  "Janganlah engkau berkata: 'Aku akan membalas kejahatan'nantikanlah TUHAN, Ia akan menyelamatkan engkau (Amsal 20: 22)",

  "Janganlah kita jemu-jemu berbuat baik, karena apabila sudah datang waktunya, kita akan menuai, jika kita tidak menjadi lemah. (Galatia 6:9)",

  " Janganlah engkau menganggap dirimu sendiri bijak, takutlah akan TUHAN dan jauhilah kejahatan ( Amsal 3:7)",

  "  Janganlah menahan kebaikan dari pada orang-orang yang berhak menerimanya, padahal engkau mampu melakukannya (Amsal 3:27)",

  " Sebab itu kukatakan dan kutegaskan ini kepadamu di dalam Tuhan: Jangan hidup lagi sama seperti orang-orang yang tidak mengenal Allah dengan pikirannya yang sia-sia(Efesus 4:17)",

  "Kebencian menimbulkan pertengkaran, tetapi kasih menutupi segala pelanggaran (Amsal 10:12)",

  " Engkau memberitahukan kepadaku jalan kehidupan; di hadapan-Mu ada sukacita berlimpah-limpah, di tangan kanan-Mu ada nikmat senantiasa( Mazmur 16:11)",
];
btn.addEventListener("click", function () {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomQuote;
});
