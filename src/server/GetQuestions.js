const API_TOKEN = "ICHcECoNklCUFDtdoOFsYOYQ9bJ4zfJZeHuc6N7u";

export default async function GetQuestions(params = {}) {
    let defineParams;
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            defineParams += `&${key}=${value}`;
        });
    }
    let paramsString = defineParams ? `&${defineParams}` : "";
    const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${API_TOKEN}${paramsString}`);
    const data = await response.json();
    return data;
}
