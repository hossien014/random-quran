
onload = insertAyeh();

function genrateRadndomAyehNumber()
{
      const totalAyehInQuran = 6236;
      let random_number = Math.floor((Math.random() * totalAyehInQuran) + 1);
      return random_number;
}

function GetAyeh()
{
      let url = "https://api.alquran.cloud/v1/ayah/" + genrateRadndomAyehNumber();

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
                                          ayeh = data['data'];
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



function insertAyeh()
{
      GetAyeh().then((data =>
      {
            const ayeh = document.querySelector('.ayeh');
            const ayehInfo = document.querySelector('#aye-info');
            ayeh.innerHTML = data['text'];
            console.log(data['text'].length);
            ayehInfo.innerHTML = data['surah']['name'] + "  ( " + data['numberInSurah'] + " )";

      }))
}
