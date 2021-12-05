const formatDate = (d) => {
    let month = '' + (d.getMonth() + 1);
    let date = '' + (d.getDate());
    const year = d.getFullYear();

    if(month.length < 2) month = `0${month}`;
    if(date.length < 2) date = `0${date}`;

    return `${year}-${month}-${date}`;
}

export default formatDate;