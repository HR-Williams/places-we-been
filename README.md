# _Places We've Been_

#### _A program to keep track of the places we have been across the world._

#### By _**Louie Schoenknecht & HR Williams**_

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_
* _jQuery_

## Description

_This program was written to practice using prototypes and constructors while learning object-oriented JavaScript._

## Specifications

Describe Destination(location, landmarks, cost, notes)

1. Test: "It should return location: undefined if new Destination object is created with no key values"

Expect (Destination().toEqual({undefined}))

2. Test: "It should return "Destination.location: Paris" if the user inputs "let Destination = new Destination("Paris")."

Expect(Destination("Paris").toEqual({location: "Paris"}))

3. Test: "It should return each key-value for user entered location, landmarks, cost, and notes"

Expect (Destination("Paris", "Eiffel Tower", "expensive", "Eat a lot of bread").toEqual({location: "Paris", landmarks:["Eiffel Tower"], cost: "expensive", notes: ["Eat a lot of bread"]}))

4. Test: "It should return entered destination and key-values in the travel log."
Expect: (travelLog;).toReturn(TravelLog {destinations: {...}})

5. Test: "It should assign ID to destination beginning at 0 and counting up by 1 for each new object."
Expect: (travelLog;).toReturn(TravelLog {destinations: {...}, currentId: 1})


## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _navigate to places directory_
* _open places/index.html in your browser_



## Known Bugs

* _No known bugs_

## License

_[MIT](https://choosealicense.com/licenses/mit/)_

## Contact Information

_luisesch97@gmail.com williams.hr@gmail.com_ 