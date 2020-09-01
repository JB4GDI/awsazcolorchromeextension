//Define the regions here
const REGIONS = {
  Global: { fontColor: "#ffffff", backgroundColor: "#232f3e" },
  "N. Virginia": { fontColor: "#97c8f0", backgroundColor: "#00297b" },
  Ohio: { fontColor: "#d43547", backgroundColor: "#00155a" },
  "N. California": { fontColor: "#be8b5e", backgroundColor: "#b80a31" },
  Oregon: { fontColor: "#ffeb07", backgroundColor: "#002587" },
  "Cape Town": { fontColor: "#073aff", backgroundColor: "#009729" },
  "Hong Kong": { fontColor: "#d71811", backgroundColor: "#ffffff" },
  "Osaka-Local": { fontColor: "#d71811", backgroundColor: "#ffffff" },
  Mumbai: { fontColor: "#138808", backgroundColor: "#ff9933" },
  Seoul: { fontColor: "#359a3e", backgroundColor: "#be1135" },
  Singapore: { fontColor: "#ffffff", backgroundColor: "#ed2939" },
  Sydney: { fontColor: "#262873", backgroundColor: "#f0ba19" },
  Tokyo: { fontColor: "#ffffff", backgroundColor: "#4b0082" },
  Central: { fontColor: "#d52b1e", backgroundColor: "#ffffff" },
  Frankfurt: { fontColor: "#fccf00", backgroundColor: "#ff0000" },
  Ireland: { fontColor: "#ff883e", backgroundColor: "#169b62" },
  London: { fontColor: "#cf142b", backgroundColor: "#ffffff" },
  Milan: { fontColor: "#f8f6f6", backgroundColor: "#c90e0e" },
  Paris: { fontColor: "#ed2939", backgroundColor: "#002395" },
  Stockholm: { fontColor: "#ffc90e", backgroundColor: "#2452bd" },
  "US-Gov-West": { fontColor: "#ffc90e", backgroundColor: "#33335F" },
  "US-Gov-East": { fontColor: "#ffc90e", backgroundColor: "#9B1C2C" },
  Bahrain: { fontColor: "#ffffff", backgroundColor: "#af0000" },
  "S&atilde;o Paulo": { fontColor: "#294292", backgroundColor: "#212125" },
};

//You can access the nav-regionMenu directly
const regionMenuParent = document.getElementById("nav-regionMenu");
//Now you can access the label directly, no need for a loop
const label = regionMenuParent.querySelector("div.nav-elt-label");
//Pull out the region text
const regionText = label.textContent;
//Check if you have that region defined
if (REGIONS.hasOwnProperty(regionText)) {
  //Apply the styles
  let style = REGIONS[regionText];
  label.style.cssText = `color: ${style.fontColor} !important; font-weight: bold !important; text-shadow: none !important`;
  regionMenuParent.style.cssText = `background-color: ${style.backgroundColor} !important`;
} else {
  //Warn the user they are missing a region
  //TODO Make the regions a localStorage variable so the user could add their own colours / regions without your input
  console.error(
    `AWS Region Color Changer Extension is missing the region: ${regionText}`
  );
}

regionMenuParent.addEventListener("click", function () {
  document.querySelectorAll("#regionMenuContent > a").forEach((item) => {
    let menuRegionText = item.textContent.replace(/.*?\((.*?)\)/, "$1");
    let style = REGIONS[menuRegionText];
    if (!style) return;
    let div = document.createElement("span");
    div.style.cssText = `background: linear-gradient(45deg, ${style.fontColor} 50%, ${style.backgroundColor} 50%); width: 16px; height:16px; display: inline-block; margin:0; margin-right: 2px;`;
    item.prepend(div);
  });
});
