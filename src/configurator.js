export const damperrr = (qty, dmp) => ({
    product_id: 7263,
    quantity: qty * dmp,
    name: "Domykacz Seria S",
    regular_price: "119.00"
});

export const track = (trackLength) => ({
    product_id: 14729,
    quantity: trackLength,
    name: "Prowadnica",
    regular_price: "0.27"
}); 

export const wallBracket45 = (qty, trackLength, mountingWall) => ({
    product_id: 7274,
    quantity: qty * Math.floor((trackLength + 14) / 30) * mountingWall,
    name: "Klamra ścienna aluminiowa 45",
    regular_price: "3.50"
});  