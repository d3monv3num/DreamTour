import { useState } from "react";
import './ImageGeneratorStyle.css';
import DefaultImg from './defaultDreamImg.jpeg';
const ImageGen = () => {
    const [imageData, setImageData] = useState(DefaultImg);
    const [imageData1, setImageData1] = useState(DefaultImg);
    const [imageData2, setImageData2] = useState(DefaultImg);

    const HF_API_TOKEN = "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";
    const HF_API_TOKEN1= "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";
    const HF_API_TOKEN2="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";
    const data = { inputs: "astronaut on a horse" };

    async function query() {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2",
            {
                headers: { Authorization: `Bearer ${HF_API_TOKEN}` },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const response1 = await fetch(
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
            {
                headers: { Authorization: `Bearer ${HF_API_TOKEN1}` },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const response2 = await fetch(
            "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
            {
                headers: { Authorization: `Bearer ${HF_API_TOKEN2}` },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.blob();
        setImageData(URL.createObjectURL(result));
        const result1=await response1.blob();
        setImageData1(URL.createObjectURL(result1));
        const result2=await response2.blob();
        setImageData2(URL.createObjectURL(result2));
    }

    return (
        <div className="imageGenContainer">
            <button onClick={query}>ImageGen</button>
            <div className="imageDisplay">
            <img src={imageData} alt="true" />
            <img src={imageData1} alt="true" />
            <img src={imageData2} alt="true" />
            </div>
        </div>
    );
}


export default ImageGen;


