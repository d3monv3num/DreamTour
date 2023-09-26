import { useState } from "react";

const ImageGen = () => {
    const [imageData, setImageData] = useState(null);
    const HF_API_TOKEN = "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";
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
        const result = await response.blob();
        console.log(result);
        setImageData(URL.createObjectURL(result));
    }

    return (
        <div>
            <button onClick={query}>ImageGen</button>
            <img src={imageData} alt="true" />
        </div>
    );
}


export default ImageGen;


