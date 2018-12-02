function changeImage(){
  var random_images_array = [{
      src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
      width: "240",
      height: "160"
    },   {
      src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
      width: "320",
      height: "195"
    },  {
      src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
      width: "500",
      height: "343"
    }];  

  var numRand = Math.floor( Math.random() * random_images_array.length );
  var newImg;

  newImg = new Image();
  newImg.src = random_images_array[numRand].src;
  newImg.width = random_images_array[numRand].width;
  newImg.height = random_images_array[numRand].height;

  var preImg = document.getElementsByTagName("img");
  if(preImg.length != 0) {
      preImg[0].parentNode.removeChild(preImg[0]);
  }
  document.body.appendChild(newImg);
}
