function calculatePrixTVA(priceHt) {
    let priceTVA = priceHt * 1.2;
    console.log(priceTVA);
}
priceHt = 1500;
calculatePrixTVA(priceHt);

function calculateFraisTransport(totalProduct, weight) {
    let fraisTransport = (weight * 0.5) * totalProduct;
    console.log(fraisTransport);
}

weight = 2;
totalProduct = 3;
calculateFraisTransport(totalProduct, weight);