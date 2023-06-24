async function getMatchData(){
   
    return await fetch('https://api.cricapi.com/v1/currentMatches?apikey=787d3712-1b36-47b5-afe1-1ecebf4220ca&offset=0')
    .then(data=>data.json())
    .then(data=>{
        if(data.status != "success")return;
        const matchList=data.data;
        if(!matchList)return[];

        const relevantData=matchList.map(match=>`${match.name},${match.status}`);

        console.log(relevantData);

        document.getElementById("matches").innerHTML=relevantData.map(match=>`<li>${match}</li>`).join('');

        return relevantData;
    })
    .catch(e=>console.log(e));
}
getMatchData();