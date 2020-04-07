// ******** Задача 1

function getSolutions( a, b, c ) {
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) return { 
        D, 
        roots: [] 
    }

    if (D == 0) {
        let x1 = -b / (2 * a);
        return { 
            D, 
            roots: [x1] 
        }
    }

    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return { 
        D, 
        roots: [x1, x2] 
    }
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\nЗначение дискриминанта: ${result.D}`);
    if (result.roots.length < 1) console.log(`Уравнение не имеет вещественных корней`);
    if (result.roots.length == 1) console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    if (result.roots.length > 1) console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
}

// ******** Задача 2

function getAverageMark(marks) {
    if (marks.length == 0) return 0;
    let sumMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
    }
    return sumMarks / marks.length;
}

function getAverageScore(data) {
    let sumMarksAllSubjects = [];
    for (let go in data) {
        sumMarksAllSubjects.push(getAverageMark(data[go]));
        data[go] = getAverageMark(data[go]);
    }
    data.average = getAverageMark(sumMarksAllSubjects);
    return data;
}

// ******** Задача 3

function getDecodedValue(secret) {
    if (secret == 0) return `Родриго`;
    else return `Эмильо`; 
}

function getPersonData(secretData) {
    let piratDecoded = {
        firstName:  getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    }
    return piratDecoded;
}