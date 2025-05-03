let NumeroFibonat1 = 0
let NumeroFibonat2 = 1
console.log(NumeroFibonat1)
console.log(NumeroFibonat2)

for (let NumeroFibonatC = 0 ;  NumeroFibonatC < 4 ; NumeroFibonatC++)
            {
            NumeroFibonat1 = NumeroFibonat2 + NumeroFibonat1
            console.log(NumeroFibonat1)
            NumeroFibonat2 = NumeroFibonat2 + NumeroFibonat1
            console.log(NumeroFibonat2)
            }
