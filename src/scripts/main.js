// Imports go first
import { potteryList } from "./PotteryList.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { makePottery } from "./PotteryWheel.js";
import { usePottery } from "./PotteryCatalog.js";

// Make 5 pieces of pottery at the wheel

// 1. Classic dinner plate
let plate = makePottery("plate", 10, 1);

// 2. Coffee mug
let mug = makePottery("mug", 4, 4.5);

let bowl = makePottery("bowl", 8, 3);

let vase = makePottery("vase", 5, 12);

let cup = makePottery("cup", 3, 2.5);

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 1200);

let firedBowl = firePottery(bowl, 2186);

let firedPlate = firePottery(plate, 3231);

let firedVase = firePottery(vase, 1893);

let firedCup = firePottery(cup, 1172);

console.log(firedPlate);
// Determine which ones should be sold, and their price
let processedMug = toSellOrNotToSell(firedMug);

let processedBowl = toSellOrNotToSell(firedBowl);

let processedPlate = toSellOrNotToSell(firedPlate);

let processedVase = toSellOrNotToSell(firedVase);

let processedCup = toSellOrNotToSell(firedCup);

const catalog = usePottery();

// Invoke the component function that renders the HTML list

const potteryHtml = potteryList();
const potterContainer = document.querySelector(".potteryList");
potterContainer.innerHTML = potteryHtml