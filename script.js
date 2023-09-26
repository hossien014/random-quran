
let is_arbic = true;


function genrateRadndomAyehNumber()
{
      const totalAyehInQuran = 6236;
      let random_number = Math.floor((Math.random() * totalAyehInQuran) + 1);
      return random_number;
}

function GetAyeh()
{
      editions = "/editions/quran-uthmani,fa.ansarian"
      let url = "https://api.alquran.cloud/v1/ayah/" + genrateRadndomAyehNumber() + editions;
      return new Promise
            (
                  (resolve, recject) =>
                  {


                        fetch(url).then
                              (
                                    response =>
                                    {
                                          if (!response.ok) { console.log("error"); }
                                          return response.json();

                                    }
                              )
                              .then
                              (
                                    data =>
                                    {
                                          ayeh = data;
                                          resolve(ayeh);
                                    }
                              )
                              .catch
                              (
                                    error =>
                                    {
                                          recject("error")

                                    }
                              )

                  }
            )

}



function chang_lang(fa, ar,container)
{
      if (is_arbic)
      {
            container.innerHTML=fa
            is_arbic = false;
            change_more_elemnt()
      }
      else
      {
            container.innerHTML=ar
            is_arbic = true;
            change_more_elemnt()
      }

}
function change_more_elemnt()
{
      let  more =document.getElementById("more");
      if(is_arbic){

            more.style.opacity="90%"
            more.style.boxShadow ="box-shadow: 120px 80px 40px 20px #0ff"
            more.style.color ="#cad2c5;"
      }
      else{
            more.style.opacity="50%"


      }

}


function insertAyeh()
{
      GetAyeh().then((data =>
      {
            let ayah = "";
            let fa = "__";
            let sourah = "";
            let numberOfAyahs = "";
            const ayehInfo = document.querySelector('#aye-info');
            const ayeh_container = document.querySelector('.ayeh');
            fa = (data['data'][1]['text'])
            ayah = (data['data'][0]['text'])

            sourah = (data['data'][0]['surah']['name'])
            numberOfAyahs = (data['data'][0]['surah']['numberOfAyahs'])
            ayeh_container.innerHTML = ayah;
            ayehInfo.innerHTML = sourah + "-" + numberOfAyahs;
            onclick = function () { chang_lang(fa, ayah,ayeh_container) }

      }))

}



onload = insertAyeh();
