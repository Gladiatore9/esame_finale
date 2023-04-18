"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const citySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    population: { type: Number, required: true },
    men: { type: Number, required: true },
    women: { type: Number, required: true },
    isCapital: { type: Boolean, required: true },
});
const CityModel = mongoose_1.default.model('City', citySchema);
const app = (0, express_1.default)();
app.get('/cities', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cities = yield CityModel.find();
    res.send(cities);
}));
app.post('/cities', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const city = new CityModel(req.body);
    yield city.save();
    res.send(city);
}));
mongoose_1.default.connect('mongodb://localhost:27017/catasto')
    .then(() => {
    app.listen(3000, () => console.log('Server listening on port 3000'));
})
    .catch(error => console.log(error));
