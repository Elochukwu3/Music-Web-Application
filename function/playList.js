const playList = [
  {
    name: "Rush",
    singer: "Ayra Star",
    img: "https://i0.wp.com/justnaija.com/uploads/2022/09/Ayra-Starr-Rush-artwork.png?ulb=false&ssl=1&resize=320,350",
    song: "https://cdn3.justnaija.me/uploads/music/2022/09/Ayra-Starr-Rush-(JustNaija.com).mp3",
  },
  {
    name: "Last Last",
    singer: "Burna Boy",
    img: "../musics/burna boy-last/last.jpg",
    song: "../musics/burna boy-last/Burna_Boy_-_Last_Last_@BaseNaija.com (1).mp3",
  },
  {
    name: "Ego",
    singer: "Ida Banton ft Davido",
    img: "https://i0.wp.com/justnaija.com/uploads/2022/10/1da-Banton-Ego-artwork.jpeg?ulb=false&ssl=1&resize=320,350",
    song: "https://cdn3.justnaija.me/uploads/music/2022/10/1da-Banton-Davido-Ego-(JustNaija.com).mp3",
  },

  {
    name: "Joha",
    singer: "Asake",
    img: "https://i0.wp.com/justnaija.com/uploads/2022/09/Asake-Joha-artwork.jpeg?ulb=false&ssl=1&resize=320,350",
    song: "https://cdn3.justnaija.me/uploads/music/2022/09/Asake-Joha-(JustNaija.com).mp3",
  },

  {
    name: "Twice as Tall",
    singer: "Burna-Boy",
    img: "../musics/Burna boy - Twice as Tall/twice.png",
    song: "../musics/Burna boy - Twice as Tall/twice.mp3",
  },
  {
    name: "Kwaku-The-Traveller",
    singer: "Black-Sherif",
    img: "../musics/Burna boy - Twice as Tall/bsh.jpeg",
    song: "../musics/Burna boy - Twice as Tall/Black-Sherif-Kwaku-The-Traveller-(TrendyBeatz.com).mp3",
  },
  // {
  //   name: "FOh Paradise",
  //   singer: "Black Sherif",
  //   img: "https://trendybeatz.com/images/Black-Sherif-The-Villain-I-Never-Was-AlbumArtwork1.jpg",
  //   song: "https://cdn.trendybeatz.com/audio/Black-Sherif-Oh-Paradise-(TrendyBeatz.com).mp3",
  // },
  {
    name: "Different_Size",
    singer: "Burna_Boy_Ft_Victony",
    img: "../musics/Burna boy - Twice as Tall/burnaa.jpeg",
    song: "../musics/Burna boy - Twice as Tall/Burna_Boy_Ft_Victony_-_Different_Size.mp3",
  },
  {
    name: "You-Made",
    singer: "Burna-Boy ft-Chris-Martin",
    img: "../musics/Burna boy - Twice as Tall/twice.png",
    song: "../musics/Burna boy - Twice as Tall/Burna-Boy-Monsters-You-Made-ft-Chris-Martin-(JustNaija.com).mp3",
  },
  {
    name: "It's Plenty",
    singer: "Burna-Boy ft-Chris-Martin",
    img: "../musics/Burna boy - Twice as Tall/plenty.jpg",
    song: "../musics/Burna boy - Twice as Tall/it-plenty.mp3",
  },
  {
    name: "Ye",
    singer: "Burna-Boy",
    img: "../musics/Burna boy - Ye/ye.webp",
    song: "../musics/Burna boy - Ye/ye.mp3",
  },
  {
    name: "Toast",
    singer: "Koffe",
    img: "../musics/koffe - toast/toast.jpg",
    song: "../musics/koffe - toast/toast.mp3",
  },
  {
    name: "Back In Uni",
    singer: "Blaqbonez",
    img: "https://trendybeatz.com/images/Blaqbonez-Back-To-Uni-Artwork.jpeg",
    song: "https://cdn.trendybeatz.com/audio/Blaqbonez-Ft-Jae5-Back-In-Uni-(TrendyBeatz.com).mp3",
  },
  {
    name: "Bounce",
    singer: "Ruger",
    img: "../musics/Ruger - bounce/bounce.jpg",
    song: "../musics/Ruger - bounce/bounce.mp3",
  },
  {
    name: "Hide",
    singer: "Juice_WRLD_Ft_Kodak_Black",
    img: "../musics/juice/juice.jpeg",
    song: "../musics/juice/[Waploaded_4981]Juice_WRLD_Ft_Kodak_Black_-_Hide.mp3",
  },
  
  {
    name: "Terminator",
    singer: "ASake",
    img: "../musics/asake-t/asake.png",
    song: "../musics/asake-t/asake-t.mp3",
  },
  {
    name: "PBUY(Peace Be Unto You)",
    singer: "Asake",
    img: "../musics/asake-p/asake-p.webp",
    song: "../musics/asake-p/asake-p.mp3",
  },
  {
    name: "Loving You",
    singer: "Zonolesky",
    img: "../musics/zino/zino.jpg",
    song: "../musics/zino/loving-you.mp3",
  },
  {
    name: "Rocking",
    singer: "Zonolesky",
    img: "../musics/zino/zino2.jpeg",
    song: "../musics/zino/rocking.mp3",
  },
  {
    name: "Gone Far",
    singer: "Zonolesky",
    img: "../musics/zino/zino3.jpeg",
    song: "../musics/zino/gone-far.mp3",
  },
  {
    name: "Machala",
    singer: "Berri-Tiga-Ft-Carter-Efe",
    img: "../musics/ckay,cater,cq/imgg.webp",
    song: "../musics/ckay,cater,cq/Berri-Tiga-Ft-Carter-Efe-Machala-(TrendyBeatz.com).mp3",
  },
  
  {
    name: "Adulthood Na Scam",
    singer: "Lade",
    img: "../musics/ckay,cater,cq/img5.jpeg",
    song: "../musics/ckay,cater,cq/Lade-Adulthood-Na-Scam-1-(TrendyBeatz.com).mp3",
  },
 
  {
    name: "Flowers (Say My Name)",
    singer: "ArrDee",
    img: "../musics/ardee/ardde.jpg",
    song: "../musics/ardee/ArrDee_-_Flowers_(Say_My_Name)_[Lyrics](256kbps).mp3",
  },
  {
    name: "Late Night Driving",
    singer: "ArrDee",
    img: "../musics/ardee/ardde1.jpeg",
    song: "../musics/ardee/ArrDee_-_Late_Night_Driving_360mp3.com.ng.mp3",
  },

  {
    name: "Come Go",
    singer: "ArrDee",
    img: "../musics/ardee/ardde2.jpeg",
    song: "../musics/ardee/ArrDee_Come_Go_(Musicmp3update.com).mp3",
  },
  {
    name: "Ameno",
    singer: "Era",
    img: "../musics/remain/ameno.jpg",
    song: "../musics/remain/Era_-_Ameno_Soloplay.ng.mp3",
  },
  
  {
    name: "Pour_Me_Water",
    singer: "Kizz Daniel",
    img: "../musics/remain/kizz.jpg",
    song: "../musics/remain/Kizz_Daniel_Pour_Me_Water.mp3",
  },

  {
    name: "Ku-Lo-Sa",
    singer: "Oxlade",
    img: "../musics/remain/img14.webp",
    song: "../musics/remain/Oxlade-Ku-Lo-Sa-(TrendyBeatz.com).mp3",
  },
  {
    name: "Hold_Me",
    singer: "Zinoleesky_ft_Lyta",
    img: "../musics/remain/zino.jpg",
    song: "../musics/remain/nc-Zinoleesky_ft_Lyta_-_Hold_Me_mp3_.mp3",
  },
 
 
  {
    name: "Bad To Me",
    singer: "Wizkid",
    img: "https://trendybeatz.com/images/Wizkid-Bad-To-Me-Artwork.jpg",
    song: "https://cdn.trendybeatz.com/audio/Wizkid-Bad-To-Me-(TrendyBeatz.com).mp3",
  },
  {
    name: "Likkle Riddim",
    singer: "Joeboy",
    img: "https://trendybeatz.com/images/Joeboy-Likkle-Riddim-Artwork.jpg",
    song: "https://cdn.trendybeatz.com/audio/Joeboy-Likkle-Riddim-(TrendyBeatz.com).mp3",
  },
];
export default playList;
