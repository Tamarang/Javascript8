const biggerThen100 = function(number) {
    if(number > 100)
    {
        return true;
    }
    else if(number <= 100)
    {
        return false;
    }
}
    console.log(biggerThen100(105));


    const Bouncer = function(CurrentAmountOfPeople, MaxAmountOfPeople, AgeOfPerson) {
        if(MaxAmountOfPeople > CurrentAmountOfPeople && AgeOfPerson >= 18)
        {
            return "come in";
        }
        else if(MaxAmountOfPeople > CurrentAmountOfPeople && AgeOfPerson < 18)
        {
            return "this is a club for adults";
        }
        else if(MaxAmountOfPeople <= CurrentAmountOfPeople)
        {
            return "it's too busy now, come back later";
        }
    }
    console.log(Bouncer(100,200,19));

    const Average = function(number1,number2,number3,number4,number5)
    {
        AllNumbers = number1 + number2 + number3 + number4 + number5;
        AverageNumber = AllNumbers / 5
        AverageNumberRounded = Math.round(AverageNumber);
        return AverageNumberRounded;
    }
    console.log(Average(1,2,3,4,9));