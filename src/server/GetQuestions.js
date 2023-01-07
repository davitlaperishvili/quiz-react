export default async function GetQuestions(params = {}) {
    let defineParams;
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            defineParams += `&${key}=${value}`;
        });
    }
    let paramsString = defineParams ? `&${defineParams}` : "";
    const response = await fetch(`https://opentdb.com/api.php?amount=10&type=multiple${paramsString}`);
    const data = await response.json();
    return data;
}
