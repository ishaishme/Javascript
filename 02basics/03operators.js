var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100

displayDiscPercent = Math.round(discountPercent)

console.log(displayDiscPercent + "% off")

var result = listingPrice > sellingPrice;

console.log(result)

console.log(typeof result)
