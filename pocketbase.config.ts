import Pocketbase from "pocketbase";

const pb = new Pocketbase(process.env.EXPO_PUBLIC_HOSTED_PB_URL);

export default pb;
