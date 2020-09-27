function classificaçõesDeTriangulos (catetoOposto, catetoAdjacente, hipotenusa) {
    if (catetoAdjacente === catetoOposto === hipotenusa) {
        console.log('Equilatro')
    }else if (catetoAdjacente === catetoOposto || catetoAdjacente === hipotenusa || hipotenusa === catetoOposto ){
        console.log('Isósceles')
    }
}

classificaçõesDeTriangulos(2, 2, 2)