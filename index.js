function predictPrice() {
    
    const area = document.getElementById('area').value;
    const bedrooms = document.getElementById('bedrooms').value;
    const location = document.getElementById('location').value;
    
    
    const basePrice = 50000;
    const pricePerSqFt = 200;
    const pricePerBedroom = 30000;
    const locationFactor = location.toLowerCase() === 'prime' ? 1.5 : 1;
    
    const predictedPrice = (basePrice + (pricePerSqFt * area) + (pricePerBedroom * bedrooms)) * locationFactor;
    
    
    document.getElementById('result').innerText = Predicted Price: $${predictedPrice.toFixed(2)};
}