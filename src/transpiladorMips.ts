namespace transpiladorMips {		
	export function hexEncode(num : number) : string{
		return "0x"+num.toString(16);
	}	
	
	// A partir de direcciones de memoria, genera un codigo MIPS formateado para HTML
	// con <br> para saltos de linea.
    export function obtenerCodigoMips(direcciones:number[], tipoDireccionamiento:string) {		
		var i : number;
		var base : number = 0x10040000;
		var resultado : string = "";
		
		if(tipoDireccionamiento == "b"){
			for(i=0; i<direcciones.length; i++)
				resultado += "lb $t0, "+hexEncode(base+direcciones[i])+"<br>";
		} else {
			for(i=0; i<direcciones.length; i++)
				resultado += "lw $t0, "+hexEncode(base+(direcciones[i]*4))+"<br>";
		}
		$("#tablaCacheResultado").html(resultado);
		return resultado;	
	}
}