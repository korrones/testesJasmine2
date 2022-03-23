describe("Suite de testes do toBe", function(){
    var valorBooleano = true;
    var valorBooleanoCopia = valorBoolenao;
    var valorBooleano = "true";
    var obj1 = {'valor' : valorBoleano};
    var obj2 = {'valor': valorBoleano};

    it ("deve validar o uso do matcher 'toBe'",function(){
        expect(valorBooleano).toBe(true);
        expect(valorBooleanoCopia).toBe(valorBooleano);
        expect(valorBooleano).not.toBe(valorBooleanoTexto);
        expect(valorBooleanoTexto).toBe("true");
        expect(obj1).not.toBe(obj2);

        describe("suite de testes do toEqual",function(){
            expect(valorBooleano).toEqual(true);
            expect(valorBooleano).toEqual(valorBooleano2);
            expect(valorBooleanoCopia).toEqual(valorBooleano);
            expect(valorBooleano).toEqual(valorBooleanoTexto);
            expect(valorBooleano).not.ToEqual(valorBooleanoTexto);
            expect(valorBooleanoTexto).toEqual("true");
            expect(obj1).toEqual(obj2);
        });
    });
});