export const selectQuestion = (question) => {
    console.log(`Clicked on Question: `, question.question);
    console.log(`Category: `,question.category);
    console.log(`Answer options: A:`,question.op1,'B:',question.op2,'\nC:',question.op3,'D:',question.op4);
    console.log('\nAnswer Key: ',question.key)
    return{
        type:'QUESTION_SELECTED',
        payload: question
    }
}