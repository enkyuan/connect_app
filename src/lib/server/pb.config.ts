import Pocketbase from "pocketbase";

const pb = new Pocketbase(process.env.PB_URL);

export default pb;
