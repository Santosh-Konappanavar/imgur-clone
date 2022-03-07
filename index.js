async function imagesMain() {
  const response = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
  var data = await response.json();
//   console.log("data",data);
  
  const allData=data.map((e)=>(
    `<img src="${e.download_url}" class="photos"/>`
   ))
  const mainBody=document.getElementById("mainbody")
  mainBody.innerHTML=allData

}


async function imagesExplore() {
    const response = await fetch("https://picsum.photos/v2/list");
    var dataExplore = await response.json();
    // console.log("dataExplore",dataExplore);
    
    const exploreData=dataExplore.filter(item=>item.id<1008).map((e)=>(
      `<div>
      <img src="${e.download_url}" />
      <div class="auth">
      <p>${e.author}</p>
      <p>${e.height} Posts</p>
      </div>
      </div>
      `
     ))
    const ExploreBody=document.getElementById("explore")
    ExploreBody.innerHTML=exploreData
  
  
  }
imagesMain()
imagesExplore()
