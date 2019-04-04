
    var ct = document.querySelector("#CT");//start script CT
    var ctn1 = ct.querySelector(".ct-n1");
    var Ctn1 = ctn1.textContent;
    console.log(Ctn1);

    var ctn2 = ct.querySelector(".ct-n2");
    var Ctn2 = ctn2.textContent;
    console.log(Ctn2);

    var ctfinal = ct.querySelector(".ct-resultado");
    var ctsit = ct.querySelector(".ct-situation");
    var Ctn1 = parseFloat(Ctn1);
    var Ctn2 = parseFloat(Ctn2);
    resultadoct = (Ctn1 + Ctn2) / 2;
    ctfinal.textContent = resultadoct;
    console.log(ctfinal);
    var reprovado = true;
    var aprovado  = true;
        if(resultadoct < 6 ){
            ctsit.textContent = "Reprovado";
        
        }
        if(resultadoct >= 6 ){
            ctsit.textContent = "Aprovado";
        
        }//end script ct
    var ds = document.querySelector("#DS");//start
    var dsn1 = ds.querySelector(".ds-n1");
        Dsn1 = dsn1.textContent;
    var dsn2 = ds.querySelector(".ds-n2");
        Dsn2 = dsn2.textContent;
    var Dsn1 = parseFloat(Dsn1);
    var Dsn2 = parseFloat(Dsn2);
    var dsfinal = ds.querySelector(".ds-resultado");
    var dssit = ds.querySelector(".ds-situation");
    var dsresultado = (Dsn1 + Dsn2) / 2

    dsfinal.textContent = dsresultado;
        if(dsresultado < 6){
            dssit.textContent = "Reprovado";
        }
        if(dsresultado >= 6){
            dssit.textContent = "Aprovado";
        }// end

    var dd = document.querySelector("#DDD");
    var d1 = dd.querySelector(".ddd-n1");
    var dn1 = d1.textContent;

    var d2 = dd.querySelector(".ddd-n2");
    var dn2 = d2.textContent;
    var dn1 = parseFloat(dn1);
    var dn2 = parseFloat(dn2);
    var dtotal = dd.querySelector(".ddd-resultado");
    var dtotal1 = (dn1 + dn2) / 2;
    dtotal.textContent = dtotal1;
    var dsit = dd.querySelector(".ddd-situation");
    
        if(dtotal1 < 6 ){
            dsit.textContent = "Reprovado";
        }
        if(dtotal1 >=  6){
            dsit.textContent = "Aprovado";
        }//end domain

    var ei = document.querySelector("#EIB")
    var ein = ei.querySelector(".ei-n1");
    var ein1 = ein.textContent;
    var einn = ei.querySelector(".ei-n2");
    var ein2 = einn.textContent;
    
    var ein1 = parseFloat(ein1);
    var ein2 = parseFloat(ein2);

    var eitotal = ei.querySelector(".ei-resultado");
    var emedia = (ein1 + ein2) /2;
    eitotal.textContent = emedia;

    var esit = ei.querySelector(".ei-situation");

        if(emedia < 6){
            esit.textContent = "Reprovado";
        }else
        {
            esit.textContent = "Aprovado";
        }//end of BD

    var ww = document.querySelector("#WWW");
    var ww1 = ww.querySelector(".www-n1");
    var wn1 = ww1.textContent;
    var wn1 = parseFloat(wn1);
    //separação dos números
    var ww2 = ww.querySelector(".www-n2");
    var wn2 = ww2.textContent;
    var wn2 = parseFloat(wn2);
    /*obs: quando você coloca a formatação antes do "textcontent", o script vai rodar e ler ele 
    como texto */

    var wwresultado = ww.querySelector(".www-resultado");
    var wresult = (wn1 + wn2) /2;
    wwresultado.textContent = wresult;
    var wsituation = ww.querySelector(".www-situation");

        if(wresult < 6 ){
            wsituation.textContent = "Reprovado";
        }else{
            wsituation.textContent = "Aprovado";
        }






