function getDate(){
    const date=new Date();
    const fileName=date.toISOString().replace(/[.:-]/g,'_') + '.png'
    console.log(fileName)//2026-06-15T08:14:24.851Z
}


getDate()