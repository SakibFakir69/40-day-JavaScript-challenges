


amar mona hoye promise bastob jogot theka nwa hoyesa 
javascript promise 2 ta argument nay resolve , reject
resolve nay jokon pass kora , reject nae jokon fail kora 


---
promise javascript akta guruto punno onkso - ami promise sikta ja bostob jogot ar shata mila naor cesta korci 
amara jokon ku ra kotha deye , ja amon ami klk school a jabo , ai kana 2 a option ahsa , ami klk school jabo r na hoye ami jabo na 
ta amni promise 2 ta argument goron kora ( resoslve, reject ) jokon amarader promise ar vitor ar condition pass korba token reolsve hobba jokon fail korba tokoen  reject hobba 


---




amara jodi akon dakta cai amader ki return koratsa promise ( promise 3 ta state thaka , pending fuilfiled , reject)

jokon promise resolve hoye token promise reoslve ar valu return kora 
jokon failed hoye tokon reject ar value return kora 
jokon wait onsta theka akono descion nita parsa na tokon waiting obstatai thaka 



----
promise resolve ba reject hower por 3 ta obosta thaka  , ( reject , pending fullfiled) 
amra jodi akon promise amader ki value disa dakta cai toba amader .then use korta hobba , .then diye amader value pabo ,
catch jodi error hoye token catch a pabo , and finlay use korla amader pormise sash  hoye sa ta janta parbo 
----


amara promise value dakaer jonno .then use korta pari 
.catch - jodi kono error hoye tokoen amara catch use korta pari 
.finnaly - jokon promise execute sash hobba tokon finlay ta asba



promise.all([1,2,3])
if one of then false - we can not get result we got error 
any -> gave all result solved or not
allSettled -> gave all settled value -> reject or failed -> after result gave all value


----
promise.all([]) -> ai kana amara onk gula promise use korta parbi kintu condition ahsa amder sob promise ar success hota hobba na hola amara result pabo na , aita use koro jkn amader sure thakbo sob promise success hobba
promise.any([]) -> ai kana promise reject ba fail hok care kora na   value diye dey , kinut first promise success value deye
promise.allSeletd() -> ai kana multitple pomrmise nai, sob promise jonno wait kora success ba reject hook sob value deye
