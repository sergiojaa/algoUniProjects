// პროექტი 1 - Saying Hello - გამარჯობა შექმენით პროგრამა რომელიც გკითხავთ "რა გქვია?", 
// დაელოდება თქვენს პასუხს და გიპახუსებთ "გამარჯობა, თქვენი სახელი"
//მაგალითად: > What is your name? Oto > Hello, Oto, nice to meet you!
// მინიშნება: გამოიყენეთ console.log და prompt ფუნქციები

let question = prompt('what is your name?')
console.log('Hello' + ' ' + question)

// პროექტი 2 - Counting the Number of Characters - სიმბოლოების რაოდენობის დათვლა
//შექმენით პროგრამა, რომელიც მოგთხოვთ სიტყვის ან წინადადების (string) შეყვანას და შემდეგ გიჩვენებთ, 
// თუ რამდენი სიმბოლოსგან შედგება თქვენი ჩანაწერი.
//მაგალითად:> What is the input string? Homer> Homer has 5 characters.
//მინიშნება: გამოიყენეთ console.log და prompt ფუნქციები; გაიხსენეთ, რომ string-ს აქვს საკუთარი მეთოდები
//  რომლიდანაც შესაძლოა, რომელიმე გამოგადგეთ

let countCharacters = prompt('counting the number of characters')
console.log(`${countCharacters} has ${countCharacters.length} characters`)

//პროექტი 3 - Printing Quotes - ციტატების ბეჭდვა
//ბრჭყალები ხშირად სტრიქონის (string) დასაწყისისა და დასასრულის აღსანიშნავად გამოიყენება,
// მაგრამ ზოგჯერ, ე.წ. escape characters-ის დახმარებით, ამ წინადადებაში ციტატა ცალკე, ისევ 
//ბრჭყალებით უნდა გამოვყოთ. შექმენით პროგრამა, რომელიც მოგთხოვთ ციტატისა და მისი ავტორის
// ჩაწერას, შემდეგ კი გაჩვენებთ ორივეს ისე, როგორც მაგალითშია.
//მაგალითად:> What is the quote? These aren't the droids you're looking for.
//> Who said it? Obi-Wan Kenobi> Obi-Wan Kenobi says, "These aren't the droids you're looking for."
//მინიშნება: გამოიყენეთ console.log და prompt ფუნქციები; escape characters

let quote = prompt('what is the quote')
let author = prompt('who said it?')
console.log(`${author} says: ${quote}`)

//პროექტი 4 - Indoor Voice - ჩუმი ხმა
//შექმენით პროგრამა, რომელიც მოგთხოვთ სტრიქონის ჩაწერას და შემდეგ იმავე ჩანაწერს მხოლოდ
// პატარა ასოებით გაჩვენებთ. პუნქტუაცია და სიმბოლოებს შორის სივრცეები (whitespace) უცვლელი უნდა დარჩეს.
//მაგალითად:> HELLO, WORLD> hello, world
//მინიშნება: გამოიყენეთ console.log და prompt ფუნქციები; გაიხსენეთ, რომ string-ს აქვს მეთოდები, რომელიც შესაძლოა, გამოგადგეთ 

let lowerCase = prompt('enter the words')
console.log(lowerCase.toLowerCase())

//პროექტი 5 - Playback Speed - საუბრის სიჩქარე
//ზოგიერთი ადამიანი ლექციებს საკმაოდ სწრაფად კითხულობს; მათი შენელება ან თუნდაც, სიტყვებს
//შორის პაუზის გაკეთება კარგი იქნებოდა... შექმენით პროგრამა, რომელიც წინადადების ჩაწერას მოგთხოვთ, 
// შემდეგ კი იმავე ჩანაწერს გაჩვენებთ, ოღონდ იმ განსხვავებით, რომ ამჯერად ასოებს შორის ყველა სივრცე 
// (whitespace) მრავალწერტილით (...) იქნება ჩანაცვლებული.
//მაგალითად:> This is Bitcamp.> This...is...Bitcamp.
//მინიშნება: გამოიყენეთ console.log და prompt ფუნქციები; გაიხსენეთ, რომ string-ს აქვს მეთოდები, რომელიც შესაძლოა, გამოგადგეთ

let sentence = prompt('write the sentences')
let newSentence = sentence.split(' ').join('....')
console.log(newSentence)

//პროექტი 6 - Making Faces - სახეების მიღება
//emoji-მდე არსებობდა emoticon-ები, სადაც სიმბოლოების ერთობლიობა - ":)" გაღიმებულ სახეს
// აღნიშნავდა, ხოლო ":(" - მოწყენილს. დღეს პროგრამებში ეს სიმბოლოები emoji-დ ავტომატურად გარდაიქმნება.

//შექმენით პროგრამაში, სადაც დაწერთ ფუნქციას სახელწოდებით convert, რომელიც პარამეტრად იღებს სტრიქონს
// (str), შემდეგ კი იმავე სტრიქონს აბრუნებს, იმ განსხვავებით, რომ ნებისმიერ ამგვარ ჩანაწერს - ":)" 🙂-ით, 
//ხოლო ":(" - 🙁-ით შეცვლის. დანარჩენი ტექსტი უცვლელი უნდა დარჩეს.
//იმავე პროგრამაში, დაწერეთ მეორე ფუნქცია - main, რომელიც სტრიქონის შეყვანას გთხოვთ,
//შემდეგ convert ფუნქციას იძახებს და ბოლოს, შედეგს გაჩვენებთ.
//მაგალითად:> hello :)> hello 🙂> goodbye :(> goodbye 🙁
//მინიშნება: გამოიყენეთ console.log და prompt ფუნქციები; გაიხსენეთ, რომ string-ს აქვს მეთოდები,
// რომელიც შესაძლოა, გამოგადგეთ; არ დაგავიწყდეთ ფუნქციის გამოძახება 
function convert(str) {
    str = str.split(":)").join("🙂");
    str = str.split(":(").join("🙁");
    return str;
}
function main() {
    let inputStr = prompt("Enter a string:");
    let result = convert(inputStr);
    console.log(result);
}
main();
//პროექტი 7 - თამაში Mad Libs
//Mad libs არის მარტივი თამაში, სადაც თქვენ ქმნით ამბის შაბლონს ცარიელ სიტყვებთან ერთად. მოთამაშე
// ადგენს სიტყვების სიას და მოთხრობაში განათავსებს, შედეგად კი ხშირად სულელურ ან სასაცილო ამბავს ვიღებთ.
//შექმენით მარტივი პროგრამა, რომელიც ითხოვს არსებით სახელს, ზმნას, ზმნიზედას და ზედსართავ სახელს და ამ
// სიტყვებს თქვენივე შექმნილ ისტორიაში სვამს.
//მაგალითად:> Enter a noun: dog > Enter a verb: walk > Enter an adjective: blue
//> Enter an adverb: quickly > Enter an adjective: blue > Do you walk your blue dog quickly? That's hilarious!
function madLibs() {
    let noun = prompt("Enter a noun:");
    let verb = prompt("Enter a verb:");
    let adjective = prompt("Enter an adjective:");
    let adverb = prompt("Enter an adverb:");
    let story = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
    console.log(story);
}


madLibs();

