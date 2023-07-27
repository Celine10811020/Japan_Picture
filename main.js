var number;

$('.image').hide();
$('.previous').hide();
$('.next').hide();
$('.zoomIn').hide();
$('.zoomOut').hide();

$('.start').on('click', doSearch);
$('.previous').on('click', goPrevious);
$('.next').on('click', goNext);
$('.zoomIn').on('click', zoomIn);
$('.zoomOut').on('click', zoomOut);

function doSearch()
{
  $('.image').show();
  $('.previous').show();
  $('.next').show();
  $('.zoomIn').show();
  $('.zoomOut').show();

  var date = document.getElementById("date");

  switch(date.value)
  {
    case "1":
      document.getElementById('title').innerHTML = "2023.06.24 臺灣→仙台";
      break;
    case "2":
      document.getElementById('title').innerHTML = "2023.06.25 仙台";
      break;
    case "3":
      document.getElementById('title').innerHTML = "2023.06.26 仙台→盛岡";
      break;
    case "4":
      document.getElementById('title').innerHTML = "2023.06.27 盛岡→宮古";
      break;
    case "5":
      document.getElementById('title').innerHTML = "2023.06.28 宮古（淨土之濱）";
      break;
    case "6":
      document.getElementById('title').innerHTML = "2023.06.29 宮古（久慈）";
      break;
    case "7":
      document.getElementById('title').innerHTML = "2023.06.30 宮古→秋田";
      break;
    case "8":
      document.getElementById('title').innerHTML = "2023.07.01 秋田";
      break;
    case "9":
      document.getElementById('title').innerHTML = "2023.07.02 秋田→青森";
      break;
    case "10":
      document.getElementById('title').innerHTML = "2023.07.03 青森（弘前）";
      break;
    case "11":
      document.getElementById('title').innerHTML = "2023.07.04 青森→臺灣";
      break;
    default:
      return;
  }

  number = 1

  initialization();
  showPicture();
}

function showPicture()
{
  var date = document.getElementById("date");
  var image = document.getElementById("image");

  switch(date.value)
  {
    case "1":
      image.src = "./picture/20230624 (" + number + ").jpg";
      break;
    case "2":
      image.src = "./picture/20230625 (" + number + ").jpg";
      break;
    case "3":
      image.src = "./picture/20230626 (" + number + ").jpg";
      break;
    case "4":
      image.src = "./picture/20230627 (" + number + ").jpg";
      break;
    case "5":
      image.src = "./picture/20230628 (" + number + ").jpg";
      break;
    case "6":
      image.src = "./picture/20230629 (" + number + ").jpg";
      break;
    case "7":
      image.src = "./picture/20230630 (" + number + ").jpg";
      break;
    case "8":
      image.src = "./picture/20230701 (" + number + ").jpg";
      break;
    case "9":
      image.src = "./picture/20230702 (" + number + ").jpg";
      break;
    case "10":
      image.src = "./picture_2/20230703 (" + number + ").jpg";
      break;
    case "11":
      image.src = "./picture_2/20230704 (" + number + ").jpg";
      break;
    default:
      return;
  }

  document.getElementById('descript').innerHTML = Description[date.value][number];

  console.log(date.value + " " + number);
}

function goPrevious()
{
  if(number > 1)
  {
    number--;
  }

  showPicture();
}

function goNext()
{
  var date = document.getElementById("date");

  switch(date.value)
  {
    case "1":
      if(number < 19)
      {
        number++;
      }
      break;
    case "2":
      if(number < 72)
      {
        number++;
      }
      break;
    case "3":
      if(number < 127)
      {
        number++;
      }
      break;
    case "4":
      if(number < 25)
      {
        number++;
      }
      break;
    case "5":
      if(number < 262)
      {
        number++;
      }
      break;
    case "6":
      if(number < 114)
      {
        number++;
      }
      break;
    case "7":
      if(number < 32)
      {
        number++;
      }
      break;
    case "8":
      if(number < 174)
      {
        number++;
      }
      break;
    case "9":
      if(number < 82)
      {
        number++;
      }
      break;
    case "10":
      if(number < 150)
      {
        number++;
      }
      break;
    case "11":
      if(number < 46)
      {
        number++;
      }
      break;
    default:
      return;
  }

  showPicture();
}

function zoomIn()
{
  var image = document.getElementById("image");
  var width = image.clientWidth;

  if(width+50 < document.body.clientWidth)
  {
    image.style.width = (width + 50) + "px";
    window.scrollBy(0, 50);
  }
}

function zoomOut()
{
  var image = document.getElementById("image");
  var width = image.clientWidth;

  if(width-50 > document.body.clientWidth/3)
  {
    image.style.width = (width - 50) + "px";
  }
}
