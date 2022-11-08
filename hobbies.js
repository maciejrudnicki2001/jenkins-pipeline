const hobbies = ["jogging","cooking","diving","swimming","reading"];

exports.getHobbies = () => {
    return hobbies;
}

exports.getHobby = id => {
    if(id<1 || id > hobbies.length)
        return null;
    return hobbies[id-1];
}

exports.getHowManyHobbies = () => {
    return hobbies.length;
}

exports.getTheShortestHobby = () => {
    let shortestHobby = hobbies[0];
    hobbies.forEach(hobby => {
        if(hobby.length < shortestHobby.length)
            shortestHobby = hobby;
    });
    return shortestHobby;
}