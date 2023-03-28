var pattern = 1;

for (let i = 1, x = 1; i <= 4108; i=i*2+x, x=x-1) {

    if (i<4108) {
        document.writeln(i+", ");
    }
    else {document.writeln(i)}
    
}