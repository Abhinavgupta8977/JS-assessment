// create a variable to hold your NFT's
const NFTs=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _creator, _tone, _speciality) {
   const NFT = {
      "name" : _name,
      "creator" : _creator,
      "tone" : _tone,
      "speciality" : _speciality
   }
   NFTs.push(NFT);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i=0; i< NFTs.length; i++){
      console.log(NFTs);
   }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("\nTotal No. of NFT's are : " + NFTs.length);
}
// call your functions below this line
mintNFT("WILLOW","TAYLOR","MAROON", "CALM");
getTotalSupply();
listNFTs();
